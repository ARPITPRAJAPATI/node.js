import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); 

    try {
      const res = await axios.post(
        "http://localhost:3000/create-post",
        formData
      );

      console.log(res.data);
      e.target.reset(); // optional
      navigate("/feed");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name="caption" placeholder='enter caption' required />
        <button type='submit'>submit</button>
      </form>
    </section>
  );
};

export default CreatePost;