import React from 'react';
import {Button , Menu , Typography , Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined , MoneyCollectOutlined , BulbOutlined , FundOutlined , MenuOutlined} from '@ant-design/icons';
import DisplayAnimation from '../animation/DisplayAnimation';
import avatar from '../animation/avatar.json';

function Navbar() {
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
                {/* <Button className='menu-control-container'></Button> */}

            </div>
            <Menu theme='dark'>
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
            </Menu>
            
        </div>
    );
}

export default Navbar;