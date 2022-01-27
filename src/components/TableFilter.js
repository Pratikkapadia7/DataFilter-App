import React, { useState } from 'react';
const TableFilter = (props) =>{
    const [dataValue, setDataValue] = useState('id');
    const dropdownChangeHandler = (event) =>{
        // console.log(event.target.value);
        // console.log(props.items);
        setDataValue(event.target.value);
    }
    props.onChangeHandler(dataValue);
    return(
        <div>
            <label>Filter by Data</label>
            <select value= {dataValue} onChange={dropdownChangeHandler}>
                <option value='id'>ID</option>
                <option value='firstName'>First Name</option>
                <option value='creditScore'>Credit Score</option>
            </select>

        </div>
    );
}
export default TableFilter;