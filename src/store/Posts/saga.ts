import { call, put } from 'redux-saga/effects';
import { DemoGetPostApi } from '../../service/DemoApi';
import * as actions from './action';

export function* getAllEmployeesRequest(api: DemoGetPostApi) {
  try {
    const response = yield call(api.allEmployees);
    const result = response.data;
    if (response.ok) {
      yield put(actions.allEmployeeDetailsSuccess(result.data));
    } else {
      yield put(actions.allEmployeeDetailsFailure(response.problem));
    }
  } catch (error) {
    yield put(actions.allEmployeeDetailsFailure(error));
  }
}

export function* employeeByIdReducerRequest(api: DemoGetPostApi, action: any) {
  try {
    const response = yield call(api.employeeById, action.id);
    const result = response.data;
    if (response.ok) {
      yield put(actions.employeeDetailsByIdSuccess(result.data));
    } else {
      yield put(actions.employeeDetailsByIdFailure(`Error in fetching Employee Data : ${response.problem}`));
    }
  } catch (error) {
    yield put(actions.employeeDetailsByIdFailure(error));
  }
}
