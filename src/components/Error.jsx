import React from 'react'

export const Error = ({mensaje}) => {
  return (
    <div className="header_login text_error">
        <p>{mensaje}</p>
    </div>
  )
}
