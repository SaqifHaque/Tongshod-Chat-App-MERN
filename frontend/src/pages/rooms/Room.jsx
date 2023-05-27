import React, { useState } from 'react'
import { useWebRTC } from '../../hooks/useWebRTC';

const Room = () => {
    const [clients, setClients] = useWebRTC();

  return (
    <div>
        <h1>All Connected Clients</h1>
        {
            clients.map(client=> {
                return( 
                    <div>
                        <audio controls autoplay></audio>
                        <h4>{client.name}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Room