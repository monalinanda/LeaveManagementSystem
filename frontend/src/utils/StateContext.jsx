import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const[totalLeave , setTotalLeave] = useState(12);
  let storedUserData = JSON.parse(localStorage.getItem('userleaveDataArray')) 
  const [userleaveData , setUserLeaveData]= useState(storedUserData  || 0);
 

  return (
    <Context.Provider
      value={{
        email,
        password,
        userType,
        totalLeave,
        userleaveData,
        setEmail,
        setPassword,
        setUserType,
        setTotalLeave,
        setUserLeaveData
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
