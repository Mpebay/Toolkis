import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionSussesPayment } from '../../../redux/actions/actionSussesPayment';
import { useNavigate } from 'react-router-dom';



const SuccesPayment = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

   
    useEffect(() => {
        dispatch(actionSussesPayment(true))
        const timeout = setTimeout(() => {
          navigate('/');
        }, 100); 
    
        return () => clearTimeout(timeout);
      }, []);

  return <div>Redirecting...</div>;
};

export default SuccesPayment;




