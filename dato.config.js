// dato.config.js

module.exports = (dato, root, i18n) => {

  // inside a "src/articles" directory...
  root.createPost(
    "src/pages/homepage.md", "yaml", {
      frontmatter: { 
        title: "Title"
      },
      content: dato.homePage.title
    }
  );
};
