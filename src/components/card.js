import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CardContainer = styled.div`
position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;

  @media (max-width: 800px) {
    width: 90%;
  }

  .product-img {
    margin: 0;

    img {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: cover;
      box-shadow: 10px 10px 31px -22px rgba(0, 0, 0, 1);
      border-radius: 0.1rem;
    }
  }

  .product-title {
    letter-spacing: 1.1px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.25rem; 
    margin-bottom: .5rem;
    &::first-letter {
    }
  }        


  .product-button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 1rem;
    width: 100%;
    margin-top: -1rem;

    & button {
      cursor: pointer;
      background: transparent;
      color: ${props => props.theme.colors.ftSLight};
      border: 1px solid ${props => props.theme.colors.ftSLight};
      padding: 0.5rem 1rem;
      border-radius: 0.1rem;
      text-transform: uppercase;
      font-weight: 300;
      font-size: .8rem;

      &:focus {
        outline: none;
      }

      &:hover {
        color: ${props => props.theme.colors.ftBright};
        border: 1px solid ${props => props.theme.colors.ftBright};
      }

      a {
        color: inherit;
        text-decoration: none;
      }
/* 
      &.reverse {
        color: ${props => props.theme.colors.ftBright};
        border: 2px solid ${props => props.theme.colors.ftBright};

        &:hover {
          color: ${props => props.theme.colors.ftSLight};
          border: 2px solid ${props => props.theme.colors.ftSLight};
        }
      } */
    }
  }
`

const Card = props => {
  const { slug, price, title, description } = props.data.node.frontmatter
  const image = props.data.node.frontmatter.image.childImageSharp.fluid.src
  console.log(image)
  return (
    <CardContainer>
      <h4 className="product-title">{title}</h4>
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-button">
        <button>
          <Link to={slug}>view more</Link>
        </button>
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
      </div>
    </CardContainer>
  )
}

export default Card
