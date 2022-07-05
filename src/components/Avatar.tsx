import{ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css';
// Desestruturação nas propriedades. 
// Coloquei um objeto no lugar das propriedades, estou buscando as propriedades do "hasborder" e do "src", entao passei valores Default.

interface AvatarProps extends ImgHTMLAttributes<HTMLAreaElement> {
   hasBorder?: boolean;

}

export function Avatar ({hasBorder = true, src, alt}: AvatarProps){


    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src}
        alt={alt}
        />
    );
} 