import React from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import styled from "styled-components"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const Modal = props => {
  const containerVariants = {
    hidden: {
      display: "none",
      opacity: 1,
      x: 1200,
    },
    show: {
      display: "block",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 1,
      x: -500,
      transition: {
        type: "spring",
        damping: 200,
        mass: 1,
      },
    },
  }

  const ModalWrapper = styled.div`
    position: relative;

    .burger {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: #000;
    }

    .container {
      max-width: 70%;
      margin: 0 auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 5rem 0 !important;
    }

    li {
      list-style-type: none;
      margin: 2rem 0;
      font-size: 2rem;

      a {
        outline: none;
      }
    }

    .close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 1.2rem;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.colors.ftMain};
    }

    .active {
      color: red;
      color: ${props => props.theme.colors.ftBright};

    }
  `

  return (
    <ModalWrapper>
      <motion.div
        initial="hidden"
        variants={containerVariants}
        animate={props.showModal === "show" ? "show" : "exit"}
        className="burger"
      >
        <div className="container">
          <div className="close">
            <FontAwesomeIcon
              onClick={props.toggleModal}
              icon={faTimes}
              size="2x"
            />
          </div>
          <ul>
            <li>
              <Link activeClassName="active" onClick={props.toggleModal} to="/">
                The Mood
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                onClick={props.toggleModal}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                onClick={props.toggleModal}
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                activeClassName="active"
                onClick={props.toggleModal}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </ModalWrapper>
  )
}

export default Modal
