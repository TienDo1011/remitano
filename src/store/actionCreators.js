import { SUBMIT_FORM } from './actionTypes';

export function submitForm(data) {
  return {
    type: SUBMIT_FORM,
    payload: {
      data
    }
  }
}