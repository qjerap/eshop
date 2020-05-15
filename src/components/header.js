import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.background};
  width: 70%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textColor};

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    justify-content: center;

    width: 100%;
  }

  button {
    opacity: 0.3;
    border: none;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  ul {
    display: flex;
    align-content: center;
    list-style-type: none;

    @media (max-width: 800px) {
      display: none;
    }

    li {
      padding: 0.5rem 2rem;
      margin: 0;

      a {
        font-size: 0.8rem;
        font-weight: 300;
        text-decoration: none;
        color: ${props => props.theme.colors.textColor};
      }

      a:hover {
        color: #000;
      }
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-end;

  a {
    padding: 1rem;
    line-height: 0.95;
    font-size: 2rem;
    color: ${props => props.theme.colors.textColor};
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-family: "Lemonada", cursive;
  }

  span {
    margin-top: -1rem;
    font-size: 0.7rem;
    text-align: center;
  }
`

const Header = ({ siteTitle, toggleDarkMode }) => {
  return (
    <HeaderWrapper>
      {" "}
      <LogoContainer>
        <Link to="/">
           The 
          <br />
          Mood
          <br />
        </Link>
        <span>- micro.roastery -</span>
      </LogoContainer>
      <ul className="menu">
        <li>
          <Link to="/shop">shop</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link>
            <span className="snipcart-items-count"></span>{" "}
            <span className="snipcart-checkout">item in cart</span>
          </Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode}>D</button>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
