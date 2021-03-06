/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React, { Component } from 'react';
import { HEADER_GREET, C1_JOB_LINK } from '../../constants';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNav: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      mobileNav: !prevState.mobileNav,
    }));
  }

  render() {
    const { mobileNav } = this.state;

    return (
      <section className="hero is-light is-bold is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <span className="navbar-burger" onClick={this.toggleNav} role="button">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="container">
              <div className={mobileNav ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-end">
                  <a className="navbar-item is-size-4 montserrat" href="#Experience">
                    Experience
                  </a>
                  <a className="navbar-item is-size-4 montserrat" href="#Project">
                    Projects
                  </a>
                  <a className="navbar-item is-size-4 montserrat" href="#Footer">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-size-2 montserrat is-hidden-fullhd">
              { HEADER_GREET }
            </h1>
            <h1 className="subtitle is-size-2 montserrat is-hidden-touch is-hidden-desktop-only is-hidden-widescreen-only">
              { HEADER_GREET }
            </h1>
          </div>
        </div>
        <div className="hero-footer">
          <div className="container" id="expquick">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <div>
                    <p className="subtitle is-size-4 is-size-5-touch is-uppercase montserrat-spaced">
                      Current:
                    </p>
                    <figure className="image is-200x75 exp-quick is-hidden-desktop-only is-hidden-widescreen-only is-hidden-touch">
                      <a href={C1_JOB_LINK} target="__blank">
                        <img className="expquick" src="/c1232.png" alt="Capital One" />
                      </a>
                    </figure>
                    <figure className="image is-150x50 exp-quick is-hidden-touch is-hidden-fullhd">
                      <a href={C1_JOB_LINK} target="__blank">
                        <img className="expquick" src="/c1210.png" alt="Capital One" />
                      </a>
                    </figure>
                    <figure className="image is-150x50 exp-quick is-hidden-desktop">
                      <a href={C1_JOB_LINK} target="__blank">
                        <img className="expquick" src="/c1164.png" alt="Capital One" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <div>
                    <p className="subtitle is-4 is-size-5-touch is-uppercase montserrat-spaced">
                      Past:
                    </p>
                    <ul className="horizontal-list">
                      <li className="horizontal-list">
                        <figure className="image is-200x75 exp-quick is-hidden-desktop-only is-hidden-widescreen-only is-hidden-touch">
                          <a href="https://www.wisc.edu/" target="__blank">
                            <img className="expquick grayscale" src="/uw244.png" alt="UW Madison" />
                          </a>
                        </figure>
                        <figure className="image is-150x50 exp-quick is-hidden-touch is-hidden-fullhd">
                          <a href="https://www.wisc.edu/" target="__blank">
                            <img className="expquick grayscale" src="/uw202.png" alt="UW Madison" />
                          </a>
                        </figure>
                        <figure className="image is-150x50 exp-quick is-hidden-desktop">
                          <a href="https://www.wisc.edu/" target="__blank">
                            <img className="expquick grayscale" src="/uw165.png" alt="UW Madison" />
                          </a>
                        </figure>
                      </li>
                      <li className="horizontal-list">
                        <figure className="image is-200x75 exp-quick is-hidden-desktop-only is-hidden-widescreen-only is-hidden-touch">
                          <a href="https://www.leidos.com/" target="__blank">
                            <img className="expquick grayscale" src="/leidos238.png" alt="Leidos" id="fix_leidos_img" />
                          </a>
                        </figure>
                        <figure className="image is-150x50 exp-quick is-hidden-touch is-hidden-fullhd">
                          <a href="https://www.leidos.com/" target="__blank">
                            <img className="expquick grayscale" src="/leidos213.png" alt="Leidos" id="fix_leidos_img" />
                          </a>
                        </figure>
                        <figure className="image is-150x50 exp-quick is-hidden-desktop">
                          <a href="https://www.leidos.com/" target="__blank">
                            <img className="expquick grayscale" src="/leidos166.png" alt="Leidos" id="fix_leidos_img" />
                          </a>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
