---  

title: "Create RFQ"  
draft: false 
type: Article

---

You can create RFQ in three different ways:

Navigation Path:

  * **Request For Quote** > **Create RFQ**

  * **Request For Quote** > **Request For Quote** > **NEW**

To create a RFQ:

  1. From the left pane, click **Request For Quote** > Create **RFQ**.  
    Or  
    Navigate to the RFQ search screen, click **NEW**.  
    The **Create RFQ** screen appears.

  2. Enter the **RFQ ID**. 

      >[!note]
      >If you don’t enter the RFQ number, it will be generated automatically when you complete the process.

  3. If you want to copy some details from the existing RFQ, in the **RFQ to Copy** field, enter the RFQ number from which copy and select the required options.

      >[!note]
      >You can copy **Initial Text** , **Final Text** , **Custom Fields** , **Line Items** , and **Supplier** from an existing RFQ.

  4. Click **NEXT**. The RFQ screen appears with the selected information copied from the selected RFQ.

  5. From the **MAIN** tab, enter/modify the required the **RFQ Details** , **Custom Information** , **Initial Text** , and **Final Text**.

  6. Click **CREATE**.

The RFQ details will be saved and the status will be updated as **Entered**.
Note that if you have entered RFQ number in the Create RFQ screen, it will be generated automatically.

After creating a RFQ, you need to add **LINES** and **SUPPLIER** to the RFQ.

>[!note]
>You can configure the Request for Quote Numbering, from **Setup** > **Setup Options** > **Purchasing Setup Options** > **Numbering Methods** > **Request for Quote Numbering**.

### Add LINE

You can add lines in the following different ways.

Navigation Path:

  * RFQ > LINES tab > NEW LINE

  * RFQ > LINES tab > INVENTORY SEARCH (contextual pane)

  * RFQ > LINES tab > HIERARCHY (contextual pane)

  * RFQ > LINES tab > REQUISITION SEARCH (contextual pane)

  * RFQ > LINES tab > PO SEARCH (contextual pane)

  * RFQ > LINES tab > RFQ SEARCH (contextual pane)

#### Add Line From RFQ Screen

To add a LINE from the RFQ screen:

  1. Navigate to the RFQ.

  2. Click the **LINES** tab and click **NEW LINE**. The Add New Line Item section appears.

  3. Search and enter the Item Number and Item Type.

  4. Click **RFQ SEARCH** from the contextual pane. The **RFQ** page appears.

  5. Search and select the **RFQ** from which you want to import the Item lines.

      >[!note]
      >You can select multiple items and import the lines.

  6. Click **IMPORT**. All the lines will be imported and added to the RFQ.

>[!note]
>To quickly add another line after adding this line, click **ADD** **ANOTHER** instead of **ADD**.

#### Add Line From INVENTORY SEARCH Contextual Pane

To add a LINE from the right contextual pane:

  1. Navigate to the RFQ and click the **LINES** tab.

  2. Click **INVENTORY SEARCH** from the contextual pane. The **Inventory** page appears.

  3. Search and select the item from which you want to import the lines.

      >[!note]
      >You can select multiple items and import the lines.

  4. Click **IMPORT**. All the lines will be imported and added to the RFQ.

  5. A caution icon will be displayed in the RFQ Line row, if any information of the imported line is missing. Hover the caution icon to view the error message.

  6. You can navigate to the **DETAILS** page and update the missing information.

      >[!note]
      >The line item Qty will be updated based on the item **USAGE** > **Grand Total**. If the item **USAGE** data is not available then the Qty will not be updated during the import.

#### Add Line From HIERARCHY Contextual Pane

To add a **LINE** from the right contextual pane:

  1. Navigate to the RFQ and click the LINES tab.

  2. Click HIERARCHY from the contextual pane. The hierarchy page appears.

  3. Select the hierarchy item (Equipment, Serial, Catalog, Stock, and MPN) using which you want to search and add the line.

  4. Search and select the hierarchy information and click GO.  
The hierarchy available will be displayed.

  5. Select the item from the hierarchy.

  7. Click Import. All the lines will be imported and added to the RFQ.

  8. A caution icon will be displayed in the RFQ Line row, if any information of the imported line is missing. Hover the caution icon to view the error message.

  9. You can navigate to the DETAILS page and update the missing information.

      >[!note]
      >The line item Qty will be updated based on the item USAGE > Grand Total. If the item USAGE data is not available then the Qty will not be updated during the import.

#### Add Line From REQUISITION SEARCH Contextual Pane

To add a LINE from the right contextual pane:

  1. Navigate to the RFQ and click the **LINES** tab.

  2. Click **PO SEARCH** from the contextual pane. The **Requisition** page appears.

  3. Search and select the item from which you want to import the lines.

      >[!note]
      >You can select multiple items and import the lines.

  4. Click **IMPORT**. All the lines will be imported and added to the RFQ.

  5. A caution icon will be displayed in the RFQ Line row, if any information of the imported line is missing. Hover the caution icon to view the error message.

  6. You can navigate to the **DETAILS** page and update the missing information.

>[!note]
>The supplier associated with the imported requisition will be added to the
current RFQ.

#### Add Line From PO SEARCH Contextual Pane

To add a LINE from the right contextual pane:

  1. Navigate to the RFQ and click the **LINES** tab.

  2. Click **PO SEARCH** from the contextual pane. The **Purchase Order** page appears.

  3. Search and select the item from which you want to import the lines.

      >[!note]
      >You can select multiple items and import the lines.

  4. Click **IMPORT**. All the lines will be imported and added to the RFQ.

  5. A caution icon will be displayed in the RFQ Line row, if any information of the imported line is missing. Hover the caution icon to view the error message.

  6. You can navigate to the **DETAILS** page and update the missing information.

  
>[!note]
>The line item Qty will be updated based on the item **USAGE** > **Grand Total**. If the item USAGE data is not available then the Qty will not be updated during the import.  
If the item on the purchase order has been already marked as closed, then that item will not be allowed to import.

#### Add Line From RFQ SEARCH Contextual Pane

To add a LINE from the right contextual pane:

  1. Navigate to the RFQ and click the **LINES** tab.

  2. Click **RFQ SEARCH** from the contextual pane. The **Request For Quote** page appears.

  3. Search and select the item from which you want to import the lines.

      >[!note]
      >You can select multiple items and import the lines.

  4. Click **IMPORT**. All the lines will be imported and added to the RFQ.

  5. A caution icon will be displayed in the RFQ Line row, if any information of the imported line is missing. Hover the caution icon to view the error message.

  6. You can navigate to the **DETAILS** page and update the missing information.

>[!note]
>The line item Qty will be updated based on the item **USAGE** > **Grand Total**. If the item USAGE data is not available then the Qty will not be updated during the import.

### Delete LINE

To delete LINES:

  1. Navigate to the RFQ.

  2. Click the **LINES** tab and select the line to be deleted.

  3. Click **DELETE LINE**. A confirmation dialog box appears.

  4. Click **Yes**.

>[!note]
>You cannot delete a line if it is approved, already deleted, or sent to supplier.

### Add SUPPLIER

You can add supplier to a RFQ, from the **RFQ** > **SUPPLIER** tab. To add a
Supplier from the RFQ screen:

  1. Navigate to the RFQ.

  2. Click the **SUPPLEIR** tab and click **NEW**. The **Add New Supplier** section appears.

  3. Search and select the **Supplier**. The **Supplier** details will be populated.

  4. If the **Contact Email Address** is different from the **Supplier Email Address** , a confirmation dialog box appears. Click **Yes** to use the **Contact Email Address**.

      >[!note]
      >You cannot add a supplier that already exists in the RFQ.

  5. Turn on the **Tabsource** toggle button, to send the RFQ information to the supplier through Tabsource.

      >[!note]
      >After adding the supplier, you can see the tick icon in the Tabsource column
for this supplier.

  6. Incase, **Email** is configured in the Tabsource, click the **TABSOURCE EMAIL FOR RFQ** option. The **TabSource Emails** dialog box appears. 

  7. Modify/Enter the required email address and click **SAVE**.

  8. Turn on the **Via Email** toggle button, to send the RFQ information to the supplier through the configured Email Address.

  9. Turn on the **TabSource** toggle button, to send the RFQ information to the supplier using TabSource.

  10. Enter the supplier Telephone number.

  11. Click **ADD** to add the supplier.

To view and edit the details of a supplier, select the supplier, and click
**DETAILS** from the right pane.

#### Supplier Action Bar

You can perform the following action for the supplier added to the RFQ:

  * ADD

  * EDIT 

  * DELETE

  * PRINT PREVIEW

  * ISSUE OFFICIAL RFQ

  * PRINT WORKING COPY

  * ENTER BID

  * DECLINE TO BID

  * ADD POTENTIAL SUPPLIER

##### EDIT

To edit the supplier detail:

  1. Select the supplier and click **EDIT**. The **Edit Supplier** section appears.

  2. Edit and update the details required.

  3. Click **SAVE**.

##### DELETE

To delete a supplier:

  1. Navigate to the RFQ.

  2. Click the **SUPPLIER** tab and select the supplier to be deleted.

  3. Click **DELETE**. A confirmation dialog box appears.

  4. Click **Yes**.

>[!note]
>You can delete a supplier only when the supplier status is Entered.

##### PRINT PREVIEW

To view the print preview the RFQ for a supplier:

  1. Navigate to the RFQ.

  2. Click the **SUPPLIER** tab and select the supplier to be previewed.

  3. Click **PRINT PREVIEW**. The PDF preview will be generated for the selected supplier.

##### ISSUE OFFICIAL RFQ

You can issue official RFQ to a supplier, to review and provide bid
information:

  1. Navigate to the RFQ.

  2. Click the **SUPPLIER** tab and select the supplier to issue official RFQ.

  3. Click **ISSUE OFFICIAL RFQ**. A Buyer Comments dialog box appear When the Tabsource toggle button is turned ON for that supplier. 

  4. Enter your comments and click **CONTINUE**.

      A popup appears prompting to print a hard copy of the RFQ.

  5. Click **Yes** to print and No to cancel printing. The RFQ will be issued to the supplier.

  
>[!note]
>If you need an approval before sending the RFQ to the supplier, then you must turn ON the Request for Quotes must be approved before being sent to Suppliers setup option. To directly send it to the supplier, turn off this setup option.  
The RFQ status will be changed to ApprToSend, if the Request for Quotes must be approved before being sent to Suppliers is turned on.  
The RFQ status will be changed to SentToSupplier, if the Request for Quotes must be approved before being sent to Suppliers is turned off.  
When the official RFQ is issued, the RFQ status will be changed to Sent.

##### ENTER BID

After send the RFQ to a supplier, you can enter the bid according to your
requirement.

To enter bid to a supplier:

  1. Navigate to the RFQ.

  2. Click the **SUPPLIER** tab and select the supplier to enter the bid.

  3. Click **ENTER BID**. The **Supplier Bid Entry** page appears.

  4. Update the basic details in the **HEADER** tab.

  5. After entering all the details click the **Create** Button. The bid will be created and the supplier status will be changed to Responded.

  6. Update the line details in the **LINES** tab.

  7. Select item line and click the **Enter Bid Information** button. The item bid details pop-up will be displayed.

      >[!note]
      >You can bid or decline by selecting the Bid radio button.

  8. To enter the bid details, click the **Bid** radio button and enter the bid details such as Bid Qty, package, Unit cost, etc.,

>[!Note] 
>From the contextual pane, you can add documents to the bid entry from
the **HEADER** page, as well as you can add documents for each line from
**LINES** page.

##### DECLINE TO BID

To decline the bid for a supplier:

  1. Navigate to the RFQ.

  2. Click the **SUPPLIER** tab and select the supplier to decline.

  3. Click **DECLINE TO BID**. The status of the supplier will be changed to **Declined**.

### Contextual Panel

This section contain the information contextual items available in **MAIN** ,
**LINES** , and **SUPPLIER** tabs.

#### Contextual Panel for LINES Tab

In the RFQ > LINES tab, you can select a record to enable the Contextual Panel
located at the right of the window. The RFQ > LINES remains open when you jump
to other windows using the Contextual Panel. When multiple items are selected,
the contextual buttons will be disabled. The Contextual Panel consists of the
following:

  * DETAILS

  * BID EVALUATION

  * DOCUMENTS

  * ACTIVITY LOG

  * INVENTORY SEARCH

  * HIERARCHY

  * REQUISITION SEARCH

  * PURCHASE ORDER

##### DETAILS

You can view and edit the details of a line from the **DETAILS** section.

To edit the details of a line:

  1. Select the line, and click **DETAILS** from the right contextual pane.

  2. The detail of the line appears. Click **EDIT**.

  3. Edit and update the required details.

  4. Click **SAVE**.

##### DOCUMENTS

You can attach documents to the Lines form the **DOCUMENTS** section.

###### Attach New Document

To attach a document:

  1. Select the line, and click **DOCUMENTS** from the right contextual pane.  
The documents attached to the line appears.

  2. Click the **NEW** button. The Add a New Document dialog box appears.

  3. You can upload a document from: APTEAN ADP, APTEAN DMS, EXTERNAL URL, and LOCAL.

  4. Search and select the required document from your preferred location.

  5. Click **ADD**. The document will be attached to the line.

  
>[!note]
>You can view, edit, and delete the attached documents.  
After attaching a document, you can upload the document to Tab Source, to make it available to view in Tab Source. To upload this document to Tab Source, select the Upload To Tab Source column check box for the respective line. Only
the ADP and External docs can be checked, which will be visible in TabSource.

###### COPY REQ DOCS

When a line is copied from requisition, all the documents associated with the
line can be copied using the COPY REQ DOCS button. If there are no documents
associated with the selected line, then the COPY REQ DOCS button will be
disabled.

To copy REQ DOC:

  1. Select the line, and click **DOCUMENTS** from the right contextual pane.  
The documents attached to the line appears.

  2. Click the **COPY REQ DOCS** button. A confirmation dialog box appears.

  3. Click **Yes** to copy the requisition docs.

##### ACTIVITY LOG

You can navigate to the right pane and click ACTIVITY LOG to view the complete
activity of each RFQ line item.

To add an activity for a line:

  1. Select the line and click the **ACTIVITY LOG** icon.

  2. In the Activity Log section, click the **NEW** button.  
The **Add Activity** section appears.

  3. Select the Activity.

  4. Enter/Select the RFQ Line.

  5. Enter the comments and click **ADD**. The activity will be recorded in the **Activity Log**.

>[!note]
>Line 0 is referred to as activity entered at RFQ level.

#### Contextual Panel for SUPPLIER Tab

In the RFQ > **SUPPLIER** tab, you can select a record to enable the
Contextual Panel located at the right of the window. The RFQ > **LINES**
remains open when you jump to other windows using the Contextual Panel. When
multiple items are selected, the contextual buttons will be disabled. The
Contextual Panel consists of the following:

  * BID EVALUATION

  * SUPPLIER

##### BID EVALUATION

To evaluate the bid:

  1. Navigate to the **SUPPLIER** tab of the RFQ.

  2. From the right contextual pane, click **BID EVALUATION**.

  3. The **Bid Evaluation** page appears, which contains the following sections:

  * RESPONSE SUMMARY

  * ITEM EVALUATION

  * SUPPLIER RESPONSES

  * SUPPLIER BID SUMMARY

###### RESPONSE SUMMARY

This section displays the details of the response and the supplier who have
responded will be selected automatically.

###### ITEM EVALUATION

This section displays the item information. You can select an item for which
you want to see the supplier bid summary. The awarded item line will be
highlighted in green.

UNAWARD ITEM

To unaward an already awarded item:

  1. From the **ITEM EVALUATION** section, select the item and click **UNAWARD ITEM**. 

  2. A confirmation pop-up appears. Click **Yes** to confirm.

The item will be unawarded.

>[!note]
>The unawarded item will also be removed from the Ready for Purchase page.

DO NOT AWARD ITEM

You can use this option for an item that you do not want it to be awarded to
any supplier.

To mark an item to do not award items:

  1. From the **ITEM EVALUATION** section, select the item and click **DO NOT AWARD ITEM**. 

  2. A confirmation pop-up appears. Click **OK** to confirm.

The item will be marked to **DO NOT AWARD ITEM**.

RE-OPEN ITEM LINE

To re-open an item line that has been marked as **DO NOT AWARD ITEM** ,
perform the following:

  1. From the **ITEM EVALUATION** section, select the item that you want to reopen and click **RE-OPEN ITEM LINE**. 

  2. A confirmation pop-up appears. Click OK to unmark the item from **DO NOT AWARD ITEM**.

###### SUPPLIER RESPONSES

The Supplier Responses section displays the supplier bid information of the
item.

AWARD ITEM

To award an item:

  1. From the Supplier Responses section, select the supplier and click **AWARD ITEM**. 

  2. The item will be awarded and the item line will be highlighted in green, in the **ITEM EVALUATION** section.

  
>[!note]
>The awarded item will also be added to the Ready for Purchase page, which enables the user to transfer that item to purchase order.  
If the RFQ line is copied from requisition, and if the item is awarded, then the awarded bid values will be copied to the unapproved requisition lines, to sync both the RFQ and Requisition. This sync will be processed based on the
Setup configuration (Copy Awarded Bid Values to Unapproved Requisition Lines).  
From the Supplier Responses section, you can reaward an item that is already awarded to another supplier. If you reaward an item to another supplier, the award will be removed from the previous supplier and awarded to the new supplier.

AWARD ALL ITEMS TO THIS SUPPLIER

To award all items to a selected supplier:

  1. From the Supplier Responses section, select the supplier and click the **AWARD ALL ITEMS TO THIS SUPPLIER**. 

  2. A confirmation pop up appears.

  3. Click **Yes** to award all the proper items to the selected supplier. 

The proper items will be awarded and a result report will be generated to view
the details of the awarded items.

UPDATE CURRENT PRICE

To update the current price of the item to the inventory:

  1. From the Supplier Responses section, select the supplier and click **UPDATE CURRENT PRICE**. 

  2. The current price of the item will be updated to the inventory.

###### SUPPLIER BID SUMMARY

This section displays the supplier bid summary that summaries the supplier bid
information based on each supplier. The summary highlights all suppliers who
have changed the original field value when entering their bid for FOB,
Freight, and Payment Terms.

##### BID EVALUATION ACTIONS

This section describes how to forward a line item for approval and how to
approved a forwarded item for purchase.

###### FORWARD FOR APPROVAL

Once an item is ready for purchase, you can send the RFQ line item for another
buyer for review. To forward the approval:

  1. In the **ITEM EVALUATION** section, select the awarded line item.

  2. Click the **ACTION** at the top right of the page and click **FORWARD FOR APPROVAL**.  
The **Forward for Approval** popup appears.

  3. From the Buyer drop-down list select the Buyer and click **SAVE**. The awarded line item will be moved to the **Buyer’s Backlog** > **Ready for Approval** page.

###### APPROVE FOR PURCHASE

If you have received any item for approval, then you can approve it using the
following procedure:

  1. In the **ITEM EVALUATION** section, select the line item forwarded for approval.

  2. Click the **ACTION** at the top right of the page and click **APPROVE FOR PURCHASE**.

The line item will be moved to the **Buyer’s Backlog** > **Ready for
Purchase** page.

##### Contextual Panel for BID EVALUATION

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

## RFQ Actions

From the top right of the screen, you can see the **ACTIONS** button, using
which you can perform the following RFQ actions:

  * APPROVE TO SEND: Click APPROVE TO SEND to ask approval for the RFQ, before sending it to the supplier. The RFQ status will be changed to ApprToSend. You cannot change the details of the supplier and lines when the RFQ status is ApprToSend.

  * CANCEL APPROVE TO SEND: After sending the RFQ for approval, if you want to change any details of the supplier or line items, then you have to cancel the request for approval. Click CANCEL APPROVE TO SEND to cancel the request for approval. The RFQ status will be changed to Entered.

  * PRINT PREVIEW: Click this button to generate a PDF file for preview. The preview will have the RFQ details for all suppliers.

  * PRINT WORKING COPY

  * ISSUE OFFICIAL RFQ TO ALL SUPPLIERS: Select the RFQ and click this button to issue official RFQ to all the suppliers. A result report will be generated to view the details of the imported RFQ.

  * PREVIEW BID EVALUATION: Click this button to generate a PDF file for preview. The preview will have the bid evaluation for all suppliers.

  * PRINT BID EVALUATION: Click this button to print the bid evaluation for all suppliers.

  * CLOSE: You can close a RFQ when it is marked as Awarded and transferred to a PO or Awarded as Do Not Award. Click CLOSE to close the RFQ. The status will be changed to Closed.

  * REPOPEN: If you want to reopen a closed RFQ, click REOPEN. The status will be changed to Re-Open.

  * DELETE: Click DELETE to delete the RFQ. The status will be changed to Deleted. Note that you cannot delete a RFQ if it is approved, already deleted, or sent to supplier.

  * CANCEL DELETION: If you want to make a deleted RFQ available, then click CANCEL DELETION. The status will be changed to Entered. 

