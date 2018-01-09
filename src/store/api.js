import axios from 'axios';

export default class Api {
  submitForm(data) {
    return axios.post('https://us-central1-remitano-e1e18.cloudfunctions.net/validate/', data);
  }
}