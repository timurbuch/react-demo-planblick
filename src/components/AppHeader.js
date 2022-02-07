import React, { useState, useEffect } from 'react';

import './AppHeader.css';

export const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  /*const toggleMenu = setShowMenu(!showMenu);
  useEffect(() => {
    toggleMenu(!showMenu);
  }, [])*/

  return (
    <div>
      <div className="az-header">
        <div className="container">
          <div className="az-header-left">
            <a href="index.html" className="az-logo">
              <img
                className="az-logo"
                src="https://testblick.de/style-global/img/serviceblick_logo.gif"
                alt="Serviceblick logo"
              />
            </a>
            <a
              href="/"
              id="azMenuShow"
              className="az-header-menu-icon d-lg-none"
            >
              <span></span>
            </a>
            <span className="nav-link text-dark tx-20">Dashboard</span>
          </div>
          <div className="az-header-menu">
            <div className="az-header-menu-header">
              <a href="index.html" className="az-logo">
                <img
                  className="az-logo"
                  src="/style-global/img/serviceblick_logo.gif"
                  alt="Serviceblick"
                />
              </a>
              <a href="/" className="close">
                ×
              </a>
            </div>
            {/* az-header-menu-header */}
            <ul className="nav">
              {/* if there are no links here, then comment out azMenuShow so that
              empty menu is not shown in mobile view" */}
            </ul>
          </div>
          {/* az-header-menu */}
          <div className="az-header-right">
            <div
              className="dropdown az-header-notification mg-0"
              id="system_message"
            >
              <a
                href="#"
                data-toggle="modal"
                data-target="#news_modal"
                id="news_bell"
                className="active"
              >
                <i
                  className="icon ion-ios-information-circle-outline"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="News und Info"
                ></i>
              </a>
            </div>
            {/* logout as single button */}
            {/* snippet start header-apps-menu */}
            <div
              className={
                'dropdown az-header-notification' + (showMenu ? 'show' : '')
              }
            >
              <a
                href="/"
                data-toggle="tooltip"
                title=""
                data-original-title="Mein Apps"
              >
                <i
                  className="icon ion-ios-keypad tx-gray-700"
                  /*onClick={toggleMenu}*/
                ></i>
              </a>
              <div className="dropdown-menu">
                <div className="az-dropdown-header d-sm-none">
                  <a href="" className="az-header-arrow">
                    <i className="icon ion-md-arrow-back"></i>
                  </a>
                </div>
                <div className="az-notification-list">
                  <div className="media new">
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/dashboard.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a href="/dashboard/index.html" className="text-dark">
                        <p className="tx-18">Dashboard</p>
                        <span>Alles im Überblick </span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div data-permission="easy2schedule" className="media new">
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/calendar.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a href="/easy2schedule/" className="text-dark">
                        <p className="tx-18">Easy2Schedule</p>
                        <span>Kalender und mehr</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div data-permission="easy2track" className="media new">
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/track.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a href="/easy2track/client.html" className="text-dark">
                        <p className="tx-18">Easy2Track</p>
                        <span>Besucher tracken</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div data-permission="easy2order" className="media new">
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/order.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a
                        href="/prototypes/easy2order/entries.html"
                        className="text-dark"
                      >
                        <p className="tx-18">Easy2Order</p>
                        <span>Gastbestellungen organisieren</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div data-permission="simplycollect" className="media new">
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/chat.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a
                        href="/simplycollect/merchant.html"
                        className="text-dark"
                      >
                        <p className="tx-18">Simplycollect</p>
                        <span>Kunden beraten mit Video und Warenkorb</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div
                    data-permission="contacts.management"
                    className="media new"
                  >
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/contact.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a href="/contact-manager/" className="text-dark">
                        <p className="tx-18">Kontaktmanager</p>
                        <span>Kontaktdaten erfassen und verwalten</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                  <div
                    data-permission="dashboard.management.usermanagement"
                    className="media new"
                  >
                    <div className="img-app-icon">
                      <img src="/style-global/img/icons/account.png" alt="" />
                    </div>
                    <div className="media-body">
                      <a href="/dashboard/account.html" className="text-dark">
                        <p className="tx-18">Kontoverwaltung</p>
                        <span>Zugang und Abos verwalten</span>
                      </a>
                    </div>
                    {/* media-body */}
                  </div>
                  {/* media */}
                </div>
                {/* az-notification-list */}
              </div>
              {/* dropdown-menu */}
            </div>
            {/* snippet end */}
            {/* snippet start header-profile-menu */}
            <link
              href="/style-global/lib/fnon-notification/fnon.min.css?v=[cs_version]"
              rel="stylesheet"
            />
            <div className="dropdown az-profile-menu">
              <a
                href="/"
                className="az-img-user"
                data-toggle="tooltip"
                title=""
                data-original-title="Mein Benuterkonto"
              >
                <div
                  className="az-avatar-no-status avatar-sm"
                  id="nav_dropdown_avatar_menu"
                >
                  MM
                </div>
              </a>
              <div className="dropdown-menu">
                <div className="az-dropdown-header d-sm-none">
                  <a href="/" className="az-header-arrow">
                    <i className="icon ion-md-arrow-back"></i>
                  </a>
                </div>
                <div className="az-header-profile px-0">
                  <div className="az-img-user">
                    <div
                      className="az-avatar-no-status avatar-xl"
                      id="nav_dropdown_avatar"
                    >
                      MM
                    </div>
                  </div>
                  {/* az-img-user */}
                  <h6 className="force-wrap" id="nav_dropdown_name">
                    Max Musterman
                  </h6>
                  <p id="account_name" className="az-profile-name-text">
                    Benutzerkonto
                  </p>
                </div>
                {/* az-header-profile */}
                <a
                  data-permission="system.user.own.profile"
                  href="/dashboard/profile-settings.html"
                  className="dropdown-item"
                >
                  <i className="typcn typcn-cog-outline"></i>Profil verwalten
                </a>
                <a
                  data-permission="dashboard.management.change_own_password"
                  href="/dashboard/profile-password.html"
                  className="dropdown-item"
                >
                  <i className="typcn typcn-edit"></i>
                  Passwort ändern
                </a>
                <a
                  href="#"
                  id="logout_button"
                  className="dropdown-item logout_button"
                >
                  <i className="typcn typcn-power-outline"></i>Abmelden
                </a>
              </div>
              {/* dropdown-menu */}
            </div>
            <script src="/style-global/lib/fnon-notification/fnon.min.js?v=[cs_version]"></script>
            {/* snippet end*/}
          </div>
          {/* az-header-right */}
        </div>{' '}
        {/* container */}
      </div>
    </div>
  );
};
