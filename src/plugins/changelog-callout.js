import { visit } from 'unist-util-visit';

export default function remarkChangelogCallout() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      if (node.children && node.children[0] && node.children[0].type === 'paragraph') {
        const textContent = node.children[0].children[0].value || '';

        // Detect the type of callout from the first part of the blockquote
        let blockType = null;

        if (textContent.startsWith('[!ENHANCEMENT]')) {
          blockType = 'enhancement';
          node.children[0].children[0].value = textContent.replace('[!ENHANCEMENT]', '').trim();
        } else if (textContent.startsWith('![ENHANCEMENT]')) {
          blockType = 'enhancement';
          node.children[0].children[0].value = textContent.replace('![ENHANCEMENT]', '').trim();
        } else if (textContent.startsWith('[!FEATURE]')) {
          blockType = 'feature';
          node.children[0].children[0].value = textContent.replace('[!FEATURE]', '').trim();
        } else if (textContent.startsWith('![FEATURE]')) {
          blockType = 'feature';
          node.children[0].children[0].value = textContent.replace('![FEATURE]', '').trim();
        } else if (textContent.startsWith('[!UI_UX]')) {
          blockType = 'ui_ux';
          node.children[0].children[0].value = textContent.replace('[!UI_UX]', '').trim();
        } else if (textContent.startsWith('![UI_UX]')) {
          blockType = 'ui_ux';
          node.children[0].children[0].value = textContent.replace('![UI_UX]', '').trim();
        }

        if (blockType) {
          // Replace blockquote with div and add style="display:contents" and data-block-type="..."
          node.data = {
            hName: 'div', // Change to div
            hProperties: {
              style: 'display:contents',
              'data-block-type': blockType,
            },
          };

          // Trim any remaining white space around the first paragraph text
          // node.children[0].children[0].value = node.children[0].children[0].value.trim();
        }
      }
    });
  };
}
