import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex p-2'>
        <div className="form-control">
            <label className="cursor-pointer label">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox checkbox-success ml-1" />
            </label>
        </div>
        <div className="form-control">
            <label className="cursor-pointer label">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox checkbox-success ml-1" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox