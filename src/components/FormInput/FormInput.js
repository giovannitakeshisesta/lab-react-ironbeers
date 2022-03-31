import React from 'react'

export default function FormInput({handleChange,name,type,value}) {

    const toTitleCase = (phrase) => {
        return phrase
          .replace(/_/g, " ")
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    };

  return (
    <div className="mb-3">
        {type==="text" &&
        <div>
            <label htmlFor={name} className="form-label">{toTitleCase(name)}</label>
            <input
            type={type}
            className="form-control"
            name={name}
            onChange={handleChange}
            />
        </div>
        }

        {type==="number" &&
        <div>
            <label htmlFor={name} className="form-label">{toTitleCase(name)}</label>
            <input
            type={type}
            className="form-control"
            name={name}
            min={0}
            onChange={handleChange}
            />
        </div>
        }

        {type==="textArea" && 
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{toTitleCase(name)} </label>
        <textarea value={value}
        className="form-control" name="description" rows="3" 
        onChange={handleChange}>
        </textarea>
        </div>
        }
    </div>
  ) 
}
