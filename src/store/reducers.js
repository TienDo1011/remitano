import { SUBMIT_FORM_SUCCEEDED, SUBMIT_FORM_FAILED } from './actionTypes';

const initalState = {
  tenTaiKhoan: '',
  errors: {
    soTaiKhoan: '',
  },
}

export default function form(state = initalState, action) {
  switch (action.type) {
    case SUBMIT_FORM_FAILED:
      return {
        ...state,
        errors: {
          soTaiKhoan: action.payload.message
        }
      };
      break;
    case SUBMIT_FORM_SUCCEEDED:
    return {
      ...state,
      tenTaiKhoan: action.payload.userName,
      errors: {
        soTaiKhoan: ''
      }
    };
    break;
    default:
      return state;
      break;
  }
}