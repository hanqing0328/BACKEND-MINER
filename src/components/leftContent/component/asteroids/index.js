import { Table } from 'antd';

const Asteroids = ({dataSource=[]}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Minerals',
      dataIndex: 'minerals',
      key: 'minerals',
      render: (minerals) => <span className={minerals === 0 ? `cell-red`: null}>{minerals}</span>,
    },
    {
      title: 'Current miner',
      dataIndex: 'currentMiner',
      key: 'currentMiner',
      render: (currentMiner) => <span>{!!currentMiner? currentMiner.name : '0'}</span>,
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      render: (position) => <span>{parseInt(position.x)},{parseInt(position.y)}</span>,
    }
  ];
  return (
    <div>
     <Table 
      columns={columns} 
      dataSource={dataSource} 
      pagination={false}
      bordered
      />
    </div>
  )
}
export default Asteroids;