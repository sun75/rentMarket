import { Button } from 'antd-mobile'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';

function App() {
  return (
    <Router>    
      <div className="App">
       新项目
        <br />
        <Button color='primary'>按钮</Button>
        <br />
        <ul>
          <li><Link to="/home">首页</Link> </li>
          <li><Link to="/citylist">城市列表</Link></li>
          <li><Link to="/home/news">首页新闻</Link></li> 
        </ul>
        <Routes>
          {/* 使用 /* 表示这个路由可以匹配子路由 */}
              <Route path="/home/*" element={<Home/>} />
            {/* <Route path="/home" element={<Home/>} /> */}
            <Route path="/citylist" element={<CityList/>} />  
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
