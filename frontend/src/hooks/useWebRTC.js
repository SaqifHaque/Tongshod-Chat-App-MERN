import { useCallback, useEffect, useRef } from 'react';
import { useStateWithCallback } from './useStateWithCallback';
import { ACTIONS } from '../actions';
import freeice from ' freeice';

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
    const audioElements = useRef({});
    const connections = useRef({});
    const localMediaStream = useRef(null);
    const socket = useRef(null);

    const provideRef = (instance, userId) => {
        audioElements.current[userId]  = instance;
    }

    const addNewClients = useCallback(
        (newClient, callback) => {
            const lookingFor = clients.find((client) => client.id === newClient.id);
            if(lookingFor === undefined){
                setClients((exisitingClients) => [...exisitingClients, newClient], callback);
            }
        }, [clients, setClients]
    )

    useEffect(() => {
        const startCapture = async() => {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true,
            })
        }
        startCapture().then(() => {
            addNewClients(user, () => {
                const localElement = audioElements.current[user.id];
                if(localElement) {
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStream.current;
                }
            });
        })
    },[])

    useEffect(() => {
        const handleNewPeer = async ({peerId, createOffer, user: remoteUser}) => {
            if(peerId in connections.current){
                return console.warn(`You are already connected with ${peerId} (${user.name})`);
            }

            connections.current[peerId] = new RTCPeerConnection({
                iceServers: freeice()
            })

            connections.current[peerId].onicecandidate = (event) => {
                socket.current.emit(ACTIONS.RELAY_ICE, {
                    peerId,
                    icecandidate: event.candidate
                })
            }

            connections.current[peerId].ontrack = ({
                streams: [remoteStream]
            }) => {
                addNewClients(remoteUser, () => {
                    if(audioElements.current[remoteUser.id]){
                        audioElements.current[remoteUser.id].srcObject = remoteStream
                    } else {
                        let settled = false;
                        const interval = setInterval(() => {
                            if(audioElements.current[remoteUser.id]) {
                                audioElements.current[remoteUser.id].srcObject = remoteStream;
                                settled = true;
                            }
                            

                        }, 1000)
                    }
                })
            }
        }

        socket.current.on(ACTIONS.ADD_PEER, handleNewPeer)
    }, [])

    return { clients, provideRef };
}