import React from 'react'
import Card from './Card'
import { BsPhone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Button from './Button'

const Phone = ({onSwitch, onNext}) => {
    return (
        <Card title={'Enter Your Phone Number'}>
            <input placeholder="+88-XXX-XXX-XXXX" className="bg-gray-700 rounded-full py-1 w-44 px-3"></input>
            <Button onButtonClick={() => onNext('phone')} title="Next  ->"></Button>
            <p className='text-center font-thin text-gray-300 font-md font-sans'>By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
            <div>
                <button className="px-2 py-2 border border-grey-200 rounded-md bg-blue-600"><BsPhone size="20" /></button>
                <button onClick={() => onSwitch('email')} className="px-2 py-2 border border-grey-200 rounded-md bg-gray-800 hover:bg-gray-600"><FiMail size="20" /></button>
            </div>
        </Card>
  )
}

export default Phone