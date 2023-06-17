/* eslint-disable no-unused-vars */

export function getUserData(userId) {
    return new Promise((response, _reject) => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((response) => response.json())
                .then((data) => {
                    response(data);
                });
        }, 1000); // Menggunakan setTimeout untuk mensimulasikan waktu tunda jaringan
    });
}
