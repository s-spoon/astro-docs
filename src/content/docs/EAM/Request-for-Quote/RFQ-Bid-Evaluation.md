---  

title: "RFQ Bid Evaluation"  
draft: false 
type: Article

---

The Request For Quote module allows the user to evaluate the RFQ Bid.

To evaluate the bid:

  1. From the left pane click **Request for Quote** and click **RFQ Bid Evaluation**.

  2. Search and select the required RFQ and then click **NEXT**. 

The **Bid Evaluation** page appears, which contains the following sections:

  * RESPONSE SUMMARY

  * ITEM EVALUATION

  * SUPPLIER RESPONSES

  * SUPPLIER BID SUMMARY

## Response Summary

This section displays the details of the response and the supplier who have
responded will be selected automatically.

## Item Evaluation

This section displays the item information. You can select an item for which
you want to see the supplier bid summary. The awarded item line will be
highlighted in green.

### Unaward Item

To unaward an already awarded item:

  1. From the **ITEM EVALUATION** section, select the item and click **UNAWARD ITEM**. 

  2. A confirmation pop-up appears. Click **Yes** to confirm.

The item will be unawarded.

>[!note]
>The unawarded item will also be removed from the Ready for Purchase page.

### Do Not Award Item

You can use this option for an item that you do not want it to be awarded to
any supplier.

To mark an item to do not award items:

  1. From the **ITEM EVALUATION** section, select the item and click **DO NOT AWARD ITEM**. 

  2. A confirmation pop-up appears. Click **OK** to confirm.

The item will be marked to **DO NOT AWARD ITEM**.

### Re-Open Item Line

To re-open an item line that has been marked as **DO NOT AWARD ITEM** ,
perform the following:

  1. From the **ITEM EVALUATION** section, select the item that you want to reopen and click **RE-OPEN ITEM LINE**. 

  2. A confirmation pop-up appears. Click OK to unmark the item from **DO NOT AWARD ITEM**.

## Supplier Responses

The Supplier Responses section displays the supplier bid information of the
item.

### Award Item

To award an item:

  1. From the Supplier Responses section, select the supplier and click **AWARD ITEM**. 

  2. The item will be awarded and the item line will be highlighted in green, in the **ITEM EVALUATION** section.

  
>[!note]
>The awarded item will also be added to the Ready for Purchase page, which enables the user to transfer that item to purchase order.  
If the RFQ line is copied from requisition, and if the item is awarded, then the awarded bid values will be copied to the unapproved requisition lines, to sync both the RFQ and Requisition. This sync will be processed based on the
Setup configuration (Copy Awarded Bid Values to Unapproved Requisition Lines).  
From the Supplier Responses section, you can reaward an item that is already awarded to another supplier. If you reaward an item to another supplier, the award will be removed from the previous supplier and awarded to the new supplier.

### Award All Items To This Supplier

To award all items to a selected supplier:

  1. From the Supplier Responses section, select the supplier and click the **AWARD ALL ITEMS TO THIS SUPPLIER**. 

  2. A confirmation pop up appears.

  3. Click **Yes** to award all the proper items to the selected supplier. 

The proper items will be awarded and a result report will be generated to view
the details of the awarded items.

### Update Current Price

To update the current price of the item to the inventory:

  1. From the Supplier Responses section, select the supplier and click **UPDATE CURRENT PRICE**. 

  2. The current price of the item will be updated to the inventory.

## Supplier Bid Summary

This section displays the supplier bid summary that summaries the supplier bid
information based on each supplier. The summary highlights all suppliers who
have changed the original field value when entering their bid for FOB,
Freight, and Payment Terms.

# Bid Evaluation Actions

This section describes how to forward a line item for approval and how to
approved a forwarded item for purchase.

## Forward For Approval

Once an item is ready for purchase, you can send the RFQ line item for another
buyer for review. To forward the approval:

  1. In the **ITEM EVALUATION** section, select the awarded line item.

  2. Click the **ACTION** at the top right of the page and click **FORWARD FOR APPROVAL**.  
The **Forward for Approval** popup appears.

  3. From the Buyer drop-down list select the Buyer and click **SAVE**. The awarded line item will be moved to the **Buyer’s Backlog** > **Ready for Approval** page.

  >[!note]   
  > The **Forward for Approval** button will remain enabled unless the RFQ is deleted or closed.

## Approve For Purchase

If you have received any item for approval, then you can approve it using the
following procedure:

  1. In the **ITEM EVALUATION** section, select the line item forwarded for approval.

  2. Click the **ACTION** at the top right of the page and click **APPROVE FOR PURCHASE**.

The line item will be moved to the **Buyer’s Backlog** > **Ready for
Purchase** page.

# Contextual Panel For Bid Evaluation

In the **BID EVALUATION** page, you can select a record to enable the
Contextual Panel located at the right of the window. The **BID EVALUATION**
remains open when you jump to other windows using the Contextual Panel. When
multiple items are selected, the contextual buttons will be disabled. The
Contextual Panel consists of the following:

  * BID DETAILS: Displays the Supplier Bid Entry details. From this page, you can enter a bid for a line item, and also decline a bid line item.  
DOCUMENTS: Displays the documents enter in bid entry screen.

  * RFQ TEXT: Displays the Initial and Final text entered in RFQ Main tab.

  * LAST AWARDS: Displays the items that are previously awarded in RFA and then transferred to PO.

  * COMMENTS: Displays the comments added.

