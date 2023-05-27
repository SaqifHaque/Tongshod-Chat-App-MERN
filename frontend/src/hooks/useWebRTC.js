import { useState } from 'react';

export const useWebRTC = () => {
    const [clients, setClients] = useState([
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