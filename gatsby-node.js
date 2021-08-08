/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const sectionTemplate = path.resolve("src/templates/section.tsx")
  const result = await graphql(`
    {
      allContentfulCourses {
        edges {
          node {
            title
            description
            sections {
              slug
            }
          }
        }
      }
    }
  `)
  const sections = result.data.allContentfulCourses.edges[0].node.sections

  sections.forEach(section => {
    createPage({
      path: `/${section.slug}`,
      component: sectionTemplate,
      context: {
        slug: section.slug,
      }
    });
  });
}