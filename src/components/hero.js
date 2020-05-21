import React from "react"
import styled from "styled-components"

const Grid = styled.section`
  margin: 0 auto;
  width: 70%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 1rem;

  h3, h4 {
    color: #fff;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  & .first {
    grid-row: 1 / -1;
    grid-column: 1 / 7;

    & .test {
      position: absolute;
      width: 100%;
      height: 48.5%;
      background-color: rgba(0, 0, 0, 0.5);
      bottom: 0;

      @media (max-width: 800px) {
        height: 100%;
      }
    }
  }

  & .second {
    grid-row: 1 / 7;
    grid-column: 7 / -1;
  }

  & .third {
    grid-row: 7 / -1;
    grid-column: 7 / -1;
  }

  & .second,
  .third {
    background-color: #000;
    img {
      opacity: 0.45;
    }
  }

  & .first,
  .second,
  .third {
    position: relative;

    & .content {
      position: absolute;
      bottom: 25%;
      left: 5%;
      color: rgba(250, 250, 250, 0.85);
    }

    & h3 {
      font-family: "Montserrat", sans-serif;

      letter-spacing: 3px;
      text-transform: uppercase;
      font-size: 1rem;
    }

    & h4 {
      font-family: "Montserrat", sans-serif;

      font-size: 0.85rem;
    }

    & button {
      cursor: pointer;
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.1rem;
      text-transform: uppercase;
      font-weight: 300;

      &:focus {
        outline: none;
      }

      &:hover {
        color: ${props => props.theme.colors.ftBright};
        border: 2px solid ${props => props.theme.colors.ftBright};
      }
    }

    @media (max-width: 800px) {
      height: 250px;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    box-shadow: 10px 10px 31px -22px rgba(0, 0, 0, 1);
  }
`

const Hero = () => {
  return (
    <Grid>
      <div className="first">
        <img
          src="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
          alt=""
        />
        <div className="test">
          <div className="content">
            <h3>visit us</h3>
            <h4>Miles end - Montreal</h4>
            <button>FIND US</button>
          </div>
        </div>
      </div>
      <div className="second">
        <img
          src="https://images.unsplash.com/photo-1560864495-43c981fc9ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
          alt=""
        />
        <div className="content">
          <h3>NEW SINGLE ORIGIN: Yigarcheffe</h3>
          <h4>Taste from ethiopia </h4>
          <button>show more</button>
        </div>
      </div>
      <div className="third">
        <img
          src="https://2.bp.blogspot.com/-MJjDIrudxGY/WlWwl3CsVXI/AAAAAAAEzQM/xuMeS5-BNHIv6fT2_BnxtbEBsKXvt3CqACLcBGAs/s1600/themood%2B%25281%2529.jpg"
          alt=""
        />
        <div className="content">
          <h3>The Best every morning</h3>
          <h4>Free shiping on order of 39$ and more!</h4>
          <button>shop now</button>
        </div>
      </div>
    </Grid>
  )
}

export default Hero
