import { AllEmployeesType, AllEmployeeData, singleEmpType } from '../../Types/demoTypes';
import { StandardApiState } from '..';
import { createEmptyState } from '../util';
import _ from 'lodash';

//Get Posts Reducer
const initialData: AllEmployeeData = [];
const initialState = createEmptyState(initialData);

export function allEmployeesReducer(
  state = initialState,
  action: AllEmployeesType,
): StandardApiState<AllEmployeeData> {
  switch (action.type) {
    case 'ALL_EMPLOYEE_REQUEST':
      return { ...state, isLoading: true };
    case 'ALL_EMPLOYEE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        dateFetched: new Date(),
        status: 'Success',
        errorMessage: '',
        data: [...action.posts],
      };
    case 'ALL_EMPLOYEE_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}

const updatePostInitState = createEmptyState([]);

export function employeeByIdReducer(
  state = updatePostInitState,
  action: singleEmpType,
): StandardApiState<any> {
  switch (action.type) {
    case 'SINGLE_EMP_REQUEST':
      return { ...state, isLoading: true };
    case 'SINGLE_EMP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: '',
        dateFetched: new Date(),
        data: [action.data],
      };
    case 'SINGLE_EMP_FAILURE':
      return { ...state, isLoading: false, isError: true, errorMessage: action.error };
    default:
      return state;
  }
}
