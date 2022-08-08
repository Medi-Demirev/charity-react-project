import { createContext} from "react";
import { useState, useEffect } from "react";
import * as volunteerService from '../services/volunteerService';

export const VolunteerContext = createContext();

export const VolunteerContextProvider = ({ children }) => {

    const [volunteer, setVolunteer] = useState([]);
    
    useEffect(()=>{
        volunteerService.getAll()
        .then(result=>{
            setVolunteer(result)
          console.log(result);
         
        
        })
        .catch(error => {
           console.log(error);
           });
    },[]);

    return (
        <VolunteerContext.Provider value={{ volunteer, setVolunteer }}>
            {children}
        </VolunteerContext.Provider>
    )
};

