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
    };
    const causeEdit = (causeId, causeData) =>{
      setCauses(state => state.map(x=> x._id === causeId ? causeData :x))
    };

    useEffect(()=>{
      causeService.getAll()
        .then(result=>{
          setCauses(result)
       
        })
        .catch(error => {
           //console.log(error);
           })
    },[]);

   

    return (
        <CauseContext.Provider value={{ causes, setCauses, causeAdd, causeEdit }}>
            {children}
        </CauseContext.Provider>
    )
};