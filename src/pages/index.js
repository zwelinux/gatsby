import * as React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {

  return (
    <main>
      <header>GraphQL Advanced API Testing</header>

      {data.allRestApiApiPosts.nodes ? 'api data ရှိပါတယ်။' : 'api data မရှိပါ။'}

      {data.allRestApiApiPosts.nodes.map((x) => (

        <li key={x.id}>
          {x.content}
          {x.title}
          {x.author}
          {x.date_posted}
        </li>

      ))}

    </main>
  )
}


// export const query = graphql`
//     query {
//       allRestApiApiPosts {
//         edges {
//           node {
//             id
//             link
//             title
//             link_name
//             date_posted(formatString: "DD MM YY")
//             content
//             author
//           }
//         }
//       }
//     }
// `

export const query = graphql`
    query {
      allRestApiApiPosts {
        nodes {
          id
          content
          author
          date_posted(formatString: "MM DD YYYY")
          link
          link_name
          title
        }
        totalCount
      }
    }
`


export const Head = () => <title>Home Page</title>

export default IndexPage