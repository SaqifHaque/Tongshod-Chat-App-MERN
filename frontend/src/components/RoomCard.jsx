import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({room}) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => {
            navigate(`/room/${room?.id}`);
        }} class="rounded-xl bg-gray-900 overflow-hidden shadow-xl hover:bg-gray-800">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Frontend Group</div>
                <p class="text-gray-400 text-base">
                Reactjs vs TypeScript which one is the best </p>
            </div>
            <div class="flex flex-row gap-1 items-center ml-6 mb-4">
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=67" alt="Rounded avatar"/>
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=23" alt="Rounded avatar"/>
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="Rounded avatar"/>
                <span>... 37+</span>
            </div>
        </div>
  )
}

export default RoomCard