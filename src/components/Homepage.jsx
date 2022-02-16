import React from 'react';
import millify from 'millify';
import {Typography , Row , Col , Statistic} from 'antd';
import {Link} from 'react-router-dom';
import {
    Currencies,
    News,
  } from "../components";
import { useGetCryptosQuery } from '../services/cryptoApi';
const {Title} = Typography;
function Homepage() {
    const {data , isFetching} = useGetCryptosQuery(10);

    const globalStats = data?.data?.stats;
    console.log(data)
    if(isFetching) return 'Loading...';
    return (
        <>
        <Title level={2} className='heading'>Global Crypto Statistics</Title>
        <Row>
            <Col span={12}>
                <Statistic title='Total Cryptocurrencies' value={globalStats.total}></Statistic>
                <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}></Statistic>
                <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic>
                <Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}></Statistic>
                <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}></Statistic>
          
            </Col>
        </Row>
        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
            <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
        </div>
        <Currencies simplified></Currencies>
        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Latest Crypto news</Title>
            <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
        </div>
        <News></News>

        </>
    );
}

export default Homepage;