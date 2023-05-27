import { useState } from 'react';
import { useStateWithCallback } from './useStateWithCallback';

export const useWebRTC = () => {
    const [clients, setClients] = useStateWithCallback([
        {
            id:1,
            name: "Saqif"
        },
        {
            id:2,
            name: "Hoque"
        }
    ]);
    return { clients };
}