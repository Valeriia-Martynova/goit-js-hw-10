import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const iconOk = '/src/img/circle.svg';
const iconError = '/src/img/octagon.svg';
    
document.querySelector('.form').addEventListener('submit', (Event) => {
    Event.preventDefault();

    const form = Event.target;
    const delay = Number(form.delay.value);
    const state = form.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                iconUrl: iconOk,
                title: 'OK',
                message: `Fulfilled promise in ${delay}ms`,
                position: 'topRight',
                timeout: 5000,
                titleColor: '#ffffff',
                messageColor: '#ffffff',
                backgroundColor: '#59a10d',
            });
        })
        .catch((delay) => {
            iziToast.error({
                iconUrl: iconError,
                title: 'Error',
                message: `Rejected promise in ${delay}ms`,
                position: 'topRight',
                timeout: 5000,
                titleColor: '#ffffff',
                messageColor: '#ffffff',
                backgroundColor: '#ef4040',
            });
        });
});