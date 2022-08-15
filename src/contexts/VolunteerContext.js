import { createContext, useContext} from "react";
import { useState, useEffect } from "react";
import * as volunteerService from '../services/volunteerService';

export const VolunteerContext = createContext();

export const VolunteerContextProvider = ({ children }) => {

    const [volunteers, setVolunteers] = useState([]);
    
    useEffect(()=>{
        volunteerService.getAll()
        .then(result=>{
            setVolunteers(result)
          console.log(result);
         
        
        })
        .catch(error => {
           console.log(error);
           });
    },[]);

    const selectVolunteer = (volunteerId) => {
        return volunteers.find(x => x._id === volunteerId) || {};
    };

    return (
        <VolunteerContext.Provider value={{ volunteers, setVolunteers, selectVolunteer }}>
            {children}
        </VolunteerContext.Provider>
    )
};


// Custom Hook
export const useVolunteerContext = () => {
    const context = useContext(VolunteerContext);

    return context;
};