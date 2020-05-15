import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Favorite from "../components/favorite"
import Origin from "../components/origin"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Favorite />
    <Origin />
  </Layout>
)

export default IndexPage
