import React, { useState } from 'react'
import StepAvatar from './steps/StepAvatar';
import StepName from './steps/StepName';
import StepUsername from './steps/StepUsername';

const steps = {
    1: StepName,
    2: StepAvatar,
    3: StepUsername
}


const Activate = () => {
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

export default Activate