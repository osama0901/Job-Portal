import React from 'react'
import InputField from '../components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div className="ml-4">
        <h4 className='text-lg md:text-xl lg:text-2xl font-medium mb-2'>Location</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span> ALL
            </label>
            <InputField
                handleChange={handleChange}
                value="london"
                title="London"
                name="test"
                className="text-base" // Adjust font size for InputField component
            />
            <InputField
                handleChange={handleChange}
                value="seattle"
                title="Seattle"
                name="test"
                className="text-base" // Adjust font size for InputField component
            />
            <InputField
                handleChange={handleChange}
                value="brisbane"
                title="Brisbane"
                name="test"
                className="text-base" // Adjust font size for InputField component
            />
            <InputField
                handleChange={handleChange}
                value="melbourne"
                title="Melbourne"
                name="test"
                className="text-base" // Adjust font size for InputField component
            />
        </div>
    </div>
    
    )
}

export default Location;
