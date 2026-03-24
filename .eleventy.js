module.exports = function(eleventyConfig) {

  // Load instrument notes, sorted from oldest to newest by front‑matter year
  eleventyConfig.addCollection("notes", function (collection) {
    return collection
      .getFilteredByGlob("source/content/instruments/**/*.md")
      .sort((a, b) => a.data.year - b.data.year);
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
