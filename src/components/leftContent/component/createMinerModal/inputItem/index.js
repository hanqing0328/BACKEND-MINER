import { Input, InputNumber } from 'antd';
import classNames from 'classnames'
import './index.less';

const InputItem = (props) => {
  const {
    itemName,
    attribute,
    setAttribute,
    type,
    showError,
    onChange
  } = props;

  const InputType = type === 'number'? InputNumber:Input;
  const inputItemClassName = classNames({
    'input-item': true,
    'error': showError
  })
  const inputClassName = classNames({
    'item-value': true,
    'error': showError
  })
  return (
    <div className={inputItemClassName} key={itemName}>
    <label className='item-name'>{itemName}</label>
    <InputType
      name={itemName}
      className={inputClassName}
      id={itemName}
      value={attribute[itemName]} 
      onChange={(e)=> {
        typeof onChange === 'function' && onChange(e.target.value)
        setAttribute({
          ...attribute,
          [itemName]: type === 'number'? e : e.target.value
        })
      }}
      min={1}
      max={200}
    />
  </div>
  )
}

export default InputItem;