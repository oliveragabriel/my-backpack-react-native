import { actions } from './actions';

export const initialState = {
    alert: false,
    loading: false,
    message: '',
    backgroundColor: '#DF6E6E',
    checkedEmail: '',
    checkedPassword: '',
    isNext: false
}

export function reducer(state,action) {
    switch (action.type) {
        case actions.showAlert:
            return {
                ...state,
                alert: action.payload,
            }
        case actions.toggleLoading:
            return {
                ...state,
                loading: !state.loading,
            }
        case actions.setMessage:
            return {
                ...state,
                message: action.payload,
        }
        case actions.setCheckedEmail:
          return {
            ...state,
            checkedEmail: action.payload,
            }
        case actions.setCheckedPassword:
          return {
            ...state,
            checkedPassword: action.payload,
            }
        case actions.setNext:
            return {
                ...state,
                isNext: true
            }
        }
}