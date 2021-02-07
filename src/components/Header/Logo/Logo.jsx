import {NavLink} from 'react-router-dom';

const Logo = props => {
    return (
        <div className="logo">
            <NavLink to={'/'} exact>{props.title}</NavLink>
        </div>
    )
}

export default Logo;