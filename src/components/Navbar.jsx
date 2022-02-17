import React , { useState, useEffect } from 'react';
import {Button , Menu , Typography , Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined , MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined} from '@ant-design/icons';
import DisplayAnimation from '../animation/DisplayAnimation';
import avatar from '../animation/avatar.json';

function Navbar() {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      useEffect(() => {
        if (screenSize <= 800) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [screenSize]);
    return (
        <div className='nav-container'>
            <div className='logo-container'>
            
                {/* <Avatar src={icon} size="large"></Avatar> */}
                {/* <DisplayAnimation
                  animation={avatar}
                  animationName={"avatar"}
                ></DisplayAnimation> */}
                <Typography.Title level={2} className='logo'>
                    <Link to="/">InstanceCrypto</Link>
                </Typography.Title>
                { <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined></MenuOutlined></Button> }

            </div>
            {activeMenu && (<Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined></HomeOutlined>}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined></FundOutlined>}>
                    <Link to='/cryptocurrencies'>Currencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined></MoneyCollectOutlined>}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined></BulbOutlined>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>)}
            
            
        </div>
    );
}

export default Navbar;