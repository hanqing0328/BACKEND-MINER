import { BrowserRouter as Router, Routes, Route, Link, useLocation, redirect } from 'react-router-dom';
import classNames from 'classnames'
import Miners from './component/miners';
import Asteroids from './component/asteroids';
import Planets from './component/planets';
import './index.less';

const NavItem = ({itemName}) => {
      //assigning location variable
      const location = useLocation();

      //destructuring pathname from location
      const { pathname } = location;
  
      //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");
      const isActive = splitLocation[1] === itemName;
      const navItemClassName = classNames({
        'nav-link': true,
        active: isActive
      })
      const iconFontClassName = classNames({
        [`iconfont-${itemName}`]: true,
        'iconfont-active': isActive
      })

  return (
    <li key={itemName}>
      <Link 
      to={`/${itemName}`} 
      className={navItemClassName}
      > 
        <i className={iconFontClassName}></i>
        <span className='nav-text'>{itemName}</span> 
      </Link>
    </li>
  )
}

const navItemList = ['miners', 'asteroids', 'planets']

const LeftContent = ({dataSource}) => {

  return (
    <Router>
    <div className='left-content'>
      <ul className="nav">
       {
        navItemList.map(navItem => {
          return (<NavItem itemName={navItem}/>)
        })
       }
      </ul>
      <div className='slim-line'/>
      <Routes>     
          <Route path='/miners' element={<Miners dataSource={dataSource.miners}/>} />
          <Route path='/asteroids' element={<Asteroids dataSource={dataSource.asteroids}/>} />
          <Route path='/planets' element={<Planets dataSource={dataSource}/>} />
      </Routes>
    </div>
  </Router>
  )
}
export default LeftContent;