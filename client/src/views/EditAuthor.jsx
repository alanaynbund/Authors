import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const EditAuthor = (props) => {
    const [formData, setFormData] = useState({})
    const {id} = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setFormData(res.data);
            }).catch(err=> {
                console.log(err);
            })
    },[id]);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/"+ id, formData , {new:true})
            .then(res => {
                console.log(res);
                navigate('/')
            }).catch(err => {
                console.log(err)
                setErrors(err.response?.data?.errors)
            })
    }

    const handleOnChange = (e) => {{
            setFormData({
                ...formData,
                [e.target.name] : e.target.value
            })
        }
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Author</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Name</label>
                    <input
                        type="text"
                        onChange={handleOnChange}
                        className="form-control"
                        name="name"
                        value={formData.name}
                    />
                </div>
                {
                    errors?.name && (
                        <span className="text-danger">{errors.name?.message}</span>
                    )
                }
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}

export default EditAuthor;