import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;


function onChange(date, dateString) {
    console.log(date, dateString);
  }

export default function Select() {
    return (
        <div>
            <Space direction="vertical" size={20}>
            <RangePicker 
                onChange={onChange} 
                defaultPickerValue={[
                    moment('1881-01-01', 'YYYY-MM-DD'),
                    moment('2006-01-02', 'YYYY-MM-DD')]} 
            />
            </Space> 
        </div>
    )
}