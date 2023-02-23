import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
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
    }, [])


    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/api/authors/"+id)
            .then(res => {
                console.log(res);
                const filteredAuthors = authors.filter((author) => {
                    return author._id !== id;
                });
                setAuthors(filteredAuthors);
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="w-5 mx-auto">
            <h2>Favorite Authors</h2>
            <Link to={'/newAuthor'}>Add an Author</Link>


            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => {
                        const { _id, name } = author;
                        return (
                            <tr>
                                <td key={i}>
                                    <Link to={`/authors/${_id}`}><h4>{name}</h4></Link>
                                </td>
                                <Link to={`/Authors/${_id}/edit`}>
                                    <button type="button" class="btn btn-outline-primary">Edit</button>
                                </Link>
                                <button type="button" class="btn btn-outline-danger" onClick={() => {handleDelete(_id)}}>Delete</button>
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </div>
    )
};

export default AllAuthors;