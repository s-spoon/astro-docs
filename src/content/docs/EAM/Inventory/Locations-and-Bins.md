---  

title: "Locations and Bins"  
draft: false 
type: Article


---

This section provides you the details on locations and bins.

You can see the following details in the grid for non serialized items:

-   Location
-   Bin
-   On Hand
-   Bin Type
-   Last Counted

You can see the following details in the grid for serialized items:

-   Location
-   Serial Id: It is a hyperlink to open the serial module. See Serial Module for more details.
-   Bins
-   Bin Type
-   Status
-   Last Counted
-   Equipment

You can perform the following operations on each grid records:

## Add Location

You can add a location to stock the selected item. This feature will not be present if multiwarehousing is not used.

To add a new location:

1.  Click on **Add Location**. Add Location panel appears.
1.  Select the required location from **Stores Location** drop down. Only the stores location which you have got access will be displayed in the drop down. The default stores location is set in Edit Preferences.

    The administrator should enable the **Multiple Warehousing** from **Security \> Module Availability** to make Stores Location field visible for the selected plant.

    If enabled, you can set up the stores location for the plant in **Setup \> Validation Codes \> Stores Location**.

    But, the locations only you will have access in **Security \> Assign User Access \> User ID \> STORES LOCATION \> Has Access**.

2.  When you are adding the bin for the first time, the Bin Type is defaulted to **Primary**. You can choose from the drop down for the second bin onwards. Items must be assigned at least one bin number and only one bin can be specified as Primary. You can have additional Secondary or Secondary-No Quantity bins. If you want to maintain quantities in the secondary bins, designate them as Secondary. If you want to store a list of bins but not track quantities in them, designate them as Secondary-No Quantity.
3.  Enter the required value in **Initial Item Quantity in Bin\***. The default value is zero.
4.  Enter the required **Primary Bin Name**. By default, the value will be Default.

>[!note]
>In instances where an item is not physically stocked or if, upon receipt, a bin type is not designated, Aptean EAM assigns the label Default and marks it as Primary . If the item is assigned to a bin at the stores location, the bin assignment should be corrected to reflect the actual bin name and type.

After updating the values, you can select any of the following:

-   **Add**: Selecting this will add the new location to the grid.
-   **Cancel**: Selecting this will close the panel.

## Remove Location

You can remove the location from the grid. To remove the location,

1.  Select the required location and click on **Remove Location**. The remove location pop up appears with the message.
2.  You can click on **Delete** to delete the location. You can click on **Cancel** to exit the pop up.
3.  If deleted, the location will be removed from the grid.

You can not delete a location if any of the following conditions are present:

-   That location still has inventory assigned to a bin (i.e., if the quantity on hand is greater than zero).
-   A requisition line exists for the item/stores location combination that has not been transferred to a purchase order or rejected for purchase.
-   An open purchase order to replenish that item in that stores location exists within the system.

-   The item/stores location combination is used on any Serial Module.
-   An open work order requisition exists for the item/store location combination (i.e., work order status is less than Completed ).

## Add Bin

You can add as many numbers of Secondary and Secondary-NoQty bins to the selected stores location. Only one Primary bin can be added. To add the Bins,

1.  Click on **Add Bin**. Add Bin panel appears.
2.  Stores Location field is read only that represent the selected location. If multiwarehousing is disabled, this field is not shown and the default value is main.
3.  You can choose the bin type from **Bin Type** drop down.
4.  Enter the required value in **Initial Item Quantity in Bin\***. The default value is zero.

5.  Enter the required **New Bin Name**.

After updating the values, you can select any of the following:

-   **Add**: Selecting this will add the new bin to the grid.
-   **Cancel**: Selecting this will close the panel.

## Edit Bin

You can edit the Bin Type for the selected bin. to edit the bin,

1.  Select the required bin and click on **Edit Bin**. The **Edit Bin** panel appears show all bins for the selected Location if the item is non serialized. For serialized items, only the selected bin will be displayed.
2.  You can select the required Bin Type from the drop down if the Main tab is in edit mode.

After updating the values, you can select any of the following:

-   **Update**: Selecting this will update the details. Each location must have exactly one primary bin. If not, the details will not be saved and error message will be displayed.
-   **Cancel**: Selecting this will close the panel.

## Remove Bin

You can remove the bin from the grid. To remove the bin,

1.  Select the required bin and click on **Remove Location**. The remove location pop up appears with the message.
2.  You can click on **Delete** to delete the location. You can click on **Cancel** to exit the pop up.
3.  If deleted, the bin will be removed from the grid. All the conditions explained for Remove Location will hold good for deleting the bin as well.

## Rename Bin

You can assign a new name to an existing bin. After you have provided the new name, the normal process is to have Task Management Portal implement the change throughout all records in the database.

To Rename a bin:

1.  Select a bin to rename.
2.  Click **Rename Bin** from the action bar.

    The **Rename Bin** window opens.

1.  Enter a value in the **New Bin**.
2.  Click the check box to acknowledge the renaming action.
3.  Click **Save**. You can click on **X** button to close the pop up.

## Move

You can move the required item from one bin/stores location to another bin/stores location. To move an item:

1.  Select the item to move. Click **Move**. **Move Between Bins** window appears.
2.  In the **From** section, you can perform the following:
    -   Select the **Stores Location** from the drop down. The bins will be filtered based on the selected location. If multiwarehousing is disabled, this field is not shown and default value is main.
    -   Select the required **Bin\*** from the drop down. It is a mandatory field.
    -   Enter the appropriate value in **Qty to Move** field. This is the mandatory field. This indicates the number of quantities to transfer between the bins. By default, the value is

        zero. You can not enter the quantity greater than the available quantity in that bin.

3.  In the **To** section, you can perform the following:
    -   Select the **Stores Location** from the drop down to which the item can be moved. The bins will be filtered based on the selected location.
    -   Select the required **Bin\*** from the drop down. It is a mandatory field.
    -   You can change the **Requested By** field if required. By default, the logged in user name will be displayed.
4.  After the updating the values, you can select any of the following buttons:
    -   **Save**: This will save the details and move the requested quantities to the new location and bin. If any error, error pop up will be displayed. The On Hand quantities will be dis- played accordingly in the main grid after each movement.
    -   **Clear All**: This will clear all the updated values.
    -  **X**: This will close the panel.

The item movement will create two rows in Stores Activity(one to decrement the from bin and one to increment the to bin) with both rows identified as a **Bibo** Transaction.

This Function will also support the move of qty(s) from the ‘In Receiving’ state to a bin whenever necessary. ‘In Receiving’ will appear in the From Bin whenever Qty exists there.

The processing of the Move (move receipts to bins) will be processed as a **Binng** transaction whenever the ‘In Receiving’ is the From Bin selection. Unlike Bibo which creates two rows, Binng is only one row in Stores Activity screen.

Additionally, when you perform stores transfer(Between different locations), from location transaction will be considered as **triss**(transfer issue) and to location transaction will be considered as **trrec**(transfer receive). If triss fails, trrec will also get aborted. Each transactions will be represented as one row in Stores Activity screen.

You can see each transactions in [Stores Activity](Stores-Activity.md).

#### Count Item

See [Count Item](Using-the-Inventory-Search.md#move-an-item) for more details.

### Requisition

You can search for the requisitions of the selected item. Select the bin and click on **Requisition** option. See Requisition for more details. The **Item** field will be auto populated based on the selected item.

>[!important]
>Move and Count Item will not be visible for serial item ([Serial Tracking, Properties](Using-the-Inventory-Notebook.md#properties) toggle is enabled in Main tab).

### Track Serial

This option will be visible only if Serial Tracking toggle is enabled in Main tab and you got security access in setup or security module. Using this feature, you can perform stores transfer and bin to bin to transfer.

You can select the required bin/location and click on **Track Serial**. Track Serial panel appears.

Only the serial numbers with status New, Restocked and Uninstalled will be displayed in the panel.

The panel consists of the following columns:

-   Select/Select All: You can select one or more checkboxes in the grid.
-   Serial Id: It is a hyperlink to open the serial module. See Serial Module for more details.
-   Status: This can be New, Uninstalled and Restocked.
-   Location: Current Location
-   Bin: Current Bin
-   New Location: You can select the required new location from the drop down.
-   New Bin: You can select the required bin from the drop down. Only the bins associated with the selected location will be displayed in the drop down.

    After updating the required values, you can select any of the following:

-   Save: Selecting this will save the updated details to the grid. New transaction/s will be created and you can see the transactions (Adjust) in **Stores Activity** window.

    >[!important]
    >You must select the required check box and update the new location and bins before saving them to the database. The transactions will not be triggered if you have not selected the check box before save.

-   Clear All: Selecting this will clear all the updated values if not saved. This button will only be visible if you select a serialized item and select **Move/Count Item** from the action bar.
-   Cancel: Selecting this will close the panel.
