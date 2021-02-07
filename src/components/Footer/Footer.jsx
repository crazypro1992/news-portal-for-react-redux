import Logo from "../Header/Logo/Logo";

const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Logo
                    title={'Новостник'}
                />
                <p>Single Page Application</p>

            </div>
            <div className="footer__title">Дипломный проэкт</div>
            <div className="footer__description">
                <div className="footer__description-made-by">Made by</div>
                <div className="footer__description-name">{props.name}</div>
            </div>
        </footer>
    )
}

export default Footer;