'use strict';

export const GET_ALERTS = 'GET_ALERTS';
export const ADD_ALERT = 'ADD_ALERT';

export function getAlerts() {
    return {
        type: GET_ALERTS
    }
}

export function addAlert(text) {
    return {
        type: ADD_ALERT,
        text
    }
}