const ContactPage = props => {
    return(
        <div className="contact-content">
            <div className="contact-content__info">
                <a href="tel:380966172132" className="contact-content__info-phone">
                    +38 (096) 617 21 32
                </a>
                <div className="contact-content__info-name">
                    Виталий Ерёменко
                </div>
                <a href="mailto:crazypro92@ukr.net" className="contact-content__info-link">
                    crazypro92@ukr.net
                </a>
                <div className="contact-content__info-position">
                    JavaScript разработчик
                </div>
                <div className="contact-content__info-skills">
                    ES5, ES6, React
                </div>
            </div>
            <img src="https://www.bce.lu/wp-content/uploads/2018/03/Software_developper-Stock.jpg" alt="web star" className="contact-content__img"/>
        </div> 
    )
}

export default ContactPage;