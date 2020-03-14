import { setInStorage } from './storage';

export default function() {
    setInStorage('session_token', '');

    // Send remove session token from database query

    window.location.reload();
}
