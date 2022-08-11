import { createContext} from "react";
import { useState, useEffect } from "react";
import * as causeService from '../services/causeService';
import Causes from "../components/Causes/Causes";
import { useNavigate } from "react-router-dom";
export const CauseContext = createContext();

export const CauseContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [causes, setCauses] = useState([]);

  
    const causeAdd = (causeData) => {
      setCauses(state =>[
        ...state,
        causeData
        
      ])
      
      navigate('/all-causes')
    }
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
        <CauseContext.Provider value={{ causes, setCauses, causeAdd }}>
            {children}
        </CauseContext.Provider>
    )
};