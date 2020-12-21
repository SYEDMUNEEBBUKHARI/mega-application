import React,{useState,useEffect} from "react";
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
   
  } from '@ant-design/icons';
import { Drawer, Button, Radio, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./categorySide.css";
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
function CategoryDraw(){

    const[visible,setVisible]=useState(false);
    const[placement,setPlacement]=useState('left');
    const[siteLayout,setSiteLayout]=useState('.ant-space');

    const showDrawer = () => {
        setVisible(true);
    setCollapsedM(!collapsedCategory);
    
      };
    
     const onClose = () => {
        setVisible(false);
    setCollapsedM(!collapsedCategory);


      };
    const [collapsedCategory,setCollapsedM]=useState(false)

useEffect((
)=>{

let a=document.getElementsByClassName('ant-drawer-mask');
console.log("Mask",a)

},[siteLayout])
    
return(
<>
<Space >
<Header className={siteLayout} style={{ padding: 0 }}>
            {React.createElement(collapsedCategory ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: showDrawer,
            })}
          </Header>
          
        </Space>
        <Drawer
          title="Basic Drawer"
          placement={placement}
          closable={true}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
    <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub0" icon={<UserOutlined />} title="HOME">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="FEATURES">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="PAGES">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="CATEGORIES">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<UserOutlined />} title="ACCESSORIES">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<LaptopOutlined />} title="BLOG">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>
</>
);
}

export default CategoryDraw;