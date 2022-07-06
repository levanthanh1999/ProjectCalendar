import React, { useState } from 'react'
import { DatePicker, TimePicker } from 'antd';
import type { DatePickerProps, TimePickerProps } from 'antd';

type PickerType = 'time' | 'date';

const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps['onChange'];
}) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const TimeDate = () => {
    const [type, setType] = useState<PickerType>('time')

  return (
    <>
      <PickerWithType type={type} onChange={value => console.log(value)} />
    </>
  )
}

export default TimeDate