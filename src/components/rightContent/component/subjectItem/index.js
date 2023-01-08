import classNames from 'classnames'
import './index.less'

const SubjectItem = (props) => {
  const {
    type, //planet || miner
    position,
    itemUrl,
    angle,
    style={}
  } = props;

  const className = classNames({
    'subject-item': true,
    [type]: type
  })

  return(
    <img 
      src={itemUrl} 
      className={className} 
      style={{
        ...style,
        '--position-x': position.x,
        '--position-y': position.y,
        '--miner-angle': angle
      }}
    />
  )

};

export default SubjectItem;