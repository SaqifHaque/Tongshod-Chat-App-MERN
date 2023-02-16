import React, { useState } from 'react'
import Button from '../../../components/UIControls/Button'
import Card from '../../../components/UIControls/Card'
import { FcLock } from "react-icons/fc"
import { verifyOtp } from '../../../api/authAPI'
import { useSelector } from 'react-redux';
import { selectOtp, SET_AUTH } from '../../../redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'

const StepOtp = ({otpType}) => {
  const dispatch = useDispatch();

  const [ otp, setOtp ] = useState('');
  const { phone, hash } = useSelector(selectOtp);

  const onSubmit = async () => {
    try {
      const data = await verifyOtp({ otp, phone, hash })
      console.log(data)
      dispatch(SET_AUTH(data));
    } catch (error) {

    }
    
  }
  
  return (
    <Card icon={<FcLock size="30"/>} title={ `${otpType === 'email' ? 'Enter the code we just emailed you' : 'Enter the code we just texted you'}`}>
        <input onChange={(e) => setOtp(e.target.value)} placeholder="X--X--X--X" className="bg-gray-700 rounded-full py-2 w-32 px-6"></input>
        <Button onButtonClick={onSubmit} title="Next  ->"></Button>
        <a href="#hello" className="text-blue-500 text-xs font-md font-sans">Didn't recieve? Tap to resend!</a>
    </Card>
  )
}

export default StepOtp