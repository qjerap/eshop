import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.bgSecondary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
`

const HeaderFlex = styled.header`
  position: relative;
  margin: 1rem 0;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.ftMain};

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    justify-content: center;
    margin: 1rem 0;

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
        font-weight: 400;
        text-decoration: none;
        color: ${props => props.theme.colors.ftBright};
      }

      a:hover {
        color: ${props => props.theme.colors.ftMain};
      }

      .active {
        color:${props => props.theme.colors.ftMain};
      }
    }
  }

  .burger-icon {
    position: absolute;
    right: 5%;
    display: none;
    cursor: pointer;
    font-size: 2em;
    opacity: 0.8;
    transition: all 0.1s ease-in;

    &:hover {
      transform: rotate(180deg);
      opacity: 1;
    }

    @media (max-width: 800px) {
      display: block;
    }
  }

  .special {
    position: relative;
    /* width: 150px; */
    padding: 0;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 800px) {
      position: absolute;
      left: 0;
    }
  }

  .snipcart-items-count {
    /* position: absolute;
    top: -1rem;
    right: 0;
    color: red;
    font-size: 1rem;
    z-index:10; */
  }

  .snipcart-checkout {
    color: ${props => props.theme.colors.ftMain};
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
    color: ${props => props.theme.colors.ftBright};
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
    color: ${props => props.theme.colors.ftMain};
  }
`

const Header = ({ siteTitle, toggleDarkMode, toggleModal }) => {
  return (
    <HeaderWrapper>
      <HeaderFlex>
        {" "}
        <LogoContainer>
          <Link 
          
          to="/">
            The
            <br />
            Mood
            <br />
          </Link>
          <span>- micro.roastery -</span>
        </LogoContainer>
        <ul className="menu">
          <li>
            <Link activeClassName="active" to="/shop">shop</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/about">about</Link>
          </li>
          <li>
            <Link activeClassName="active" to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="special">
          <li>
            <Link>
              <span className="snipcart-checkout">
                (<span className="snipcart-items-count"></span>){" "}
                <FontAwesomeIcon size="lg" icon={faShoppingCart} />
              </span>
            </Link>
          </li>
        </ul>
        <div className="burger-icon">
          <FontAwesomeIcon onClick={toggleModal} icon={faBars} />
        </div>
      </HeaderFlex>
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
