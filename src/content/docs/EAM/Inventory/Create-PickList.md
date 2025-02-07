---  

title: "Create PickList"  
draft: false 
type: Article

---

Menu Path: Inventory \> Create PickList

Perform the following to create the new picklist:

1.  From the navigation menu, select **Inventory \> Create PickList**.

    Or

    In the **Manage PickList** screen, select any grid record and click **New** from the action bar. The **New PickList** window opens.

2.  In the **New PickList** window, select any of the required module from the following:
    -   Charge to Account: Select this radio button if you are creating the picklist not preplanned on an account.
    -   Charge to Work Order: Select this radio button if you are creating the picklist with pre- planned materials or unplanned materials chargeable to a work order.
3.  You need to enter the following fields if your selection is
    -   Charge to Account: This is displayed by default.
    -   Select the required values from **Account, Area, Project, Department** and **Delivery Area** drop down. These drop down will vary based on the table element setting.
    -   You must select the required **Stores Location\*** from the drop down if Multiple Ware- housing is enabled. if not, it will automatically consider the location as **Main**.
    -   Enter the required name in **PickList\*** field. It is the mandatory field. If you do not enter a number, the number will be auto assigned if the setup option to auto assign picklist is chosen. If the setup is enabled, system will generate the picklist number based on the numbering settings selected in Setup and Security module.
    -   Enter or search the required requester in **Requester\*** field. It is the mandatory field.
    -   Enter the Delivery Date and Delivery Time if required.
    -   Enter or search for Deliver To field if required.
    -   Charge to Work Order: Enter/Search the **Work Order \*** field. Only PM, Emergency and Routine work orders are allowed in Picklist. Other fields are similar to Charge to Account module. Area and Department fields will not be available.
4.  Click **Next**. **PickList-\<PickList Name\>** screen will be displayed with the list of available items if any in the grid. Refer [PickList](#picklist) for more details.

## PickList

In the picklist grid, you can see the available items list for the created picklist. Only the items with selected Stores Location will be displayed even if you have selected the items from other location from the inventory. See Grid Operations also.

You can perform the following actions on grid records: After any operation you can click on **Save** button to update the changes.

#### New Item

You can add an item to the grid. To add a new item, click on New Item button. **Add Item** panel appears. You can see the following fields:

-   Item\*: It is a mandatory field. You can enter or search the required item that belongs the selected Stores Location.
-   Stores Location: This field will be visible if multiple warehouse is on. This is the stores location you selected when creating the pick list. It cannot be changed.
-   Description: It will be auto populated with the selected item.
-   Quantity Requested\*: You must update the Quantity Requested field. By default, it will be set to 0.
-   Quantity Issued: You can update this field as it is read only.

After updating the required fields, you can select any one on of the following buttons:

-   **Done**: Selecting this will add the item to the grid. If any error, the pop up will be displayed. You can see the details and proceed accordingly.
-   **Add Another**: Selecting this will open the Add Item panel again to add multiple items. But, the previously added item will be updated to the grid automatically if there is no error.

-   **Cancel**: Selecting this will exit the panel.

#### Remove Item

You can remove the item from the grid.

To remove the item, you can perform the following:

-   Select an item from the grid.
-   Click on **Remove Item** button.
-   Item delete confirmation message appears. You can click on any of the following:
-   **Delete** to delete that item. If deleted, it will be removed from the grid. If any error, You can see the error and proceed accordingly.
-   **Cancel** to exit the delete popup.
-   **Send Email** to send the email to the concerned person.

### Edit PickList

You can edit the pick list which is created already. If you select **Edit PickList** button, Edit PickList panel appears.

Consider the following:

-   The mode radio button (Charge to Account/Charge to Work Order) will be selected automatically and you can not change that.
-   The fields will be visible according to the selected mode. You can update the required field with the new values.
-   After updating the values, you can click on any of the following:
-   **Save**: Selecting this will save the updated details.
-   **Cancel**: Selecting this will exit the edit panel.

#### Print

You can select this to print the picklist/s. The error message will be displayed if there is no records to print.

If a single pick list has lines from multiple stores locations, then a new page section prints for each stores locations But all the lines are still in one PDF (which means one browser tab).

Only the partial issued items will be printed. Fully issued items will not be printed.

#### Cloud Print:

To print the selected picklist, utilize the Cloud Print option. For instructions on using Cloud Print, refer to *Pick List Cloud Printing*, Setup Cloud Printing.

>[!note]
>The Cloud Print button is enabled, only if the plant is setup to use cloud print.

#### Contextual Panel

You can see the following contextual panel items in Picklist grid screen:

-   [Details](Using-the-Inventory-Notebook.md): Opens the Item module for the selected item.
-   Hierarchy: Opens the hierarchy window to allow you to select an item and drag it to the grid using **Import** button.
-   [Inventory Search](Using-the-Inventory-Search.md): Opens inventory search to add the item/s. You can select the required item/s and click on **Add to Grid** to add the items to the grid. If selected, the items will be added to the grid.
