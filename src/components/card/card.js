import './card.css';
import testPic from '../../images/test-pic.jpg';

import { useNavigate } from 'react-router-dom';

function Card() {
    
    const navigate = useNavigate()
    const seeMore = () => {
        navigate('/pet1');
    };
    
    return (
        <div className='card' onClick={() => seeMore()}>
            <img src={testPic} />
            <div className='card-text'>
                <h4>Name</h4>
                <p>Breed | Age</p>
            </div>
        </div>
    )
}

export { Card };