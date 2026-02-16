module.exports = function(eleventyConfig) {

  // Load instrument notes
  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("source/contents/instruments/**/*.md");
  });

  return {
    dir: {
      input: "source/pages",   
      output: "docs"
    }
  };
};
