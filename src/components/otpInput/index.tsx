import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { fonts } from '../../infrastructure/theme/fonts';

const CELL_COUNT = 6;
type otpTypes = {
  onChangeOtp: (value: string) => void;
  otpValue: string;
  setOtpValue: any;
};
export const OtpCodeInput = ({
  onChangeOtp,
  otpValue,
  setOtpValue,
}: otpTypes) => {
  const ref = useBlurOnFulfill({ value: otpValue, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otpValue,
    setValue: setOtpValue,
  });
  const handleInputChange = (text: string) => {
    setOtpValue(text);
    onChangeOtp(text);
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={otpValue}
        onChangeText={handleInputChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { padding: 10, minHeight: 20 },
  codeFieldRoot: {
    marginTop: 10,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 10,
  },
  cellRoot: {
    width: 40,
    height: 40,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.ui.text,
    borderBottomWidth: 1,
  },
  cellText: {
    color: colors.ui.black,
    fontSize: sizes[4],
    textAlign: 'center',
    fontFamily: fonts.body,
  },
  focusCell: {
    borderBottomColor: colors.ui.primary,
    borderBottomWidth: 1,
  },
});
