
import { createContext} from "react";
import { useState, useEffect } from "react";
import * as eventService from '../services/eventService';

export const EventContext = createContext();

export const EventContextProvider = ({ children }) => {

    const [events, setEvents] = useState([]);
 
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
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    )
};

