import React, {useState} from 'react';
import {Button, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FormInput from './form-Input';

type Props = {
  title: string;
  placeholder: string;
  error?: string;
  onChange: (v: Date) => void;
  value?: Date;
  onBlur?: () => void;
};
const DateInput = ({
  title,
  placeholder,
  error,
  value,
  onBlur,
  onChange,
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    onBlur?.();
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // console.warn("A date has been picked: ", date);
    onChange(date);
    hideDatePicker();
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <FormInput
        value={value?.toLocaleDateString() || ''}
        placeholder={placeholder}
        title={title}
        error={error}
        editable={false}
        aria-disabled
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default DateInput;
