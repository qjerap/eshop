import React, { useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"



const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.colors.bgMain};
  p, ul, h1, h2, h3, h4, h5, h6, svg {
    color: ${props => props.theme.colors.ftMain};
  }
`
const Main = styled.main`
  margin: 5rem auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


`

const Layout = ({ children }) => {
console.log(children);
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", isDarkMode)
    console.log(isDarkMode)
  }

  // useEffect(() => {
  //   const data = localStorage.getItem("isDarkMode")
  //   setDarkMode(data)
  // }, [])

  return (
    <Body>
      <Header />
      <Main>{children}</Main>
      <Footer/>

    </Body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
