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
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.25rem; 
    margin-bottom: .5rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    & .price {
      font-size: .75rem;
      font-weight: 500; 
      color: ${props => props.theme.colors.ftSLight};
    }
  }        


  .product-button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: space-between;
    grid-gap: 1rem;
    width: 100%;
    margin-top: -1rem;

    & button {
      cursor: pointer;
      background: transparent;
      color: #fff;
      width: 100%;
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

      a {
        color: inherit;
        text-decoration: none;
      }

    }
  }
  
`

const Card = props => {
  const { slug, price, title, description } = props.data.node.frontmatter
  const image = props.data.node.frontmatter.image.childImageSharp.fluid.src
  return (
    <CardContainer>
      <h4 className="product-title">
        <span>{title}</span>
        <span className="price">{price}$</span>
      </h4>
      <div className="product-img">
        <img src={image} alt="" />
      </div>
      <div className="product-button">
        <Link to={`${slug}/?#/`}>
          <button>view more</button>
        </Link>

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
