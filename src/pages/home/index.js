import './home.css';

import { Carousel } from "flowbite-react";
import { Footer } from '../../components/footer/footer';
import { Calendar } from '../../components/calendar/calendar';

import processPup from '../../images/dog-laying-in-grass.jpg';
import volunteerImg from '../../images/volunteer-with-pup.png';
import donateImg from '../../images/pup-doing-tricks.jpg';
import testPic from '../../images/test-pic.jpg';
import aboutImg from '../../images/pup-running.jpg';
import sunnyBear from '../../images/sunny-and-bear.png';

import React from 'react';

const Home = () => {
    
    return (
        <div className='home'>
            <div className='welcome'>
                <div className='welcome-text'>
                    <h2>Welcome</h2>
                    </div>
            </div>
            <div className='featured'>
                <h2>Featured Pets</h2>
                <div className='slide-content'>
                            <img src={sunnyBear} />
                            <div className='profile-text'>
                                <h3>Meet Sunny & Bear</h3>
                                <p className='story-content'>In 2020, Sunny, 2 years old, and Bear, 4 years old, came to us after their owner passed. They had been in a city shelter, but were proving more difficult to adopt out as a bonded pair. Luckily, we had an adopter in our pool who we thought would be a perfect match. Sunny and Bear joined their family, Marissa and Bailey, a few weeks later and fit perfectly into their routines.</p>
                                <p className='blurb'><span className='quote'>"</span>Bear is a riot, she always knows how to get someone’s attention, and Sunny is a perfect buddy to keep at my desk. Bear even likes to go paddle boarding with Bailey, and Sunny and I enjoy our naps together back at camp.<span className='profile quote'>"</span></p>
                            </div>
                        </div>
            </div>
            <div className='loop'>
                <div className='loop-inner'>
                    <div className='calendar'>
                        <Calendar />
                    </div>
                    <div className='events'>
                        <h3>Events</h3>
                        <p>Nothing is scheduled at this time.</p>
                    </div>
                </div>
            </div>
            <div className='slider'>
                <div className='slider-outer'>
                    <div className='slider-inner'>
                        <div className='slider-image'>
                            <img src={processPup} />
                        </div>
                        <div className='slider-image'>
                            <img src={donateImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={testPic} />
                        </div>
                        <div className='slider-image'>
                            <img src={aboutImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={volunteerImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={processPup} />
                        </div>
                        <div className='slider-image'>
                            <img src={donateImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={testPic} />
                        </div>
                        <div className='slider-image'>
                            <img src={aboutImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={volunteerImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={processPup} />
                        </div>
                        <div className='slider-image'>
                            <img src={donateImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={testPic} />
                        </div>
                        <div className='slider-image'>
                            <img src={aboutImg} />
                        </div>
                        <div className='slider-image'>
                            <img src={volunteerImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Home;