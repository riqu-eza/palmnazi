import React, { useState } from "react";
import { firestore, storage } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import "./list.css";

const Adminlist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const [photos, setPhotos] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [entryFee, setEntryFee] = useState();

  const categoriesData = {
    Relaxation: [
      "Spa & Wellness Centers",
      "Yoga Studios",
      "Meditation Centers",
      "Parks & Gardens",
      "Beaches",
      "Lakes & Rivers",
      "Picnic Areas",
      "Hot Springs",
    ],
    Dining: [
      "Restaurants",
      "Cafes & Coffee Shops",
      "Bakeries",
      "Bars & Pubs",
      "Food Trucks",
      "Fine Dining Restaurants",
      "Ethnic Cuisine Restaurants",
      "Fast Food Chains",
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAmenities([...amenities, value]);
    } else {
      setAmenities(amenities.filter((amenity) => amenity !== value));
    }
  };

  const handlePhotoChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    setPhotos((prevPhotos) => [...prevPhotos, ...selectedFiles]);

  };
  const photoURLs = [];

  const addActivity = async (activity) => {

    try {
      for (const photo of photos) {
        const storageRef = ref(storage, `activity_photos/${photo.name}`);
        await uploadBytes(storageRef, photo);
        const photoURL = await getDownloadURL(storageRef);
        photoURLs.push(photoURL);
      }

      const docRef = await addDoc(collection(firestore, "activities"), {
        ...activity,
        createdAt: new Date(),
      });
      console.log("Activity added successfully!");
    } catch (err) {
      console.log("Error adding activity: " + err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addActivity({
      name,
      description,
      address,
      contact,
      email,
      openingHours,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      photos: photoURLs,
      amenities,
      entryFee,
    });
    setName("");
    setDescription("");
    setAddress("");
    setContact("");
    setEmail("");
    setOpeningHours("");
    setSelectedCategory("");
    setPhotos([]);
    setAmenities([]);
    setEntryFee(0);
  };
  return (
    <div className="activity">
      <form onSubmit={handleSubmit}>
        <h4>Business Listing</h4>
        <input
          className="listinput"
          type="text"
          id="name"
          placeholder="Name of the bussiness"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="listinput"
          type="text"
          id="address"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="listinput"
          type="number"
          id="contact"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          className="listinput"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="description"></label>
        <textarea
          className="listinput"
          type="text"
          id="description"
          placeholder="you entity description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="listinput"
          type="text"
          id="opening-hours"
          placeholder="opening-hours"
          value={openingHours}
          onChange={(e) => setOpeningHours(e.target.value)}
        />
        <input
          className="listinput"
          type="number"
          value={entryFee}
          placeholder="entryfee"
          onChange={(e) => setEntryFee(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          multiple =""
          onChange={handlePhotoChange}
        />
        <div>
          <label>Amenities:</label>
          <div>
            <label htmlFor="wifi">
              Wifi
              <input
                type="checkbox"
                id="wifi"
                value="wifi"
                checked={amenities.includes("wifi")}
                onChange={handleAmenityChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pool">
              Pool
              <input
                type="checkbox"
                id="pool"
                value="pool"
                placeholder="pool"
                checked={amenities.includes("pool")}
                onChange={handleAmenityChange}
              />
            </label>
          </div>
          {/* Add more checkboxes for other amenities */}
        </div>

        <div>
          <h2>Select a category:</h2>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Select Category</option>
            {Object.keys(categoriesData).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <div>
              <h3>Subcategories for {selectedCategory}:</h3>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {categoriesData[selectedCategory]?.map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <button type="submit">update listing</button>
      </form>
    </div>
  );
};
export default Adminlist;
