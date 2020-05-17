import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import * as _ from 'lodash';

import { employeeData, AllEmployees } from '../../Types/demoTypes';
import { Spacing, Colors, Font } from '../../Theme';

export interface Props {
  tableData: AllEmployees;
}

export default class EmployeeTable extends Component<Props> {
  shouldComponentUpdate(nextProps: any) {
    return _.isEqual(this.props.tableData.data, nextProps.tableData.data) ? false : true;
  }

  //Table View for all the Employee data
  renderItem = ({ item }: { item: employeeData }) => {
    return (
      <TouchableOpacity>
        <View style={styles.employeeDataContainer}>
          <Text style={styles.fullWidth}>{item.id}</Text>
          <Text style={styles.fullWidth}>
            {_.get(item, 'employee_name', '')}({_.get(item, 'employee_age', '')})
          </Text>
          <Text style={styles.fullWidth}>$ {item.employee_salary}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  //If you want to display messages for Empty data
  renderEmptyComponent = () => {
    const { tableData } = this.props;

    return (
      <View style={styles.emptyDataContainer}>
        {_.get(tableData, 'data', []).length > 0 || _.get(tableData, 'errorMessage', '') ? (
          <Text style={styles.errorText}>
            {tableData.isLoading ? <ActivityIndicator /> : tableData.errorMessage}
          </Text>
        ) : (
          <Text> You Don't Have any Employees to Display</Text>
        )}
      </View>
    );
  };

  //creating unique keys
  keyExtractor = (item: any) => item && item.id;

  render() {
    return (
      <View style={styles.screen} testID={'EmployeeTable_container'}>
        <Text style={styles.headerText}>ALL Employee Details</Text>
        <FlatList
          data={this.props.tableData.data}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmptyComponent}
          keyExtractor={this.keyExtractor}
          removeClippedSubviews={true}
          maxToRenderPerBatch={1}
          initialNumToRender={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  employeeDataContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: Spacing.mediumX,
    margin: Spacing.small,
    backgroundColor: Colors.grey.light,
  },
  fullWidth: {
    flex: 1,
  },
  emptyDataContainer: { alignItems: 'center', justifyContent: 'center', marginTop: Spacing.hugeX },
  errorText: {
    flex: 1,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  screen: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: Font.size.largeX,
    padding: Spacing.mediumX,
  },
});
