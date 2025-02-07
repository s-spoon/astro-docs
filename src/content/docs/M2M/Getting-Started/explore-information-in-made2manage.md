---

title: "Explore information in Made2Manage"
draft: false
type: Article

---

Use the **Made2Manage Enterprise Explorer (EXPLOR)** page to explore the relationships between documents, check the status of any document, and get a quick summary of the document's content. You can also open documents from the Explorer.

When you drill-down in the **Made2Manage Enterprise Explorer (EXPLOR)** page, you can only view the referenced information. The reference information is based on:

- Related pages

- Dependent pages

- Child tables

- Lookups

For example, you can drill down to a Sales Order from a Customer only if at least one Sales Order exists for the Customer. From the Sales Order, you can drill-down and identify the linked information such as the customer payment terms and salesperson details, and related pages such as Sales Order Line Items. From a Sales Order Line Item, you can drill-down to view the related pages such as Sales Order Detailed BOM and Sales Order Releases.

When you drill-down in the **Made2Manage Enterprise Explorer (EXPLOR)** page, you cannot view columns added in the parent level table.

For example, if you had added a **Quantity Available** column in the **INMAST** table through the **DICT** page, and drill-down **INVOH** records in the **Made2Manage Enterprise Explorer (EXPLOR)** page to the **Inventory Locations** table via **Item Master**, you cannot view the **Quantity Available** column in the **Inventory Locations** grid as that is a part of the **Item Master** records and not **Inventory Location**.

That is, you cannot identify the quantity available in each location by drilling down in the **Made2Manage Enterprise Explorer (EXPLOR)** page from **INVOH**.

**To explore information in Made2Manage**

1. Open the **Made2Manage Enterprise Explorer (EXPLOR)** page.

    a. Select **Executive Information System** > **Explorer** > **Made2Manage Enterprise Explorer**.

    Or

    b. Search for **EXPLOR** or **Made2Manage Enterprise Explorer** in the **Navigation box** and then select **Made2Manage Enterprise Explorer**.

    The **Made2Manage Enterprise Explorer (EXPLOR)** page appears.

2. The linked documents are displayed on the left-most pane.

3. Click the linked document that you want to explore.

    The related information is displayed in the grid in the central pane.

4. To further explore, select any cell in the grid.

​