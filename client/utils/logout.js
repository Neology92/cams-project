import { setInStorage } from './storage';

export default function() {
    setInStorage('session_token', '');

    // Send logout request to server

    window.location.reload();
}
