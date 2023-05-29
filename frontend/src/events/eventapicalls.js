import { API } from "../backend";


// Function to create a new event
export const createEvent = (event) => {
  return fetch(`${API}/create/events/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: event,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return {
        error: err,
      };
    });
};

// Function to fetch all events data

export const getAllEvents = ()=>{
    return fetch(`${API}/events/`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
}

// Function to like an event

export const likeEvents = (event_id) => {
  return fetch(`${API}/events/${event_id}/like/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return {
        error: err,
      };
    });
};