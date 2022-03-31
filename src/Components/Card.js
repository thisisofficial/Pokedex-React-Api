import { Link } from 'react-router-dom';
import './styles.css';

export const Card = (props)=>{

    

    return(
        <Link to={{pathname:'/Pokemon', state:{pokemon: props.url}}}>
            <div className='button'>
                <p className='pokemon'>{props.name}</p>
            </div>
        </Link>
    )
}


