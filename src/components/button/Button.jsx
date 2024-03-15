import React from 'react'
import './button.css'

function Button(props) {
  return (
    <div className='mt-2'>
        <button className="btn">
            <a href={props.url}>{props.name}</a>
        </button>
    </div>
  )
}

export default Button