import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function Section({ data }) {
  const sectionData = data.contentfulSection
  return (
    <Layout>
      <Wrapper>
        <HeroWrapper>
          <Illustration
            src={sectionData.illustration.fixed.src}
            alt="illustration"
          />
          <Title>Intro to React Hooks</Title>
          <Description>
            An overview of React Hooks and the frameworks you can use to build
            you React application really fast.
          </Description>
        </HeroWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Section

export const sectionQuery = graphql`
  query SectionQuery($slug: String!) {
    contentfulSection(slug: { eq: $slug }) {
      title
      description
      slug
      timestamp
      illustration {
        fixed {
          src
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
`

const HeroWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
`

const Illustration = styled.img`
  padding-top: 140px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  max-width: 500px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #fff;
  mix-blend-mode: normal;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
`
