import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export default function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    if (data.astro) data.astro.frontmatter.minutesRead = readingTime.text;
    if (data.matter) data.matter.minutesRead = readingTime.text;
  };
}
