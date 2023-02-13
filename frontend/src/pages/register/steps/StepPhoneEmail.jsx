import React, { useCallback, useState } from 'react'
import Phone from '../../../components/UIControls/Phone';
import Email from '../../../components/UIControls/Email';

const dataMap = {
    phone: Phone,
    email: Email,
}

const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = dataMap[type];

  const switchComponent = useCallback((name) => {
    setType(name);
  }, []);

  return (
   <>
      <Component onNext={onNext} onSwitch={switchComponent}/>
    </>
  )
}

export default StepPhoneEmail