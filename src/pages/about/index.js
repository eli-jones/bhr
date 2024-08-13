import './about.css';
import aboutImg from '../../images/pup-running.jpg';
import pony from '../../images/pony.png';
import sunnyBear from '../../images/sunny-and-bear.png';
import peach from '../../images/peach.png';
import report from '../../assets/generic-charity-report.pdf';
import { Carousel } from "flowbite-react";
import React from 'react';

const About = () => {
    
    return (
        <div className="page-content">
            <div className="row">
                <img src={aboutImg} className='side-photo' />
                <div className="side-text">
                    <div className="about">
                        <h2>Our History</h2>
                        <p>Big Hearts Animal rescue was founded in 2018 by Jane Doe. It began as Jane and two others fostering and adopting out dogs, but has grown into a team of more than 35 foster families and a 12 dog facility caring for dogs and getting them ready for adoption.</p>
                        <p>We have placed more than 800 dogs, many of whom are senior pets or have medical needs. None of this would be possible without our foster families or our 80 volunteers.</p>
                        <p>We believe in complete transparency, so you can always come by our facility for a tour or check out our annual reports.</p>
                    </div>
                </div>
            </div>
            <div className="stories">
                <div className='carousel'>
                        <div className='slide-content'>
                            <img src={pony} />
                            <div className='profile-text'>
                            <h3>Meet Pony</h3>
                                <p className='story-content'>In 2019, Pony was an 8 year old chihuahua mix with epilepsy and allergies. We worked with our vet partner to figure out the best course of treatment to get Pony stable and healthy before looking at adopters. After a few months, Pony was spotted at her first adoption event by a special education teacher and found her forever home.</p>
                                <p className='blurb'><span className='quote'>"</span>Pony is perfect. We’ve found a really great treatment plan with our vet, so her allergies are well-managed and she almost never has seizures anymore. She actually really loves learning new tricks, so we’re teaching her how to skateboard right now!<span className='profile quote'>"</span></p>
                            </div>
                        </div>
                        <div className='slide-content'>
                            <img src={sunnyBear} />
                            <div className='profile-text'>
                                <h3>Meet Sunny & Bear</h3>
                                <p className='story-content'>In 2020, Sunny, 2 years old, and Bear, 4 years old, came to us after their owner passed. They had been in a city shelter, but were proving more difficult to adopt out as a bonded pair. Luckily, we had an adopter in our pool who we thought would be a perfect match. Sunny and Bear joined their family, Marissa and Bailey, a few weeks later and fit perfectly into their routines.</p>
                                <p className='blurb'><span className='quote'>"</span>Bear is a riot, she always knows how to get someone’s attention, and Sunny is a perfect buddy to keep at my desk. Bear even likes to go paddle boarding with Bailey, and Sunny and I enjoy our naps together back at camp.<span className='profile quote'>"</span></p>
                            </div>
                        </div>
                        <div className='slide-content'>
                            <img src={peach} />
                            <div className='profile-text'>
                                <h3>Meet Peach</h3>
                                <p className='story-content'>In 2023, Peach was found in a pet hoarding situation. She was nervous around people, but we could tell she had lots of love to give. We worked on improving her confidence and introducing her politely to new people, until she was ready to adopt a few months later. She found home with the Meyers, a family of four, and immediately loved having kiddos to give her attention to.</p>
                                <p className='blurb'><span className='quote'>"</span>We love Peach. She keeps our kids moving and really loves playing soccer with them. She gets braver all the time, and she now even likes when our kids have friends stay the night!<span className='profile quote'>"</span></p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="finances">
                <h2>Annual Report</h2>
                <iframe src={report} />
            </div>
        </div>
    )
    
};

export default About;