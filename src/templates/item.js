import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Lemonada", cursive;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #222;
    text-transform: uppercase;
    border: 1px solid #222;
    font-weight: 300;
    font-size: 0.9rem;
    margin-top: -0.85rem;
    opacity: 0.95;

    a {
      color: inherit;
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 1;
    }

    &.reverse {
      background-color: #222;
      color: #fff;
    }
  }
`

const FlexContainer = styled.div`
  width: 100%;
  display: Flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
  place-items: center;

  img {
    width: 500px;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
`

const Item = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title, price, slug, description } = markdownRemark.frontmatter
  const image  = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <Layout>
      <Section>
        <FlexContainer>
          <ImageContainer>
            <img src={image} alt="" />
          </ImageContainer>

          <ContentContainer>
            <h1>{title}</h1>
            <h2>{price}$</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <button
              className="reverse snipcart-add-item"
              data-item-id={title}
              data-item-price={price}
              data-item-url={slug}
              data-item-description={description}
              data-item-image={image}
              data-item-name={title}
            >
              add to cart
            </button>
          </ContentContainer>
        </FlexContainer>
      </Section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        price
        description
      }
    }
  }
`

export default Item
