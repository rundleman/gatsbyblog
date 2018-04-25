import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <h1>{data.contentfulBlogPost.title}</h1>
        <span>{data.contentfulBlogPost.date}</span>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`
