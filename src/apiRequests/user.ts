import {httpClient} from "../config/api/axios.ts";

export function getUserInfos() {
    return httpClient.get('users/current')
}

export function getUserNotifications() {
    return httpClient.get('users/current/notifications')
}