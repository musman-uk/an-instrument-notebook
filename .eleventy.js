module.exports = function(eleventyConfig) {

  /*
    Instruments are stored as Markdown files with front‑matter metadata.
    Sorting by year keeps the Notebook’s studio list historically coherent
    without requiring additional logic in templates.
  */
  eleventyConfig.addCollection("notes", function (collection) {
    return collection
      .getFilteredByGlob("source/content/instruments/**/*.md")
      .sort((a, b) => a.data.year - b.data.year);
  });

  /*
    Assets (images, sounds) are passed through directly so the output
    remains self‑contained and does not depend on Eleventy processing.
  */
  eleventyConfig.addPassthroughCopy("source/assets");

  return {
    dir: {
      input: "source",
      output: "docs"
    }
  };
};
