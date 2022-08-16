import { createContext, useEffect, useReducer } from "react";
import * as usersProfilesService from '../services/usersProfilesService';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

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
    const { user } = useAuthContext();
    const [profiles, dispatch] = useReducer(UserProfileReducer, []);

    let profileId;

    const selectProfile = (profileId) => {
        return profiles.find(x => x._id === profileId) || {};
    };

    profiles.map(x => x._ownerId === user._id ? profileId = x._id : x);
    const selected = selectProfile(profileId)


    useEffect(() => {
        usersProfilesService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_PROFILES',
                    payload: result
                };

                dispatch(action);

            })
            .catch(error => {
                // console.log(error);
            })
    }, []);


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


    return (
        <UserProfileContext.Provider value={{
            profiles,
            profileId,
            selected,
            profileAdd,
            profileEdit,
            profileRemove,
            selectProfile
        }}>
            {children}
        </UserProfileContext.Provider>
    )
};

