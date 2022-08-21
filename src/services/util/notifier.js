import { toast } from 'react-toastify';

export const notifySuccess = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        timeOut: 500
    });
}

export const notifyError = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        timeOut: 500
    });
}
