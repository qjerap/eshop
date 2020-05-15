import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 800px) {
    width: 80%;
  }

  .product-img {
    margin: 0.5rem 0;

    img {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: cover;
      box-shadow: 10px 10px 31px -22px rgba(0, 0, 0, 1);
    }
  }

  .product-title {
  }

  .product-button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 1rem;
    width: 100%;

    button {
      width: 100%;
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
  }
`

const Card = props => {
  const { slug, price, title, description } = props.data.node.frontmatter;
  const image = props.data.node.frontmatter.image.childImageSharp.fluid.src;
  console.log(image)
  return (
    <CardContainer>
      <div className="product-title">{title}</div>
      <div className="product-img">
        <img
          src={image}
          alt=""
        />
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
