import React from 'react'

const Selecttag = ({value,onChange,options}) => {
  return (
    <div className=''>
      <select className="bg-slate-100 mr-3  rounded-xl items-center p-[2px] pl-[6px] pr-[5px] pb-[4px]" name="" id="" onChange={onChange}>
        <option value={value}>{value}</option>
        {options.map((option,i)=>{
            return <option key={i} value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}

export default Selecttag
