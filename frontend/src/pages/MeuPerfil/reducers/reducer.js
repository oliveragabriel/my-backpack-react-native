import { actions } from './actions';

export const initialState = {
    alert: false,
    loading: false,
    message: '',
    backgroundColor: '#58CE7E',
    checkedName: '',
    checkedEmail: '',
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
        case actions.changeBackgroundColor:
            return {
                ...state,
                backgroundColor: action.payload,
            }
        case actions.setCheckedName:
            return {
              ...state,
              checkedName: action.payload,
              }
        case actions.setCheckedEmail:
          return {
            ...state,
            checkedEmail: action.payload,
            }
    }
}