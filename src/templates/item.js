import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;


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
  }
`

const ContentContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

  .desc {
    margin: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: .85rem;
    text-transform: uppercase;
    font-weight: 300;
  }

  p {
    font-size: 0.7rem;
    letter-spacing: 1.2px;
    color: ${props => props.theme.colors.ftMain};
    opacity: 0.85;
    text-align: justify;
  }


  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    h1 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: .95rem;
    }


    h1, h4 {
    font-weight: 300;
    }
  }

  & button {
    cursor: pointer;
    background: transparent;
    color: #fff;
    width: 100%;
    margin: 0 auto;
    border: 2px solid #fff;
    padding: 0.5rem 0.25rem;
    border-radius: 0.1rem;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.9rem;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${props => props.theme.colors.ftBright};
      border: 2px solid ${props => props.theme.colors.ftBright};
    }

    &.reverse {
      background-color: ${props => props.theme.colors.ftBright};
      border: 2px solid ${props => props.theme.colors.ftBright};

      &:hover {
        background-color: transparent;
        color: ${props => props.theme.colors.ftBright};
      }
    }
  }
`

const Item = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const { title, price, slug, description } = markdownRemark.frontmatter
  const image = markdownRemark.frontmatter.image.childImageSharp.fluid.src
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(1)

  function handleSize(e) {
    setSize(e.target.value)
  }

  function handleQuantity(e) {
    if (e.target.innerHTML === "-") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  return (
    <>
      <Section>
        <FlexContainer>
          <ImageContainer>
            <img src={image} alt="" />
          </ImageContainer>

          <ContentContainer>
            <div className="title">
              <h1>{title}</h1>
              <h4>{price}$</h4>
            </div>
            <div className="text-content" dangerouslySetInnerHTML={{ __html: html }} />

            <div className="desc">
              <ul>
                <li>availability: Year round</li>
                <li>type: blend</li>
                <li>tasting notes: toffee</li>
              </ul>

              <ul>
                <li>country: {title}</li>
                <li>process: natural</li>
                <li>direct trade: yes</li>
              </ul>
            </div>

            <button
              className="snipcart-add-item reverse"
              data-item-id={title}
              data-item-price={price}
              data-item-url={slug}
              data-item-description={description}
              data-item-image={image}
              data-item-name={title}
              data-item-quantity={quantity}
              data-item-custom1-name="size"
              data-item-custom1-options={`1 lbs|2 lbs[+${price}]|5 lbs[+${
                price * 5
              }]`}
              data-item-custom2-name="format"
              data-item-custom2-options="whole bean|ground coffee"
            >
              add to cart
            </button>
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
