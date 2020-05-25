import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.bgSecondary};
  width: 100%;
  margin-top: 1rem;
  text-transform: uppercase;

  & button {
      cursor: pointer;
      background: transparent;
      color: ${props => props.theme.colors.ftSLight};
      border: 1px solid ${props => props.theme.colors.ftSLight};
      padding: 0.5rem 1rem;
      border-radius: 0.1rem;
      text-transform: uppercase;
      font-weight: 300;

      &:focus {
        outline: none;
      }

      &:hover {
        color: ${props => props.theme.colors.ftBright};
        border: 1px solid ${props => props.theme.colors.ftBright};
      }


    }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.ftSLight};
  }

  p,
  li,
  h5,
  h6 {
    font-weight: 300;
  }

  svg {
      margin: 0 1rem 1rem;

  }

  form {
    width: 70%;
    display: grid;
    grid-template-columns: 40% 40% auto;
    grid-gap: 0.5rem;

    & input {
      background-color: transparent;
      border: 1px solid ${props => props.theme.colors.ftMLight};
      border-radius: .05rem;
      padding: .25rem .5rem;
      color: ${props => props.theme.colors.ftBright};;
    }

    & input:focus {
        outline: none;
    }



    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`

const FooterGrid = styled.div`
  margin: 0 auto;
  min-height: 400px;

  display: grid;
  place-items: center;
  grid-template-columns: 35% 65%;
  grid-template-rows: 1fr 1fr;

  .flex-column {
    flex-direction: column;
  }

  .flex-justify-center {
    justify-content: center;
  }

  .flex-justify-space {
    justify-content: space-evenly;
  }

  .flex-align-center {
    align-items: center;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`
const GridItem = styled.div`
  border: 1px solid ${props => props.theme.colors.ftXLight};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    padding: 2rem 0;
  }
`

const Ul = styled.ul`
  list-style-type: none;
  font-size: 0.8rem;

  & li {
    margin: 0;
  }

  & li:first-of-type {
    font-weight: 500;
    color: ${props => props.theme.colors.ftBright};;
  }

`

const LogoContainer = styled.div`
  display: flex;
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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterGrid>
        <GridItem className=" flex-justify-space">
          <LogoContainer>
            <Link to="/">
              The
              <br />
              Mood
              <br />
            </Link>
            <span>- micro.roastery -</span>
          </LogoContainer>
          <div>
            <h5>YOUR COFFEE, YOUR HOME</h5>
            <h6>BE IN THE MOOD</h6>
            <Link to="/shop">
              <button>SHOP</button>
            </Link>
          </div>
        </GridItem>
        <GridItem>
          <Ul>
            <li>about</li>
            <li>
              <Link to="/">in the mood</Link>
            </li>
            <li>
              <Link to="/">find us</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </Ul>
          <Ul>
            <li>help</li>
            <li>
              <Link to="/">return policy</Link>
            </li>
            <li>
              <Link to="/">deliveries</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </Ul>
          <Ul>
            <li>online shop</li>
            <li>
              <Link to="/">coffee beans</Link>
            </li>
            <li>
              <Link to="/">equipement</Link>
            </li>
            <li>
              <Link to="/">cours</Link>
            </li>
          </Ul>
        </GridItem>
        <GridItem className="flex-column flex-justify-center">
          <div>
            <FontAwesomeIcon size="2x" icon={faFacebookF} />
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </div>
          <div>
            
            <a target="_blank" href="https://romainpareja.com">
              © {new Date().getFullYear()},{` `}romain pareja
            </a>
          </div>
        </GridItem>
        <GridItem className="flex-column flex-justify-center">
          <h5>subscribe to our newsletter and get free delivery</h5>
          <form action="">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">subscribe</button>
          </form>
        </GridItem>
      </FooterGrid>
    </FooterWrapper>
  )
}

export default Footer
