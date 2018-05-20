// dato.config.js

module.exports = (dato, root, i18n) => {

  // inside a "src/articles" directory...
  root.createPost(
    "src/index.md", "yaml", {
      frontmatter: { 
        layout: "layout.html",
        title: dato.homePage.title
      },
      content: dato.homePage.description
    }
  );
};
