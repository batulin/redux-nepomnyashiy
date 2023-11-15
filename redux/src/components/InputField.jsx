import React from 'react';

const InputField = ({text, handleChange, handleSubmit}) => {
    return (
        <label>
            <input
                value={text}
                onChange={e => handleChange(e.target.value)}
            />
            <button onClick={handleSubmit}>add todo</button>
        </label>
    );
};

export default InputField;