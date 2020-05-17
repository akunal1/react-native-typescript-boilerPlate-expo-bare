export type employeeData = {
  employee_age?: string;
  employee_name?: string;
  employee_salary?: string;
  id?: string;
};

export type AllEmployees = {
  data: Array<employeeData>;
  status: string;
  isLoading: boolean;
  errorMessage: string;
  isError: boolean;
  dateFetched: Date;
};

export type SingleEmployees = {
  data: Array<employeeData>;
  status: string;
  isLoading: boolean;
  errorMessage: string;
  isError: boolean;
  dateFetched: Date;
};

export type GlobalState = {
  allEmployees: AllEmployees;
  employeeById: SingleEmployees;
};

//Get All Posts

export type AllEmployeeData = employeeData[];

export type AllEmployeesType =
  | { type: 'ALL_EMPLOYEE_REQUEST'; input?: string }
  | { type: 'ALL_EMPLOYEE_SUCCESS'; posts: AllEmployeeData }
  | { type: 'ALL_EMPLOYEE_FAILURE'; error: string };

export type singleEmpInput = {
  id: string;
};

export type singleEmpData = {
  data: employeeData;
};

export type singleEmpType =
  | { type: 'SINGLE_EMP_REQUEST'; id: singleEmpInput }
  | { type: 'SINGLE_EMP_SUCCESS'; data: employeeData }
  | { type: 'SINGLE_EMP_FAILURE'; error: string };

//Delete a post

export type PostTypes = AllEmployeesType;
