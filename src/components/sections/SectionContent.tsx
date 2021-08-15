import React from "react"
import styled from "styled-components"
import { renderHtmlAst } from "../../functions/renderHtmlAst"

function SectionContent({ htmlAst }) {
  return <Wrapper>{renderHtmlAst(htmlAst)}</Wrapper>
}

export default SectionContent

const Wrapper = styled.div``
