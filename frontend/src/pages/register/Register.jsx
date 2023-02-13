import React, { useState } from 'react'
import StepOtp from './steps/StepOtp';
import StepPhoneEmail from './steps/StepPhoneEmail';


const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
}

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1);
    }

  return (
    <>
        <Step></Step>
    </>
  )
}

export default Register