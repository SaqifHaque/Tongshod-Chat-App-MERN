import React from 'react'
import Navigation from '../../components/shared/Navigation'
import SearchBox from '../../components/UIControls/SearchBox'

const Rooms = () => {
  return (
    <>
    <div class="container px-5">
        <Navigation/>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="font-md font-bold border-b-4 border-blue-600 p-2">All voice rooms</span>
                    <SearchBox/>
                </div>
                <div className="right">
                        <button className="bg-blue-600 rounded-xl w-36 p-1">Start a Room</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rooms
