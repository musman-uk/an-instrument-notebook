+module.exports = function(eleventyConfig) {
  // Copy the assets folder (even if empty or containing placeholders)
  eleventyConfig.addPassthroughCopy("assets");

  // Enable deep‑merge for data files
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "source",      // Where content + templates live
      includes: "templates", // Templates folder (home.njk, base.njk, note.njk, about.njk)
      output: "docs"        // Where the built site goes
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
