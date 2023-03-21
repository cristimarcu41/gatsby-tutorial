// const { createFilePath } = require(`gatsby-source-filesystem`)
//
// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     // Ensures we are processing only markdown files
//     if (node.internal.type == "File") {
//         console.log('here')
//         // Use `createFilePath` to turn markdown files in our `src/content` directory into `/blog/slug`
//         const relativeFilePath = createFilePath({
//             node,
//             getNode,
//             basePath: "src/projects",
//         })
//
//         // Creates new query'able field with name of 'slug'
//         createNodeField({
//             node,
//             name: "slug",
//             value: `/blog/${relativeFilePath}`,
//         })
//         console.log(node)
//     }
//     // console.log('out here')
// }
const path = require('path');
exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        query Projects  {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);
    data.allMarkdownRemark.nodes.forEach(node=>{
        actions.createPage({
            path:'/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context:{slug: node.frontmatter.slug}

        })
    })
}