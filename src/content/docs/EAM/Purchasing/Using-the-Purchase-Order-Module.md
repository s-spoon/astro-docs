---
title: "Using the Purchase Order Module"
draft: false

---

The purchase order module consists of the purchase order’s details. You can select a record in purchase order search grid and click **Details** in Contextual Panel to open the purchase order module. If selected, **Purchase Order #\<purchase order number\>** window appears.

You can click the hyperlink in the **Purchase Order #** column or double-click any grid record to open the purchase order module.

The purchase order module has three standard tabs:

-   [Terms](Using-the-Purchase-Order-Module.md#terms-tab)
-   [Lines](Using-the-Purchase-Order-Module.md#lines-tab)
-   [Text](Using-the-Purchase-Order-Module.md#text-tab-1)

Some of the actions found on the action bar (link to be added) appear in the purchase order module page under the **Actions** button. These actions include issuing, closing, reopening, and printing the purchase order.

You can perform the following actions in the purchase order module page:

-   **Open in New Tab**: Click(![](../assets/purchasing/Picture13.png)) to open the purchase order module page in a new separate tab.
-   **Close**: Click the **X** to close the purchase order module.

## Terms Tab

>[!Note] If you open the purchase order module in a new tab with the **Terms** tab selected, certain Contextual Panel buttons are unavailable depending on the purchase order's status. In **Open** status, only **Supplier** and **Activity Log** buttons are available. In **Issued** status, only **Supplier**, **PO Receipts**, and **Activity Log** buttons are available. In **Closed** or **Reopened** status, only **Supplier** and **Activity Log** buttons are available.

The **Terms** tab consists of the following sections:

### Purchase Order Details

You can provide some basic details of a purchase order. This section consists of **Purchase Order ID**, **Release**, **Change Order**, **PO description**, **Buyer**, and **Type** fields.

### Supplier

You can provide the details and contact information of a supplier. This section consists of **Supplier Id***, **Description**, **Contact**, **Phone**, **Mailing Address***, **Email Address**, **Currency***, and **Order Limit** fields.

In the **Email Address** field, you can enter multiple email addresses separated by a semi colon, which enables you to send POs through Email to multiple supplier recipients.

### Shipping Details

This section contains shipping information for default purchase orders as well as financial data such as payment terms and minimum order amounts.

#### Shipping Details

Provide the shipping information in the **Ship Via**, **Ship Point**, **FOB**, **Freight**, **Payment Terms**, and **Two Way Match** fields.

The **Ship Via** field is designed to hold either specific carrier information or general information regarding the method of shipping.

The **Freight** field is used to capture instructional information.

The **Two Way Match** toggle is turned off by default while creating the new purchase order.

You can enable the **Two Way Match** toggle if you want the supplier to qualify for two-way match processing. The setting chosen here automatically defaults to purchase orders awarded to the supplier. This toggle is only visible if your installation is using either Invoice Matching or the Invoicing Interface.

#### Addresses

Provide the shipping and billing addresses in the **Ship To** and **Bill To** fields.

#### Send Purchase Orders By

You can turn on the **TabSource** or **Email** toggles to send a purchase order to a supplier. These toggles are turned off by default while creating the new purchase order.

If the **TabSource** toggle is turned on, the **TabSource Emails For PO** hyperlink is enabled. Click the hyperlink and TabSource Emails popup will open and list the TabSource emails if any. The email addresses are read-only and . any changes must be made directly in TabSource.

#### Custom Information

>[!Note] 
>You can edit/change the email address for the closed and deleted purchase orders.

This section displays the custom elements that you have defined.

## Lines Tab

Use the **Lines** tab to specify the item that you want to purchase from a supplier. Each line contains the details of the item. You add lines to a purchase order that has the status **Open**.

>[!Note] If you open the purchase order module in a new tab with the Lines tab selected, certain Contextual Panel buttons are unavailable depending on the purchase order's status. In Open status, only **Hierarchy**, **Inventory Search**, **Supplier**, and **Activity Log** buttons are available. In **Issued** status, only **Supplier**, **PO Receipts**, and **Activity Log** buttons are available. In **Closed** or **Reopened** status, only **Supplier** and **Activity Log** buttons are available.

### Add a Line to a Purchase Order

You can add a line to a purchase order. The line will contain the type of the item and its quantity. To add a line to a purchase order:

1.  Click **Open in New Tab** to open the purchase order in a separate tab, if you are in the pur- chase order module.
2.  Click the **Lines** tab.
3.  Click **New Line** below the **Lines** tab.
4.  Under the **Add New Line Item** section, in the **Item** field, type a unique number of your choice for the item.
5. In the **Item Type** drop-down list, select the item’s type.

    >[!Note] If you search for or type an existing item's number, the system automatically enters the item's type in the **Item Type** drop-down list.

    >[!Note] Click the **Inventory Search** or Hierarchy buttons in the Contextual Panel to directly select and add an item in a new line.

6.  In the **Qty Requested** field, type or select the item’s quantity.

    >[!Note]   
    In the "Qty Ordered" field, users can input both positive and negative values, and the calculations will automatically update based on the entered values.
    
7.  Click **Add**.

The system adds the line in the grid.

### Using the Line Module

Use the line module to specify mandatory details about the item in the line. Each line has its own line module.

In the grid select the line you’ve created and in the Contextual Panel click **Details**. The line module appears. If selected, Line \<line number\> for \<purchaser order\> page appears.

The line module has four standard tabs:

-   [Main](Using-the-Purchase-Order-Module.md#main-tab)
-   [Charges](Using-the-Purchase-Order-Module.md#charges-tab)
-   [Shipping](Using-the-Purchase-Order-Module.md#shipping-tab)
-   [Text](Using-the-Purchase-Order-Module.md#text-tab-1)

After you add the mandatory details to these four tabs, click **Create** to create the line.

#### Main Tab

The **Main** tab consists of the following sections:

**Details**

This section shows fields like the **Line Number**, **Version**, **Item**, **Item Description**, **Item Type**, **Requisition**, **Req Line**, **Due Date***, **Current Forecast Date**, **Unit Cost**, **Currency**, **Qty Ordered***, **Total**, **Unit Of Purchase***, **Qty Package***, and **Stores Location**. Turn on the **Taxable Flag** toggle if the item is taxable, and from the **Tax** drop-down list select a tax code.

**Extended Description**

In this section type a description of the item. Use format option to format your text.

**Manufacturer Details**

In this section, specify the manufacturer of the item and the part number of the item.

**Other Details**

Specify miscellaneous details about the part in this section. Use the fields **Stores Account***, **Mechanical Integrity**, **Inspection Level**, and **Hazard** to specify these details.

#### Charges Tab

The **Charges** tab contains the **Charges** section.

**Charges**

In this section you can allot charges for the purchase order, which can be allocated to an account, area, department, or project. Additionally, you have the option to link a work order to a charge. in which case the charge, area, department, and project will be automatically derived from the associated work order.

The **Charges** section shows all charges for a purchase order. If you've created charges when creating a new purchase order, those charges will appear in this section as default for each line.

You can perform the following actions on a charge in the section:

-   Create a charge: Click **New** to create a new charge. For more information about creating a new charge, see Create a New Charge .
-   Edit a charge: Select a charge, and click **Edit** to edit the charge. For more information about editing a new charge, see [Edit a Charge](Create-a-New-Purchase-Order.md#edit-a-charge) .
-   Delete a charge: Select a charge and click **Delete** to delete the charge.

##### Create a New Charge

Enter values in the following fields to add a new charge to the purchase order:

1. In the **Percent** field, type or select the percentage of the charge to add.

2. In the **Account** list, select the account.
3. In the **Area** list, select the area.
4. In the Department list, select a department.
5. In the Project list, select the project.
6. Click **Add**.

>[!Note]   
> Ensure that the total percentage of your charge(s) is 100 to avoid receiving an error.

##### Edit a Charge
When you edit an existing charge, the fields that you change are similar to the fields in Create a New Charge.

>[!Note]   
Ensure that the total percentage of your charge(s) is 100 to avoid receiving an error.

#### Shipping Tab

The Shipping tab contains the Shipping and Delivery section.

##### Shipping and Delivery

In this section you can specify the delivery area, the ship-to address, and the name of the recipient. The section consists of Delivery Area, Ship To, and Deliver To fields.

#### Text Tab

The Text tab contains the PO Text Selection section.

##### PO Text Selection

Use this section to select the purchase order text that you want to appear on the purchase order for the supplier.

 

## Text Tab

Use the Text tab to create or select your [initial or final PO text](Create-a-New-PO-Text.md).

>[!Note]   
> Ensure that you click the Edit button in the Text tab to update fields. Then, click the Save button to save your changes. You can update the fields in the Text tab only when the purchase order's status is Open.

>[!Note]   
> If you open the purchase order module in a new tab with the Text tab selected, certain Contextual Panel buttons are unavailable depending on the purchase order's status. In Open status, only Supplier and Activity Log buttons are available. In Issued status, only Supplier, PO Receipts, and Activity Log buttons are available. In Closed or Reopened status, only Supplier and Activity Log buttons are available.

The Text tab consists of the following sections:

### Initial Text

Type your initial PO text in this section, and then format it using the formatting options.

### Final Text

Type your final PO text in this section, and then format it using the formatting options.

>[!Note]   
> Click Expand Grid/Collapse Grid to expand or collapse the Initial Text and Final Text sections.

### Import

* Enables users to import content from text files or word documents from their local drives onto the editor. Once the files are imported, they can be edited as required.

* For users with predefined templates for Initial and Final text, it reduces the manual effort of copying and pasting into editors.

>[!Note]   
> Import can be accessed only in Edit mode.

### PO Text Selection
Use this section to cross-reference an entry in the PO Text Library to the selected supplier. Any entry for the supplier will appear on purchase orders for that supplier.

PO Text Selection grid displays all initial and final PO texts, if any, for the purchase order. You can see Text ID, Description, and Text Content details for each PO text record. Click the Initial or Final radio button to display initial or final PO texts to the selected supplier.

You can perform the following in the **PO Text Selection** section:

* Select the required PO text from the PO Text Library: Click the Add Text button to add already created PO text from the PO Text Library, if the required PO text is not seen in the PO Text Selection grid. Refer to [Select PO Text from PO Text Library](Using-the-Purchase-Order-Module.md#select-po-text-from-po-text-library) for more details.

* Remove the PO text from the PO Text Selection grid: Select a record in the grid, and click the Remove button. The message, PO Text \<Text ID\> deleted successfully. appears.

#### Select PO Text from PO Text Library

In the Add PO Text section, perform the following:

1. In the Text ID* (mandatory) field, type the required text ID or search for the required text using the search icon. The system displays the text description in the Text Description field, and detailed text content. You cannot modify the description and text.

>[!Note]   
> Only active text IDs and Text Type Other are allowed to be linked to the purchase order.

2. Select a radio button to specify if the text block should print in the initial PO text or final PO text section of the purchase order. The default selection is Initial. The system displays the text IDs in alphabetical order.

3. Perform one of the following:
    * Click the Add button to save and include the new PO text in the grid.
    * Click the Cancel button to exit the Add PO Text section without including the PO text in the grid.

For more information about managing PO text, see [Using the PO Text Search](Using-the-PO-Text-Search.md).

To change the record’s sequence, click the Change Sequence button, and point to the equal sign in the New Sequence column. When the pointer becomes a hand icon, drag the pointer to move the record to the required position. Click the Save button.

>[!Note]   
> The change in sequence of PO texts in the Text tab applies only to this purchase order.

## Editing the Purchase Order Module and the Line Module

You can click the Edit button to open the purchase order module and the line module in edit mode. You can update all the required/mandatory fields (The fields marked with *) and perform all the necessary functions in all the tabs explained above.

You cannot edit a purchase order that is in the Closed or Deleted status. If the purchase order is in the Issued status, you can edit only the following:

*In the purchase order module, on the Terms tab: The Email Address field.

*In the line module, on the Main tab: The Taxable Flag toggle, that allows you to select a tax code from the Tax drop-down list.
*In the line module, on the Charges tab: The Charges section.

See Edit for more details.

>[!Important]   
> The fields marked * earlier in each tab represent the mandatory fields during new purchase order creation.

 

 

 

 

 

 

 

 