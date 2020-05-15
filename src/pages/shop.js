import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import Card from "../components/card"

const Section = styled.section`
  width: 70%;
  /* margin: 0rem auto; */
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Lemonada", cursive;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

const ShopHero = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    object-position: bottom;
    object-fit: cover;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Shop = () => {
  const data = useStaticQuery(graphql`
    query shop {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    src
                  }
                }
              }
              description
              price
              slug
              title
            }
            id
          }
        }
      }
    }
  `)

  const coffees = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Section>
        <ShopHero>
          <img
            src="https://3.bp.blogspot.com/-2hWLB2HVvbQ/WlWwl4nLGoI/AAAAAAAEzQI/yM2rtT746Sonod97XIyHKkU1Q-Dspz_SACLcBGAs/s1600/themood%2B%252810%2529.jpg"
            alt=""
          />
        </ShopHero>
        <Grid>
          {coffees.map(coffee => (
            <Card key={coffee.node.id} data={coffee} />
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export default Shop
