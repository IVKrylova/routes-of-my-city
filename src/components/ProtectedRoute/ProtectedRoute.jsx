import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  return (
    props.isLogin ? <Outlet /> : <Navigate to='/login' replace/>
)}

export default ProtectedRoute;
