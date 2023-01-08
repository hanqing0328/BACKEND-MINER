import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Header from '../header';
import LeftContent from '../leftContent';
import RightContent from '../rightContent';
import './index.less';

const App = () => {

  const [dataSource, setDataSource] = useState({})

  // connect to websocket
  useEffect(() => {
    var socket = io('https://asteroids.dev.mediasia.cn',{
      transports: ["polling"],
  });
    socket.on('connect', function(){
      console.log('connect success', socket.connected);
      
    });
    socket.on('tick', function(msg) {
      setDataSource(msg)
    });
  }, [])

  return (
    <div className='backend-miner'>
      <Header />
      <div className='content'>
        <LeftContent dataSource={dataSource}/>
        <RightContent dataSource={dataSource}/>
      </div>
    </div>
  )
}

export default App;