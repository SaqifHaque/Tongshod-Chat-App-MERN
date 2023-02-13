import React, { useCallback, useState } from 'react'
import PublicLayout from '../../components/shared/PublicLayout';
import StepOtp from './steps/StepOtp';
import StepPhoneEmail from './steps/StepPhoneEmail';


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
}

const Register = () => {
    const [step, setStep] = useState(1);
    const [type, setType] = useState('phone')
    const Step = steps[step];

    const onNext = useCallback((name) =>{
      console.log(name, "hello")
        setStep(step + 1);
        setType(name);
    },[step])

  return (
    <PublicLayout>
        <Step onNext={onNext} otpType={step === 2 ? type : undefined}></Step>
    </PublicLayout>
  )
}

export default Register