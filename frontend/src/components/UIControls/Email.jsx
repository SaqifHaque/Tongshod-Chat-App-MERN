import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Button from './Button'
import Card from './Card'

const Email = ({onSwitch, onNext}) => {
  return (
    <Card title={'Enter Your Email Address'}>
        <input placeholder="example@mail.com" className="bg-gray-700 rounded-full py-1 w-44 px-3"></input>
        <Button onButtonClick={() => onNext('email')} title="Next  ->"></Button>
        <p className="text-center font-thin text-gray-300 font-md font-sans">By entering your email, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
        <div>
            <button onClick={() => onSwitch('phone')} className="px-2 py-2 border border-grey-200 rounded-md bg-gray-800 hover:bg-gray-600"><BsPhone size="20" /></button>
            <button  className="px-2 py-2 border border-grey-200 rounded-md bg-blue-600"><FiMail size="20" /></button>
        </div>
    </Card>
  )
}

export default Email