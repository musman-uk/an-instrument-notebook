module.exports = function(eleventyConfig) {

  // Load instrument notes
  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob("source/content/instruments/**/*.md");
  });

  // Copy assets (images, sounds) into docs/
  eleventyConfig.addPassthroughCopy("source/assets");

  return {
    dir: {
      input: "source",
      output: "docs"
    }
  };
};
