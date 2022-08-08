import { createContext} from "react";
import { useState, useEffect } from "react";
import * as causeService from '../services/causeService';
import Causes from "../components/Causes/Causes";

export const CauseContext = createContext();

export const CauseContextProvider = ({ children }) => {

    const [causes, setCauses] = useState([]);
    causes.map(object => <Causes /> )
   
    
    useEffect(()=>{
      causeService.getAll()
        .then(result=>{
          setCauses(result)
          console.log(result);
         
        
        })
        .catch(error => {
           console.log(error);
           })
    },[])

    return (
        <CauseContext.Provider value={{ causes, setCauses }}>
            {children}
        </CauseContext.Provider>
    )
};