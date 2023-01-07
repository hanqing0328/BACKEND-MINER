
import { useState, Button } from 'react';
import { Modal, Select } from 'antd';
import { createMiner } from '../../../../utils/requestList';
import InputItem from './inputItem';
import './index.less';

const CreateMinerModal = (props) => {
  const {
    showModalIndex,
    setShowCreateMinerModalIndex,
    planetList,
    minerList,
    setShowSuccessModal
  } = props;
  const [loading, setLoading] = useState(showModalIndex > -1);
  const [planets] = useState(planetList);
  const [showError, setShowError] = useState(false);
  const [attribute, setAttribute] = useState({
    name: '',
    planetId: planets?.[showModalIndex]?._id,
    carryCapacity: 1,
    travelSpeed: 1,
    miningSpeed: 1,
  })

  const checkName = (newName) => {
    console.log('minerList', minerList)
    const isUnValidName = minerList.some(miner => {
      debugger
      return miner.name === newName
    }) || !newName;
    debugger
    if(isUnValidName){
      setShowError(true)
      return false
    }else {
      setShowError(false)
      return true
    }
  }
  const handleOk = () => {
    if(!checkName(attribute.name)){return}
    setLoading(true);
    const selectedPlanet = planets.find(planet => planet._id === attribute.planetId);
    const data = {
      planet: selectedPlanet._id,
      target:selectedPlanet._id,
      x:selectedPlanet.position.x,
      y:selectedPlanet.position.y,
      minerals:selectedPlanet.minerals,
      targetType: 'Planet',
      angle:0,
      status:0
    }
    const finalData = Object.assign(data, attribute)
    createMiner(finalData).then((res) => {
      console.log('create', res);
      setLoading(false);
      setShowCreateMinerModalIndex(-1);
      setShowSuccessModal(true);
    })
  };
  const handleCancel = () => {
    setShowCreateMinerModalIndex(-1);
  };
  const planetOptionList = planets.map(planet => {
    return {
      value: planet._id ,
      label: planet.name,
      className: 'select-option'
    }
  })
  console.log('planetOptionList', planetOptionList)

  return (
    <Modal
      open={showModalIndex > -1}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <div className="submit-btn"  loading={loading} onClick={handleOk}>
          Save
        </div>
      ]}
    >
      <div className='create-miner-modal'>
        <div className='title'>Create a miner</div>
        <InputItem 
          itemName={'name'} 
          key='name'
          setAttribute={setAttribute}
          attribute={attribute}
          type='text'
          showError={showError}
          onChange={checkName}
        />
        <div className='select-item'>
        <label className='item-name'>Planet</label>
        <Select
          defaultValue={attribute.planetId}
          style={{
            width: 120,
          }}
          onChange={id => { setAttribute({...attribute, planetId: id})}}
          options={planetOptionList}
        />
        </div>
        <div className='title'>Assign points</div>
        <div className='assign-area'>
          {
            ['carryCapacity', 'travelSpeed', 'miningSpeed'].map((item, index) => {
              return (
              <InputItem 
                itemName={item}
                key={index}  
                setAttribute={setAttribute}
                attribute={attribute}
                type='number'
              />)
            })
          }
        </div>
      </div>
    </Modal>
  )
}

export default CreateMinerModal;
