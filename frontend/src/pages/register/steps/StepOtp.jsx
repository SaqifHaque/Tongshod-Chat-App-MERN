import React from 'react'
import Button from '../../../components/UIControls/Button'
import Card from '../../../components/UIControls/Card'
import { FcLock } from "react-icons/fc"

const StepOtp = ({otpType}) => {
  
  return (
    <Card icon={<FcLock size="30"/>} title={ `${otpType === 'email' ? 'Enter the code we just emailed you' : 'Enter the code we just texted you'}`}>
        <input placeholder="X--X--X--X" className="bg-gray-700 rounded-full py-2 w-32 px-6"></input>
        <Button title="Next  ->"></Button>
        <a href="#hello" className="text-blue-500 text-xs font-md font-sans">Didn't recieve? Tap to resend!</a>
    </Card>
  )
}

export default StepOtp