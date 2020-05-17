import React, { memo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const CodeViolationDemo = memo((props: any) => (
  <ErrorBoundary>
    <SafeAreaView>
      <Text>{props.error.isError}</Text>
    </SafeAreaView>
  </ErrorBoundary>
));
export default CodeViolationDemo;
