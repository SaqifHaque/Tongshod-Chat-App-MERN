import React, { useState } from 'react'
import globe from "../assets/Globe.png";

const RoomModal = () => {

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-xl text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-200" id="modal-title">Enter the topic to be discussed</h3>
                <div class="mt-2">
                  <input class="rounded-lg w-full bg-gray-700"/>
                </div>
                <div class="mt-4">
                  <h3 class="text-base font-semibold leading-6 text-gray-200" id="modal-title">Room Type</h3>
                </div>
                  <div class="flex flex-row space-x-5 mt-4">
                    <div>
                      <img src={globe} alt=""/>
                      <span>Open</span>
                    </div>
                    <div>
                      <img src={globe} alt=""/>
                      <span>Open</span>
                    </div>
                    <div>
                      <img src={globe} alt=""/>
                      <span>Open</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RoomModal;