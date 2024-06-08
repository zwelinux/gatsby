// Step 1: Import React
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Step 2: Define your component
const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <header>{data.site.siteMetadata.title}</header>
    </main>
  )
}


export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage