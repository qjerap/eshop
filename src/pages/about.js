import React from "react"

import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: justify;
  align-items: center;

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;

    h1,
    h2,
    h3,
    p {
      width: 90%;
      margin: 1rem auto;
    }

  }

  /* ############## */

  .col {
    column-count: 3;

    @media (max-width: 1100px) {
      column-count: 2;
    }
    @media (max-width: 700px) {
      column-count: 1;
    }
  }

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 3rem;
    box-shadow: 10px 10px 31px -22px rgba(0, 0, 0, 1);
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;

      
  h2 {
      font-weight: 300;
    }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const about = () => {
  return (
    <>
      <Section>
        <img
          src="/about1_small.jpg"
          alt=""
        />
        <Grid>
          <div>
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              fugit ex officiis vitae qui excepturi officia explicabo laboriosam
              reprehenderit possimus amet doloremque, placeat natus. Hic quo
              facere quibusdam fugiat in!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur amet aliquid earum eius hic totam, illum, autem est
              aperiam enim molestiae porro quidem reprehenderit? Laboriosam non
              deleniti ut numquam magni.
            </p>
          </div>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nobis odio architecto cum.
            </p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nulla facilis similique, beatae
              repellat aspernatur assumenda. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cumque a adipisci eius mollitia
              voluptas quisquam consectetus.
            </p>
          </div>
        </Grid>

        <hr />
      </Section>
    </>
  )
}

export default about
