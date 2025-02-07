---  

title: "Create Shipping Order"  
draft: false 
type: Article

---

Users can create a new shipping order or transfer item lines to an existing shipping order from requisition, purchase order and repair log.

Menu Path:

-   Inventory \> Create Shipping Order
-   Inventory Search \> NEW SHIPPING ORDER
-   Inventory \> Repair Log \> CREATE SHIPPING ORDER
-   Requisition Search \> CREATE SHIPPING ORDER
-   Requisition Search \> Requisition \> LINES \> CREATE SHIPPING ORDER
-   Purchasing \> Purchase Order Search \> CREATE SHIPPING ORDER
-   Purchasing \> Purchase Order Search \> Purchase Order \> LINES \> CREATE SHIPPING ORDER

## Create shipping Order from Inventory

The Create Shipping Order window allows you to add a new shipping order. To create a new item, perform the following:

1.  From the left navigation menu, click Inventory \> Create Shipping Order.   
Or

    In the Inventory Search screen, click NEW SHIPPING ORDER from the action bar. The Shipping Order window appears.

2.  In the MAIN tab, enter the Shipping Oder Details:
    1.  Shipping Order Number: Enter a number for the shipping order. The shipping order name will be saved based on the Shipping Order Numbering configuration. If the Allow Entry of Shipping Order Number is disabled, then the shipping order number will be automatically generated.

    2.  Status: By default the status will be Entered when you create a new shipping order.
    3.  Requester: By default, the current logged in user ID will be displayed in this field.
    4.  Reference Purchase order: Enter the purchase order for which the return is being processed.
    5.  Shipping Tag: Enter the shipping tag.
    6.  Shipping Reason: Select the reason for shipping from the drop-down menu.
    7.  Contact: Enter the contact number.
    8.  Material Location: Enter the location of the material.
    9.  Account: Select the account from the drop-down menu.
    10. Area: Select the Area from the drop-down menu.
    11. Department: Select the Department from the drop-down menu.
    12. Buyer: Enter the buyer name.
    13.  Return Authorization: Enter the return authorization name.
    14.  Requested Ship Date: Select the shipping date.
    15.  Required Transportation: Select the transportation on how you need to transport the shipment.
2.  Enter the Address details:

    Ship To

    1.  Supplier: The supplier name will be populated based on the purchase order. You can change the supplier name according to your requirement.
    2.  Ship To: Enter/select the Ship To address.
    3.  Note: If the supplier has a default address, then the supplier To address details will be populated automatically. The Ship Via and the Ship Freight details will also be populated in the SHIPPING INFORMATION tab, based on the linked purchase order. You can change the details according to your requirement.

    4.  Return To: Enter/select the Return To address.
3.  Enter the Remarks.

4.  Enter/select the Custom Information.

    >[!note]
    >You can define the custom fields in Setup > Custom Elements > Shipping Orders All.

6.  Click CREATE. The shipping order will be created.

    >[!note]
    >The status of the newly created shipping order will be Entered by default. From the right contextual pane, click ACTIVITY LOG to view the details of the shipping order activities.

7.  After creating the Shipping Order, you need to add the LINES, SHIPPING INFORMATION, and PACKAGING, and SHIPMENT details.

### Shipping Information

To add the shipping information to a shipping order:

1.  Navigate to the shipping order.
2.  Click the SHIPPING INFORMATION tab.

    If the shipping order is not approved. A pop-up appears to state you that the shipping order is not approved.

3.  Click YES to continue.
4.  In the Ship section, the shipping information will be retrieved from the purchase order entered in the Reference Purchase order field. If the purchase order is not entered in the Reference Purchase order field, select the shipping information from the drop-down menus.

    >[!note]
    >You can click EDIT button and update the shipping details.

5.  In the Return section, select the return information from the drop-down menus.
6.  In the Others section:
    1.  Turn on the Sale Flag if the payment is expected by sale.

    2.  Turn on the Credit Flag if the payment is expected by credit.
7.  In the Voucher section, view the voucher details.

    >[!note]
    >The Voucher section will be displayed only when the shipping order is attached to the voucher.

#### Packaging

To add the packaging details to a shipping order:

1.  Navigate to the shipping order.
2.  Click the PACKAGING tab to create a package.
3.  To create a new package, click NEW. The New Package section appears.
4.  Enter the package details in the Type, Quantity, Weight, Length, Width, and Height field.

    >[!note]
    >These Packaging field are configured in Setup > Validation Codes.

5.  Click ADD. The package will be created.

#### Shipment

You can add the shipment details once a shipping order is approved. To add the shipment details to a shipping order:

Navigate to the shipping order.

1.  Click the **SHIPMENT** tab and click the **EDIT** button.
2.  Enter the **Carrier** name.
3.  Enter the **Bill of Landing** details.
4.  Select the **Scheduled Ship Date**.
5.  In the **Shipment Complete By** field, search and enter the user name who completed the Shipment.
6.  Select the **Date Shipped**.
7.  Enter the **Pro Bill** number.
8.  Click **SAVE**. The shipment details will be updated for the shipping order.

#### Add Lines

You can add a line to the shipping order, LINES tabs and from the contextual pane \> REQUISITION SEARCH, PO SEARCH, INVENTORY SEARCH, and REPAIR LOG SEARCH.

>[!note]
>In the contextual pane, the contextual icons will be available based on the user’s security access.

#### Add Lines from LINES tab

To add a line from LINES tab:

1.  Navigate to the shipping order.
2.  Click LINES tab, and then click NEW LINE.

     The Add New Line Item section appears.
3.  Enter the items details and click ADD. The line item will be created.

>[!note]
>To quickly add another line after adding this line, click ADD ANOTHER instead of ADD. To view the details of the created line item, from the contextual pane, click the DETAILS icon

#### Add Lines from Requisition Search

To add a line from a requisition:

1.  From the contextual pane, click the REQUISITION SEARCH icon. The Requisition window appears.
2.  Search for requisition from which you want to add a line to the shipping order.
3. Select the required line and click IMPORT. The line will be added to the shipping order, with the details captured from the requisition and the line item.

    >[!note]
    >You can select multiple lines and IMPORT together.
If the imported line doesn’t have the required details then the status will be displayed as No in the Line Saved column, with a warning icon. Hover over the warning icon to view the details of the error.
To delete a line, select a line and click DELETE LINE. You can delete a line only when the status of the line is Entered/Forwarded/Rejected state.


#### Add Lines from PO Search

To add a line from a purchase order:

1.  From the contextual pane, click the PO SEARCH icon. The Purchase Order window appears.
2.  Search for the purchase order from which you want to add a line to the shipping order.
3.  Select the required line and click IMPORT. The line will be added to the shipping order, with the details captured from the purchase order and the line item.

    >[!note]
    >You can select multiple lines and IMPORT together. The imported line doesn’t have the required details or if the line has been deleted, then the status will be displayed as No in the Line Saved column, with a warning icon. Hover over the warning icon to view the details of the error.
    To delete a line, select a line and click DELETE LINE. You can delete a line only when the status of the line is Entered/Forwarded/Rejected.



#### Add Lines from Inventory Search

To add a line from an inventory order:

1.  From the contextual pane, click the INVENTORY SEARCH icon. The Inventory window appears.
2.  Search and select the required line and click IMPORT. The line will be added to the shipping order, with the details captured from the purchase order and the line item.

    >[!note]
    >You can select multiple lines and IMPORT together.
If the imported line doesn’t have the required details, then the status will be displayed as No in the Line Saved column, with a warning icon. Hover over the warning icon to view the details of the error.
To delete a line, select a line and click DELETE LINE. You can delete a line only when the status of the line is Entered/Forwarded/Rejected.


#### Add Lines from Repair Log

To add a line from a repair log:

1.  From the contextual pane, click the REPAIR LOG icon. The Repair Log window appears.
2.  Search for the repair item from which you want to add a line to the shipping order.
3.  Select the required line and click IMPORT. The line will be added to the shipping order, with the details captured from the repair item and the line item.

>[!note]
>You can select multiple lines and IMPORT together. The imported line doesn’t have the required details, then the status will be displayed as No in the Line Saved column, with a warning icon. Hover over the warning icon to view the details of the error.
To delete a line, select a line and click DELETE LINE. You can delete a line only when the status of the line is Entered/Forwarded/Rejected.


#### Create shipping Order from Requisition Search

From requisition, you can either create a new shipping order using the existing lines, or you can transfer the lines to an existing shipping order.

#### Create shipping Order from Requisition

To create a shipping order from requisition, perform the following:

1.  From the left navigation menu, click Requisition \> Requisition Search.
2.  Select a Requisition using which you want to create a shipping order.

    >[!note]
    >You can select multiple records and create a shipping order.
3.  From the action bar, click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Create New Shipping Order to create a new shipping using the selected line(s), and click NEXT. The Shipping Order window appears.
5.  In the MAIN tab, enter the Shipping Oder Details, Address details, Remarks, and the Custom Information.
6.  Click CREATE. The shipping order will be created with the lines linked to the selected requisition(s).

>[!note]
>Any purchase order linked to the selected requisition line will also be linked to the shipping order line.

#### Transfer Requisition lines to existing shipping Order

To transfer requisition lines to an existing shipping order, perform the following:

1.  From the left navigation menu, click Requisition \> Requisition Search.
2.  Select a Requisition using which you want to create a shipping order.

    >[!note]
    >You can select multiple records and create a shipping order.

3.  From the action bar, click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Transfer To Existing Shipping Order to transfer the selected requisition lines to an existing Shipping Order. The Shipping Order field appears.
5.  Search and enter the Shipping Order number and click TRANSFER. The requisition line will be added to the shipping order.

#### Create shipping Order from Purchase Order Search

From Purchase Order, you can either create a new shipping order using the purchase order lines, or you can transfer the lines to an existing shipping order.

#### Create shipping Order from Purchase Order

To create a shipping order from purchase order, perform the following:

1.  From the left navigation menu, click Purchasing \> Purchase Order Search.
2.  Select a purchase order using which you want to create a shipping order.

>[!note]
>You can select multiple records and create a shipping order.

3.  From the action bar, click the three dots icon and then click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Create New Shipping Order to create a new shipping using the selected line(s), and click NEXT. The Shipping Order window appears.
5.  In the MAIN tab, enter the Shipping Oder Details, Address details, Remarks, and the Custom Information.
6.  Click CREATE. The shipping order will be created with the lines linked to the selected purchase order(s).

#### Transfer Purchase order lines to existing shipping Order

To transfer purchase order lines to an existing shipping order, perform the following:

1.  From the left navigation menu, click Purchasing \> Purchase Order Search.
2.  Select a purchase order using which you want to create a shipping order.

    >[!note]
    >You can select multiple records and create a shipping order.

3.  From the action bar, click the three dots icon and then click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Transfer To Existing Shipping Order to transfer the selected purchase order lines to an existing Shipping Order. The Shipping Order field appears.
5.  Search and enter the Shipping Order number and click TRANSFER. The purchase order lines will be added to the shipping order.

### Create shipping Order from Repair Log Search

From Repair Logs, you can either create a new shipping order using the repair log lines, or you can transfer the lines to an existing shipping order.

#### Create shipping Order from Repair Log

To create a shipping order from repair log, perform the following:

1.  From the left navigation menu, click Inventory \> Repair Log.
2.  Select a repair log using which you want to create a shipping order.

    >[!note]
    >ou can select multiple records and create a shipping order.

3.  From the action bar, click the three dots icon and then click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Create New Shipping Order to create a new shipping using the selected line(s), and click NEXT. The Shipping Order window appears.
5.  In the MAIN tab, enter the Shipping Oder Details, Address details, Remarks, and the Custom Information.
6.  Click CREATE. The shipping order will be created with the lines linked to the selected repair log(s).

#### Transfer Repair log lines to existing shipping Order

To transfer repair log lines to an existing shipping order, perform the following:

1.  From the left navigation menu, click Inventory \> Repair Log.
2.  Select a repair log using which you want to create a shipping order.

    >[!note]
    >You can select multiple records and create a shipping order.

3.  From the action bar, click the three dots icon and then click CREATE SHIPPING ORDER. The Transfer Selected To Shipping Order dialog box appears.
4.  Select Transfer To Existing Shipping Order to transfer the selected repair log lines to an existing Shipping Order. The Shipping Order field appears.
5.  Search and enter the Shipping Order number and click TRANSFER. The repair log lines will be added to the shipping order.

### Shipping Order Actions

Users can perform the following actions for a shipping order:

-   FORWARD
-   APPROVE
-   REJECT
-   CANCEL APPROVAL
-   PRINT
-   DELETE

>[!note]
>The above actions are also available in the search screen.

### FORWARD

The Forward function is used to route a shipping order to the appropriate approver for approval before shipment. You can forward a shipping order only when it is in Entered or Rejected state.

To forward a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click FORWARD. The Forward To window appears.
3.  You can either forward it to a job function or to an employee.
4.  To forward it to a job function, Click Job Function. The default Shipping Order Job Function is configured at Setup Options \> Inventory \> General \> Shipping Orders. However, you can select the Job Function from the drop-down menu.
5.  To forward it to an employee, click Employee and then enter the employee name.
6.  Click Save. The shipping order will be forwarded to the job function/employee.

>[!note]
>The status of the shipping order will be changed to Forwarded.
A notification will be sent if the shipping order is forwarded to a job function. The activity will be recorded in the activity log.


### APPROVE

You can approve a shipping order only when it is in Entered, Forwarded, or Rejected state. To approve a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click APPROVE.

The shipping order will be approved and all the edit actions will be disabled.

>[!note]
>The status of the shipping order will be changed to Approved. The activity will be recorded in the activity log.

#### Approve Multiple Shipping Orders

You can also approve multiple shipping orders. To approve multiple shipping orders:

1.  From the Shipping Order search screen, select multiple shipping orders you want to approve, and click APPROVE. The information message appears in the header.
2.  Click on the message to view the details. The details of the selected shipping orders appear.
3.  From the Result Message column, you can view the status of the approval with appropriate reason. On failure, can fix the details required and proceed for approval.

>[!note]
>You can view the status details for APPROVE, REJECT and CANCEL approval process.

### REJECT

You can reject a shipping order only when it is in Entered or Rejected state. To reject a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click REJECT. The shipping order will be rejected.

>[!note]
>The status of the shipping order will be changed to Rejected. The activity will be recorded in the activity log.
You cannot reject a shipping order after approval.


#### Reject Multiple Shipping Orders

You can also reject multiple shipping orders. To reject multiple shipping orders:

1.  From the Shipping Order search screen, select multiple shipping orders you want to reject, and click **REJECT**.

    The information message appears in the header.

2.  Click on the message to view the details.

    The details of the selected shipping orders appear.

3.  From the **Result Message** column, you can view the status of the approval with appropriate reason. On failure, can fix the details required and proceed for approval.

>[!note]
>You can view the status details for APPROVE, REJECT and CANCEL approval process.

### CANCEL APPROVAL

The cancel approval option will be available only for an approved shipping order. You can cancel a shipping order only when it is in Approved state.

To cancel an approval for a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click CANCEL APPROVAL. The shipping order approval will be cancelled.

>[!note]
>The status of the shipping order will be changed to Approved.
To cancel the approval, click ACTION > CANCEL APPROVAL. The status will be reversed to the previous status (Forwarded or Entered depending on how user reached to the Approval state).
The activity will be recorded in the activity log.


#### Reject Multiple Shipping Orders

You can also cancel multiple shipping orders. To cancel multiple shipping orders:

1.  From the Shipping Order search screen, select multiple shipping orders you want to cancel, and click **CANCEL**.

    The information message appears in the header.

2.  Click on the message to view the details.

    The details of the selected shipping orders appear.

3.  From the **Result Message** column, you can view the status of the approval with appropriate reason. On failure, can fix the details required and proceed for approval.

>[!note]
>You can view the status details for APPROVE, REJECT and CANCEL approval process.

### PRINT

To print a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click PRINT. The Print Options dialog box appears.
3.  Select the Print Item Extended Description to print the shipping order with extended description.
4.  To view a print preview, click PRINT. The shipping order PDF will be generated and opened in a new tab.
5.  Click CLOUD PRINT to generate a shipping order PDF in the cloud print configured location/printer.

>[!note]
>The cloud print button will be displayed only if the cloud print setup is enabled for your plant. Only approved shipping orders will be printed when you perform cloud printing.

#### Print Multiple Shipping Orders

You can also print multiple shipping orders. To print multiple shipping orders:

1.  From the Shipping Order search screen, select multiple shipping orders you want to print, and click **PRINT**.

    The **Print Options** dialog box appears.

2.  Select the **Print Item Extended Description** to print the shipping order with extended description.
3.  To view a print preview, click **PRINT**. The shipping order PDF will be generated and opened in a new tab.
4.  Click **CLOUD PRINT** to generate a shipping order PDF in the cloud print configured location/printer.

### DELETE

To delete a shipping order,

1.  Navigate to the shipping order.
2.  From the top header, click ACTIONS and then click DELETE. A confirmation popup appears.
3.  Click DELETE to confirm deleting the shipping order.

The shipping order will be deleted.

>[!note]
>You cannot delete an approved shipping order.

### EXPORT

To export a shipping order,

1.  In the Shipping Order search screen, select the shipping order.
2.  From the action bar, click **EXPORT**. The shipping order will be exported to an excel

>[!note]
>You cannot export multiple shipping orders to an excel.

### Activity Log

The activity log contains the details of all the activities of the user. In addition to this, the users can also manually add the user defined activities to the log.

To add an activity to the log,

1.  Navigate to the shipping order.
2.  From the contextual pane, click ACTIVITY LOG.
3.  In the Activity log screen, click NEW. The Add Activity section appears.
4.  Select the Activity from the drop-down menu.

    >[!note]
    >You can set up the options for the Activity drop-down menu at Setup > Validation Codes > Shipping Order Activities.

5.  Click ADD. The activity will be saved to the activity log.
