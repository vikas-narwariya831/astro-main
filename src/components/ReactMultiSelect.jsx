'use client'

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const ReactMultiSelect = ({ options, value, onChange, ...props }) => {
    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            padding: '5px'
        }),
        multiValue: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: '#0B60B0',
            padding: '3px',
            borderRadius: "4px",
            width: "fit-content"
        }),
        multiValueLabel: (baseStyles, state) => ({
            ...baseStyles,
            color: 'white' // Change this to your desired text color
        }),
        multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,
            color: 'white',
            ':hover': {
                backgroundColor: '#EB5353',
                color: 'white',
            }
        })
    };
    return (
        <Select
            styles={customStyles}
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            {...props}
            required
            value={value}
            onChange={onChange}
            options={Object.values(options)}
        />
    );
}


export { ReactMultiSelect }