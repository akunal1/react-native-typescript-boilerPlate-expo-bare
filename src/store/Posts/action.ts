import {
  AllEmployeesType,
  singleEmpInput,
  singleEmpType,
  employeeData,
  AllEmployeeData,
} from '../../Types/demoTypes';

//Get all employees
export function allEmployeeDetailsRequest(input?: any): AllEmployeesType {
  return { type: 'ALL_EMPLOYEE_REQUEST', input };
}

export function allEmployeeDetailsSuccess(posts: AllEmployeeData): AllEmployeesType {
  return { type: 'ALL_EMPLOYEE_SUCCESS', posts };
}

export function allEmployeeDetailsFailure(error: string): AllEmployeesType {
  return { type: 'ALL_EMPLOYEE_FAILURE', error };
}

//Get Single Employee Data
export function employeeDetailsByIdRequest(id: singleEmpInput): singleEmpType {
  return { type: 'SINGLE_EMP_REQUEST', id };
}

export function employeeDetailsByIdSuccess(data: employeeData): singleEmpType {
  return { type: 'SINGLE_EMP_SUCCESS', data };
}

export function employeeDetailsByIdFailure(error: string): singleEmpType {
  return { type: 'SINGLE_EMP_FAILURE', error };
}
