'use client';

import { Fragment, startTransition, useEffect, useState } from 'react';
import {
  announcement,
  erpFeatures,
  footerColumns,
  headerNav,
  hearAboutOptions,
  heroBackgrounds,
  heroTabs,
  industryTabs,
  productCards,
  promoBanner,
  reviewIndustries,
  reviewLogos,
  reviewSlides,
  solutions,
  streamlineItems,
} from './data';
import { LottiePlayer } from './LottiePlayer';

function DossLogo({ className }) {
  return (
    <svg
      className={className}
      width="92"
      height="28"
      viewBox="0 0 92 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M40.6834 21.7946H31.0183C30.9961 21.7946 30.9961 21.7946 30.9961 21.7721V6.08401C30.9961 6.06152 30.9961 6.06152 31.0183 6.06152H40.6834C44.3358 6.06152 45.6944 7.99445 45.6944 11.3883V16.3555C45.6944 19.7718 44.3358 21.7946 40.6834 21.7946ZM35.0047 9.77005V18.0861H41.6413C41.6635 18.0861 41.6635 18.0861 41.6635 18.0636V9.79252C41.6635 9.77005 41.6635 9.77005 41.6413 9.77005H35.0047Z"
          fill="currentColor"
        />
        <path
          d="M58.6205 21.7946H50.0911C47.6416 21.7946 46.7285 20.7158 46.7285 18.3558V9.50035C46.7285 7.14036 47.6416 6.06152 50.0911 6.06152H58.643C61.0925 6.06152 61.9834 7.14036 61.9834 9.50035V18.3558C61.9834 20.7158 61.0703 21.7946 58.6205 21.7946ZM50.7816 18.0861H57.9525C57.9747 18.0861 57.9748 18.0861 57.9748 18.0636V9.79252C57.9748 9.77005 57.9747 9.77005 57.9525 9.77005H50.7816C50.7594 9.77005 50.7594 9.77005 50.7594 9.79252V18.0636C50.7594 18.0861 50.7594 18.0861 50.7816 18.0861Z"
          fill="currentColor"
        />
        <path
          d="M73.7308 21.7946H62.9075C62.8853 21.7946 62.8853 21.7946 62.8853 21.7721V18.1086C62.8853 18.0861 62.8853 18.0861 62.9075 18.0861H73.0181C73.0403 18.0861 73.0403 18.0861 73.0403 18.0636V15.7711C73.0403 15.7486 73.0403 15.7486 73.0181 15.7486H66.1812C63.7315 15.7486 62.8184 14.6698 62.8184 12.3098V9.54528C62.8184 7.18532 63.7759 6.06152 66.2704 6.06152H76.9375C76.96 6.06152 76.96 6.06152 76.96 6.08401V9.74756C76.96 9.77005 76.96 9.77005 76.9375 9.77005H66.8715C66.8492 9.77005 66.8492 9.77005 66.8492 9.79252V12.0176C66.8492 12.0401 66.8492 12.0401 66.8715 12.0401H73.7308C76.1581 12.0401 77.0712 13.0965 77.0712 15.4789V18.3558C77.0712 20.7158 76.1581 21.7946 73.7308 21.7946Z"
          fill="currentColor"
        />
        <path
          d="M88.6622 21.7946H77.8389C77.8167 21.7946 77.8167 21.7946 77.8167 21.7721V18.1086C77.8167 18.0861 77.8167 18.0861 77.8389 18.0861H87.9497C87.972 18.0861 87.972 18.0861 87.972 18.0636V15.7711C87.972 15.7486 87.972 15.7486 87.9497 15.7486H81.1126C78.6631 15.7486 77.75 14.6698 77.75 12.3098V9.54528C77.75 7.18532 78.7076 6.06152 81.2018 6.06152H91.8692C91.8914 6.06152 91.8914 6.06152 91.8914 6.08401V9.74756C91.8914 9.77005 91.8914 9.77005 91.8692 9.77005H81.8031C81.7809 9.77005 81.7809 9.77005 81.7809 9.79252V12.0176C81.7809 12.0401 81.7809 12.0401 81.8031 12.0401H88.6622C91.0897 12.0401 92.0028 13.0965 92.0028 15.4789V18.3558C92.0028 20.7158 91.0897 21.7946 88.6622 21.7946Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.95682C0 2.85932 0.0783196 2.78027 0.174931 2.78027H15.6056C15.7022 2.78027 15.7805 2.85932 15.7805 2.95682V9.15081H6.31222V18.7066H0.174931C0.0783196 18.7066 0 18.6276 0 18.53V2.95682Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.0872 24.9011C22.0872 24.9986 22.0089 25.0777 21.9123 25.0777H6.48157C6.38497 25.0777 6.30664 24.9986 6.30664 24.9011V18.7071H15.775V9.15137H21.9123C22.0089 9.15137 22.0872 9.23039 22.0872 9.32791V24.9011Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.293 0.292893C13.6835 -0.0976311 14.3165 -0.0976311 14.707 0.292893L23.4141 8.99992L14.707 17.707C14.3165 18.0975 13.6835 18.0975 13.293 17.707C12.9024 17.3164 12.9024 16.6834 13.293 16.2929L19.5859 9.99992H1.5C0.947715 9.99992 0.5 9.55221 0.5 8.99992C0.5 8.44764 0.947715 7.99992 1.5 7.99992H19.5859L13.293 1.70696C12.9024 1.31643 12.9024 0.683418 13.293 0.292893Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.6"
        d="M2.85858 3.35858L0.341421 0.841421C0.215428 0.715428 0.304662 0.5 0.482843 0.5H5.51716C5.69534 0.5 5.78457 0.715428 5.65858 0.841421L3.14142 3.35858C3.06332 3.43668 2.93668 3.43668 2.85858 3.35858Z"
        fill="white"
      />
    </svg>
  );
}

function DashedArrowLine() {
  return (
    <svg width="381" height="6" viewBox="0 0 381 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M374.833 2.6665C374.833 4.13926 376.027 5.33317 377.5 5.33317C378.973 5.33317 380.167 4.13926 380.167 2.6665C380.167 1.19374 378.973 -0.00016284 377.5 -0.00016284C376.027 -0.00016284 374.833 1.19374 374.833 2.6665ZM-19.5 2.6665V3.1665H-15.9554V2.6665V2.1665H-19.5V2.6665ZM-8.86607 2.6665V3.1665H-1.77679V2.6665V2.1665H-8.86607V2.6665ZM5.3125 2.6665V3.1665H12.4018V2.6665V2.1665H5.3125V2.6665ZM19.4911 2.6665V3.1665H26.5804V2.6665V2.1665H19.4911V2.6665ZM33.6696 2.6665V3.1665H40.7589V2.6665V2.1665H33.6696V2.6665ZM47.8482 2.6665V3.1665H54.9375V2.6665V2.1665H47.8482V2.6665ZM62.0268 2.6665V3.1665H69.1161V2.6665V2.1665H62.0268V2.6665ZM76.2054 2.6665V3.1665H83.2947V2.6665V2.1665H76.2054V2.6665ZM90.3839 2.6665V3.1665H97.4732V2.6665V2.1665H90.3839V2.6665ZM104.563 2.6665V3.1665H111.652V2.6665V2.1665H104.563V2.6665ZM118.741 2.6665V3.1665H125.83V2.6665V2.1665H118.741V2.6665ZM132.92 2.6665V3.1665H140.009V2.6665V2.1665H132.92V2.6665ZM147.098 2.6665V3.1665H154.187V2.6665V2.1665H147.098V2.6665ZM161.277 2.6665V3.1665H168.366V2.6665V2.1665H161.277V2.6665ZM175.455 2.6665V3.1665H182.545V2.6665V2.1665H175.455V2.6665ZM189.634 2.6665V3.1665H196.723V2.6665V2.1665H189.634V2.6665ZM203.812 2.6665V3.1665H210.902V2.6665V2.1665H203.812V2.6665ZM217.991 2.6665V3.1665H225.08V2.6665V2.1665H217.991V2.6665ZM232.17 2.6665V3.1665H239.259V2.6665V2.1665H232.17V2.6665ZM246.348 2.6665V3.1665H253.437V2.6665V2.1665H246.348V2.6665ZM260.527 2.6665V3.1665H267.616V2.6665V2.1665H260.527V2.6665ZM274.705 2.6665V3.1665H281.795V2.6665V2.1665H274.705V2.6665ZM288.884 2.6665V3.1665H295.973V2.6665V2.1665H288.884V2.6665ZM303.062 2.6665V3.1665H310.152V2.6665V2.1665H303.062V2.6665ZM317.241 2.6665V3.1665H324.33V2.6665V2.1665H317.241V2.6665ZM331.42 2.6665V3.1665H338.509V2.6665V2.1665H331.42V2.6665ZM345.598 2.6665V3.1665H352.688V2.6665V2.1665H345.598V2.6665ZM359.777 2.6665V3.1665H366.866V2.6665V2.1665H359.777V2.6665ZM373.955 2.6665V3.1665H377.5V2.6665V2.1665H373.955V2.6665Z"
        fill="#6C6161"
        fillOpacity="0.3"
      />
    </svg>
  );
}

function renderMultiline(text) {
  return text.split('\n').map((part, index) => (
    <span key={`${part}-${index}`}>
      {index > 0 ? <br /> : null}
      {part}
    </span>
  ));
}

function useResponsiveHeroBackground() {
  const [width, setWidth] = useState(1440);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('resize', update);
    };
  }, []);

  if (width <= 480) {
    return heroBackgrounds.mobile;
  }

  if (width <= 1024) {
    return heroBackgrounds.tablet;
  }

  return heroBackgrounds.desktop;
}

function Header({ onOpenContact, onDropdownChange }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    onDropdownChange(Boolean(activeDropdown));
  }, [activeDropdown, onDropdownChange]);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen);

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileOpen]);

  const dropdownItems = headerNav.filter((item) => item.dropdown);

  return (
    <>
      <header
        className={`header promo-banner-active${activeDropdown ? ' dropdown-open' : ''}`}
        id="header"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="promo-banner">
          <a href={promoBanner.href} className="promo-banner__link" aria-label="Open promo link">
            <div className="container">
              <p className="promo-banner__text desc-3 text-light">
                <span className="promo-banner__text-inner">{promoBanner.text}</span>
                <span className="promo-banner__link-icon">
                  <ArrowIcon />
                </span>
              </p>
            </div>
          </a>
        </div>
        <div className="container header-container">
          <div className="liners-wrapper" />
          <div className="header__left-section">
            <a className="header__logo link-reset" href="/">
              <DossLogo />
            </a>
            <nav className="header__nav tablet-hidden">
              <ul className="header__nav-list">
                {headerNav.map((item) => (
                  <li key={item.label}>
                    {item.dropdown ? (
                      <a
                        className="header__nav-item button button--transparent header__nav-item--dropdown"
                        data-dropdown-key={item.key}
                        onFocus={() => setActiveDropdown(item.key)}
                        onMouseEnter={() => setActiveDropdown(item.key)}
                      >
                        <span className="header__nav-text menu-sub-sm">{item.label}</span>
                        <span className="header__nav-dropdown-icon">
                          <ChevronIcon />
                        </span>
                      </a>
                    ) : (
                      <a href={item.href} className="header__nav-item button button--transparent">
                        <span className="header__nav-text menu-sub-sm">{item.label}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header__right-section">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://app.doss.com/auth/login"
              className="header__nav-item typo-nav-link button button--transparent tablet-hidden"
            >
              <span className="button-text">Sign in</span>
            </a>
            <button
              type="button"
              className="c-button c-button--sm c-button--light header__cta"
              onClick={onOpenContact}
            >
              <span className="c-button__text">Book a demo</span>
            </button>
            <button
              type="button"
              className="header__burger burger button c-button--light"
              aria-label="Open menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.5 4.90039C18.8314 4.90039 19.0996 5.16863 19.0996 5.5C19.0996 5.83137 18.8314 6.09961 18.5 6.09961H3C2.66863 6.09961 2.40039 5.83137 2.40039 5.5C2.40039 5.16863 2.66863 4.90039 3 4.90039H18.5Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M18.5 9.40039C18.8314 9.40039 19.0996 9.66863 19.0996 10C19.0996 10.3314 18.8314 10.5996 18.5 10.5996H3C2.66863 10.5996 2.40039 10.3314 2.40039 10C2.40039 9.66863 2.66863 9.40039 3 9.40039H18.5Z"
                  fill="#1E1E1E"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="line header__bottom-line"
          aria-hidden="true"
          data-mask="true"
          data-full-width="true"
          style={{
            '--alignment': 'undefined',
            '--direction': 'horizontal',
            '--position': 'absolute',
            '--variant': 'solid',
          }}
        />
        <ul className="header__dropdown-menu--wrapper">
          {dropdownItems.map((item) => (
            <li
              key={item.key}
              data-dropdown-menu={item.key}
              className={`header__dropdown-menu${activeDropdown === item.key ? ' active' : ''}`}
            >
              <div className="liners-wrapper" />
              <div className="header__dropdown-container container">
                <div className="header__dropdown-content">
                  <div className="header__dropdown-left-section">
                    <h2 className="header__dropdown-left-section-title menu-link text-gray-2">
                      {item.dropdown.title}
                    </h2>
                    <p className="header__dropdown-left-section-desc title-h6 text-light">
                      {item.dropdown.subtitle}
                    </p>
                  </div>
                  <ul className="header__dropdown-center-section">
                    {item.dropdown.groups.map((group) => (
                      <li key={group.title} className="header__dropdown-center--item">
                        <div className="header__dropdown-center--content">
                          <div className="header__dropdown-center--content-header">
                            <h3 className="header__dropdown-center--content-title menu-link text-gray-2">
                              {group.title}
                            </h3>
                          </div>
                          <ul className="header__dropdown-center--content-list">
                            {group.items.map((groupItem) => (
                              <li key={groupItem.label} className="header__dropdown-center--content-item">
                                <a
                                  href={groupItem.href}
                                  className="header__dropdown-center--content-link"
                                >
                                  <div>
                                    <div className="menu-link text-light">{groupItem.label}</div>
                                    {groupItem.description ? (
                                      <p className="header__dropdown-center--content-item-desc menu-sub-sm">
                                        {groupItem.description}
                                      </p>
                                    ) : null}
                                  </div>
                                  {groupItem.lottie ? (
                                    <LottiePlayer
                                      className="header__dropdown-center--content-item-lottie-container"
                                      path={groupItem.lottie}
                                    />
                                  ) : null}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="header__dropdown-bottom">
                  {item.dropdown.footerLinks.map((link) =>
                    link.href === '#' ? (
                      <button
                        key={link.label}
                        type="button"
                        className="header__dropdown-bottom-link menu-link link link--default link--white link--with-arrow"
                        onClick={onOpenContact}
                      >
                        {link.label}
                        <div className="arrow-wrapper">
                          <ArrowIcon />
                        </div>
                      </button>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="header__dropdown-bottom-social-link footer-link link link--default link--gray link--with-arrow"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        <span>{link.label}</span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </header>

      <div className={`mobile-menu${mobileOpen ? ' mobile-menu--open' : ''}`} id="mobile-menu">
        <div className="container">
          <div className="liners-wrapper" />
          <div className="mobile-menu__header">
            <div className="header__left-section">
              <a className="header__logo link-reset" href="/">
                <DossLogo />
              </a>
            </div>
            <button
              type="button"
              className="header__burger burger button c-button--light active"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className="c-button__text">Close</span>
            </button>
          </div>
          <div className="mobile-menu__body">
            {headerNav.map((item) => (
              <div key={item.label} className="mobile-menu__list">
                <h4 className="mobile-menu__list-title menu-sub-sm text-gray-2">{item.label}</h4>
                <ul className="mobile-menu__list-items">
                  {item.dropdown
                    ? item.dropdown.groups.flatMap((group) => group.items).map((groupItem) => (
                        <li key={groupItem.label} className="mobile-menu__list-item">
                          <a
                            href={groupItem.href}
                            className="mobile-menu__link"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="mobile-menu__link-content">
                              <span className="mobile-menu__link-text text-grey-1 menu-sub-sm">
                                {groupItem.label}
                              </span>
                            </div>
                            <ArrowIcon className="arrow" />
                          </a>
                        </li>
                      ))
                    : (
                      <li className="mobile-menu__list-item">
                        <a
                          href={item.href}
                          className="mobile-menu__link"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="mobile-menu__link-content">
                            <span className="mobile-menu__link-text text-grey-1 menu-sub-sm">
                              {item.label}
                            </span>
                          </div>
                          <ArrowIcon className="arrow" />
                        </a>
                      </li>
                    )}
                </ul>
              </div>
            ))}
          </div>
          <div className="mobile-menu__footer">
            <button
              type="button"
              className="c-button c-button--sm c-button--dark mobile-menu__footer-button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
            >
              <span className="c-button__text">Book a demo</span>
            </button>
            <a
              href="https://app.doss.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="c-button c-button--sm c-button--dark mobile-menu__footer-button"
            >
              <span className="c-button__text">Sign in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(heroTabs[0].id);
  const backgroundPath = useResponsiveHeroBackground();

  return (
    <section className="hero-section hero-section--with-promo-banner" id="homepage-hero">
      <LottiePlayer className="hero-section__lottie-background" path={backgroundPath} />
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__title title-h2 cms-content">
            DOSS Operations Cloud <br />
            is the ERP evolved
          </h1>
          <div className="hero__desc-group">
            <p className="hero__desc desc-2 cms-content">
              Our Adaptive Resource Platform (ARP) powers AI-native operations for real-world
              enterprises, unleashing the global value chain.
            </p>
            <button type="button" className="c-button c-button--lg c-button--light" onClick={onOpenContact}>
              <span className="c-button__text">Book a demo</span>
            </button>
          </div>
        </div>
        <div className="hero__tabs hero__tabs--dark">
          <div className="hero__bar-wrapper">
            <div
              className="line hero__tabbar-line-top"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
            <div className="hero__tabbar" id="hero-tabs" role="tablist" aria-live="polite">
              {heroTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`c-tab-link c-tab-link--dark${activeTab === tab.id ? ' c-tab-link--active' : ''}`}
                  data-tab={tab.id}
                  role="tab"
                  tabIndex={0}
                  onClick={() => startTransition(() => setActiveTab(tab.id))}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      startTransition(() => setActiveTab(tab.id));
                    }
                  }}
                >
                  <div className="c-tab-link__title">
                    <span>{tab.title}</span>
                    <span className="c-tab-link__subtitle">{tab.subtitle}</span>
                  </div>
                  <div className="c-tab-link__divider" />
                </div>
              ))}
            </div>
            <div
              className="line hero__tabbar-line-bottom"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
          </div>
          <div className="hero__tabcontent" id="hero-tabcontent">
            <div
              className="line hero__tabcontent-line-top"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
            {heroTabs.map((tab) => (
              <div key={tab.id} className="hero__preview" data-tabpanel={tab.id} hidden={activeTab !== tab.id}>
                <video
                  className="hero__preview-video"
                  src={tab.video}
                  autoPlay={activeTab === tab.id}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="hero__preview-overlay" />
              </div>
            ))}
            <div
              className="line hero__tabcontent-line-bottom"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ErpSection({ onOpenContact }) {
  return (
    <section className="erp-section" id="homepage-erp">
      <div className="container">
        <div className="erp">
          <div className="erp__heading">
            <h2 className="erp__title title-h2 cms-content">
              ERP is broken. To fix it, we created something completely new.
            </h2>
          </div>
          <div className="erp__features-wrapper">
            <div
              className="line erp__features-line"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
            {erpFeatures.map((feature, index) => (
              <div key={feature.title} className="erp__row">
                <div
                  className="line erp__features-line"
                  aria-hidden="true"
                  data-mask="true"
                  data-full-width="true"
                  style={{
                    '--alignment': 'undefined',
                    '--direction': 'horizontal',
                    '--position': 'absolute',
                    '--variant': 'dashed',
                  }}
                />
                <div
                  className="line erp__features-line-horizontal"
                  aria-hidden="true"
                  style={{
                    '--alignment': 'undefined',
                    '--direction': 'vertical',
                    '--position': 'absolute',
                    '--variant': 'dashed',
                  }}
                />
                <div className="erp__lead">
                  <img src={feature.icon} alt="" className="erp__icon" />
                  <div className="erp__lead-title title-h3 cms-content">{renderMultiline(feature.title)}</div>
                </div>
                <div
                  className="line erp__features-line-vertical"
                  aria-hidden="true"
                  style={{
                    '--alignment': 'undefined',
                    '--direction': 'horizontal',
                    '--position': 'relative',
                    '--variant': 'dashed',
                  }}
                />
                <div className="erp__desc">
                  <div className="erp__desc-main title-h6 cms-content">{feature.lead}</div>
                  <div className="erp__desc-sub desc-3 cms-content">{feature.copy}</div>
                </div>
                {index === erpFeatures.length - 1 ? null : null}
              </div>
            ))}
            <div
              className="line erp__features-line-bottom"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
          </div>
          <div className="erp__cta">
            <div className="erp__cta-text">
              <div className="erp__cta-title title-h2 cms-content">Upgrade your operations.</div>
              <div className="erp__cta-sub desc-1 cms-content">Fast to deploy. Easy to change. Built to scale.</div>
            </div>
            <button type="button" className="c-button c-button--lg c-button--dark" onClick={onOpenContact}>
              <span className="c-button__text">Book a demo</span>
            </button>
            <div
              className="line erp__cta-line"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      startTransition(() => {
        setActiveSlide((current) => (current + 1) % reviewSlides.length);
      });
    }, 5500);

    const wordTimer = window.setInterval(() => {
      startTransition(() => {
        setIndustryIndex((current) => (current + 1) % reviewIndustries.length);
      });
    }, 2200);

    return () => {
      window.clearInterval(slideTimer);
      window.clearInterval(wordTimer);
    };
  }, []);

  return (
    <section className="reviews-section" id="homepage-reviews">
      <div className="container">
        <div className="reviews">
          <div className="reviews__heading">
            <div
              className="line reviews__heading-line left"
              aria-hidden="true"
              data-point-right="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
            <div
              className="line reviews__heading-line right"
              aria-hidden="true"
              data-point-left="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
            <div className="reviews__title title-h1 cms-content">
              Trusted by <br />
              <span className="dynamic-industry">
                <span className="dynamic-industry__word">{reviewIndustries[industryIndex]}</span>
              </span>
              <br />
              leaders
            </div>
            <p className="reviews__desc desc-3 text-gray-1 cms-content">
              Our customers save time, grow margins, and expand faster - all without adding
              headcount.
            </p>
          </div>

          <div className="marquee-container">
            <div
              className="line"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'top',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'dashed',
              }}
            />
            <div className="marquee reviews-marquee marquee--light">
              <div className="marquee__logos marquee__logos_mobile-desktop" style={{ '--count': reviewLogos.length }}>
                {[...reviewLogos, ...reviewLogos].map((logo, index) => (
                  <div key={`${logo.id}-${index}`} className="marquee__item-wrapper">
                    <div className={`marquee__item logo logo--${logo.id}`} data-id={logo.id}>
                      <img src={logo.image} alt={logo.alt} className="logo logo--img" />
                    </div>
                    {index === reviewLogos.length * 2 - 1 ? null : (
                      <div
                        className="line marquee__item-mobile-line"
                        aria-hidden="true"
                        style={{
                          '--alignment': 'undefined',
                          '--direction': 'horizontal',
                          '--position': 'relative',
                          '--variant': 'dashed',
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reviews__slider" id="reviews-slider" data-autoplay="true" data-loop="true">
            <button
              className="reviews__nav reviews__nav--prev"
              aria-label="Previous"
              type="button"
              onClick={() =>
                startTransition(() =>
                  setActiveSlide((current) => (current - 1 + reviewSlides.length) % reviewSlides.length)
                )
              }
            >
              <div className="arrow-wrap">
                <ArrowIcon />
              </div>
            </button>
            <div className="reviews__viewport">
              <div
                className="reviews__track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {reviewSlides.map((slide, index) => (
                  <div key={slide.company} className="reviews__slide" data-index={index}>
                    <div className="reviews__frame">
                      <img className="reviews__image" src={slide.image} alt={`${slide.person} testimonial`} />
                      <div className="reviews__content">
                        <div className="reviews__quote-wrap">
                          <p className="reviews__quote title-h3">{slide.quote}</p>
                          <a
                            href={slide.cta}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="c-button c-button--sm c-button--gray reviews__cta"
                          >
                            <span className="c-button__text">View case study</span>
                          </a>
                        </div>
                        <div className="reviews__meta">
                          <div className="reviews__person">
                            <div className="reviews__name desc-3">{slide.company}</div>
                            <div className="reviews__role desc-3">{slide.person}</div>
                          </div>
                          <img className="reviews__avatar" src={slide.avatar} alt={slide.company} />
                        </div>
                      </div>
                    </div>
                    <div className="reviews__stats">
                      {slide.stats.map((stat) => (
                        <div key={stat.value} className="reviews__stat">
                          <div className="div-dash-h" />
                          <div className="reviews__stat-title title-h3">{stat.value}</div>
                          <div className="reviews__stat-text desc-3">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="reviews__nav reviews__nav--next"
              aria-label="Next"
              type="button"
              onClick={() =>
                startTransition(() =>
                  setActiveSlide((current) => (current + 1) % reviewSlides.length)
                )
              }
            >
              <div
                className="line reviews__nav-line"
                aria-hidden="true"
                style={{
                  '--alignment': 'left',
                  '--direction': 'vertical',
                  '--position': 'absolute',
                  '--variant': 'dashed',
                }}
              />
              <div className="arrow-wrap">
                <ArrowIcon />
              </div>
            </button>
            <div
              className="line reviews__slider-line center"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
            <div
              className="line reviews__slider-line top"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
            <div
              className="line reviews__slider-line bottom"
              aria-hidden="true"
              data-mask="true"
              data-full-width="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'absolute',
                '--variant': 'solid',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StreamlineSection() {
  return (
    <section className="streamline-operations-section" id="homepage-streamline-operations">
      <div className="container">
        <h2 className="title-h2 text-light-1 streamline-operations-section__title cms-content">
          Streamline your operations
        </h2>
        <div className="streamline-operations-section__cubes-wrapper">
          <img
            src="/assets/cube-small-GLb8LpJt.svg"
            alt=""
            width="35"
            height="40"
            className="streamline-operations-section__center-icon"
          />
          <div className="streamline-operations-section__center-line" />
          <div
            className="line streamline-operations-section__horizontal-line streamline-operations-section__horizontal-line--top"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'relative',
              '--variant': 'dashed',
            }}
          />
          <div
            className="line streamline-operations-section__horizontal-line streamline-operations-section__horizontal-line--bottom"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'dashed',
            }}
          />
          <div className="streamline-operations-section__list-wrapper">
            <div className="streamline-operations-section__lines-container">
              <div className="streamline-operations-section__line streamline-operations-section__line--left" />
              <div className="streamline-operations-section__line streamline-operations-section__line--right" />
            </div>
            <ol className="streamline-operations-section__list">
              {streamlineItems.map((item) => (
                <li key={item.number} className="streamline-operations-section__list-item">
                  <img
                    src="/assets/cube-D0orSpck.svg"
                    alt=""
                    width="152"
                    height="175"
                    className="streamline-operations-section__list-item-icon"
                  />
                  <div className="streamline-operations-section__list-item-content">
                    <div className="streamline-operations-section__list-item-number">{item.number}</div>
                    <div className="streamline-operations-section__list-item-text">{item.label}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="streamline-operations-section__text-content-wrapper">
          <h3 className="title-h3 text-light-1 streamline-operations-section__subtitle cms-content">
            Aggregate, automate, and analyze in one platform
          </h3>
          <div className="streamline-operations-section__text-wrapper">
            <div className="streamline-operations-section__text-container">
              <div className="text-light-1 title-h6 streamline-operations-section__text-title cms-content">
                Customize everything with a fast, composable design
              </div>
              <p className="text-gray-1 desc-3 cms-content">
                Legacy ERPs force-fit operations into rigid templates. DOSS was built from the
                ground up for AI to unlock true flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="products-section" id="homepage-products-section">
      <div className="container">
        <h2 className="title-h2 products-section__title cms-content" />
        <div className="scroll-tabs__wrapper">
          <nav className="scroll-tabs__nav">
            <ul className="scroll-tabs__nav-list">
              <div
                className="line"
                aria-hidden="true"
                data-mask="true"
                data-full-width="true"
                style={{
                  '--alignment': 'top',
                  '--direction': 'horizontal',
                  '--position': 'absolute',
                  '--variant': 'dashed',
                }}
              />
              {productCards.map((product) => (
                <li key={product.id} className="scroll-tabs__nav-item">
                  <a className="scroll-tabs__nav-link" data-target={product.id} href={`#${product.id}`}>
                    <div className="scroll-tabs__nav-link-text title-h5">{product.navLabel}</div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="scroll-tabs__content">
            {productCards.map((product) => (
              <div key={product.id} className="product" id={product.id}>
                <div
                  className="line"
                  aria-hidden="true"
                  data-mask="true"
                  style={{
                    '--alignment': 'top',
                    '--direction': 'horizontal',
                    '--position': 'absolute',
                    '--variant': 'dashed',
                  }}
                />
                <div className="product__text-content">
                  <div className="nav-title">
                    <h3 className="title-h5 text-light">{product.navLabel}</h3>
                    <div className="nav-title-bg" />
                  </div>
                  <div className="product__text-content-inner">
                    <h3 className="title-h3 text-light product__title">{product.title}</h3>
                    <p className="desc-3 text-gray-1 product__description">{product.description}</p>
                  </div>
                  <a href={product.href} className="product__link button-sm c-button c-button--sm c-button--dark-border">
                    <span className="c-button__text">{product.cta}</span>
                  </a>
                </div>
                <div className="product__video-wrapper">
                  <LottiePlayer className="product__video__lottie" path={product.lottie} />
                </div>
              </div>
            ))}
          </div>
          <div
            className="line"
            aria-hidden="true"
            style={{
              '--alignment': 'bottom',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'dashed',
            }}
          />
        </div>
      </div>
    </section>
  );
}

function BlackCtaSection({ onOpenContact }) {
  return (
    <section className="erp-cta-section" id="black-cta-section">
      <div
        className="line erp-cta-section__line top"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'dashed',
        }}
      />
      <div className="container">
        <div className="erp-cta-section__content">
          <h2 className="title-h2 text-light-1 erp-cta-section__title cms-content">
            Upgrade your operations.
          </h2>
          <div className="desc-3 text-gray-1 erp-cta-section__subtitle cms-content">
            Fast to deploy. Easy to change. Built to scale.
          </div>
          <button
            type="button"
            className="c-button c-button--lg c-button--light erp-cta-section__link"
            onClick={onOpenContact}
          >
            <span className="c-button__text">Book a demo</span>
          </button>
        </div>
        <picture>
          <source srcSet="/assets/erp-cta-mobile-bg-CsApxeCi.svg" media="(max-width: 480px)" />
          <source srcSet="/assets/erp-cta-tablet-bg-y9cMrBl7.svg" media="(max-width: 1024px)" />
          <source srcSet="/assets/erp-cta-bg-C74l2sJe.svg" media="(min-width: 1025px)" />
          <img src="/assets/erp-cta-bg-C74l2sJe.svg" className="erp-cta-section__background" alt="" />
        </picture>
      </div>
      <div
        className="line erp-cta-section__line bottom"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'dashed',
        }}
      />
    </section>
  );
}

function SolutionsSection({ onOpenContact }) {
  return (
    <section className="solutions-section" id="solutions-section">
      <div
        className="line solutions-section__line-top"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'relative',
          '--variant': 'dashed',
        }}
      />
      <div className="container">
        <div className="solutions-section__top-content solutions-section__top-content_with-title">
          <div className="solutions-section__title-container">
            <h2 className="title-h2 solutions-section__title cms-content">
              Modules for every <br />
              business function
            </h2>
          </div>
        </div>
        <div className="solutions-section__items-wrapper">
          <div
            className="line solutions-section__line solutions-section__line--top-solid"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'solid',
            }}
          />
          <div
            className="line solutions-section__line solutions-section__line--top-dashed"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'dashed',
            }}
          />
          <div className="solutions-section__items">
            <ul className="solutions-section__cards">
              {solutions.map((solution) => (
                <li key={solution.label} className="solutions-section__cards-item">
                  <div className="solutions-section__cards-item-wrapper">
                    <a href={solution.href} className="solutions-section__cards-item-link">
                      <img
                        src={solution.icon}
                        alt=""
                        loading="lazy"
                        width="60"
                        height="60"
                        className="solutions-section__cards-item-icon"
                      />
                      <div className="title-h5 solutions-section__cards-item-title cms-content">
                        {solution.label}
                      </div>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="solutions-section__cta">
              <div className="solutions-section__cta-row">
                <div className="title-h5 solutions-section__cta-title">Looking for something else?</div>
                <img
                  src="/assets/package-small-u_-sCkjy.svg"
                  alt=""
                  loading="lazy"
                  width="32"
                  height="32"
                  className="solutions-section__cta-icon"
                />
              </div>
              <div className="solutions-section__cta-row">
                <div className="desc-3 text-gray-1 solutions-section__cta-subtitle">
                  Let us know and we&apos;ll build it for you.
                </div>
                <button type="button" className="c-button c-button--lg c-button--gray" onClick={onOpenContact}>
                  <span className="c-button__text">Book a demo</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="line solutions-section__line solutions-section__line--bottom"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'dashed',
            }}
          />
        </div>
      </div>
    </section>
  );
}

function IndustrySection() {
  const [activeTab, setActiveTab] = useState(industryTabs[0].id);

  return (
    <section className="industry-section" id="homepage-industry">
      <div
        className="line industry-section__line-top-solid"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'solid',
        }}
      />
      <div className="industry-section__line--container">
        <DashedArrowLine />
        <DashedArrowLine />
      </div>
      <div className="industry-container container">
        <div className="industry-header">
          <h2 className="industry-title title-h1 cms-content">
            Industry-focused <br />
            efficiency without limits
          </h2>
          <p className="industry-subtitle desc-3">
            Composable by design, DOSS adapts to the unique challenges of each sector. Simplify
            operational complexity with fast, flexible solutions built for ROI at scale.
          </p>
        </div>
        <div className="industry-content">
          <div className="hero__tabs hero__tabs--light">
            <div className="hero__bar-wrapper">
              <div
                className="line hero__tabbar-line-top"
                aria-hidden="true"
                data-mask="true"
                data-full-width="true"
                style={{
                  '--alignment': 'undefined',
                  '--direction': 'horizontal',
                  '--position': 'absolute',
                  '--variant': 'dashed',
                }}
              />
              <div className="hero__tabbar" role="tablist" aria-live="polite">
                {industryTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`c-tab-link c-tab-link--light${activeTab === tab.id ? ' c-tab-link--active' : ''}`}
                    data-tab={tab.id}
                    role="tab"
                    tabIndex={0}
                    onClick={() => startTransition(() => setActiveTab(tab.id))}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        startTransition(() => setActiveTab(tab.id));
                      }
                    }}
                  >
                    <div className="c-tab-link__title">
                      <span>{tab.label}</span>
                    </div>
                    <div className="c-tab-link__divider" />
                  </div>
                ))}
              </div>
              <div
                className="line hero__tabbar-line-bottom"
                aria-hidden="true"
                data-mask="true"
                data-full-width="true"
                style={{
                  '--alignment': 'undefined',
                  '--direction': 'horizontal',
                  '--position': 'absolute',
                  '--variant': 'solid',
                }}
              />
            </div>
            <div className="hero__tabcontent">
              <div
                className="line hero__tabcontent-line-top"
                aria-hidden="true"
                data-mask="true"
                data-full-width="true"
                style={{
                  '--alignment': 'undefined',
                  '--direction': 'horizontal',
                  '--position': 'absolute',
                  '--variant': 'dashed',
                }}
              />
              {industryTabs.map((tab) => (
                <div key={tab.id} className="hero__preview" data-tabpanel={tab.id} hidden={activeTab !== tab.id}>
                  <LottiePlayer className="hero__preview-lottie" path={tab.lottie} />
                  <div className="hero__preview-overlay" />
                </div>
              ))}
              <div
                className="line hero__tabcontent-line-bottom"
                aria-hidden="true"
                data-mask="true"
                data-full-width="true"
                style={{
                  '--alignment': 'undefined',
                  '--direction': 'horizontal',
                  '--position': 'absolute',
                  '--variant': 'dashed',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection({ onOpenContact }) {
  return (
    <section className="cta-section light" id="cta-section">
      <div
        className="line cta-section__line-top"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'solid',
        }}
      />
      <div className="container">
        <div className="cta-section__visuals">
          <picture>
            <source srcSet="/assets/img/cta-visual--left-BjLrJ5CH.jpg" media="(min-width: 1025px)" />
            <img src="/assets/img/cta-visual--left-BjLrJ5CH.jpg" className="cta-section__rail cta-section__rail--left" alt="" />
          </picture>
          <picture>
            <source srcSet="/assets/img/cta-visual--right-CzfOf8mZ.jpg" media="(min-width: 1025px)" />
            <img src="/assets/img/cta-visual--right-CzfOf8mZ.jpg" className="cta-section__rail cta-section__rail--right" alt="" />
          </picture>
          <picture>
            <source srcSet="/assets/img/cta-visual--center_mobile-UQZvUNGx.png" media="(max-width: 480px)" />
            <source srcSet="/assets/img/cta-visual--center-BUbt42Wy.png" media="(max-width: 1024px)" />
            <img src="/assets/img/cta-visual--center-BUbt42Wy.png" className="cta-section__rail cta-section__rail--center" alt="" />
          </picture>
        </div>
        <div className="cta-section__content">
          <div className="cta-section__text-container">
            <h2 className="cta-section__title title-h2 cms-content">Upgrade your ERP now.</h2>
            <div className="cta-section__arrow-container">
              <svg width="6" height="60" viewBox="0 0 6 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.220052 2.6665C0.220052 4.13926 1.41396 5.33317 2.88672 5.33317C4.35948 5.33317 5.55339 4.13926 5.55339 2.6665C5.55339 1.19374 4.35948 -0.00016284 2.88672 -0.00016284C1.41396 -0.00016284 0.220052 1.19374 0.220052 2.6665ZM2.88672 59.6665L5.77347 54.6665H-3.26633e-05L2.88672 59.6665ZM2.88672 2.6665H2.38672V55.1665H2.88672H3.38672V2.6665H2.88672Z"
                  fill="#969593"
                />
              </svg>
            </div>
            <p className="cta-section__desc desc-3 text-gray-1 cms-content">
              Fast to deploy. Easy to change. Built to scale.
            </p>
          </div>
          <button type="button" className="c-button c-button--lg c-button--dark" onClick={onOpenContact}>
            <span className="c-button__text">Book a demo</span>
          </button>
        </div>
      </div>
      <div
        className="line cta-section__line-bottom dashed"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'dashed',
        }}
      />
      <div
        className="line cta-section__line-bottom solid"
        aria-hidden="true"
        data-mask="true"
        data-full-width="true"
        style={{
          '--alignment': 'undefined',
          '--direction': 'horizontal',
          '--position': 'absolute',
          '--variant': 'solid',
        }}
      />
    </section>
  );
}

function Footer({ onOpenContact }) {
  const topColumns = footerColumns.slice(0, 3);
  const bottomColumns = footerColumns.slice(3);

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__left-block">
            <a className="footer__logo-icon link-reset" href="/">
              <DossLogo />
            </a>
            <div className="footer__logo-dash" aria-hidden="true" />
            <div className="footer__newsletter">
              <div className="footer__newsletter-content">
                <div className="footer__newsletter-title desc-3 text-light">Sign up to learn more</div>
                <div className="footer__newsletter-text desc-3 text-gray-1">
                  Discover how DOSS can help transform and unleash your operations today with more
                  details delivered right to your inbox.
                </div>
              </div>
              <div className="footer__newsletter-form form-wrapper">
                <button
                  type="button"
                  className="c-button c-button--sm c-button--dark-border"
                  onClick={onOpenContact}
                >
                  <span className="c-button__text">Get started</span>
                </button>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <div className="footer__content-row">
              {topColumns.map((column, columnIndex) => (
                <Fragment key={column.title}>
                  <div className="footer__content-section">
                    <div className="footer__title footer-label text-light">{column.title}</div>
                    <div className="footer__list">
                      {column.links.map((link) => (
                        <div key={link.label} className="footer__item">
                          <a href={link.href} className="footer__link typo-footer-link link link--default link--gray">
                            {link.label}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  {columnIndex === topColumns.length - 1 ? null : (
                    <div
                      className="line footer__content-column-line"
                      aria-hidden="true"
                      style={{
                        '--alignment': 'undefined',
                        '--direction': 'vertical',
                        '--position': 'relative',
                        '--variant': 'dashed',
                      }}
                    />
                  )}
                </Fragment>
              ))}
            </div>
            <div
              className="line footer__content-row-line"
              aria-hidden="true"
              style={{
                '--alignment': 'undefined',
                '--direction': 'horizontal',
                '--position': 'relative',
                '--variant': 'dashed',
              }}
            />
            <div className="footer__content-row">
              {bottomColumns.map((column, columnIndex) => (
                <Fragment key={column.title}>
                  <div className="footer__content-section">
                    <div className="footer__title footer-label text-light">{column.title}</div>
                    <div className="footer__list">
                      {column.links.map((link) => (
                        <div key={link.label} className="footer__item">
                          <a href={link.href} className="footer__link typo-footer-link link link--default link--gray">
                            {link.label}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  {columnIndex === bottomColumns.length - 1 ? null : (
                    <div
                      className="line footer__content-column-line"
                      aria-hidden="true"
                      style={{
                        '--alignment': 'undefined',
                        '--direction': 'vertical',
                        '--position': 'relative',
                        '--variant': 'dashed',
                      }}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div
            className="line footer__bottom-line--top"
            aria-hidden="true"
            data-mask="true"
            data-full-width="true"
            style={{
              '--alignment': 'undefined',
              '--direction': 'horizontal',
              '--position': 'absolute',
              '--variant': 'solid',
            }}
          />
          <div className="footer__legal">
            <div className="footer__copyright footer-sub text-gray-1">
              &copy; DOSS 2026, All Rights Reserved
            </div>
            <a
              href="https://www.doss.com/legal/privacy-policy"
              className="footer__legal-link footer-sub text-gray-1 link link--default link--gray"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.doss.com/legal/gifting-policy"
              className="footer__legal-link footer-sub text-gray-1 link link--default link--gray"
            >
              Gifting Policy
            </a>
          </div>
          <div className="footer__email-row">
            <a
              href="mailto:support@doss.com"
              className="footer__email footer-sub link link--default link--gray"
            >
              support@doss.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  return (
    <div
      id="ContactForm"
      className={`c-modal${open ? ' c-modal--open' : ''}`}
      data-close-on-overlay="true"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="c-modal__overlay" data-modal-overlay onClick={onClose} />
      <div className="c-modal__container">
        <div className="c-modal__content">
          <div className="c-contact-form">
            <div className="c-contact-form__header">
              <h2 className="c-contact-form__title">Talk with our sales team</h2>
              <button type="button" className="c-contact-form__close" onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            {submitted ? (
              <div className="c-contact-form__success-screen" data-success-screen>
                <p className="c-contact-form__success-message">
                  Thank you! We&apos;ve received your information. Our sales team will contact you
                  shortly.
                </p>
              </div>
            ) : (
              <form
                className="c-contact-form__form"
                data-contact-form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="c-contact-form__fields">
                  <div className="c-contact-form__row">
                    <div className="c-contact-form__field">
                      <input type="text" className="c-contact-form__input" required placeholder="First name*" />
                    </div>
                    <div className="c-contact-form__field">
                      <input type="text" className="c-contact-form__input" required placeholder="Last name*" />
                    </div>
                  </div>
                  <div className="c-contact-form__row">
                    <div className="c-contact-form__field">
                      <input type="tel" className="c-contact-form__input" required placeholder="Phone number*" />
                    </div>
                    <div className="c-contact-form__field">
                      <input type="email" className="c-contact-form__input" required placeholder="Email address*" />
                    </div>
                  </div>
                  <div className="c-contact-form__field c-contact-form__field--full">
                    <input type="text" className="c-contact-form__input" required placeholder="Company name*" />
                  </div>
                  <div className="c-contact-form__field c-contact-form__field--full">
                    <input type="text" className="c-contact-form__input" required placeholder="Additional Context*" />
                  </div>
                  <div className="c-contact-form__field c-contact-form__field--full">
                    <select className="c-contact-form__input c-contact-form__select" required defaultValue="">
                      <option value="" disabled>
                        How did you hear about DOSS?*
                      </option>
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="c-contact-form__actions">
                  <button type="submit" className="c-contact-form__submit">
                    <span className="text c-contact-form__submit-text">Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementModal({ open, onClose }) {
  return (
    <div
      id="home-announcement-modal"
      className={`c-modal c-home-announcement-modal${open ? ' c-modal--open' : ''}`}
      data-close-on-overlay="true"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="c-modal__overlay" data-modal-overlay onClick={onClose} />
      <div className="c-modal__container">
        <div className="c-modal__content">
          <button className="c-modal__close" type="button" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="c-home-announcement">
            <div className="c-home-announcement__left">
              <div className="c-home-announcement__left-bg" aria-hidden="true">
                <LottiePlayer
                  className="c-home-announcement__lottie c-home-announcement__media--mobile"
                  path={announcement.mobileLottie}
                />
              </div>
              <div className="c-home-announcement__left-content">
                <div className="c-home-announcement__header">
                  <a className="c-home-announcement__logo link-reset" href="/" aria-label="Home">
                    <DossLogo />
                  </a>
                </div>
                <div className="c-home-announcement__text-block">
                  <p className="c-home-announcement__subtitle title-h6">{announcement.subtitle}</p>
                  <p className="c-home-announcement__amount title-h1">{announcement.amount}</p>
                </div>
                <div className="c-home-announcement__footer">
                  <p className="c-home-announcement__description desc-4">{announcement.description}</p>
                  <a href={announcement.href} className="c-button c-button--sm c-button--blue">
                    <span className="c-button__text">Read more</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="c-home-announcement__right">
              <LottiePlayer
                className="c-home-announcement__lottie c-home-announcement__media--desktop"
                path={announcement.desktopLottie}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [announcementOpen, setAnnouncementOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modal-active', contactOpen || announcementOpen);

    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [announcementOpen, contactOpen]);

  useEffect(() => {
    document.body.classList.add('debug-hero');

    return () => {
      document.body.classList.remove('debug-hero');
    };
  }, []);

  const closeAnnouncement = () => {
    setAnnouncementOpen(false);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('home-announcement-seen', '1');
    }
  };

  return (
    <div className="page-shell">
      <div className="liners-wrapper" />
      <Header
        onOpenContact={() => setContactOpen(true)}
        onDropdownChange={setDropdownOpen}
      />
      <main id="home" data-page-id="home" className={dropdownOpen ? 'dropdown-open' : ''}>
        <HeroSection onOpenContact={() => setContactOpen(true)} />
        <ErpSection onOpenContact={() => setContactOpen(true)} />
        <ReviewsSection />
        <StreamlineSection />
        <ProductsSection />
        <BlackCtaSection onOpenContact={() => setContactOpen(true)} />
        <SolutionsSection onOpenContact={() => setContactOpen(true)} />
        <IndustrySection />
        <FinalCtaSection onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer onOpenContact={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <AnnouncementModal open={announcementOpen} onClose={closeAnnouncement} />
    </div>
  );
}
