import React from "react"
import styled from "styled-components"

const Section = styled.section`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    font-weight: 300;
  }

  h3 {
    font-weight: 500;
  }

  p {
    text-align: initial;
    column-count: 3;
    line-height: 2;

    @media (max-width: 800px) {
      column-count: 1;
      padding: 0 2rem;
      text-align: justify;
    }
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  img {
    box-shadow: 10px 10px 31px -22px rgba(0, 0, 0, 1);
  }
`

const Grid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const Origin = () => {
  return (
    <Section>
      <h2>ORIGIN</h2>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          saepe recusandae nisi expedita explicabo accusantium molestiae
          deleniti reiciendis architecto aperiam? Non consequatur corporis vel
          accusantium, porro expedita, possimus cupiditate, autem ad sapiente
          quasi! Voluptate placeat pariatur repellendus ullam soluta minus?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, nulla?
          Odit quisquam tempora laborum porro impedit et? Saepe doloribus nobis
          unde corrupti consequatur error sunt. Minus praesentium aliquid saepe
          eos. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Rem, tempora.
        </p>
      </div>
      <Grid>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    </Section>
  )
}

export default Origin
