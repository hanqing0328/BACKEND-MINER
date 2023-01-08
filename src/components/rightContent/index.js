import SubjectItem from './component/subjectItem'
import './index.less';

const RightContent = ({dataSource}) => {
  console.log(dataSource)
  const {
    miners = [],
    asteroids = [],
    planets = [],
  } = dataSource;
  return (
    <div 
      className="right-content"
      style={{
        backgroundImage: 'url("../assets/grid.png"), url("../assets/background.png")'
      }}
    >
      <div className="right-content-title">250 YEARS</div>
      <div className='right-content-world'>
        {
          planets.map((planet, index) => {
          return <SubjectItem 
                    position={{x: planet.position.x, y: planet.position.y}} 
                    itemUrl={`./assets/planet${index+1}.svg`}
                    type='planet'
                  />
          })
        }
      {
          asteroids.map((asteroid) => {
          return <SubjectItem 
                    position={{x: asteroid.position.x, y: asteroid.position.y}} 
                    itemUrl={'./assets/asteroids.svg'}
                    type='planet'
                  />
          })
        }
        {
          miners.map(miner => {
          return <SubjectItem 
          position={{x: miner.x, y: miner.y}} 
          angle={miner.angle}
          itemUrl={'./assets/miner.svg'}
          type='miner'
          style={{
            transform: `rotate(${miner.angle + 90}deg)`
          }}
          />
          })
        }

      </div>
    </div>
  )
}
export default RightContent;