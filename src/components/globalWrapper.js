import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"

import lightTheme from "../themes/light"
import darkTheme from "../themes/dark"
import Modal from "./modal"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

import Layout from "./layout"

const GlobalWrapper = ({ children }) => {
  const ThemeTrigger = styled.div`
    cursor: pointer;
    position: fixed;
    z-index: 10;
    opacity: 0.5;
    top: 3%;
    left: 1%;
    color: ${props => props.theme.colors.ftBright};

    &:hover {
      opacity: 1;
    }
  `

  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
    localStorage.setItem("isDarkMode", isDarkMode)
    console.log(isDarkMode)
  }

  const [showModal, setShowModal] = useState("hidden")

  const toggleModal = () => {
    if (showModal === "hidden") {
      setShowModal("show")
    } else if (showModal === "show") {
      setShowModal("hidden")
    }
  }

  return (
    <>
      <ThemeProvider
        theme={isDarkMode ? lightTheme : darkTheme}
        toggleDarkMode={toggleDarkMode}
      >
        <ThemeTrigger onClick={toggleDarkMode}>
          <FontAwesomeIcon size="lg" icon={faLightbulb} />
        </ThemeTrigger>
        <Layout toggleModal={toggleModal} showModal={showModal}>{children}</Layout>
      </ThemeProvider>
    </>
  )
}

export default GlobalWrapper
