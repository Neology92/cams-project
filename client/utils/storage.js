export function getFromStorage(key) {
    if (!key) return null;

    try {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
    } catch (err) {
        console.error(err); // eslint-disable-line
    }

    return null;
}

export function setInStorage(key, obj) {
    if (!key) {
        console.error('Error: key is missing'); // eslint-disable-line
    }

    try {
        localStorage.setItem(key, JSON.stringify(obj));
    } catch (err) {
        console.error(err); // eslint-disable-line
    }
}
