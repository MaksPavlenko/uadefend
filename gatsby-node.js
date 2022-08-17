const path = require("path");


const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const generatePages = makeRequest(
    graphql,
    `
        {
          allStrapiRound {
            edges {
              node {
                id
                slug
              }
            }
          }
          
          allStrapiBlogCategory {
              edges {
                  node {
                    id
                    strapiId
                    slug
                  }
                }
              }

              allStrapiBlog {
                edges {
                  node {
                    id
                    slug
                  }
                  next {
                    slug
                  }
                  previous {
                    slug
                  }
                }
              } 
        }
    `
  ).then(result => {

    result.data.allStrapiRound.edges.forEach(({ node }) => {
      createPage({
        path: `/rounds-catalog/${node.slug}/`,
        component: path.resolve(`src/template/round-card.js`),
        context: {
          id: node.id,
        },
      });
    });
    
    result.data.allStrapiBlogCategory.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}/`,
          component: path.resolve(`src/template/blog-category.js`),
          context: {
            id: node.strapiId,
          },
        });
      });

      result.data.allStrapiBlog.edges.forEach(({ node, next, previous }) => {
        createPage({
          path: `/blog/${node.slug}/`,
          component: path.resolve(`src/template/article.js`),
          context: {
            id: node.id,
            next,
            previous,
          },
        });
      });

  });

  return Promise.all([generatePages]);
};
