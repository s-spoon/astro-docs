import { visit } from "unist-util-visit";

export default function remarkCustomCallouts() {
  return tree => {
    visit(tree, "blockquote", node => {
      if (node.children && node.children.length > 0) {
        const firstChild = node.children[0];

        if (firstChild.type === "paragraph" && firstChild.children.length > 0) {
          const textNode = firstChild.children[0];

          if (textNode.type === "text") {
            const text = textNode.value.trim();

            // Match specific callout markers like ![NOTE], ![TIP], etc.
            const match = text.match(
              /^\[!(NOTE|TIP|WARNING|CAUTION|IMPORTANT)\]/i
            );

            if (match) {
              const type = match[1].toLowerCase();

              // Remove the callout marker from the text
              textNode.value = textNode.value.replace(match[0], "").trim();

              // Insert an h5 element at the start of the blockquote
              // node.children.unshift({
              //   type: "element",
              //   tagName: "h5",
              // });
              node.children.unshift({
                type: "heading",
                data: {
                  hName: "h6",
                  hProperties: {
                    id: "",
                  },
                },
              });

              // Assign class to blockquote
              node.data = {
                hName: "blockquote",
                hProperties: {
                  className: `callout ${type}`,
                },
              };
            }
          }
        }
      }
    });
  };
}
