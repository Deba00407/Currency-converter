import React, { useId, useRef } from 'react'

const InputBox = ({
  label, selectedCurr = "usd", currOptions = [], classname = "", amount, onAmountchange, onCurrencyChange, convert }) => {
  let amId = useId()
  let ref = useRef()
  return (
    <div className='flex bg-white rounded-md w-full justify-between p-2'>
      <div>
        <label ref={ref} htmlFor={amId}>{label}</label>
        <input id={amId} className='outline-none w-full bg-transparent py-1.5' type="number" placeholder='Amount' value={amount} onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}/>
      </div>

      <div className='w-full flex flex-wrap justify-end text-right'>
        <span className='text-black mb-2 w-full'>Currency Type</span>
        <select className='cursor-pointer rounded-md p-1 outline-none bg-blue-200' value={selectedCurr} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          {currOptions.map((item) => {
            return <option key={item} value={item}>
              {item}
            </option>
          })}
        </select>
      </div>
    </div>
  )
}

export default InputBox
