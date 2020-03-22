import React from 'react';

import './custom-select-input.styles.scss';

const SelectInput = ({ options, defaultValue,  handleSelectChange, width }) => {

    const handleChange = (event) => {   
        console.log('[SelectInput - event.target.value] = ' + event.target.value)
        handleSelectChange(event.target.value);
    };

    return(
        <div className='select-container' style={{ width: width }}>
            <select 
                className='select-input'
                onChange={handleChange}>
                    <option disabled>{defaultValue}</option>
                    {
                        Object.entries(options).map((item, index) => {
                            return <option key={index} value={item[0]}>{item[1]}</option>
                        } )  
                    }
            </select>
            <span className='arrow-down'></span>
        </div>
    );
};

export default SelectInput;