import _ from 'lodash';
import { GlobalState } from '../../Types/demoTypes';

export const getAllEmployeesDetails = (state: GlobalState) => state.allEmployees;

export const getEmployeeDetailsById = (state: GlobalState) => state.employeeById;
