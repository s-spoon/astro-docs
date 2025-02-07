---

title: "Blanket Purchase Order"
draft: false
type: Article

---

A **Blanket Purchase Order (Blanket PO)** allows you to take advantage of price breaks and terms by agreeing to a larger order quantity to be delivered in smaller increments over a set length of time as agreed with your vendor. It is normally used when there is a recurring need for the materials and supplies consumed regularly.

>[!NOTE]
>It is only used by the Planning and Scheduling modules for adding releases based on the Planned Purchase Orders in the **Planned Purchase Queue (PLNPOQ)** page.

**To specify the Purchase order line item as a Blanket PO**

1. Open the **Purchase Orders (PO)** page.

    - Select **Production Management** > **Production Transactions** > **Purchasing** > **Purchase Orders**.

        Or

    - Search for **PO** or **Purchase Orders** in the **Navigation box** and then select **Purchase Orders**.

       The **Purchase Orders (PO)** page appears.

2. Click the **Items** tab.

3. Open the purchase order by clicking on the **Item** hyperlink that requires recurring / multiple deliveries.

4. Select the **Blanket PO** check box.

5. On the **Toolbar**, click **Save**.

    The existing **Purchase Category** for the selected line item will be marked as a **Master Release (MR)**. You can click to add subsequent releases.

The following table provides the detailed functionality of **Blanket PO** check box:

| Action on Line Items When you try to...                                                           | Blanket PO check box    | Item Status  | PO Status                               | Purchase Category of Line Item | Result                                                                                                                                                                                      |
|---------------------------------------------------------------------------------------------------|-------------------------|--------------|-----------------------------------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Add a new line item                                                                               | Selected                | -            | -                                       | Any, except JO and SO          | Automatically sets the line as a Master Release with the JO or SO link                                                                                                                      |
| Add a new line item                                                                               | Selected                | -            | -                                       | JO / SO                        | Automatically sets the line as a Master Release and adds the first subsequent release                                                                                                       |
| Select the Blanket PO on existing line item                                                       | Selected                | Not Received | -                                       | Non-Master Release             | Converts the line to a Master Release                                                                                                                                                       |
| Select the Blanket PO on existing line item                                                       | Not Selected            | Received     | -                                       | Non-Master Release             | Does not allow to select the Blanket PO check box and conversion to a Master Release with a message "Item has been received or invoiced, change to Master Release/Blanket PO not allowed."  |
| Select the Blanket PO check box for a Subsequent Release item                                     | Not Selected            | -            | -                                       | Non-Master Release             | Blanket PO check box is disabled                                                                                                                                                            |
| Select the Blanket PO check box for an existing Master Release line item with Subsequent Releases | Selected                | -            | Started/Open/Awaiting Approval/On Hold  | Master Release                 | Allows to select the Blanket PO check box on the MR line                                                                                                                                    |
| Clear the Blanket PO check box for a Master Release line item without any Subsequent Releases     | Selected                | -            | Started                                 | Master Release                 | Master Release gets deleted                                                                                                                                                                 |
| Clear the Blanket PO check box for a Master Release line item without any Subsequent Releases     | Selected                | -            | Open                                    | Master Release                 | Does not allow to clear the Blanket PO check box with a message "Cannot remove Blanket PO for Master Release without subsequent release"                                                    |
| Copy a Subsequent Release item                                                                    | Not Selected            | -            | -                                       | -                              | Blanket PO check box value will not be applied to the copied Subsequent Release. The check box will be cleared                                                                              |
| Delete all Subsequent Releases of the Master Release                                              | Selected / Not Selected | -            | Started                                 | Master Release                 | Master Release gets deleted                                                                                                                                                                 |
| Delete a Subsequent Release                                                                       | Not Selected            | -            | Open                                    | Master Release                 | Revert Master Release to normal line item with original PO Category                                                                                                                         |
| Delete a Subsequent Release                                                                       | Selected                | -            | -                                       | Master Release                 | Master Release will remain unchanged and Subsequent Release will get deleted                                                                                                                |
|