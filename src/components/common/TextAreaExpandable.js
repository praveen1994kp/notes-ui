import React, { useState } from 'react'

const defaultStyle = { width: '100%' }

const TextAreaExpandable = ({ value, onChange, style }) => {
    const [row, setRow] = useState(5)

    const handleChange = (e) => {
        const textareaLineHeight = 24;
        const previousRows = event.target.rows;
        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }
        setRow(currentRows)
        onChange(event)
    }

    return (
        <textarea style={{ ...defaultStyle, ...style }} rows={row} value={value} onChange={handleChange} />
    )
}

export default TextAreaExpandable