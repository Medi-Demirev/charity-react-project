import { createContext, useEffect, useReducer} from "react";
import * as causeService from '../services/causeService';
import { useNavigate } from "react-router-dom";

export const CauseContext = createContext();

const causeReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_CAUSES':
        return action.payload.map(x => ({ ...x, donations: [] }));
      case 'ADD_CAUSE':
          return [...state, action.payload];
      case 'FETCH_CAUSE_DETAILS':
      case 'EDIT_CAUSE':
          return state.map(x => x._id === action.causeId ? action.payload : x);
      case 'ADD_DONATION':
          return state.map(x => x._id === action.causeId ? { ...x, donations: [...x.donations, action.payload] } : x);
      case 'REMOVE_CAUSE':
          return state.filter(x => x._id !== action.causeId);
      default:
          return state;
  }
};

export const CauseContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [causes, dispatch] = useReducer(causeReducer, []);

    useEffect(()=>{
      causeService.getAll()
        .then(result=>{
          const action = {
            type: 'ADD_CAUSES',
            payload: result
        };

        dispatch(action);
       
        })
        .catch(error => {
           console.log(error);
           })
    },[]);
  
    const causeAdd = (causeData) => {
      dispatch({
        type: 'ADD_CAUSE',
        payload: causeData,
    })  
      navigate('/all-causes')
    };
  
    const causeEdit = (causeId, causeData) => {
      dispatch({
          type: 'EDIT_CAUSE',
          payload: causeData,
          causeId,
      });
  };

  const causeRemove = (causeId) => {
    dispatch({
        type: 'REMOVE_CAUSE',
        causeId
    })
};

const selectCause = (causeId) => {
  return causes.find(x => x._id === causeId) || {};
};

const fetchCauseDetails = (causeId, causeDetails) => {
  dispatch({
      type: 'FETCH_CAUSE_DETAILS',
      payload: causeDetails,
      causeId,
  })
};

const donationAdd = (causeId, donation) => {
  dispatch({
      type: 'ADD_DONATION',
      payload: donation,
      causeId
  });
};

    return (
        <CauseContext.Provider value={{ 
        causes, 
        causeAdd, 
        causeEdit,
        causeRemove,
        selectCause, 
        fetchCauseDetails,
        donationAdd }}>

            {children}
        </CauseContext.Provider>
    )
};