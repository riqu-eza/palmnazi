import React, { useState, useRef} from "react";
import "./Dashboard.css";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore } from "../../firebase";
import { storage } from "../../firebase";

const BlogAdmin = () => {
  const [image, setImage] = useState(null);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");  
  const fileInputRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g.,

    try {
      // Upload image to Firebase/ Storage
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl= await getDownloadURL(storageRef);

      // Save other data to Firestore
      await addDoc(collection(firestore, "blogPosts"), {
        title: title,
        text: text,
        image: imageUrl,
        timestamp: new Date(),
      });

      console.log("Blog post created successfully!");

      // Clear input fields after submission
      setImage(null);
      setTitle("");
      setText("");
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="blog-admin-container">
      <h2>Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="image">upload image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogAdmin;
