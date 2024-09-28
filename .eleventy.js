import eleventyNavigation from "@11ty/eleventy-navigation";

export default function (config) {
  config.addPassthroughCopy({ public: "/" });
  config.addPlugin(eleventyNavigation);
}
