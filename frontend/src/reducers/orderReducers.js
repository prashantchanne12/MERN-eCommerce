import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,

    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,

    ORDER_LIST_ALL_REQUEST,
    ORDER_LIST_ALL_SUCCESS,
    ORDER_LIST_ALL_FAIL,
    ORDER_LIST_ALL_RESET,

} from '../constants/orderConstants';

export const orderCreateReducers = (state = {}, action) => {

    switch (action.type) {
        case ORDER_CREATE_REQUEST: {
            return { loading: true, }
        }

        case ORDER_CREATE_SUCCESS: {
            return {
                loading: false,
                success: true,
                orders: action.payload,
            }
        }

        case ORDER_CREATE_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        default: return {}
    }

}

export const orderDetailsReducer = (state = { loading: true, orderItems: [], shippingAddress: {} }, action) => {

    switch (action.type) {
        case ORDER_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case ORDER_DETAILS_SUCCESS: {
            return {
                loading: false,
                order: action.payload,
            }
        }

        case ORDER_DETAILS_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        default: return state;
    }

}

export const orderPayReducer = (state = {}, action) => {

    switch (action.type) {
        case ORDER_PAY_REQUEST: {
            return {
                loading: true,
            }
        }

        case ORDER_PAY_SUCCESS: {
            return {
                loading: false,
                success: true,
            }
        }

        case ORDER_PAY_RESET: {
            return {}
        }

        case ORDER_PAY_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        default: return state;
    }

}

export const orderListMyReducer = (state = { orders: [] }, action) => {

    switch (action.type) {
        case ORDER_LIST_MY_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case ORDER_LIST_MY_SUCCESS: {
            return {
                loading: false,
                orders: action.payload,
            }
        }

        case ORDER_LIST_MY_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        case ORDER_LIST_MY_RESET: {
            return { orders: [] }
        }

        default: return state;
    }

}

export const orderListAllReducer = (state = { orders: [] }, action) => {

    switch (action.type) {
        case ORDER_LIST_ALL_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }

        case ORDER_LIST_ALL_SUCCESS: {
            return {
                loading: false,
                orders: action.payload,
            }
        }

        case ORDER_LIST_ALL_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        case ORDER_LIST_ALL_RESET: {
            return { orders: [] }
        }

        default: return state;
    }

}