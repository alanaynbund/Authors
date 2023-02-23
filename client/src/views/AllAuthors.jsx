import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios"

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])
    return (
        <div className="w-5 mx-auto text-center">
            <h2>Favorite Authors</h2>
            <Link to= {'/newAuthor'}>Add an Author</Link>
            {
                authors.map((author, i) => {
                    const {_id, name} = author;
                    return (
                        <div key={i} className="shadow mb-4 rounded border p-4">
                            <Link to={`/authors/${_id}`}><h4>{name}</h4></Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default AllAuthors;