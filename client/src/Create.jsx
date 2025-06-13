import React,{useState} from 'react'
import axios from 'axios';

export default function Create() {
    const [title,setTitle]=useState("");
    const [file,setFile]=useState(null);
    const [desc,setDesc]  = useState("");
    const handleSubmit= (e) =>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('title',title);
    formData.append('desc',desc);
    formData.append('file',file);
      axios.post("http://localhost:3000/create", 
        formData)
      .then(res=> 
      {
        if(res.data==="Success"){
          window.location.href="/";
        }
      }
      )
      .catch(err=>console.log(err));
    }

  return (
    <div className='fluid-container'>
      <form onSubmit={handleSubmit}>
        <div>
            <h2>Create Post</h2>
        </div>
        
        <input  className="form-control" type="text" 
        onChange={e=>setTitle(e.target.value)}
        value={title}/>
        <br></br>
        <textarea name="desc" 
        value={desc}
        onChange={e=>setDesc(e.target.value)}
        id="desc" cols="30" rows={10}></textarea>
        <br></br>
        <input className="form-control" 
         onChange={e => setFile(e.target.files[0])}
        type="file" name="" id=""/>
        <br></br>
        <button className='btn btn-success'>Post</button>
      </form>
    </div>
  )
}
