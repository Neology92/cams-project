import { setInStorage, getFromStorage } from './storage';

export default function() {
    const sessionToken = getFromStorage('session_token');

    // Send logout request to server
    const response = fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sessionToken,
        }),
    })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                setInStorage('session_token', '');
                window.location.reload();
            }
            return json;
        });

    return response;
}
