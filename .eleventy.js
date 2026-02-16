module.exports = function(eleventyConfig) {

  // Load instrument notes from your actual folder
  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("source/contents/instruments/**/*.md");
  });

  return {
    dir: {
      input: "source",
      output: "docs",
      includes: "pages",   // tells Eleventy where your njk pages live
      layouts: "pages"     // optional but keeps things tidy
    },
    passthroughFileCopy: true
  };
};
