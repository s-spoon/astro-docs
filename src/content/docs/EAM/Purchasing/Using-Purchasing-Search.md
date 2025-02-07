---
title: "Using Purchasing Search"
draft: false

---

You can search for purchase orders and display their related records using the **Purchase Order Search** window. From the list of purchase orders displayed, you can click a purchase order’s hyperlink, or select the required purchase order and click **Details** in the Contextual Panel to access the module that contains detailed information about the selected purchase order.

The **Purchase Order Search** window allows you to search by purchase order number or item. Only if you have access to the **Purchase Order Search** window then you can search purchase orders.

If the purchase order number field is empty or item, the search uses the selection criteria of the selected query. 
To perform a search:

1.  Select a **Query** from the drop-down list and click **Search**.

    The system displays all the purchase orders for the selected query.

1.  To search for a specific purchase order, perform the following:

    1.  Enter a full or partial value in the **Purchase Order #** or the **Item** field.    The value you enter is an add-on to the selection criteria built into the selected query. The more detailed description will the targeted search results.

    2. Click **Search**.

        It displays a list of purchase orders matching the selection criteria. See Generic Components and Troubleshooting **Scenario 2** also.
    
**Purchase Order Search Screen Grid**

In the **Purchase Order Search** window, a list of purchase orders matching the selection criteria will be displayed in the grid. See Grid Operations for more details about the grid.

**Action Bar**

On the **Purchase Order Search** window, you can select one or more of the displayed records to enable the action bar located at the top of the grid. The **Purchase Order Search** window stays open when you navigate to other windows using the action buttons. The actions buttons are:

-   **New Purchase Order**: Open a **Create Purchase Order** window from where you can create a new purchase order. You can create a new purchase order, only if you have access to create.
-   **Issue**: Opens a popup to issue the selected purchase order with the status **Open** to the supplier. If you try to issue a purchase order with the status **Issued**, the system displays a message that states the purchase order is already issued.
-   **Close**: Opens a popup to close the selected purchase order with the status **Issued**. If you try to close a purchase order with the status **Open** or **Closed**, the system displays an appropriate message that states the purchase order isn't issued or is already closed.
-   **Reopen**: Opens a popup to reopen the selected purchase order with the status **Closed**.
-   **Delete**: Opens a popup to [delete](#delete-a-purchase-order) the selected purchase order. If you try to delete a purchase order with the status **Deleted**, the system displays a message that states the purchase order is already deleted.
-   **Print**: Opens a popup to [print](Create-a-New-Purchase-Order.md#print-a-purchase-order) the selected purchase order.

**Contextual Panel**

On the **Purchase Order Search** window, you can select a record to enable the Contextual Panel located at the right of the window. The **Purchase Order Search** window stays open when you navigate to other windows using the Contextual Panel. The Contextual Panel consists of the following:

-   **Details**: Opens the [purchase order module](Using-the-Purchase-Order-Module.md) for the selected purchase order.
-   **Documents**: Opens the **Document** window that contains all the reference documents attached for the selected line of a purchase order. For more information, see Documents in the chapter “Appendices.”
-   **Hierarchy**: Opens the **Hierarchy: \<item name\>** window that shows the items associated with the item shown in the purchase order record’s Item column.
-   **Item**: Opens the item module for a selected line of a purchase order.
-   **Supplier**: Opens the supplier module for the selected purchase order.
-   **[PO Receipts](Create-a-New-Purchase-Order.md#receive-items)**: Opens the **PO Receipts** window for a selected purchase order. If you try to display the **PO Receipts** window for a purchase order with the status **Closed** or **Deleted**, the system displays an appropriate message.

    **When you open PO Receipts, - TERMS, LINES, TEXT, TOTALS information are missing**

-   **[Activity Log](Create-a-New-Purchase-Order.md#view-the-activity-log)**: Open the activity log module for the selected purchase order.
-   **Shipping Order**: Opens the Shipping Order windows for the selected purchase order. On the contextual pane, click Shipping Order, you can view the shipping order details for each line.
Note that you cannot delete a purchase order line when it is added to a shipping order. In the contextual pane, the contextual icons are enabled based on the user’s security access.

### Delete a Purchase Order

You can delete a purchase order from the **Purchase Order Search** window. To delete a purchase order:

1.  On the **[Purchase Order Search](Using-Purchasing-Search.md)** window, select a purchase order to delete.

2.  On the action bar, click **Delete**.

    A message appears: **Are you sure you want to delete?** with the following buttons:

    -   **Yes**: Click this to delete the purchase order.
    -   **No**: Click this to cancel the purchase order’s deletion.
    
        >[!Note] 
        >You cannot delete an **Issued purchase order**, but you can close and reopen it.