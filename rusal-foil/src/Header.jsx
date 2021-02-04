import rusalLogo from './images/rusalLogo.svg'
import allowLogo from './images/allow.svg'
import './Header.css'

function Header() {
    return (
        <section className="header">
            <img src={rusalLogo} alt="Логотип Русал" className="header__logo" />
            <img src={allowLogo} alt="Логотип Allow" className="header__allowLogo" />
            <div className="header__btn-container">
                <button className="header__turnOffAnimation">Выключить анимацию</button>
                <button className="header__languageChange">en</button>
                <button className="header__privateZone">Личный кабинет</button>
            </div>
        </section>
    )
}

export default Header