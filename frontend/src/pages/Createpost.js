import { useState } from "react";
import Api from "../Components/Api";
export default function CreatePost() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const http = Api();
    const submit = () => {
        if (http) { // Add a check for `http` being defined

            http.post('/create-post', { title: title, description: description }).then(res => {
                alert(res.data.message);
                setTitle('');
                setDescription('');
            }).catch(error => {
                alert(Object.values(error.response.data.errors).join('\n'));
            });


        } else {
            console.error("http is undefined");
        }
    };
    return (

        <>
            <div className="jumbotron container">

                <div className="mt-5">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} id="exampleFormControlInput1" placeholder="Enter Title" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={description} onChange={e => setDescription(e.target.value)} rows="3">Write Description</textarea>
                    </div>
                    <div className="mb-3">
                        <button onClick={submit} className="btn btn-lg text-light w-100 bg-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}