import React from 'react'
import { useNavigate } from 'react-router-dom'
import PublicLayout from '../../components/shared/PublicLayout'
import Button from '../../components/UIControls/Button'
import Card from '../../components/UIControls/Card'


const Home = () => {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate('/register');
    }

  return (
    <PublicLayout>
        <Card title="Welcome to Tongshod">
            <p className="text-center font-thin text-gray-300 font-md font-sans">Tongshod is a where friendship and 
            interests merges together with a beautiful harmony. Meet with your new friends, share knowledge and enjoy</p>
            <Button title="Get your Username" onButtonClick={goToRegister}></Button>
            <a href="#hello" className="text-blue-500 text-xs font-md font-sans">Have an invitation text? Sign In!</a>
        </Card>
    </PublicLayout>
  )
}

export default Home