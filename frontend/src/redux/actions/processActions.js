import * as actionTypes from "../constants/processConstants";
import axios from "axios";
 
export const getProcesses = () => async (dispatch) => {
 try {
   dispatch({ type: actionTypes.GET_PROCESSES_REQUEST });
 
   const { data } = await axios.get("/api/processes");
 
   dispatch({
     type: actionTypes.GET_PROCESSES_SUCCESS,
     payload: data,
   });
 } catch (error) {
   dispatch({
     type: actionTypes.GET_PROCESSES_FAIL,
     payload:
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message,
   });
 }
};
 
export const getProcessDetails = (id) => async (dispatch) => {
 try {
   dispatch({ type: actionTypes.GET_PROCESS_DETAILS_REQUEST });
 
   const { data } = await axios.get(`/api/processes/${id}`);
 
   dispatch({
     type: actionTypes.GET_PROCESS_DETAILS_SUCCESS,
     payload: data,
   });
 } catch (error) {
   dispatch({
     type: actionTypes.GET_PROCESS_DETAILS_FAIL,
     payload:
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message,
   });
 }
};
 
export const removeProcessDetails = () => (dispatch) => {
 dispatch({ type: actionTypes.GET_PROCESS_DETAILS_RESET });
};
 

