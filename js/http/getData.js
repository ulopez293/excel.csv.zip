
const serviceURL = 'http://127.0.0.1:8000/api/'

async function getData(url) {
    const response = await fetch(`${serviceURL}${url}`)
    if (!response.ok) {
        const message = `A ocurrido un error: ${response.status}`;
        throw new Error(message);
    }
    return await response.json()
}