import React, { useState } from 'react'
import Globe from "../assets/globe.png";
import Social from "../assets/social.png";
import Private from "../assets/private.png";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { createRoom as create } from '../api/roomAPI';

const RoomModal = ({ onClose }) => {
  const [roomType, setRoomType] = useState('open');
  const [topic, setTopic] = useState('');

  const createRoom = async () => {
    try{
      const { data } = await create({topic, roomType});
      console.log(data);
    } catch {

    }
    
  }

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-xl text-left shadow-xl border border-gray-900 transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <button onClick={onClose} class="float-right p-2"><AiOutlineCloseCircle size="20"/></button>
          <div class="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-200" id="modal-title">Enter the topic to be discussed</h3>
                <div class="mt-2">
                  <input
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)} 
                  class="rounded-xl w-full bg-gray-800 p-1"/>
                </div>
                <div class="mt-4">
                  <h3 class="text-base font-semibold leading-6 text-gray-200" id="modal-title">Room Type</h3>
                </div>
                  <div class="flex flex-row space-x-2 mt-4 items-center justify-center">
                    <div onClick={(e)=> setRoomType('open')} 
                    class={`hover:bg-gray-800 rounded-md p-3 flex flex-col items-center
                     ${ roomType=== 'open' ? 'border-2 border-blue-700' : ''}`}>
                      <img class="w-40" src={Globe} alt=""/>
                      <span>Open</span>
                    </div>
                    <div onClick={(e)=> setRoomType('social')} 
                    class={`hover:bg-gray-800 rounded-md p-3 flex flex-col items-center
                    ${ roomType=== 'social' ? 'border-2 border-blue-700' : ''}`}>
                      <img class="w-40" src={Social} alt=""/>
                      <span>Social</span>
                    </div>
                    <div onClick={(e)=> setRoomType('private')} 
                    class={`hover:bg-gray-800 rounded-md p-3 flex flex-col items-center
                    ${ roomType=== 'private' ? 'border-2 border-blue-700' : ''}`}>
                      <img class="w-40" src={Private} alt=""/>
                      <span>Private</span>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-6">
                  <span>Start a room open to everyone</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
              onClick={createRoom}  
              className="bg-blue-700 rounded-xl w-36 p-1 hover:bg-blue-800 transition mb-6">Let's Go</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RoomModal;