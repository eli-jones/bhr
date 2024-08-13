import './help.css';
import volunteerImg from '../../images/volunteer-with-pup.png';
import donateImg from '../../images/pup-doing-tricks.jpg';
import React from 'react';

const Help = () => {
    
    return (
        <div className='page-content'>
            <div className='row-1'>
                <img className='side-photo' src={volunteerImg} />
                <div className='side-text'>
                    <div className='volunteer'>
                        <h2>Volunteer</h2>
                        <p>Big Hearts is always in need of people willing to play and walk with dogs, clean up around the facility, and help reach out to potential adopters.</p>
                        <p>Please fill out the application below, and we’ll be in contact with you if you meet some of our current needs.</p>
                        <button className='volunteer-button'>See Application</button>
                    </div>
                </div>
            </div>
            <div className='row-2'>
                <div className='side-text'>
                    <div className='donate'>
                    <h2>Donate</h2>
                        <p>Big Hearts is a 501(c)3 certified charitable organization, which means your donations, monetary or otherwise, are tax deductible, which makes giving a little easier.</p>
                        <p>All donations go to providing veterinary services, food, toys, supplies, microchips, and other care for the dogs.</p>
                        <p>If you want to know more about how your contributions are used, you can view our annual reports and 501(c)3 certification on our About page.</p>
                        <button className='donate-button'>Give</button>
                    </div>
                </div>
                <img className='side-photo' src={donateImg} />
            </div>
        </div>        
    )
    
};

export default Help;