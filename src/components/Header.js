import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
    <div className="content">
      <div className="inner">
        <h1>NAYT</h1>
        <p>
        Quantitative Trading and Investing 
        </p>
        <br />
        <p>
        SINGAPORE | HONG KONG | SHANGHAI
        </p>
      </div>
    </div>
    <nav>
      <ul>
      {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li> */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Recruitment
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
