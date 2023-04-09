import React from 'react'

const RoomCard = () => {
  return (
    
        <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Frontend Group</div>
                <p class="text-gray-400 text-base">
                Reactjs vs TypeScript which one is the best </p>
            </div>
            <div class="flex flex-row gap-1 items-center ml-6">
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=67" alt="Rounded avatar"/>
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=23" alt="Rounded avatar"/>
                <img class="w-6 h-6 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="Rounded avatar"/>
                <span>... 37+</span>
            </div>
        </div>
  )
}

export default RoomCard