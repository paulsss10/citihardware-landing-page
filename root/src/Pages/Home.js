import React from 'react';
import '../Styles/Pages/Home.css';
import Banner from '../Components/Home.Components/Banner'
import { Shop_and_Go } from '../Components/Home.Components/OnlineTransactions';
import About_Us from '../Components/Home.Components/About_Us';

const Home = () => {
    return (
        <div className="home_container">
            <Banner />

            <div className="needs_padding">
                <About_Us />
                <Shop_and_Go />
            </div>
        </div>
    )
}

export default Home
