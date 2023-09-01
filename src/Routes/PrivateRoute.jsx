import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store)=>store.userReducer.users.status);
    const location = useLocation();
    if(!isAuth){
      toast.error("Login First",{
        autoClose: 500, 
    });
        return <Navigate to='/' state={location.pathname} replace />
    }
  return children;
}

export default PrivateRoute