// FetchUser.js

export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.chucknorris.io/jokes/random`;
    return fetch(URL)
            .then((res) => res.json());
}