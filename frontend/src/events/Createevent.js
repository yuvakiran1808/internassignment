import React, { useState } from "react";
import Menu from "../components/Menu";
import { isAuthenticated } from "../user/userapicalls";
import { createEvent } from "./eventapicalls";

const Createevent = () => {
  const user = isAuthenticated();

  const [eventname, setEventname] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [image, setImage] = useState();
  const [userid, setUserId] = useState(user.id);

  // Function to handle the change event when the eventname input is modified
  const onEventnameChangeHandler = (e) => {
    setEventname(e.target.value); //Set the new value to the event name variable
  };
  // Function to handle the change event when the description is modified
  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value); //Set the new vale for the description
  };
  // Function to handle the change event when the location input is modified
  const onLocationChangeHandler = (e) => {
    setLocation(e.target.value); // Set the new value to the location variable
  };
  // Function to handle the change event when the image input is modified
  const onimageChangeHandler = (e) => {
    setImage(e.target.files[0]); // Set the selected image file to the "image" variable
  };

  // Function to handle the change event when the time input is modified
  const onTimeChangeHandler = (e) => {
    setTime(e.target.value); // Set the new value of the time input to the "time" variable
  };

  // Function to handle the form submission when creating an event

  const onSubmitCreateEvent = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setUserId(parseInt(user.id)); // Set the user ID to the "userId" variable after parsing it as an integer

    const formData = new FormData(); // Create a new FormData object to store the form data

    // Append the form data to the formData object
    formData.append("event_name", eventname);
    formData.append("data", description);
    formData.append("time", time);
    formData.append("location", location);
    formData.append("image", image);
    formData.append("user_Id", userid);

      // Call the createEvent function with the formData object as an argument

    createEvent(formData).then((data) => {
      console.log(data);
    });

      // Reset the form input values to empty strings and the user ID to 0
    setEventname("");
    setDescription("");
    setLocation("");
    setTime("");
    setUserId(0);
  };

  return (
    <div>
      <Menu />
      <form action="" className="col-md-6 mx-auto p-2">
        <div className="p-2">
          <label htmlFor="name" className="py-2 h6">
            Enter event name:
          </label>
          <input
            value={eventname}
            type="text"
            placeholder="name"
            className="form-control border border-dark py-2"
            id="name"
            required
            onChange={onEventnameChangeHandler}
          />
        </div>
        <div className="p-2">
          <label htmlFor="des" className="py-2 h6">
            Enter event description:
          </label>
          <input
            value={description}
            type="text"
            placeholder="Description"
            className="form-control border border-dark py-2"
            id="des"
            required
            onChange={onDescriptionChangeHandler}
          />
        </div>
        <div className="p-2">
          <label htmlFor="location" className="py-2 h6">
            Enter location:
          </label>
          <input
            value={location}
            type="text"
            placeholder="location"
            className="form-control border border-dark py-2"
            id="location"
            required
            onChange={onLocationChangeHandler}
          />
        </div>
        <div className="p-2">
          <label htmlFor="time" className="py-2 h6">
            select Time:
          </label>
          <input
            value={time}
            type="datetime-local"
            className="form-control border border-dark py-2"
            id="time"
            required
            onChange={onTimeChangeHandler}
          />
        </div>
        <div className="p-2">
          <label htmlFor="image" className="py-2 h6">
            Upload image
          </label>
          <input
            onChange={onimageChangeHandler}
            type="file"
            className="form-control border border-dark py-2"
            id="image"
            required
          />
        </div>
        <div className="mt-3 text-center text-dark p-2">
          <button
            onClick={onSubmitCreateEvent}
            type="button"
            className="btn btn-outline-warning text-dark w-100 text-lg"
          >
            Add event
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createevent;
