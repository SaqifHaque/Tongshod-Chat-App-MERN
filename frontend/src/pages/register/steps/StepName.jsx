import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/UIControls/Button'
import Card from '../../../components/UIControls/Card'
import { SET_NAME } from '../../../redux/features/activate/activateSlice';

const StepName = ({onNext}) => {
  const name =  useSelector((state) => state.activate);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(name);

  const nextStep = () => {
    if(!name) {
      return 
    }
    dispatch(SET_NAME(fullName));
    onNext();
  }

  return (
    <Card title={"What's your full name?"}>
        <input onChange={(e) => setFullName(e.target.value)} placeholder="Your name" className="bg-gray-700 rounded-full py-1 w-44 px-3"></input>
        <Button onButtonClick={nextStep} title="Next  ->"></Button>
        <p className="text-center font-thin text-gray-300 font-md font-sans">People use real names at tongshod.</p>
    </Card>
  )
}

export default StepName