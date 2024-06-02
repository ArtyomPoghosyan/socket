import { io } from 'socket.io-client';

const apiKey:string = import.meta.env.VITE_URL;

export const socket = io(apiKey)