import React, { memo } from 'react';
import { SafeAreaView, TextInput, Button, ActivityIndicator, Text, View } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import { Colors, Spacing } from '../../Theme';

interface StyledInputProps {
  label: string;
  formikProps: any;
  formikKey: string;
  placeholder: string;
  autoFocus: boolean;
}

const StyledInput = memo(({ label, formikProps, formikKey, placeholder }: StyledInputProps) => {
  const inputStyles = {
    borderWidth: 1,
    borderColor: Colors.blueMid,
    padding: Spacing.medium,
    marginBottom: Spacing.tiny,
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }

  //TODO : Remove inline styling
  return (
    <View style={{ marginHorizontal: Spacing.mediumX + Spacing.tiny, marginVertical: Spacing.tiny }}>
      <Text style={{ marginBottom: 3 }}>{label}</Text>
      <TextInput
        style={inputStyles}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        placeholder={placeholder}
        autoFocus
      />
      <Text style={{ color: 'red' }}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
    </View>
  );
});

const validationSchema = yup.object().shape({
  id: yup
    .number()
    .typeError('Only Number is Accepted')
    .label('Employee Id')
    .required()
    .max(99, 'Please Enter Something in-between 1 to 99'),
});

const getInitialValues = () => {
  //Logic goes here
  return { id: '' };
};

interface Props {
  handleSubmitForm(param: object): void;
  isApiLoading: boolean;
}

const GetEmployeeById = memo((props: Props) => (
  <SafeAreaView>
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(values) => {
        props.handleSubmitForm(values);
      }}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <StyledInput
                label="Employee Id"
                formikProps={formikProps}
                formikKey="id"
                placeholder="Please Enter Employee Id"
                autoFocus
              />
            </View>

            {props.isApiLoading ? (
              <ActivityIndicator />
            ) : (
              <View style={{ alignContent: 'center', alignSelf: 'center', top: 4 }}>
                <Button title="Submit" onPress={() => formikProps.handleSubmit()} />
              </View>
            )}
          </View>
        </>
      )}
    </Formik>
  </SafeAreaView>
));
export default GetEmployeeById;
