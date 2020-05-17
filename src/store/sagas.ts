import { takeLatest, all } from 'redux-saga/effects';
import { DemoGetPostApi } from '../service/DemoApi';
/* ------------- Types ---------  ---- */

/* ------------- Sagas ------------- */
import { getAllEmployeesRequest, employeeByIdReducerRequest } from './Posts/saga';

//Add individual sagas here

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const getPostApi = new DemoGetPostApi();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    //make all saga generators
    takeLatest('ALL_EMPLOYEE_REQUEST', getAllEmployeesRequest, getPostApi),
    takeLatest('SINGLE_EMP_REQUEST', employeeByIdReducerRequest, getPostApi),
  ]);
}
