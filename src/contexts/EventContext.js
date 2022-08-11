
import { createContext} from "react";
import { useState, useEffect } from "react";
import * as eventService from '../services/eventService';
import { useNavigate } from "react-router-dom";

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    
    const eventAdd = (eventData) => {
        setEvents(state =>[
          ...state,
          eventData
          
        ])
        console.log(eventData);
        navigate('/all-events')
      };
      const eventEdit = (evendId, eventData) =>{
        setEvents(state => state.map(x=> x._id === evendId ? eventData :x))
      }
 
    useEffect(()=>{
        eventService.getAll()
        .then(result=>{
            setEvents(result)
          console.log(result);
         
        
        })
        .catch(error => {
           console.log(error);
           })
    },[]);

    return (
        <EventContext.Provider value={{ events, setEvents, eventAdd, eventEdit }}>
            {children}
        </EventContext.Provider>
    )
};

