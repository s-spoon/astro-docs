---  

title: "Create Receipts"  
draft: false 
type: Article

---

Create Receipts feature is used to receive the PO receipts for the inventory items when there is no integration with other system for Purchase Order receiving.

Menu Path: **Inventory \> Create Receipts**

You can enter the following fields in **Create Receipts** screen:

-   Purchase Order-not validated against PO in the system
-   Bill of Lading
-   Carrier
-   Packing List
-   Employee\*: It is the mandatory field. By default, the logged in user will be displayed. you can search for different employee if required.
-   Stores Location\*: It is the mandatory field. This field is visible if Multiple Warehousing feature in enabled in Setup and Security module. You can select the required location from the drop down. If selected, you can add items in [Items grid](#items-grid).

### Items Grid

In the items grid, you can see the list of items for the selected employee and Stores Location for which the receipts need to be created.

You can see the details of Item, Description, U/M, Comments and Transaction Qty for each records in the grid. You can click and edit the **Comments** and **Transaction Qty** columns.

You can perform the following actions in the grid:

#### New Item

You can add a new item to the grid. To add a new item, click on New Item button. **Add Line Item** panel appears. You can see the following fields:

-   Item: You can enter or search the required item that belongs the selected Stores Location. If not, you will get an error message. If you search and select the item from the item search window, following fields will be auto populated:

-   Description
-   U/M(Unit of Measure)
-   Transaction Qty: You can enter the required Transaction Qty. The default value will be set to 0.

>[!note]
>If Use Qty in Receiving flag in item module is set to 1, the entered transaction quantity will be added to In Receiving bin. If it is set to 0, then the transaction qty will be added to On Hand quantity. You can see those quantities in Quantity at Glance section in Item module.

-   Comments: You can enter the Comments if required.

After updating the required fields, you can select any one on of the following buttons:

-   **Add**: Selecting this will add the item to the grid. If any error, the pop up will be displayed. You can see the details and proceed accordingly.
-   **Cancel**: Selecting this will cancel the item addition and exit the panel.

### Edit Item

You can edit the required item/s in the grid. To edit the items, you can select the required item from the grid and click on **Edit Item** button. **Edit Line Item** panel appears. The fields will be similar to **New Item** panel fields explained above.

You can only update the Transaction Qty and Comments fields. After updating the values you can select any of the following buttons:

-   **Save**: Selecting this will save the updated values. If any error, the pop up will be displayed. You can see the details and proceed accordingly.
-   **Cancel**: Selecting this will cancel the item edition and exit the panel.

### Remove Item

You can remove the item from the grid.

To remove the item, you can perform the following:

-   Select an item from the grid.
-   Click on **Remove Item** button.
-   Item delete confirmation message appears. You can click on **Delete** to delete that item. If deleted, it will be removed from the grid. If any error, You can see the error and proceed accordingly.

### Save and Done

This button is enabled only if any item is available in the grid. You can select the required item/s from the grid and click on this button to create the receipt/s for the selected items in the selected Stores Location.

If receipts are created successfully, **Xnpor** transaction will be created for each receipts and that selected item/s will be removed from the grid. You can see those transactions in **Stores Activity** window.

#### Contextual Panel

You can see the following contextual panel items in create receipts screen:

-   [Details](Using-the-Inventory-Notebook.md): Opens the Item module for the selected item.
-   Hierarchy: Opens the hierarchy window to allow you to select an item and drag it to the grid using **Import** button. The imported item will be added to the grid.
-   [Inventory Search](Using-the-Inventory-Search.md): Opens inventory search to add the item/s. You can select the required item/s and click on **Add to Grid** to add the items to the grid.
