import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { useFetch } from "../hooks/useFetch.jsx";

const useUserAddresses = () => {
  const { backendUrl } = useContext(AuthContext);
  const userId = "67c4a6954dfbe261457be419";
  const { userAddressList } = useFetch(
    `${backendUrl}/users/allLocationsFromUser/${userId}`
  );
  const [locations, setLocations] = useState(null);


  useEffect(()=>{
    const loadLocations = () => {
      
      try{
        userAddressList.map((value,index)=> {
          console.log(value);          
        })
      }
    }

  },[userAddressList])

  return {userAddressList};
};

export default useUserAddresses;
