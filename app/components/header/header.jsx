import React from 'react';
import styles from './Header.module.css'; // Archivo de estilos CSS módulo
import logoImage from '@/public/logo-croissant.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logoImage} alt="Logo" priority={true} />
      <div className={styles.sections}>
        <div className={styles.section}>Menu</div>
        <div className={styles.section}>Sucursales</div>
        <div className={styles.section}>Franquicias</div>
        <div className={styles.section}>Contacto</div>
      </div>
    </header>
  );
};

export default Header;