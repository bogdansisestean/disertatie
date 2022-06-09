import * as actionTypes from "../constants/processConstants";
 
export const getProcessesReducer = (state = { processes: [] }, action) => {
 switch (action.type) {
   case actionTypes.GET_PROCESSES_REQUEST:
     return {
       loading: true,
       processes: [],
     };
   case actionTypes.GET_PROCESSES_SUCCESS:
     return {
       processes: action.payload,
       loading: false,
     };
   case actionTypes.GET_PROCESSES_FAIL:
     return {
       loading: false,
       error: action.payload,
     };
   default:
     return state;
 }
};
 
export const getProcessDetailsReducer = (state = { process: {} }, action) => {
 switch (action.type) {
   case actionTypes.GET_PROCESS_DETAILS_REQUEST:
     return {
       loading: true,
     };
   case actionTypes.GET_PROCESS_DETAILS_SUCCESS:
     return {
       loading: false,
       process: action.payload,
     };
   case actionTypes.GET_PROCESS_DETAILS_FAIL:
     return {
       loading: false,
       error: action.payload,
     };
   case actionTypes.GET_PROCESS_DETAILS_RESET:
     return {
       process: {},
     };
   default:
     return state;
 }
};
 
 

