import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServerResponse,clearServerResponse } from "../redux/action";
import {getNameWithCity} from "../api/details"

const Home = () => {
  const dispatch = useDispatch();
  const serverResponse = useSelector((state) => state.serverResponse);

  const bringData  = async() =>{
    const responseData =await getNameWithCity()
      // Dispatch action to set server response in Redux store
      dispatch(setServerResponse(responseData));
  }

  const removeData = () =>{
    dispatch(clearServerResponse())
  }

//   useEffect(() => {
//     // Simulate fetching data from the server
    
//   }, [dispatch]);

  return (
    <div>
      <button  onClick={bringData}>Bring Data</button>
      <button  onClick={removeData}>Remove Data</button>
      <ul>
        {serverResponse.map((item, index) => (
          <li key={index}>
            {item.name} - {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
