import { useRef, useState } from 'react';
import { useStateWithCallback } from './useStateWithCallback';

const users = [
    {
        id:1,
        name: "Saqif"
    },
    {
        id:2,
        name: "Hoque"
    }
];

export const useWebRTC = (roomId, user) => {
    const [clients, setClients] = useStateWithCallback(users);
    const audioElements = useRef({
        
    });
    const connections = useRef({});
    const localMediaStream = useRef(null);

    setClients((prev) => {}, (state) => {

    })
    return { clients };
}