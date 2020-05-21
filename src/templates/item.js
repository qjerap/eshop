import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-align: justify;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

const FlexContainer = styled.div`
  width: 100%;
  display: Flex;
  place-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  margin-right: 1rem;
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
  place-items: center;

  img {
    /* width: 500px; */
  }
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* place-items: center; */

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    h1 {
    }
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
    opacity: 0.85;

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

const Item = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title, price, slug, description } = markdownRemark.frontmatter
  const image = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <>
      <Section>
        <FlexContainer>
          <ImageContainer>
            <img src={image} alt="" />
          </ImageContainer>

          <ContentContainer>
            <div className="title">
              <h1>- {title} -</h1>
              <h4>{price}$</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />

            <form className="product-option">
              <div>
                <h4>CHOOSE YOUR SIZE</h4>
                <option value="test">test</option>
                <option value="test2">test2</option>
              </div>
              <h4>WHOLE BEAN OR GROUND COFFEE</h4>
              <option value="test">test</option>
              <option value="test2">test2</option>

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
            </form>
          </ContentContainer>
        </FlexContainer>
      </Section>
    </>
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