import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../UIControls/Card';

const Loader = () => {
    return ReactDOM.createPortal (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 "/>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
        </div>,
       document.getElementById("loader")
    )
}

export const SpinnerImg = () => {
    return(
        <div className="text-center">
            <div role="status">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 "/>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export const LoaderCard = ({message}) => {
    return(
    <Card>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mt-10"/>
        <span className='text-white text-xl font-md font-sans mb-20-10'>{ message }</span>
    </Card>
    )
}

export default Loader;