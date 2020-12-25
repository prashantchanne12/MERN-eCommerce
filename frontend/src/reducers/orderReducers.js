import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,

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

export const orderDetailsReducer = (state = { orderItems: [], shippingAddress: {} }, action) => {

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
                orders: action.payload,
            }
        }

        case ORDER_DETAILS_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }

        default: state;
    }

}