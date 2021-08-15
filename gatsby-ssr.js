/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { UserProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => {
  return <UserProvider>{element}</UserProvider>
}