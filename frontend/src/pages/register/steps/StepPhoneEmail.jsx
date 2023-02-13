import React, { useCallback, useState } from 'react'
import PublicLayout from '../../../components/shared/PublicLayout'
import Phone from '../../../components/UIControls/Phone';
import Email from '../../../components/UIControls/Email';

const dataMap = {
    phone: Phone,
    email: Email,
}

const StepPhoneEmail = () => {
  const [type, setType] = useState('phone');
  const Component = dataMap[type];

  const switchComponent = useCallback((name) => {
    console.log(name);
    setType(name);
  }, []);

  return (
    <PublicLayout>
      <Component onSwitch={switchComponent}/>
    </PublicLayout>
  )
}

export default StepPhoneEmail