import React, { useContext } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { ParameterGraphContext } from "../context/parameter-context.js";

const { RangePicker } = DatePicker;

export default function Select() {
    const {state, dispatch} = useContext(ParameterGraphContext);
    
    const onChangeDate = dateString => {dispatch({
        type: "dateInterval",
        payload: {
            startDate: dateString[0]._i,
            endDate: dateString[1]._i
        }
      })
      console.log(dateString)
    }
    // const onChangeDate= (dates, dateStrings) => {
    //     console.log('From: ', dates[0], ', to: ', dates[1]);
    //     console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    //   }
    
    return (
        <div>
            <Space direction="vertical" size={20}>
                <RangePicker 
                    onChange={onChangeDate} 
                    defaultPickerValue={[
                        moment(state.startDate, 'YYYY-MM-DD'),
                        moment(state.endDate, 'YYYY-MM-DD')]} 
                />
            </Space> 
        </div>
    )
}