import React from 'react'
import Navigation from '../../components/shared/Navigation'


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col flex-1 w-full overflow-hidden bg-gradient-to-tl from-indigo-800 via-black to-violet-900">
        <Navigation/>
        <div className="flex flex-1 justify-center items-center height shadow-2xl w-1/2 my-28 mx-auto bg-gray-800 rounded-lg">
            <div className="w-1/2 flex flex-col items-center justify-center gap-y-8 text-gray-200 font-sans">
                <span className="text-2xl">Welcome to Tongshod</span>
                <p className="text-center font-thin text-gray-300 font-md font-sans">Tongshod is a where friendship and interests merges together with
                     a beautiful harmony. Meet with your new friends, share knowledge and enjoy</p>
                <button className="bg-blue-600 py-2 px-4 rounded-full text-white shadow-2xl hover:bg-blue-700">Get your Username</button>
                <a href="#" className="text-blue-500 text-xs font-md font-sans">Have an invitation text? Sign In!</a>
            </div>
        </div>
    </div>
  )
}

export default Home