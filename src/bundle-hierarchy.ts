import { atom } from "nanostores";
// import { base } from "../../plugins/remark-link-transform";

// const base = import.meta.env.BASE_URL;
const base = "/bc-";

export type Item = {
  // Info on the item
  title: string;
  desc?: string;
  icon?: string;
  link?: string;

  // Child items
  items?: Item[];
  enclosedItems?: Item[];

  // Reference to parent
  foreignKey?: Item;

  // Looks
  compact?: boolean;

  // Grouping
  groups?: [string, string][];
  groupID?: string;
};

const createModule = (title: string, link: string, icon?: string, groupID?: string): Item => ({
  title,
  link,
  icon,
  groupID,
  compact: true,
});

const construct: Item = {
  title: "{icon:Home}",
  items: [
    {
      title: "AppCentral",
      desc: ``,
      link: "AppCentral/",
    },
    {
      title: "Made2Manage",
      desc: ``,
      link: "M2M/",
    },
    {
      title: "EAM",
      desc: ``,
      link: "EAM/",
    },
    {
      title: "Aptean BI",
      desc: ``,
      link: "BI/",
    },
    {
      title: "Aptean EDI",
      desc: ``,
      link: "EDI/",
    },
    {
      title: "Aptean Ship",
      desc: ``,
      link: "ApteanShip/",
    },
    {
      title: "Aptean CRM",
      desc: ``,
      link: "CRM/",
    },
    {
      title: "Aptean Pay",
      desc: ``,
      link: "Pay/",
    },
    {
      title: "Aptean Print",
      desc: ``,
      link: "Aptean-Print/",
    },
    {
      title: "Invoice Automation",
      desc: ``,
      link: "Invoice-Automation/",
    },
  ],
};

function addForeignKeys(item: Item) {
  item.items?.forEach((it) => {
    it.foreignKey = item;
    addForeignKeys(it);
  });
  item.enclosedItems?.forEach((it) => {
    it.foreignKey = item;
    addForeignKeys(it);
  });
  return item;
}

export function findCompactItemsWithLink(
  items: Item[],
  link: string,
  bundleTitle: string = ""
): { item: Item; bundle: string }[] {
  const result: { item: Item; bundle: string }[] = [];

  for (const item of items) {
    const currentBundle = bundleTitle || item.title; // Top-level item serves as the bundle

    if (item.compact && item.link === link) {
      result.push({ item, bundle: currentBundle });
    }

    // Recursively check child items
    if (item.items) {
      result.push(
        ...findCompactItemsWithLink(
          item.items,
          link,
          currentBundle + (currentBundle === item.title ? "" : ` - ${item.title}`)
        )
      );
    }

    // if (item.enclosedItems) {
    //   result.push(
    //     ...findCompactItemsWithLink(item.enclosedItems, link, currentBundle + ' - ' + item.title)
    //   );
    // }
  }

  return result;
}

export const currentItem = atom<Item>(addForeignKeys(construct));
export {};
export default construct;
