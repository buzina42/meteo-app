import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;


export default function Select() {
    return (
        <div>
            <Space direction="vertical" size={20}>
                <RangePicker picker="year" />
            </Space> 
        </div>
    )
}