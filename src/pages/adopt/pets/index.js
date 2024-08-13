import './available.css';
import aapLogo from '../../../images/adoptapet.png'
import { Cards } from '../../../components/cards/cards';
import React from 'react';

const Available = () => {
    
    return (
        <div className='pet-page'>
            <div className='content'>
                <h2>Available Pets</h2>
                <div className='filters'>
                </div>
                <Cards />
                <div className='aap'>
                    <p>Powered by</p>
                    <a href='https://www.adoptapet.com/' target='_blank'><img src={aapLogo} /></a>
                </div>
            </div>
        </div>
    )
    
};

export default Available;