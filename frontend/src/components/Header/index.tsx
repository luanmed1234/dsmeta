import imagem from '../../assets/img/image-1.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={imagem} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/luanmede"> @luanmede</a>
                </p>
            </div>
        </header>
    )
}

export default Header
