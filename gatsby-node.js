exports.createPages = async ({  actions: {createPage}, graphql }) => {
  const results = await graphql(`
    {
      allSmartsnakesJson {
        edges {
        node {
          slug
        }
      }
    }
  }
  `);

  results.data.allSmartsnakesJson.edges.forEach(edge => {
    const snake = edge.node;
    createPage({
      path: `/snake/${snake.slug}`,
      component: require.resolve('./src/templates/snake.js'),
      context: {
        slug: snake.slug,
      },
    })
  })
}