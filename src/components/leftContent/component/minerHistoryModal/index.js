import { useEffect, useState } from 'react';
import { Modal, Table } from 'antd';
import { getMinerHistory } from '../../../../utils/requestList';
import { statusMap } from '../miners';
import './index.less';

const MinerHistoryModal = ({showModal, setShowModal, miner}) => {
  console.log('miner', miner)
  const [historyList, setHistoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMinerHistory(miner._id).then(res => {
      if(res){
        setHistoryList(res)
        setLoading(false)
      }
    })
  }, []);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Planet',
      dataIndex: 'planet',
      key: 'planet',
    },
    {
      title: 'carryCapacity',
      dataIndex: 'capacity',
      key: 'capacity',
      render: (capacity) => <span className={capacity.current === capacity.max ? `cell-active`: null}>{capacity.current}/{capacity.max}</span>,
    },
    {
      title: 'travelSpeed',
      key: 'speed',
      dataIndex: 'speed',
      render: (speed) => <span>{speed.travel}</span>,
    },
    {
      title: 'miningSpeed',
      key: 'speed',
      dataIndex: 'speed',
      render: (speed) => <span>{speed.mining}</span>,
    },
    {
      title: 'Position',
      key: 'position',
      dataIndex: 'position',
      render: (position) => <span>{parseInt(position.x)},{parseInt(position.y)}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => <span>{statusMap[status]}</span>,
    }
  ];



  return (
    <Modal
    open={showModal}
    onCancel={() => setShowModal(false)}
    footer={null}
    wrapClassName='miner-history-modal'
    >
      <div className='title'>History of {miner.name}</div>{
        loading?
        <i className='iconfont-loader'></i>:
        <Table 
          columns={columns} 
          dataSource={historyList} 
          // pagination={false}
          bordered
        />
      }
    </Modal>
  )
}

export default MinerHistoryModal;