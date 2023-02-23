import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

const OneAuthor = (props) => {
    const [author, setAuthor] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
            }).catch(err => {
                console.log(err);
            });
    })

    if (author === null) {
        return <h1>Loading...</h1>
    }
    const { name } = author;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>Name:</h4>
            <h4>{name}</h4>
        </div>
    )
};

export default OneAuthor;