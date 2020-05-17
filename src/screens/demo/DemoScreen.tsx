import React, { PureComponent, Suspense, lazy } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import * as _ from 'lodash';

import styles from './DemoScreen.styles';
import { GlobalState } from '../../store';
import { allEmployeeDetailsRequest, employeeDetailsByIdRequest } from '../../store/Posts/action';
import { AllEmployees, singleEmpInput, SingleEmployees } from '../../Types/demoTypes';
import { getAllEmployeesDetails, getEmployeeDetailsById } from '../../store/Posts/selectors';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import EmployeeTable from '../../components/demo-components/EmployeeTable';
// import { GetEmployeeById } from '../../components/demo-components/GetById';
const GetEmployeeById = lazy(() => import('../../components/demo-components/GetById'));
// const EmployeeTable = lazy(() => import('../../components/demo-components/EmployeeTable'));
const CodeViolationDemo = lazy(() => import('../../components/demo-components/CodeViolationDemo'));

export interface Props {
  allEmployeeDetailsRequest: typeof allEmployeeDetailsRequest;
  allEmployeeDetailsData: typeof allEmployeeDetailsRequest;

  employeeDetailsByIdRequest: typeof employeeDetailsByIdRequest;
  employeeDetailsByIdData: typeof employeeDetailsByIdRequest;

  allEmployees: AllEmployees;
  singleEmployee: SingleEmployees;
}

interface DemoScreenState {
  screen: string;
}

class DemoScreen extends PureComponent<Props> {
  state: DemoScreenState = {
    screen: 'getAll',
  };

  getAllDetails = () => {
    this.props.allEmployeeDetailsData();
  };

  getEmployeeById = (value: any) => {
    this.props.employeeDetailsByIdData(_.get(value, 'id', ''));
  };

  loadComponentData = () => {
    this.getAllDetails();
  };

  __retry = () => {
    this.setState({ screen: 'getAll' });
  };

  curdOperation = (type: string) => {
    if (type === 'getAll') {
      this.setState({ screen: 'getAll' });
      this.getAllDetails();
    } else if (type === 'getById') {
      this.setState({ screen: 'getById' });
    } else if (type === 'error') {
      this.setState({ screen: 'error' });
    }
  };

  keyExtractor = (item: any) => item && item.id;

  render() {
    const getEmployeeById = this.getEmployeeById;
    return (
      <ErrorBoundary retry={this.__retry}>
        <Suspense fallback={<ActivityIndicator />}>
          <View style={styles.screen} testID={'DemoScreen_container'}>
            <Text style={styles.header}>Employee Details</Text>
            <View style={styles.btnContainer}>
              <Button
                onPress={() => this.curdOperation('getAll')}
                title="Get All Employees"
                testID={'DemoScreen_GetAllBtn'}
              ></Button>
              <Button onPress={() => this.curdOperation('getById')} title="Get Emp. by ID" />
              <Button color="red" onPress={() => this.curdOperation('error')} title="Test Error" />
            </View>
            <View style={{ padding: 16 }}></View>

            {this.state.screen === 'getAll' && <EmployeeTable tableData={this.props.allEmployees} />}
            {this.state.screen === 'getById' && (
              <GetEmployeeById
                handleSubmitForm={getEmployeeById}
                isApiLoading={_.get(this.props, 'singleEmployee.isLoading', false)}
              />
            )}

            {this.state.screen === 'getById' && _.get(this.props, 'singleEmployee.errorMessage', '') ? (
              <View style={styles.margin16}>
                {!_.get(this.props, 'singleEmployee.isLoading', false) && (
                  <Text style={{ backgroundColor: 'yellow', color: 'red', padding: 16 }}>
                    {_.get(this.props, 'singleEmployee.errorMessage', '')}
                  </Text>
                )}
              </View>
            ) : (
              _.get(this.props, 'singleEmployee.data', []).length > 0 &&
              this.state.screen === 'getById' && <EmployeeTable tableData={this.props.singleEmployee} />
            )}

            {this.state.screen === 'error' && <CodeViolationDemo />}
          </View>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  allEmployees: getAllEmployeesDetails(state),
  singleEmployee: getEmployeeDetailsById(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  allEmployeeDetailsData: () => dispatch(allEmployeeDetailsRequest()),
  employeeDetailsByIdData: (params: singleEmpInput) => dispatch(employeeDetailsByIdRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DemoScreen);
