import React from 'react';

import './form-select-input.styles.scss';

const FormSelectInput = ({ options, handleSelectChange }) => {

    const handleChange = (event) => {
        handleSelectChange(event.target.value);
    };

    return(
        <div className='select-container'>
            <select 
                className='options'
                onChange={handleChange}
                //defaultValue="Please select"
                >
                <option>Please select</option>
                {
                    options.map((option, index) => <option key={index} value={option}>{option}</option>)
                }
            </select>
        </div>
    );
};

export default FormSelectInput;