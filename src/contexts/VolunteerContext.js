import { createContext, useContext, useReducer, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import * as volunteerService from '../services/volunteerService';

export const VolunteerContext = createContext();

const volunteerReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VOLUNTEERS':
            return [...action.payload];
        case 'ADD_VOLUNTEER':
            return [...state, action.payload];
        case 'EDIT_VOLUNTEER':
            return state.map(x => x._id === action.volunteerId ? action.payload : x);
        case 'REMOVE_VOLUNTEER':
            return state.filter(x => x._id !== action.volunteerId);
        default:
            return state;
    }
  };

export const VolunteerContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [volunteers, dispatch] = useReducer(volunteerReducer, []);
    
    useEffect(()=>{
        volunteerService.getAll()
        .then(result=>{
            const action = {
                type: 'ADD_VOLUNTEERS',
                payload: result
            }
          
            dispatch(action);
        })
        .catch(error => {
           console.log(error);
           });
    },[]);

    const volunteerAdd = (volunteerData) => {
        dispatch({
       type: 'ADD_VOLUNTEER',
       payload: volunteerData,
   })
       navigate('/all-volunteers')
   };

   const volunteerEdit = (volunteerId, volunteerEdit) => {
    dispatch({
        type: 'EDIT_VOLUNTEER',
        payload: volunteerEdit,
        volunteerId,
    });
};

const volunteerRemove = (volunteerId) => {
    dispatch({
        type: 'REMOVE_VOLUNTEER',
        volunteerId
    })
};

    const selectVolunteer = (volunteerId) => {
        return volunteers.find(x => x._id === volunteerId) || {};
    };

    return (
        <VolunteerContext.Provider value={{ 
        volunteers, 
        selectVolunteer, 
        volunteerAdd, 
        volunteerEdit,
        volunteerRemove
         }}>
            {children}
        </VolunteerContext.Provider>
    )
};


// Custom Hook
export const useVolunteerContext = () => {
    const context = useContext(VolunteerContext);

    return context;
};