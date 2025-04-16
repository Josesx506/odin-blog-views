'use client';


import styles from '@/styles/navbar.module.css';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { accessToken, logout } = useAuth();

  const pathname = usePathname();

  const onSignout = async () => {
    await logout();
    setIsActive(false);
  }
  
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <div className="NavContainer">
      <header className={`${styles.navHeader}`}>
        <nav className={styles.navbar}>
          {/* logo */}
          <a href='/' className={styles.logo}>ØBlog</a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link  href='https://josesx506.github.io/Odin_Project_FS/' className={styles.navLink}>Odin</Link>
            </li>
            <li onClick={removeActive}>
              <Link href='/posts' className={`${styles.navLink} ${pathname==='/posts' ? styles.activeLink : ''}`}>Articles</Link>
            </li>
            <li onClick={removeActive}>
              <Link href='#' className={`${styles.navLink} ${pathname==='/about' ? styles.activeLink : ''}`}>About</Link>
            </li>
            {!accessToken ? (
              <>
                <li onClick={removeActive}>
                  <Link href='/signin' className={`${styles.navLink} ${pathname==='/signin' ? styles.activeLink : ''}`}>Sign In</Link>
                </li>
                <li onClick={removeActive}>
                  <Link href='/signup' className={`${styles.navLink} ${pathname==='/signup' ? styles.activeLink : ''}`}>Sign Up</Link>
                </li>
              </>
            ) : (
              <li onClick={onSignout}>
                <Link href='#' className={styles.navLink}>Logout</Link>
              </li>
            )}
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
