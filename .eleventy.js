module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("source/contents/instruments/**/*.md");
  });

  return {
    dir: {
      input: "source",
      output: "docs"
    }
  };
};
