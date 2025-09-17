
import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);



    // Preserve existing scroll behavior for desktop while fixing event leak
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            // Keep original intent: mark as scrolled once user moves a bit
            setScrolled(prev => prev || isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} fixed w-full z-40 bg-black md:bg-transparent`}
        >
            <div className="inner flex items-center justify-between px-6 py-4 md:py-2">
                <a className="logo text-white font-semibold text-lg md:text-xl" href="#hero">
                    Sylvia Mwai
                </a>

                {/* Desktop navigation (unchanged behavior) */}
                <nav className="desktop hidden md:block">
                    <ul className="flex items-center gap-6">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link} className="text-white/90 hover:text-white transition">
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop contact button (unchanged) */}
                <a href="#contact" className="contact-btn group hidden md:inline-block">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>

                {/* Hamburger for small screens only */}
                <button
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white focus:outline-none"
                    onClick={() => setMenuOpen(o => !o)}
                >
                    {/* Icon: hamburger / X */}
                    {!menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile full-screen overlay menu with smooth transition */}

            <div
                id="mobile-menu"
                className={`fixed inset-0 z-[9999] bg-black text-white flex flex-col transition-transform duration-500 ease-in-out
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-auto`}
            >
                {/* Header inside menu */}
                <div className="flex justify-between items-center px-6 py-4">
                    <a href="#hero" onClick={closeMenu} className="text-lg font-semibold text-white">
                        Sylvia Mwai
                    </a>
                    <button onClick={closeMenu} className="w-10 h-10 text-white">
                        {/* X icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <nav className="mt-10 flex flex-col gap-6 px-6 text-3xl font-semibold `fixed inset-0 z-[9999] bg-black text-white transition-transform duration-500 ease-in-out
    ${menuOpen ? 'translate-x-0' : 'translate-x-full'} pointer-events-auto`">
                    {navLinks.map(({ link, name }) => (
                        <a key={name} href={link} onClick={closeMenu} className="hover:text-yellow-400">
                            {name}
                        </a>
                    ))}
                    <a href="#contact" onClick={closeMenu} className="mt-6 hover:text-yellow-400">
                        Contact me
                    </a>
                </nav>
            </div>

        </header>
    );
};

export default NavBar;