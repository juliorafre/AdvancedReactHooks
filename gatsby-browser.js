/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { UserProvider } from './src/context/UserContext'

export const wrapRootElement = ({element}) => {
  return <UserProvider>{ element }</UserProvider>
}

require("prismjs/themes/prism-tomorrow.css")