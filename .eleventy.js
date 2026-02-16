module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("source/content/instruments/**/*.md");
  });

  return {
    dir: {
      input: "source",
      output: "docs"
    }
  };
};
