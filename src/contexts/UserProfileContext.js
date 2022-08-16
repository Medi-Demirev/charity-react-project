import { createContext, useEffect, useReducer } from "react";
import * as usersProfilesService from '../services/usersProfilesService';
import { useNavigate } from "react-router-dom";

export const UserProfileContext = createContext();

const UserProfileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROFILES':
            return [...action.payload];
        case 'ADD_PROFILE':
            return [...state, action.payload];
        case 'EDIT_PROFILE':
            return state.map(x => x._id === action.profileId ? action.payload : x);
        case 'REMOVE_PROFILE':
            return state.filter(x => x._id !== action.profileId);
        default:
            return state;
    }
  };
  

export const UserProfileContextProvider = ({ children }) => {
       const navigate = useNavigate();

       const [profiles, dispatch] = useReducer(UserProfileReducer, []);

    useEffect(()=>{
        usersProfilesService.getAll()
          .then(result=>{
            const action = {
              type: 'ADD_PROFILES',
              payload: result
          };
  
          dispatch(action);
         
          })
          .catch(error => {
            // console.log(error);
             })
      },[]);


    const profileAdd = (profileData) => {
         dispatch({
        type: 'ADD_PROFILE',
        payload: profileData,
    })
       
    };


      const profileEdit = (profileId, profileData) => {
        dispatch({
            type: 'EDIT_PROFILE',
            payload: profileData,
            profileId,
        });
    };

    const profileRemove = (profileId) => {
        dispatch({
            type: 'REMOVE_PROFILE',
            profileId
        })
    };

    const selectProfile = (profileId) => {
        return profiles.find(x => x._id === profileId) || {};
    };
  

    return (
        <UserProfileContext.Provider value={{ 
        profiles, 
        profileAdd,
        profileEdit, 
        profileRemove,
        selectProfile}}>
            {children}
        </UserProfileContext.Provider>
    )
};

