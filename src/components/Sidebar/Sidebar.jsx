import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    return (
      <div className={containerClassnames}>
        <header className='sidebar__header'>
          <div className='sidebar__logo'>
            <img
              src={logo}
              alt='TensorFlow logo'
              className='sidebar__logo-pic'
            />
            <span className={isOpened ? 'sidebar__title' : 'sidebar__title--hidden'}>TensorFlow</span>
          </div>
          <button className='sidebar__button' onClick={this.toggleSidebar}>
            <FontAwesomeIcon
              className='sidebar__button-icon '
              icon={isOpened ? 'angle-left' : 'angle-right'}
            />
          </button>
        </header>

        <nav className='sidebar__menu'>
          <ul className='sidebar__menu-list sidebar__menu-list--top'>
            {routes.map((route) => (
              <li key={route.title} onClick={() => this.goToRoute(route.path)} className='sidebar__menu-item'>
                <a href="#" className="sidebar__menu-link">
                  <FontAwesomeIcon 
                    icon={route.icon} 
                    className='sidebar__menu-icon'
                  />
                  <span className={isOpened ? 'sidebar__menu-title' : 'sidebar__menu-title--hidden'}>{route.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className='sidebar__menu-list sidebar__menu-list--bottom'>
            {bottomRoutes.map((route) => (
              <li key={route.title} onClick={() => this.goToRoute(route.path)} className='sidebar__menu-item'>
                <a href="#" className="sidebar__menu-link">
                  <FontAwesomeIcon 
                    icon={route.icon} 
                    className='sidebar__menu-icon' 
                  />
                  <span className={isOpened ? 'sidebar__menu-title' : 'sidebar__menu-title--hidden'}>{route.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
