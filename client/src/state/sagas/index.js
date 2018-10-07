import { fork } from 'redux-saga/effects';
import app from './app';
import users from './users';

const sagas = function* () {
  yield [
    fork(users),
    fork(app),
  ];
}

export default sagas;
