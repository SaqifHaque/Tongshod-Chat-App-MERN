import React, { useState } from 'react'
import PublicLayout from '../../components/shared/PublicLayout';
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
    <PublicLayout>
        <Step onNext={onNext}></Step>
    </PublicLayout>
  )
}

export default Activate