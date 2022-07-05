import styles from './Header.module.css'

import igniteLogo from '../assets/ignate-logo.svg'

export function Header (){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="LogoTipo do Ignate"/>
        </header>
    );
} 