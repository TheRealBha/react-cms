'use strict';
import {getAlerts, addAlert, GET_ALERTS, ADD_ALERT} from './actions';
import 'babel-polyfill';

const initialState = {
    alerts : []
}

export default function alertsApp(state, action){
    switch (action.type){
        case GET_ALERTS: 
            return Object.assign({}, state, {
                alerts: action.alerts
            })
        case ADD_ALERT:
            return Object.assign({}, state, {
                alerts : [
                    ...state.alerts
                ,
                {
                    text: action.text
                }]
            })
        default:
            return state
    }
}


