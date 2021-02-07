import './../../App.scss'
import Logo from './Logo/Logo.jsx';

import MenuItem from './MenuItem/MenuItem';

const Header = () => {
    return (
        <header className="header"> 
            <Logo
                title={'Новостник'}
            />
            <div className="header__navigation">
                <nav>
                    <ul className="header__menu">
                        <MenuItem
                            link={'/'}
                            title={'Главная'}
                        />
                        <MenuItem
                            link={'/news'}
                            title={'Новости'}
                        />
                        <MenuItem
                            link={'/contacts'}
                            title={'Контакты'}
                        />                      
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;