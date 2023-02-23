import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"


const NewAuthor = (props) => {
    const [formData, setFormData] = useState({
        name: ""
    });

    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/newauthor", formData)
            .then(res => {
                console.log(res);
                navigate('/')
            }).catch(err => {
                console.log(err)
            })
    }

    const handleOnChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
    }


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Author</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Name:</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="name"
                        value={formData.name}
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
};

export default NewAuthor;