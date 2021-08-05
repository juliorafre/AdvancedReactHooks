import React from "react"
import styled from "styled-components"
import SectionRow from "../rows/SectionRow"

import { sections } from "../../data/sectionData"

function GridSection() {
  return (
    <Wrapper>
      <Title>20 topics</Title>
      <Description>
        All techniques are explained step-by-step, in a beginner-friendly format
        so that you can easily follow in a cohesive way.
      </Description>
      <Grid>
        {sections.map((section, idx) => {
          return (
            <SectionRow
              key={idx}
              index={idx + 1}
              title={section.title}
              description={section.description}
              timestamp={section.duration}
            />
          )
        })}
      </Grid>
    </Wrapper>
  )
}

export default GridSection

const Wrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  gap: 12px;
  text-align: center;
`

const Title = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #ffffff;
`

const Description = styled.p`
  max-width: 460px;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blue(40px);
  border-radius: 20px;
`
