import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectGender}) => {
  return (
    <div className='flex p-2'>
        <div className="form-control">
            <label className={`cursor-pointer label ${selectGender==="male" ? "selected" : ""}`}>
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox checkbox-success ml-1" 
                checked={selectGender==="male"}
                onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>
        <div className="form-control">
            <label className={`cursor-pointer label ${selectGender==="female" ? "selected" : ""}`}>
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox checkbox-success ml-1" 
                checked={selectGender==="female"}
                onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox