import { actions } from './actions';

export const initialState = {
    alert: false,
    loading: false,
    message: '',
    backgroundColor: '#DF6E6E',
    checkedName: '',
    checkedBirth: '',
    checkedEmail: '',
    checkedPassword: '',
    checkedConfirmPassword: '',
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
        case actions.setCheckedBirth:
            return {
              ...state,
              checkedBirth: action.payload,
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
        case actions.setCheckedConfirmPassword:
          return {
            ...state,
            checkedConfirmPassword: action.payload,
            }
      }
}
