import React from "react"
import styled from "styled-components"
import { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 70%;
  


  h2 {
    font-weight: 300;
  }

  & button {
    cursor: pointer;
    background: transparent;
    color: ${props => props.theme.colors.ftSLight};
    border: 1px solid ${props => props.theme.colors.ftSLight};
    padding: 0.5rem 1rem;
    border-radius: 0.1rem;
    text-transform: uppercase;
    font-weight: 300;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${props => props.theme.colors.ftBright};
      border: 1px solid ${props => props.theme.colors.ftBright};
    }
  }

  & section:first-of-type {
    margin-right: 10rem;

    @media(max-width: 800px) {
      margin-right: 0;
      margin-top: 2rem;
      margin-bottom: 5rem;
    }
  }

  & section {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    text-align: justify;
    max-width: 100%;
  }

  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto ;
    padding: 0;
    justify-content: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    justify-content: center;

    /* & section {
      margin: 0 0 2rem 0;
    }

    & section:first-of-type {
      margin: 0 0 4rem 0;
    } */
  }



`

const OpeningTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  & ul:last-of-type {
    text-align: right;
  }
`

const ContactForm = styled.form`
  & input,
  textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.ftMLight};
    width: 100%;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.ftBright};
  }

  & input:focus,
  textarea:focus {
    outline: none;
  }
`

const Contact = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: -60,
    },
    show: {
      opacity: 1,
      translateY: 0,

      y: 0,
      transition: {
        type: "spring",
        damping: 200,
        mass: 0.5,
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
            <FlexContainer>
              <section>
                <h2>Give us a visit</h2>
                <p>
                  Illo quis neque numquam natus, est delectus reprehenderit,
                  praesentium aut? Consequatur, harum tempora!
                </p>
                <OpeningTime>
                  <h6>1260 Saint Hubert, Montreal, QC</h6>
                  <h6>(514) - 444 - 4444</h6>
                </OpeningTime>
                <OpeningTime>
                  <ul>
                    <li>Monday & Tuesday - closed</li>
                    <li>Wenesday - 8am - 9pm</li>
                    <li>Thursday - 8am - 9pm</li>
                  </ul>
                  <ul>
                    <li>Friday - 8am - 10pm</li>
                    <li>Saturday - 8am - 10pm</li>
                    <li>Sunday - 8am - 9pm</li>
                  </ul>
                </OpeningTime>
              </section>
              <section>
                <h2>Contact us</h2>

                <ContactForm action="">
                  <input type="text" placeholder="name" />
                  <input type="email" placeholder="email" />
                  <input type="text" placeholder="subject" />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="message"
                  ></textarea>
                  <button type="submit">submit</button>
                </ContactForm>
              </section>
            </FlexContainer>
          </motion.div>
        )
      }}
    </TransitionState>
  )
}

export default Contact
