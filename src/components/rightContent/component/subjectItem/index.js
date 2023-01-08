import classNames from 'classnames'
import './index.less'

const SubjectItem = (props) => {
  const {
    type, //planet || miner || asteroid
    position,
    itemUrl,
    angle,
    style={},
    minerals
  } = props;

  const subjectItemClassName = classNames({
    'subject-item': true,
    [type]: type
  })

  const planetMineralsClassName = classNames({
    'planet-minerals': true,
    'active': minerals >= 1000
  })

  return(
    <div         
      className={subjectItemClassName} 
      style={{
        ...style,
        '--position-x': position.x,
        '--position-y': position.y,
        '--miner-angle': angle,
      }}
    >
      <img src={itemUrl}/>
      {
        minerals &&
        <div className={planetMineralsClassName}>{minerals}/1000</div>
      }
    </div>
  )

};

export default SubjectItem;