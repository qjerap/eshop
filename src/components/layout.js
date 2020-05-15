import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import "./layout.css"

import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
  background-color: ${props => props.theme.colors.background};
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

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Body>
        <Header
          siteTitle={data.site.siteMetadata.title}
          toggleDarkMode={toggleDarkMode}
        />

        <Main>{children}</Main>

        <footer>
          © {new Date().getFullYear()},{` `}
          <a target="_blank" href="https://romainpareja.com">
            romain pareja
          </a>
        </footer>
      </Body>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
