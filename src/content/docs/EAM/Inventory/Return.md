---  

title: "Return"  
draft: false 
type: Article

---

The Inventory Returns window allows you to record items returned to inventory and to credit their cost to account, area, department, project, or work orders. Whenever items are returned, Aptean EAM checks the work orders in awaiting material status to fill material needs and enable scheduling of work delayed by lack of material.
 
Return can be performed in two ways:

1.  Full Return: Use the Full Return process when you want to return items that were issued to a requisition or work order. You can also use Full Return to return any arbitrary item to an account.
2.  Ad-hoc Return: This is launched from the inventory search or item module. Because any arbitrary item can only be returned to account.

## Full Return

In order to return the items fully, you need the work order with Requisition line created already. Perform the following in full return:

1.  Select **Return** from Inventory module in navigation menu. The **Account Set Up** window opens.
    -   Select any of the required module from the following in **Charge To** section:
    -   Account: Select this radio button to return any arbitrary items to an account.
    -   Work Order: Select this radio button to return materials issued to the work order.
    -   Requisition: Select this radio button if you want to return material issued to requisition.
2.  You need to enter the following fields if your selection is
    -   Account: This is displayed by default. Select the required values from **Account, Area, Department** and **Project** drop down. You must select the required **Stores Location\*** from the drop down if Multiple Warehousing is enabled. if not, it will automatically consider the location as **Main**.
    -   Work Order: Enter/Search the **Work Order \*** and select **Stores Location\***.
    -   Requisition: Enter/Search the **Requisition\*** and select **Stores Location\***.

1.  Enter **Return to Employee** and **Comments** fields if required in **Delivery** section. Return to Employee field will be auto populated if you search and select the requisition to which the delivery information is provided during the requisition creation.
2.  Click **Next**. **Return to \<Work Order/Requisition/Account\> \<Work Order Num- ber/Requisition Number/Account Name\>: \<Work Order/Requisition/Account Description\>** screen appears. Refer [Return](#return-grid) for more details.

### Return Grid

In the Return grid, you can see the list of items for return. See Grid Operations also.

You can click on each records and update the required **Return Qty** in the grid if it is non serialized items. You can not enter the **Return Qty** greater than the **Issued** Quantity.

If the item is serialized when you click **Return Qty** column to in line edit it will open the serial pop up window. On save on the serial pop up window, changes get updated back to the grid.

You can perform the following actions on grid records:

#### New Item

You can add a new permanent item to the grid to return. This only applies to return to account. You cannot add items for full issue when returning to requisition or work order.

To add a new item, click on New Item button. **Add New Item** panel appears. You can see the following fields:

-   Item: You can enter or search the required item that belongs the selected Stores Location. If not, you will get an error message. If you search and select the item from the item search window, following fields will be auto populated:
-   Description
-   Unit of Measure
-   You can not update the Quantity Issued, Quantity Returned, and Primary Bin values as they will be extracted from the database.

-  You can enter the required Return Qty for non serialized items. The default value will be set to 0. Quantity on Hand after Return value will be updated based on this value. If an item has multiple bins, there will be an icon beside the quantity to allow the user to select different quantities from different bins. The default value will be the primary bin, but can be changed.

>[!important]  
>If the item is serialized ([Serial Tracking](Using-the-Inventory-Notebook.md#properties) toggle is enabled), Return Quantity is read only and Quantity on Hand after Return field will not be visible. Return quantity will be filled in once you select the serial numbers using the Enter Serial Info hyperlink. If you click on the hyperlink, you can see the list of serial ids linked for the selected item. You can select one or multiple serials to update the Return Quantity. One serial can have one item, but one item can have multiple serials. When returning to a requisition or work order, you can only return serials actually issued to that requisition or work order. Also for any kind of return, the list of eligible serial numbers will only show serials ready to be placed back into inventory.
For example, serials that are installed will not show.

-   Stores Location field is read only and displays the selected value from the previous screen.
-   You must enter or select **Return to Employee** field if it was not entered in the previous screen.
-   You can enable **Item Not Originally Issued From Inventory** toggle. The toggle is disabled by default. If enabled, Unit Cost field will be visible. You can enter the required Unit Cost if required.
-   Date Issued will be defaulted to Today's date. You can update it if required.
-   You can enter the Comments if required.

After updating the required fields, you can select any one on of the following buttons:

-   **Add Item**: Selecting this will add the item to the grid. If any error, the pop up will be dis- played. You can see the details and proceed accordingly. Add item is only available for return to account.
-   **ClearAll**: Selecting this will clear all the default values in the fields.
-   **X**: Selecting this will close the panel.

#### Edit Item

You can edit the required item/s in the grid. To edit the items, you can select the required item from the grid and click on **Edit Item** button. **Edit Item \<Item Name\>: \< Item Description\>** panel appears. The fields will be similar to **New Item** panel fields explained above.

You can update the following fields if the item is non serialized:

-   Return Qty: You can update this field if you are using Primary bin. If you have previously entered a return quantity or adjust quantity for any bin except the primary, then when you click the “Return Quantity” field open the bin selector pop up.
-   Returned to Employee\*
-   Date Returned\*
-   Comments

You can update the following fields if the item is serialized:

-   You can click on Enter Serial Info to update the return qty.
-   Returned to Employee\*
-   Date Returned\*
-   Comments

After updating the values you can select any of the following buttons:

-   **Save**: Selecting this will save the updated values. If any error, the pop up will be displayed. You can see the details and proceed accordingly.
-   **ClearAll**: Selecting this will clear all the default values in the fields.
-   **X**: Selecting this will close the panel.

#### Edit Multiple Items

You can edit the multiple items together. To edit the multiple items, you can select the required items from the grid and click on **Edit Item** button. **(1 of n) Edit Item \<Item Name\>: \<Item Description\>** panel appears. Where, n is the number of items selected.

Here, you can update each items and navigate to next item using **Next** button. If you navigate to the next item, you can click on **Previous** to navigate to the previous item. You can **Save** each item updates and the navigation will be moved to the next item automatically.

Next button is not available for the last item and Previous button is not available for the first item in the item list selected.

#### Remove Item

You can remove the item from the grid. The remove action is only available for return to account. It does not apply to requisition or work order.

To remove the item, you can perform the following:

-   Select an item from the grid.
-   Click on **Remove Item** button.
-   Item delete confirmation message appears. You can click on **Delete** to delete that item. If deleted, it will be removed from the grid. If any error, You can see the error and proceed accordingly.

>[!important]
>New Item and Remove Item buttons will be visible only if you are returning items from Account. If you select work order and Requisition, these buttons will not be visible.

#### Adjust Quantity

You can adjust the Quantity on Hand for the selected non serialized item. This feature is visible only if the item has at-least one bin.

To adjust the quantity for non serialized items,

-   Select an item from the grid.
-   Click on **Adjust Qty** button.
-   **Adjust Qty** window appears with the list of bins associated with the selected item.
-   You can update the Actual Qty on Hand field that will be on hand after the quantity is issued.
-   You can also update the Comments if required.
-   After updating the value, Click on **Save** to update hat value to the grid. You can click on Cancel to exit the window.
-   If saved, the grid will be refreshed and **Available** column will be updated with the new On hand quantity value.

>[!note]
>Adjustment transaction will be created and the transaction is visible in Stores Activity window if you perform the Adjust Quantity each time.

### Item Return

You can click on **Return** on top of the screen to return those items to the respective requisitions, work order or account. Return will happen for all the lines which has Return Qty \> 0.

If successfully returned, you can see the success mark(![](../assets/inventory/19f18190b92b8bb9dbc5f98445b36f95.png)) under **Status** column. If not you can see the error or warning icons and you can read the error or warning description to proceed further.

If successfully returned, you can see the return transaction for each returns in **Stores Activity** window.

For requisitions, if an item is returned, the details will also be updated in corresponding Requisition lines.

#### Contextual Panel

You can see the following contextual panel items in Return grid screen:

-   [Details](Using-the-Inventory-Notebook.md): Opens the Item module for the selected item.
-   Hierarchy: Opens the hierarchy window to allow you to select an item and drag it to the grid using Import button.
-   [Inventory Search](Using-the-Inventory-Search.md): Opens inventory search to add the item to issue. You can select the required item/s and click on Add to Grid to add the items to the grid.

    While importing the items from Hierarchy and Inventory Search, by default, the [stores location](Issue.md#full-issue#StoreLocation) which is selected while performing item return will be considered. If the imported items will not belong to that stores location, then the error message will be displayed.

    If multiwarehousing is off, then the stores location will always be main.

>[!important]
>Hierarchy and Inventory Search buttons will be visible only if you select the
Account to return. For Work order and Requisitions, these buttons will not be visible.

### Ad-hoc Return

Ad hoc return is only for return to account. There is no ad hoc return to requisition or work order.

The biggest difference between full return and ad-hoc return is that everything is done in the bottom panel with the search results still up top. Also, Ad-hoc return is only against Account.

In ad-hoc return, you can return one item at a time. Perform the following in ad-hoc return:

1.  In the **Inventory Search** screen grid, select one or multiple items. Ad hoc return can be launched from the inventory search grid or item module. Also if multiple warehousing is turned on, when launching from the search grid, your search query must include the column **Stores Location** or the Return button will be disabled.
2.  Select **Return** from the action bar or select **Return** in Item module.
3.  By default, Account button is selected.
4.  Select the required values from **Account, Area, Department** and **Project** drop down.
5.  Enter **Return to Employee** and **Comments** fields if required. Return to Employee field will be auto populated if you search and select the requisition to which the delivery information is provided during the requisition creation.
6.  Click **Next**.
7.  Consider the following:
    -   Item, Description, Unit of Measure, Qty Issued and Qty Returned fields will be auto populated with the selected item.
    -   Quantity on Hand after Issue: This is calculated based on the Return Qty value.
    -  You can enter the required Return Qty for non serialized items. The default value will be set to 0. Quantity on Hand after Return value will be incremented based on the Return Qty value. If an item has multiple bins, there will be an icon ![](../assets/inventory/78239820a1d3d1d44f7ce4777a145b51.png) beside the quantity to allow the user to select different quantities from different bins. The default value will be the primary bin, but can be changed.
    
    >[!important]
    >If the item is serialized (([Serial Tracking](Using-the-Inventory-Notebook.md#properties)) toggle is enabled), Return Quantity is read only and Quantity on Hand after Return field will not be visible. Return quantity will be filled in once you select the serial numbers using the Enter Serial Info hyperlink. The serial number choices shown for the return are all serials eligible to be placed into inventory.
    Serials not eligible for inventory such as currently installed serials will not show in the list. If you click on the hyperlink, you can see the list of serial ids linked for the selected item. You can select one or multiple serials to update the Return Quantity. One serial can have one item, but one item can have multiple serials.

    -  Stores Location field is read only and displays the selected value from the previous screen.
    -   You must enter or select **Return to Employee** field if it was not entered in the previous screen.
    -   You can enable **Item Not Originally Issued From Inventory** toggle. The toggle is disabled by default. If enabled, Unit Cost field will be visible. You can enter the required Unit Cost if required.
    -   Date Issued will be defaulted to Today's date. You can update it if required.
    -   You can enter the Comments if required.

    After updating the required fields, you can select any one on of the following buttons:

    -   **Save**: Selecting this will return the item directly to the selected account. If any error, the pop up will be displayed. You can see the details and proceed accordingly.
    -   **Next**: Selecting this will move the navigation to the next item in the selected items queue.

    >[!note]
    >If successfully returned, you can see the Return transaction for each return in Stores Activity window.

    >[!note]
    >For requisitions, if an item is returned, the details will also be updated in the corresponding Requisition lines. In Requisition line details, the Requested Quantity will always be 0 for ad-hoc issue.

    -   **Previous**: Selecting this will navigate back to the previous item in the selected items queue.

    >[!note]
    >Next and Previous buttons will be visible only if multiple items are selected for issue. Next button is not available for the last item and Previous button is not available for the first item.

    -   **ClearAll**: Selecting this will clear all the default values in the fields.
    -   **X**: Selecting this will close the panel.
