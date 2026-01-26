export default function(eleventyConfig) {
    // Configure Eleventy
}

export const config = {
    dir: {
        input: "content",
        output: "public"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passThroughFileCopy: true
}