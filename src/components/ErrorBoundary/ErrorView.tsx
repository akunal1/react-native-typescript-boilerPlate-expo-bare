import React, { memo } from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';

import { Spacing, Font, Colors } from '../../Theme/index';

interface Props {
  retry: () => void;
}

export const ErrorView: React.FunctionComponent<Props> = memo((props) => {
  const styles = StyleSheet.create({
    errorViewStyles: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: Font.size.largeX,
      color: Colors.text.blueDark,
    },
    subtitle: {
      color: Colors.text.greyDark,
      fontSize: Font.size.large,
      margin: Spacing.large,
      textAlign: 'center',
    },
    retryButtonContainer: {
      marginTop: Spacing.large,
      alignSelf: 'stretch',
    },
    retryButton: {
      marginHorizontal: Spacing.medium,
      backgroundColor: Colors.grey.medium,
      borderRadius: 90,
      alignSelf: 'stretch',
      height: 48,
    },
    retryButtonText: {
      fontSize: Font.size.large,
      color: Colors.text.blueDark,
    },
    retryIcon: {
      marginRight: Spacing.small,
      tintColor: Colors.text.blueDark,
      height: Font.size.largeX,
      width: Font.size.largeX,
    },
  });

  //   const retryIcon = <Image source={require('src/Assets/Images/Retry.png')} style={styles.retryIcon} />;

  return (
    <View style={styles.errorViewStyles}>
      <Text style={styles.title}>Code Violation.</Text>
      <Text style={styles.subtitle}>
        We apologize for this unforced error. Tap refresh or try again in a few minutes.
      </Text>
      <Button
        title={'Refresh'}
        // containerStyle={styles.retryButton}
        // buttonStyle={styles.retryButton}
        // titleStyle={styles.retryButtonText}
        // icon={retryIcon}
        onPress={props.retry}
      />
    </View>
  );
});
