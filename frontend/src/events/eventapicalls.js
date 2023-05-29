import { API } from "../backend";

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