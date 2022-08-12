import { createContext, useEffect, useReducer } from "react";
import * as eventService from '../services/eventService';
import { useNavigate } from "react-router-dom";

export const EventContext = createContext();

const eventReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EVENTS':
            return [...action.payload];
        case 'ADD_EVENT':
            return [...state, action.payload];
        case 'EDIT_EVENT':
            return state.map(x => x._id === action.eventId ? action.payload : x);
        case 'REMOVE_EVENT':
            return state.filter(x => x._id !== action.eventId);
        default:
            return state;
    }
  };
  

export const EventContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [events, dispatch] = useReducer(eventReducer, []);

    useEffect(()=>{
        eventService.getAll()
          .then(result=>{
            const action = {
              type: 'ADD_EVENTS',
              payload: result
          };
  
          dispatch(action);
         
          })
          .catch(error => {
             console.log(error);
             })
      },[]);


    const eventAdd = (eventData) => {
         dispatch({
        type: 'ADD_EVENT',
        payload: eventData,
    })
        navigate('/all-events')
    };


      const eventEdit = (eventId, eventData) => {
        dispatch({
            type: 'EDIT_EVENT',
            payload: eventData,
            eventId,
        });
    };

    const eventRemove = (eventId) => {
        dispatch({
            type: 'REMOVE_EVENT',
            eventId
        })
    };
  

    return (
        <EventContext.Provider value={{ events, eventAdd, eventEdit, eventRemove }}>
            {children}
        </EventContext.Provider>
    )
};

