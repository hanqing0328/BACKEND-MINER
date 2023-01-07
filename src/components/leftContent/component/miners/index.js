import { Table } from 'antd';
import { useState } from 'react';
import MinerHistoryModal from '../minerHistoryModal';
import './index.less';

const statusMap = {
  0: 'Idle',
  1: 'Traveling',
  2: 'Mining',
  3: 'Transfering',
  4: 'Transferring done'
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Planet',
    dataIndex: 'planet',
    key: 'planet',
    render: (planet) => <span>{planet.name}</span>,
  },
  {
    title: 'carryCapacity',
    dataIndex: 'carryCapacity',
    key: 'carryCapacity',
    render: (carryCapacity) => <span className={carryCapacity === 200 ? `cell-active`: null}>{carryCapacity}/200</span>,
  },
  {
    title: 'travelSpeed',
    key: 'travelSpeed',
    dataIndex: 'travelSpeed',

  },
  {
    title: 'miningSpeed',
    key: 'miningSpeed',
    dataIndex: 'miningSpeed'
  },
  {
    title: 'Position',
    key: 'position',
    render: (_, record) => <span>{parseInt(record.x)},{parseInt(record.y)}</span>,
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => <span>{statusMap[status]}</span>,
  }
];

const Miners = ({dataSource=[]}) => {
  
  const [activeHistoryOfMiner, setActiveHistoryOfMiner] = useState(null);

  const finalColums = columns.map(column => {
    if(column.title === 'Name'){
      return {
        ...column,
       render: (text, record) => <a className="miner-name" onClick={() => setActiveHistoryOfMiner(record)}>{text}</a>,

      }
    } else {
      return column
    }
  })

  return (
    <div className="miners">
     <Table 
     columns={finalColums} 
     dataSource={dataSource} 
     pagination={false}
     bordered
     />
     {
      activeHistoryOfMiner &&
      <MinerHistoryModal 
        showModal={!!activeHistoryOfMiner}
        setShowModal={setActiveHistoryOfMiner}
        miner={activeHistoryOfMiner}
      />
     }
    </div>
  )
}
export default Miners;
export {
  statusMap,
  columns
}