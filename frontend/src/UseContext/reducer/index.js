import { actionsId } from './actions';

export const initialStateId = {
    accomodation: '',
    activity: '',
    transport: '',
    travel: '',
    travelDay: '',
    user: '',
    wish: ''
};

export function reducer(state, action) {

    switch (action.type) {

        case actionsId.setAccomodationId:
            return {
                ...state,
                accomodation: action.payload
            }

        case actionsId.setActivityId:
            return {
                ...state,
                activity: action.payload
            }

        case actionsId.setTransportId:
            return {
                ...state,
                transport: action.payload
            }

        case actionsId.setTravelId:
            return {
                ...state,
                travel: action.payload
            }

        case actionsId.setTravelDayId:
            return {
                ...state,
                travelDay: action.payload
            }

        case actionsId.setUserId:
            return {
                ...state,
                user: action.payload
            }

        case actionsId.setWishId:
            return {
                ...state,
                wish: action.payload
            }

    }
}