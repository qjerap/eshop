import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./card"

const Section = styled.section`
  width: 70%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 300;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    margin-top: 15rem;
    width: 100%;
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Favorite = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(limit: 4) {
        edges {
          node {
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 700) {
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
    <Section>
      <h2>OUR FAVORITES</h2>

      <Grid>
        {coffees.map(coffee => (
          <Card key={coffee.node.id} data={coffee} />
        ))}
      </Grid>
    </Section>
  )
}

export default Favorite
