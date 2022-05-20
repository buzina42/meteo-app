import React, { useContext } from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { ParameterGraphContext } from "../context/parameter-context.js";

const { RangePicker } = DatePicker;

export default function SelectDate() {
    const {state, dispatch} = useContext(ParameterGraphContext);
    //console.log(dispatch);

    const onChange = (dates, dateStrings) => {dispatch({
        type: "dateInterval",
        payload: {
            startDate: dateStrings[0],
            endDate: dateStrings[1]
        }
      })
      console.log(dates, dateStrings)
    }
    // const onChange = (dates, dateStrings) => {
    //     console.log('From: ', dates[0], ', to: ', dates[1]);
    //     console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    //   }
    
    return (
        <div>
            <Space direction="vertical" size={20}>
                <RangePicker 
                    onChange={onChange} 
                    defaultPickerValue={[
                        moment(state.startDate, 'YYYY-MM-DD'),
                        moment(state.endDate, 'YYYY-MM-DD')]} 
                />
            </Space> 
        </div>
    )
}