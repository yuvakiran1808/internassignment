import React, { useState } from "react";
import Menu from "../components/Menu";
import {isAuthenticated } from "../user/userapicalls";
import {createEvent} from "./eventapicalls";

const Createevent = () => {
  const user = isAuthenticated();
  
  const [eventname, setEventname] = useState();
  const [description, setDescription] = useState();
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [image, setImage] = useState();
  const [userid, setUserId] = useState(user.id);



     
  const eventDate = new Date();  // Replace with your actual date value
  const formattedDate = eventDate.toISOString().split('T')[0];
  const formattedTime = eventDate.toTimeString().split(' ')[0];
  
  const onEventnameChangeHandler = (e)=>{
         setEventname(e.target.value)
  }
  const onDescriptionChangeHandler = (e)=>{
      setDescription(e.target.value)
  }
  const onLocationChangeHandler = (e)=>{
        setLocation(e.target.value)
  }
  const onimageChangeHandler = (e)=>{
       setImage(e.target.files[0])
  }

  const onTimeChangeHandler = (e)=>{
          setTime(e.target.value);
  }


  const onSubmitCreateEvent = (e)=>{
         e.preventDefault();
         setUserId(parseInt(user.id));
         setTime(formattedDate+"T"+formattedTime+"Z");
         console.log(formattedDate+"T"+formattedTime+".000Z")
         const formData = new FormData();
         formData.append("event_name",eventname);
         formData.append("data",description);
         formData.append("time",time);
         formData.append("location",location);
         formData.append("image",image);
         formData.append("user_Id",userid);
         
         createEvent(formData).then((data)=>{
              console.log(data);
         })
         setEventname("")
         setDescription("")
         setLocation("")
         setTime("")
         setUserId(0)
  }

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
