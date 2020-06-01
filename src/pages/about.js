import React from "react"
import styled from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const Section = styled.section`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: justify;
  align-items: center;

  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 90%;
  }

  /* @media (max-width: 800px) {
    width: 100%;
  } */

  /* ############## */

  /* .col {
    column-count: 3;

    @media (max-width: 1100px) {
      column-count: 2;
    }
    @media (max-width: 700px) {
      column-count: 1;
    }
  } */

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

  h1,
  h2,
  h3,
  p {
    width: 100%;
    font-weight: 300;
  }

  p {
    font-size: 0.7rem;
    letter-spacing: 1.2px;
    color: ${props => props.theme.colors.ftMain};
    opacity: 0.95;
    text-align: justify;
  }

  h1 {
    font-weight: 300;
    font-size: 1.75rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const about = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: -60
    },
    show: {
      opacity: 1,
      translateY: 0,

      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: .5,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 500,
        mass: 1,
      },
    },
  }

  return (
    <TransitionState>
      {({ transitionStatus }) => {
        return (
          <motion.div
            initial="hidden"
            variants={containerVariants}
            animate={
              ["entering", "entered"].includes(transitionStatus)
                ? "show"
                : "exit"
            }
          >
            <Section>
              <img src="/about1_small.jpg" alt="" />
              <Grid>
                <div>
                  <h1>Our Story</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas fugit ex officiis vitae qui excepturi officia explicabo
                    laboriosam reprehenderit possimus amet doloremque, placeat
                    natus. Hic quo facere quibusdam fugiat in!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur amet aliquid earum eius hic totam, illum, autem
                    est aperiam enim molestiae porro quidem reprehenderit?
                    Laboriosam non deleniti ut numquam magni.
                  </p>
                </div>
                <div>
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem nobis odio architecto cum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Nulla facilis similique,
                    beatae repellat aspernatur assumenda. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Cumque a adipisci eius
                    mollitia voluptas quisquam consectetus.
                  </p>
                </div>
              </Grid>

              <hr />
            </Section>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default about
