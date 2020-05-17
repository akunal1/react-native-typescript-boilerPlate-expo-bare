import apisauce, { ApisauceInstance, ApiResponse } from 'apisauce';
import { singleEmpInput } from '../Types/demoTypes';

export class DemoGetPostApi {
  api: ApisauceInstance;

  constructor(baseURL = 'http://dummy.restapiexample.com/api/v1') {
    this.api = apisauce.create({
      baseURL,
      headers: {},
      timeout: 15000, // Timeout set to 15sec
    });
  }

  allEmployees = (): Promise<ApiResponse<any>> => this.api.get('/employees');

  employeeById = (id: singleEmpInput): Promise<ApiResponse<any>> => this.api.get(`/employee/${id}`);
}
