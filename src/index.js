'use strict';

import { Platform } from 'react-native';
import Picker from './picker';
import DatePicker from './date-picker';
import CustomDatePicker from './date-picker.android';

let DatePickerComponent = DatePicker;

const registerCustomDatePickerIOS = (CustomDatePickerIOS) => {
  if (Platform.OS === 'ios') {
    DatePickerComponent = CustomDatePickerIOS;
  }

  return DatePickerComponent;
};

module.exports = { Picker, DatePicker: DatePickerComponent, CustomDatePicker, registerCustomDatePickerIOS };
