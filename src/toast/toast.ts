import { useToast } from "vue-toastification";

const toast = useToast();
export function displaySuccessToast(msg = '', timeout = 5000){
    toast.success(msg, {
        timeout: timeout
    });
}

export function displayInfoToast(msg = '', timeout = 5000){
    toast.info(msg, {
        timeout: timeout
    });
}


export function displayWarningToast(msg = '', timeout = 5000){
    toast.warning(msg, {
        timeout: timeout
    });
}

export function displayErrorToast(msg = '', timeout = 5000){
    toast.error(msg, {
        timeout: timeout
    });
}

