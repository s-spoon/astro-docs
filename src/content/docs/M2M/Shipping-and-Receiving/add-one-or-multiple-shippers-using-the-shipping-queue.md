---
title: "Add one or multiple shippers using the shipping queue"
draft: false
type: Article
---

After you set filter options for adding multiple shippers, you can add one or multiple shippers using the shipping queue. The **Shipping Queue** page displays sales order items available for shipment.

The filter options that display at the top of the window are dependent on the options checked on the **Setup Shipping Queue Filter** **(SCIFSET)** page.

If a column heading is underlined, you can double-click to sort by that column.

## To add one or multiple shippers using the shipping queue

1. Open the **Shipping Queue (SCIFS)** page.

   1. Select **Production Management** > **Production Transactions** > **Shipping > Shipping Queue**.

        Or

   2. Search for **SCIFS** or **Shipping Queue** in the **Navigation box** and then select **Shipping Queue**.

        **Shipping Queue (SCIFS)** page appears.

2. Locate items to ship:

   - To manually locate the items you want to ship, scroll through the list.

   - To filter the list of items available for shipment, select information in one or more of the filter boxes and click the **Refresh List** on the toolbar.

   - To apply filter, click **Apply Filter** on the child toolbar.

   - To clear filters, click the **Clear Filters** on the child toolbar and then click the **Refresh List** on the **Toolbar**.

        The quantity that displays in the **Available For Shipment** column is dependent on the setting chosen on the **Setup Shipping Queue Filter (SCIFSET)** page. If you select the **Avail To Ship Excludes Qty Not Yet Received/completed** check box, the quantity will only include **Buy parts** that have been received and not returned, and **Make parts** where the last job operation has been completed. If this check box is not selected, then all parts on open **Purchase Orders** and **Job orders** are included in the **Avail To Ship Excludes Qty Not Yet Received/completed**.

3. To combine sales orders for a customer on a single shipper, select the **Combine Sales Orders** check box in the **Setup Shipping Queue Filter (SCIFSET)** page. The following fields on the **Sales Order** must be the same on all sales orders you are combining. If they are not the same, the shipper will not be created.

| Customer                | Pay Type (Cash, COD, Terms) |
|-------------------------|-----------------------------|
| Shipping Address        | Terms                       |
| Ship Via                | Total Order Discount        |
| Currency                | FOB                         |
| Currency Factor         | Salesperson                 |
| Currency Effective Date | Commission Rate Percent     |

4. Select items to ship:

   - To select an item, select the check box in **Select** column.

   - To select all items, click the **Select** check box on the column header.

   - To unselect all items, clear the **Select** check box on the column header.

   - To print shipping documents at the time shippers are added, select the **Print Shipping List For All Selected Shippers** check box. If the check box is not selected, no shipping documents will print when shippers are added.

5. To create shippers, click **Create New Shippers** on child toolbar.

    A message, *Are you sure you want to create new shippers?* appears.

1. Click **Proceed** to continue with shipper creation even though the Sales Orders will not be combined.

2. If you select the **Combine Sales Orders** check box, a message will display if the Sales Orders cannot be combined because some of the required fields are not the same (See **step 2 - NOTE**). You have the following options:

   - **Proceed**

   - **Cancel:** Cancel the process without creating any shippers, and return to the **SCIFS** window.

   - **More Info:** Displays a window that shows which Sales Orders cannot be combined. You will have the options to **Proceed** or **Cancel** from that window.

        The next step is to set filter options for confirming shippers.

​