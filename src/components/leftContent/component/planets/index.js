import { Table } from 'antd';
import { useEffect, useState } from 'react';
import CreateMinerModal from '../createMinerModal';
import SuccessModal from '../successModal';
import MinerListOfPlanetModal from '../minerListOfPlanetModal';

import './index.less';

const Planets = ({dataSource={}}) => {
  const {
    planets,
    miners
  } = dataSource;
  const [createMinerModalIndex, setCreateMinerModalIndex] = useState(-1)
  const [minerListOfPlanet, setMinerListOfPlanet] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Miners',
      dataIndex: 'miners',
      key: 'miners',
      render: (miners, record) => {
        return (
          <span 
            className='miner-name'
            onClick={() => setMinerListOfPlanet(record)}
          >
            {miners}
          </span>
        )
      }
    },
    {
      title: 'Minerals',
      dataIndex: 'minerals',
      key: 'minerals',
      render: (minerals) => <span className={minerals > 1000 ? `cell-active`: null}>{minerals}/1000</span>,
    },
    {
      title: '',
      dataIndex: 'minerals',
      key: 'create',
      render: (minerals, _, index) => {
       return (minerals > 1000 ? <div 
          className='create-miner-btn'
          onClick={() => setCreateMinerModalIndex(index)}
        >
          <i className='iconfont-addminer'></i>
          Create a miner
        </div>:null)
      },
    }
  ];
  return (
    <div className='planets'>
     <Table 
      columns={columns} 
      dataSource={planets} 
      pagination={false}
      bordered
      />
      {
        createMinerModalIndex > -1 &&
        <CreateMinerModal 
          showModalIndex={createMinerModalIndex}
          setShowCreateMinerModalIndex={setCreateMinerModalIndex}
          planetList={planets}
          minerList={miners}
          setShowSuccessModal={setShowSuccessModal}
        />
      }
      {
        showSuccessModal &&
        <SuccessModal 
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      }
      {
        minerListOfPlanet &&
        <MinerListOfPlanetModal 
          showModal={!!minerListOfPlanet}
          setShowModal={setMinerListOfPlanet}
          planet={minerListOfPlanet}
        />
      }
    </div>
  )
}
export default Planets;