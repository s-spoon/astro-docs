---
title: "Buyers Backlog"
draft: false

---

The **Buyers Backlog: <query name>** window helps a buyer to transfer an
approved requisition line to a purchase order. Using this window a buyer can
also reassign a requisition to another buyer.

Use the **Buyers Backlog: \<query name\>** window to search for and display
records related to all approved requisitions. These records appear in a grid.
Search within this window using a buyer code, a supplier code, or a
requisition number. If you don’t enter a value for any of the preceding
parameters, the search uses only the selection criteria of the selected query.

**Menu Path: Buyers Backlog**

To perform a search:

1. Select a **Query** from the drop-down list and click **Search**.

    The system displays all the requisitions for the selected query.

1. To search for a specific requisition, perform the following:
    1. Enter a full or partial value in the **Buyer** , **Supplier** , or **Requisition** fields. The value you enter becomes an add-on to the selection criteria built into the selected query. The more complete the description entered, the narrower the resulting search will be.

        > [!Note] By default, the **Buyer** list shows the default buyer’s code for a signed-in user.

    2. Click **Search**.</li>

        It displays a list of requisitions matching the selection criteria. See  and
-**Scenario 2** also.

## Buyers Backlog Search Screen Grid

In the **Buyers Backlog: <query name>** window, a list of requisitions matching the selection criteria will be displayed in the grid. See **Grid Operations** <add link here> for more details about the grid.

>[!Note] The **Buyers Backlog: \<query name>** window displays only approved requisitions.

## Action Bar

In the **Buyers Backlog**: **query name** window, you can select one or more of the displayed records to enable the action bar located at the top of the grid.
The **Buyers Backlog: query name** window stays open when you navigate to other windows using the action buttons. The actions buttons are:

  * Transfer Purchase Order: Opens a popup from where you can **[transfer](#transfer-purchase-order)** the selected requisition to a new or an existing purchase order.
  * Reassign Buyer: Opens the **Reassign Buyer** section in the **Buyers Backlog: \<query name\>** window from where you can [reassign](#reassign-buyer) the selected requisition to another buyer.

## Contextual Panel

In the **Buyers Backlog: query name** window, you can select a record to
enable the Contextual Panel located at the right of the window. The **Buyers
Backlog: query name** window stays open when you navigate to other windows using the Contextual Panel. The Contextual Panel consists of the following:

  * Requisition: Opens the requisition module for the selected requisition.
  * Supplier: Opens the supplier mode for the selected requisition.
  * Item: Opens the item module  for the selected requisition.

## Transfer a Requisition to a Purchase Order

The system allows you to create items. A buyer who wants to procure an item creates a requisition for the item. After approval, the system displays the requisition in the **Buyers Backlog: \<query name>** window. 

To buy the item, the buyer transfers a selected requisition to a new purchase order or to an existing purchase order. The system fills the information about the supplier in the new purchase order, and automatically creates a new line in the new purchase order or an existing purchase order.

To transfer a requisition to a purchase order:

  1. In the **Buyers Backlog: query name** window select the required requisition’s record.
  2. On the action bar, select **Transfer Purchase Order**.
  <br> The **Transfer Selected to Purchase Order** window appears.

  3. Perform one of the following:
     * Select **Create New Purchase Order**, and click the **Next** button to add the requisition to a new purchase order.
     * Select **Transfer to Existing Purchase Order** , select a purchase order number from the **Purchase Order** field, and click the **Transfer** button to add the requisition to an existing purchase order.

        > [!Important] The existing purchase order’s status needs to be **Open**.

  4. If you add the requisition to a new purchase order, the system displays the **Create Purchase Order** window.

      Create the new purchase order by following the steps 2 to 12 explained in the section **Create a New PUrchase Order** earlier in this chapter. The system adds the supplier information in the purchase order, and also adds a line. The system fills the line’s data from the selected requisition.

      If you add the requisition to an existing purchase order, the system displays the added line under the **Lines** tab in the **Purchase Order # \<purchase order number>** window.

      >[!Note] You may need to type any mandatory information for the line that the system adds. The **Details** section of the **Main** tab in the line module shows the requisition number in the **Requisition** field, and the req line value in the **Req Line** field.

## Reassign a Requisition

If you approve a requisition but assign it to the wrong buyer, the buyer can use the **Buyers Backlog: query name** window to reassign the requisition to
the correct buyer.

To reassign a requisition:

  1. In the **Buyers Backlog: \<query name>** window select the required requisition’s record.
  2. On the action bar, select **Reassign Buyer**. 

      The **Reassign Buyer** section appears.

  3. In the **Buyer** drop-down list, select the required buyer’s code.
  4. Click the **Save** button. If reassigned, **< nn> records updated successfully. Click here to view details.** message appears.

## Ready for Purchase

Ready for Purchase displays items that are ready to transfer to a purchase order or a RFQ. Users can search and select items.

To select an item that is ready for purchase,

  1. Navigate to **Buyers Backlog** > **Ready For Purchase**.

      The **Ready for Purchase** page appears.

  2. In the **Search** field, enter the search key and click the **SEARCH** button.

      The search result appears. Users can select an item to transfer to a purchase order or RFQ.

## Ready for Quote

Ready for Quote displays items that are selected for quote only. The items must go thru the RFQ process. Users can search and select items.

To select an item that is ready for quote,

  1. Navigate to **Buyers Backlog** > **Ready For Quote**.

      The **Ready for Quote** page appears.

  2. In the **Search** field, enter the search key and click the **SEARCH** button.

      The search result appears. Users can select an item to transfer to a RFQ.

## Ready for Analysis

Ready for Analysis displays items that have gone through the RFQ process or are past the due date for the quote. The lines will need to be analyzed to determine the supplier to award the bid. Users can search and select items.

To select an item that is ready for analysis,

  1. Navigate to **Buyers Backlog** > **Ready For Analysis**.

      The **Ready for Analysis** page appears.

  2. In the **Search** field, enter the search key and click the **SEARCH** button.

      The search result appears. Users can select an item for analysis.

## Ready for Approval

Ready for Approval list the RFQs that need approval before the RFQ can be sent
to a supplier. Users can search and select items.

To select an item that is ready for approval,

  1. Navigate to **Buyers Backlog** > **Ready For Approval**.

      The **Ready for Approval** page appears.

  2. In the **Search** field, enter the search key and click the **SEARCH** button.

      The search result appears. Users can select an item for approval.

## Ready For Shipment

Ready for Shipment list the shipping orders that are forward for approval and
not yet approved. Users can search and select items and reassign the buyer.

To reassign the buyer:

  1. From the left navigation pane, click **Buyers Backlog** , and **Ready For Shipment**.

  2. Select a record and then click the **REASSIGN BUYER** button from the Action bar.  
The **Reassign Buyer** section appears.

  3. From the **Buyer** drop-down menu, select the buyer and click **Save**.

      >[!Note] The buyer information will be updated in buyer for item, requisition, RFQ, and
shipping order modules. You can view the shipping order information in the All Backlog query. 

You can also reassign buyer for a shipping order, from Ready For Purchase, Ready For Quote, Ready For Analysis, Ready For Approval, Ready For Shipment,
and All Backlogs pages, in Buyer Backlog module.

## All Backlogs

You can search an item, form the entire backlog list from the All Backlog page.

To search select an item,

  1. Navigate **to Buyers Backlog** > **All Backlog**.

      The **All Backlog** page appears.

  2. In the **Search** field, enter the search key and click the **SEARCH** button.

      The search result appears. Users can select the respective item.

## Auto PO

If the Order Method is set to Auto PO for an item in **Inventory** > **Replenish Settings**. When a reorder requisition is generated for the item, it matches the item with the blanket order. If there is a matching blanket order, then task manager job picks the items and auto approves it.

## Transfer Purchase Order

You can transfer a requisition line to a new Purchase Order and transfer a requisition to an existing Purchase Order, in two different ways:

Navigation Path:

  * Buyers Backlog > Ready For Purchase

  * Buyers Backlog > Ready For Quote

### Transfer Requisition To New Purchase Order

To transfer a requisition to a new Purchase Order:

  1. From the left pane, click **Buyers Backlog** > **Ready For Purchase**. The **Ready For Purchase** page appears.

  2. Select the requisition to transfer the **Purchase Order** and click **TRANSFER PURCHASE ORDER** and click **NEXT**.  
The **Create Purchase Order** page appears.

  3. Enter the **Purchase Order ID** and click **NEXT**.  
The **Purchase Order** page appears.

  4. Enter the required details and click **CREATE**.

      >[!Note] The purchase order will be created using the selected requisition.

### Transfer Requisition To Existing Purchase Order

To transfer a requisition to an existing Purchase Order:

  1. From the left pane, click **Buyers Backlog** > **Ready For Purchase**. 
  
      The **Ready For Purchase** page appears.

  2. Select the requisition to transfer the **Purchase Order** and click **TRANSFER PURCHASE ORDER** and then click **NEXT**.  
    The **Create Purchase Order** page appears.

  3. Select the **Purchase Order ID** to which you want to transfer and click **NEXT**.  
      The **Purchase Order** page appears.

      You can transfer the requisition lines only if the purchase order is in open state.

  4. Enter/modify the required details and click **CREATE**.

      The purchase order will be created using the selected requisition.

## Transfer Requisition to RFQ

You can transfer a requisition to a new RFQ and transfer a requisition to an
existing RFQ, in two different ways:

Navigation Path:

  * Buyers Backlog > Ready For Purchase

  * Buyers Backlog > Ready For Quote

### Transfer Requisition To New RFQ

To transfer a requisition to a new RFQ:

  1. From the left pane, click **Buyers Backlog** > **Ready For Purchase**. The **Ready For Purchase** page appears.  
Or  
From the left pane, click **Buyers Backlog** > **Ready For Quote**. The
**Ready For Quote** page appears.

  2. Select the requisition to transfer it to the RFQ and click **TRANSFER TO RFQ**.  
The **Transfer Selected to Request For Quote** appears.

  3. Select the **Create New Request For Quote** option and click **TRANSFER**.  
The RFQ screen appears with the line information copied from the Requisition.

  4. From the **MAIN** tab, enter/modify the required **RFQ Details** , **Custom Information** , **Initial Text** , and **Final Text**.

  5. Click **CREATE**.

      The RFQ details will be saved and the status will be updated as Entered. The line information and the supplier information will be copied from the requisition. You can also add more LINES AND SUPPLIER to the RFQ.

  >[!Note]: If there is any document attached to the requisition then the document will be added to the RFQ.

### Transfer Requisition To Existing RFQ

You can transfer a requisition to an existing RFQ, in two different ways:

Navigation Path:

  * Buyers Backlog > Ready For Purchase

  * Buyers Backlog > Ready For Quote

You cannot transfer the requisition lines for closed or deleted RFQs.

To transfer a requisition to an existing RFQ:

  1. From the left pane, click **Buyers Backlog** > **Ready For Purchase**. The **Ready For Purchase** page appears.  
Or  
From the left pane, click **Buyers Backlog** > **Ready For Quote**. The
**Ready For Quote** page appears.

  2. Select the requisition to transfer it to the RFQ and click **TRANSFER TO RFQ**.  
The **Transfer Selected to Request For Quote** appears.

  3. Select the **Transfer to Existing Request For Quote** option.

  4. From the RFQ search field, search and select the RFQ. and click **TRANSFER**.  
The RFQ screen appears with the line information copied to the RFQ, from the
Requisition.

  5. From the **MAIN** tab, enter/modify the required **RFQ Details** , **Custom Information** , **Initial Text** , and **Final Text**.

  6. Click **CREATE**.

The RFQ details will be saved and the status will be updated as Entered. The line information and the supplier information will be copied from the
requisition. You can also add more LINES AND SUPPLIER to the RFQ.

>[!Note] : If there is any document attached to the requisition then the document will be added to the RFQ.

## REASSIGN BUYER

To reassign a buyer:

  1. From the left pane, click **Buyers Backlog** > **Ready For Purchase**. 
  
     The **Ready For Purchase** page appears.

  2. Select the requisition to which you want to reassign the buyer and click **REASSIGN BUYER**.  
The **Reassign Buyer** section appears.

  3. From the **Buyer** field, select the buyer and click **SAVE**.  
The selected buyer will be assigned to the requisition.

      If the line contains RFQ, requisition and shipping order, it will update the buyer to the item, requisition, RFQ, and shipping order. If only the requisition is present, then it will update the requisition. If only RFQ is present, it will update the RFQ buyer.

## Ready For Purchase - Contextual Panel

The Contextual Panel consists of the following:

  * **Requisition**: Opens the requisition module for the selected requisition.

  * **Item**: Open the item details for the selected requisition.

  * **Supplier**: Opens the supplier module for the selected requisition.

  * **RFQ**: Opens the RFQ module for the selected requisition.

## Ready For Quote - Contextual Panel

The Contextual Panel consists of the following:

  * **Requisition**: Opens the requisition module for the selected requisition.

  * **Item**: Open the item details for the selected requisition.

  * **Supplier**: Opens the supplier module for the selected requisition.

## Ready For Analysis - Contextual Panel

The Contextual Panel consists of the following:

  * **Requisition**: Opens the requisition module for the selected requisition.

  * **Supplier**: Opens the supplier module for the selected requisition.

  * **RFQ**: Opens the RFQ module for the selected requisition.

## Ready For Approval - Contextual Panel

The Contextual Panel consists of the following:

  * **Requisition**: Opens the requisition module for the selected requisition.

  * **Supplier**: Opens the supplier module for the selected requisition.

  * **RFQ**: Opens the RFQ module for the selected requisition.

## All Backlogs - Contextual Panel

The Contextual Panel consists of the following:

  * **Requisition**: Opens the requisition module for the selected requisition.

  * **Item**: Open the item details for the selected requisition.

  * **Supplier**: Opens the supplier module for the selected requisition.

  * **RFQ**: Opens the RFQ module for the selected requisition.

