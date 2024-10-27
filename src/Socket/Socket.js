import io from 'socket.io-client';
import {Socket_Base} from '../Constant/Variable';
const socket = io(Socket_Base, {autoConnect: false, auth: {username: '', mode: 'app'}, extraHeaders: {'ngrok-skip-browser-warning': true}});
socket.onAny((event, ...args) => {
  console.log(event, '----Event', args, '-------agrs');
});
export default socket;
