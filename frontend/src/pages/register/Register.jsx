import React, { useState } from 'react'
import StepAvatar from './steps/StepAvatar';
import StepName from './steps/StepName';
import StepOtp from './steps/StepOtp';
import StepPhoneEmail from './steps/StepPhoneEmail';
import StepUsername from './steps/StepUsername';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
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