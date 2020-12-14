import React from 'react'

const FontSizeSelect = (props) => {
  return (
    <select
      name="fontsize"
      value={props.value !== undefined ? props.value : "12px"}
      className="ml-1 border border-blue-400 rounded-sm"
      {...props}
    >
      <option value="12px">12</option>
      <option value="14px">14</option>
      <option value="16px">16</option>
      <option value="18px">18</option>
      <option value="20px">20</option>
      <option value="22px">22</option>
      <option value="24px">24</option>
      <option value="26px">26</option>
      <option value="28px">28</option>
      <option value="30px">30</option>
      <option value="32px">32</option>
      <option value="48px">48</option>
      <option value="64px">64</option>
    </select>
  )
}
export default FontSizeSelect;