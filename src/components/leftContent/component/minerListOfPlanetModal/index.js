import { useEffect, useState } from 'react';
import { Modal, Table } from 'antd';
import { getMinersOfPlanet } from '../../../../utils/requestList';
import { columns } from '../miners';
import './index.less';

const MinerListOfPlanetModal = ({showModal, setShowModal, planet}) => {
  const [minerList, setMinerList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMinersOfPlanet(planet._id).then(res => {
      if(res){
        setMinerList(res)
        setLoading(false)
      }
    })
  }, []);
 const finalColums = columns.filter(column => column.title !== 'Planet')

  return (
    <Modal
    open={showModal}
    onCancel={() => setShowModal(null)}
    footer={null}
    wrapClassName='minal-list-of-planet-modal'
    >
      <div className='title'>List of miners of {planet.name}</div>{
        loading?
        <div className='loader'>
          <i className='iconfont-loader'></i>
        </div>:
        <Table 
          columns={finalColums} 
          dataSource={minerList} 
          pagination={false}
          bordered
        />
      }
    </Modal>
  )
}

export default MinerListOfPlanetModal;