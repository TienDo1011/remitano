import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';

function* submitForm(action) {
  try {
    const user = yield call(new Api().submitForm, action.payload.data);
    yield put({ type: 'SUBMIT_FORM_SUCCEEDED', payload: {
      userName: user.data.userName}
    });
  } catch (err) {
    if (err.message.includes('400')) {
      yield put({ type: 'SUBMIT_FORM_FAILED', payload: {
        message: 'Invalid account'
      }});
    } else {
      yield put({ type: 'SUBMIT_FORM_FAILED', payload: {
        message: 'something went wrong'
      }});
    }
  }
}

function* mySaga() {
  yield takeLatest('SUBMIT_FORM', submitForm);
}

export default mySaga;