import { Route, Routes} from "react-router-dom";
import News from "../News";
import { Badge, TabBar, Card } from 'antd-mobile'
import {
  AppOutline,
  
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

const Home = () =>  {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'message',
      title: '消息',
      icon: <MessageFill/>,
      badge: '99+',
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div>
            ++++++++home+++++++
                <div>
        <Card title='基础用法' padding='0'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </Card>
                </div>
                <Routes>   
                    {/* 渲染子路由 */}
                    <Route path="/news" element={<News/>}/>   
                </Routes>
                        
        </div>
  )
}

    
      

export default Home;