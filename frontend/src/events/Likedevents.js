import React,{useEffect,useState} from "react";
import Menu from "../components/Menu";
import { FaHeart, FaShareSquare } from "react-icons/fa";
import {getAllEvents,likeEvents} from "./eventapicalls"

const Likedevents = () => {
  const [events, setEvents] = useState([]);
  const [toggle, setToggle] = useState(false);
  const getAllevents = () => {
    getAllEvents().then((data) => {
      setEvents(data);
    });
  };

  useEffect(() => {
    getAllevents();
  }, [toggle]);

  const likesHandler = (e,id)=>{
    likeEvents(id).then((data)=>{
      console.log(data);
      setToggle(prevState => !prevState);

    }).catch((err)=>{
      console.log(err);
    })     
  }
  return (
    <div>
      <Menu />
      <div className="container">
        {events.map((event, index) => {
          return (
            event.is_liked && (
              <div className="row mt-5">
                <div className="col-md-6 shadow  px-5 py-3">
                  <h4>{event.event_name}</h4>
                  <h5 style={{ color: "#F05537" }}>{event.time}</h5>
                  <h6 className="lead">{event.location}</h6>
                </div>
                <div className="col-md-4  shadow px-5 py-3">
                  <img
                    src={event.image}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="d-flex justify-content-end mt-3">
                    <FaShareSquare style={{ fontSize: "30px" }} />
                    <FaHeart
                      onClick= {(e)=>likesHandler(e,event.id)}
                      className= {event.is_liked? "bg-dark text-danger rounded px-1 mx-3":"bg-dark  rounded px-1 mx-3"}
                      style={{ color: "white", fontSize: "30px" }}
                    />
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Likedevents;
