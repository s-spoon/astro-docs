---  

title: "Using the Inventory Notebook"  
draft: false 
type: Article

---

The Item Module window provides detailed information about inventory items. The Item Module window contains tabs that can be used to input or view data.

You can select a record in Item Search grid and click on **Details** in Contextual Panel to open the Item Module. If selected, **Item \<Item Name\>: \<Item Description\>** page appears.

You can also open the module by double clicking on the selected row in the Item search grid to open it in a new tab.

The item module has five standard tabs:

-   [Main](Using-the-Inventory-Notebook.md#main-tab)
-   [Configuration](Using-the-Inventory-Notebook.md#configuration-tab)
-   [Usage](Using-the-Inventory-Notebook.md#usage-tab)
-   [Related](Using-the-Inventory-Notebook.md#related-tab)
-   [Key Stores Activity](Using-the-Inventory-Notebook.md#key-stores-activity)

Also you can perform the following actions in Item Module page:

1.  **Requisition**: You can search for the requisitions of the selected item by selecting ![](../assets/inventory/3e9b11347c994e69dd6799b3ab60c298.png) and
**Requisition** option. See Requisition for more details.

2.  **Copy**: You can create a new item by copying the values from the selected item by selecting and **Copy** option. See [Copy](Create-New-Item.md) for more details.
3.  **Rename**: You can rename the item by selecting ![](../assets/inventory/3e9b11347c994e69dd6799b3ab60c298.png) and **Rename** option. See [Rename Item](Using-the-Inventory-Search.md#rename-item) for more details.
4. **Issue**: You can view the details of quantity issued by selecting ![](../assets/inventory/3e9b11347c994e69dd6799b3ab60c298.png) and Issue option. See [Issue](Issue.md) for more details. You can not issue items for a requisition and that requisition is charge to account.
5. **Return**: You can view the details of quantity returned by selecting ![](../assets/inventory/3e9b11347c994e69dd6799b3ab60c298.png) and Return option. See [Return](Return.md) for more details.
6.  **Open in New Tab** : You can click on ![](../assets/inventory/f112e1b5654e89ef27f5d029b2253699.png) to open the item Module page in a new separate tab. You can also click on **Item** column hyperlink from Inventory search page to open the item Module.

7.  **Close**: You can click on **X** button to close the item Module page.

## Main Tab

The **Main** tab consists of the following sections:

### Item Details

This section provides the basic item details.

### Basic Info

You can see the information of Item name, Item Image (Click on ![](../assets/inventory/e3eecf1bad184963e95c456767866ded.jpeg) and select the required image from your local to upload the item image. You can Delete the image if not required.)

You can enter the values in Description\*, Required Part Number, Unit Cost, Over Receipt Tolerance, Invoice Tolerance fields in Edit mode.

The Over Receipt Tolerance, Invoice Tolerance fields will be visible only if the fields are marked as used and If zz_modules_installed.invoicematching flag is set to 1 in the back-end.

>[!note]
>You can add translation to the Description during creating/editing the item. See Translation for more details.

Also you can select the required values from the drop-down for Type\*, Class, Required Manufacturer, Mechanical Integrity, SIC, Unit of Issue\* and Hazard fields.

Only permanent item types will be listed in **Type** field. By default, Stock will be selected. When you change the Item Type on the Item Module , the system will automatically update the Item Type on Blanket Purchase Order lines for the item. The latest revision of the PO Line will be updated (i.e., the version of the line that has not been change-ordered). PO Lines that have been marked-as deleted will not be updated. Also, note that the Item Type on open requisitions and non-blanket purchase orders will not be updated based on the change of Item Type on the Item Module . These requisitions and purchase orders will be processed (i.e., transferred to a PO/received) carrying the old value of Item Type.

You can change the item type in the backend when qty on hand is 0 for all occurrences of the Item in the item table.

The Unit of Issue field is commonly used to describe how an item is issued and costed within inventory. This description corresponds to the smallest unit that is normally used to issue an item and charge for its use. Updates will be allowed to the Issue U/M regardless of whether the item has non-zero quantities.

### Properties

You can enable the following toggles while creating/editing the item: The toggles are disabled by default.

-   **Taxable**: This indicates if the item is taxable or not.
-   \<span id="serialtracking"></span>**Serial Tracking**: Some inventory items may be tracked by serial number. If you enable the toggle, the serial numbers defined in the Serial Module with a status of New or Restocked and associated to the item must match the quantity on hand in each bin. This flag can be checked if the current quantity on hand for the item is zero.

-   **No Substitutes Allowed**: You can enable No Substitutes Allowed toggle to indicate that substitute items are not allowed for replenishment activities. The system forwards this code through the reordering process and passes it to purchasing to indicate the restrictions.
-   **At Receipt, Add to Qty in Receiving**: This indicates that when the item is received, it is added to the quantity In Receiving rather than Qty on Hand . This can be useful when the item needs to be tested or to undergo some type of process upon its receipt at the facility before it is ready to be made available for use.
-   **Repairable**: Select the Repairable toggle to indicate whether an item is repairable or not. When your system administrator sets up the Repairable Tracking , he or she selects the default account restock options for the plant.

### Quantity at a Glance

This section is read only and provides the summary of all the quantities from all the stores location for the selected item in the grid. The **Total** row represents the sum of each column values.

You can see Stores Location, On Hand, Planned, Required, Reserved, In Receiving, Issued Out- In Transit, On Purchase Order, Purchase Approved, Purchase-Unapproved, Due In and Due Out columns in the grid.

Also, you can see the chart of Qty on Hand and Available for different Stores location that you have got the access. You can hover over each color/tile to see the number of quantities for that location.

You can Refresh the chart data if required. You can close the chart if that is not required.

### Locations and Bins

Aptean EAM maintains item quantities by bin and delivers three types of bins as base data. These bin types are **Primary** , **Secondary** , and **Secondary-No Quantity**.

In this section, you can see the list of locations and bins associated with the selected item in the grid. The same set of locations data can be seen in **Replenishment Settings** section of Configuration tab.

See [Locations and Bins](Locations-and-Bins.md) for more details.

### Custom Information

You can provide the custom information in the customer defined fields.

### Configuration Tab

The Configuration Tab consists of the following section:

Replenish Settings

This section displays the replenish details for various stores location in the grid. See Grid Operations also.

You can see the following columns in the grid:

-   Stores Location
-   Qty Minimum
-   Qty Maximum
-   Order Method
-   Stores Account
-   Buyer
-   Usage Level
-   Approved By
-   Economic Order Quantity

You can select any record in the grid and click on **Edit** button to update the above fields. You can not edit Stores Location as it is read only.

After editing,

-   You can click on **Save** to update the details.
-   You can click on **Cancel** to exit the edit pop up.

#### PO Text Selection

This section allows you to view and add text that will automatically be copied to purchase orders for the item. See PO Text for more details.

#### Stores Specification

This section allows you to view and add stores specification in **Specifications** field. It is a text box with 255 characters.

#### Purchasing Specifications

This section allows you to view and add stores specification in **Purchasing Specifications** field. This specification will automatically be copied to purchase orders for the item.

#### Extended Description

This section allows you to view and add extended description in **Stores Extended Description** field.

#### Repair Specifications

This section allows you to view and add repair specification in **Repair Specifications** field. It is used during the repairable tracking process. If the item is serialized and a repair specification exists on the serial module, the serial repair specification is copied to the repair requisition. If the repair specification does not exist on the serial module, the repair specification from this module is copied to the requisition.

>[!note]
>You can provide translation to the Stores/Purchasing/Repair Specifications and Extended Description. See Translation for more details.

>[!note]
>You can click on Expand Grid icon (![](../assets/inventory/Picture1.png)) to expand the grid to the full frame. If expanded click on Collapse Grid (![](../assets/inventory/e1ab71deef9a71c7dcc8199a74bc510c.png)) to collapse the grid

### Usage Tab

The Usage tab displays the selected item usage in different transaction activity in grid by accounting period and the quantities issued, returned, adjusted, received, restocked, maximum exceeded, and stock-out.

The Usage tab is read only and you can not update any details.

You can select the required Stores Location from the **Stores Location** drop-down (Default: All Stores) and the item usage data will be displayed in the grid based on the selected stores location.

If multiwarehousing is not used by customer, then the Stores Location dropdown will not be there and the default location will be **Main**.

You can search the required value in **Filter Results** field at the top of the grid. The data which matches the search criteria will only be displayed in the grid.

You can click on Filter icon (![](../assets/inventory/49974c38802f7ad17f275885c61d7dd5.png)) to select the required filter from the list. The data will be displayed based on the selected filter. You can select one or multiple from the following:

-   Period Totals
-   Month Totals
-   Quarter Totals
-   Grand Totals

### Related Tab

The Related Tab is read only and consists of the following sections:

#### Related Data at a Glance

This section allows you to view the number of Item Requirements, Items on Open Reqs and Items on Open POs.

If the number is greater than 0, you can see the following sections: You can also click on each numbers to display the respective sections.

#### Item Requirements

Displays the details of **Item Requirements**, **Items on Open Reqs**, and **Items on Open POs** for the selected item.

>[!note]
>The Items on Open Reqs grid is sorted by Requisition and Req Line. The Items on Open POs grid is sorted by PO/Release and Line.

#### Items on Open Reqs

Displays the number of open requisitions for the selected item in the grid.

#### Items on Open POs

Displays the number of open purchase orders for the selected item in the grid.

You can refer Grid Operations for various grid operations. You can click on **X** to close the grid.

### Key Stores Activity

The Key Stores Activity Tab is read only and consists of the following sections:

#### Key Stores Activity in Last 60 Days

This section allows you to view the number of Issues and Returns, Adjustments and PO Receipt transactions for the selected item.

If the number is greater than 0, you can see the following sections: You can also click on each numbers to display the respective sections.

#### Issues and Returns in Last 60 Days

Displays the last 60 days issues and returns transactions for the selected item in the grid.

#### Adjustments done in Last 60 Days

Displays the last 60 days adjustment transactions for the selected item in the grid.

#### PO Receipts in Last 60 Days

Displays the last 60 days PO receipts for the selected item in the grid.

You can refer Grid Operations for various grid operations. You can click on **X** to close the grid.

#### Editing the Item Module

You can click **Edit** button to open the Item note book in edit mode. You can update all the required/ mandatory fields (The fields marked with \*) and perform all the necessary functions in all the tabs explained above.

See Edit for more details.

>[!important]
>The fields marked * above in each tab represent the mandatory fields during New Item Creation. If the new item is created by copying the values from an existing item, the mandatory fields values will be auto updated with copied values.
