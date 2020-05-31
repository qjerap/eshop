import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Favorite from "../components/favorite"
import Origin from "../components/origin"
import SEO from "../components/seo"

const IndexPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: -60,
    },
    show: {
      opacity: 1,
      translateY: 0,

      y: 0,
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
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 500,
        mass: 1,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <motion.div
            initial="hidden"
            variants={containerVariants}
            animate={
              ["entering", "entered"].includes(transitionStatus)
                ? "show"
                : "exit"
            }
          >
            <SEO title="Home" />
            <Hero />
            <Favorite />
            <Origin />
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default IndexPage
