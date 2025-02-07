---  

title: "Cycle Count"  
draft: false 
type: Article

---

Using the **Cycle Count**, you can create/manage the batch of item numbers scheduled for a physical count in the inventory.

Menu path: **Inventory \> Cycle Count**

The cycle count search window allows you to search by cycle count batch. If you do not enter a value in the Stores Location, Created Date and Status fields, the search uses only the selection criteria of the selected query.

To perform a search:

1.  Select a **Query** from the drop-down list and click **Search**.

    It displays all the cycle count batches for the selected query.

2.  To search for a specific batch, perform the following:
    -   Enter a full or partial value in the **Stores Location**, **Created Date or Status** fields. The value you enter becomes an add-on to the selection criteria built into the selected query. The more complete the description entered, the narrower the resulting search will be.
    -   Click **Search**.

It displays a list of cycle count batches matching the selection criteria. See Generic Components and Troubleshooting also.

### Cycle Count Search Screen Grid

In the cycle count search screen, a list of cycle count batches matching the selection criteria will be displayed in grid. See Grid Operations also.

You can click on **Batch Id** column hyperlinks to see the batch details. See [Details](#details) for more details.

### Action bar

In the **Cycle Count Search** window, you can select one or more of the displayed records to enable the action bar located at the top of the window. The cycle count search window remains

open when you jump to other windows using the action buttons. The actions buttons are:

-   [New](Create-Cycle-Count.md): Opens New Batch window to create a new cycle count batch.
-   **Delete**: This button will not be enabled if the batch **Status** is **Deleted**. If enabled, selecting this will open Delete pop up to delete the selected cycle count batch. A message prompt appears: **Are you sure you want to delete this Cycle Count Batch?** with the following buttons:
    -   **Delete**: You can select this to delete the selected batch. If deleted successfully, the cycle count batch will be removed from the inventory. Error pop up will be displayed if the selected batch can not be removed.
    -   **Cancel**: You can select this to exit the pop up.
-   [Close](#close-batch): This button will not be enabled if the batch **Status** is **Closed/Deleted**. If enabled, you can select this to close the selected cycle count batch.
-   **Print**: You can select this to print the cycle count/s. Each cycle count will be printed in .pdf format in a separate tab. An error message will be displayed if there is no records to print.

#### Contextual Panel

In the **Cycle Count Search** window, you can select a record to enable the Contextual Panel located at the right of the window. The cycle count Search window remains open when you jump to other windows using the Contextual Panel. The Contextual Panel consists of the following:

[Details](#details): Opens the cycle count details for the selected batch.

### Close Batch

You can close the cycle count batch if it is in **Open** and **Created** states. Once closed, the cycle count batch status will be changed to **Closed**.

To close the batch,

-   Select the valid record in the grid and click on **Close/Close Batch**.
-   **Close Batch** panel appears with the following fields:
-   **Closed By\***: By default, the logged in user will be displayed. You can click on **Clear** button to clear that and search for the different user if required.
-   **Comments**: You can add the batch closing comments if required.
-   After updating the values, you can click on **Save** to close the batch. If closed successfully, the status will be changed to **Closed** in the grid. If not error message will be displayed.

### Details

The Detail page consists of the selected cycle count batch details. You can select a record in cycle count search grid and click on **Details** in Contextual Panel to open the batch details in the right panel. If selected, **Cycle Count Batch \<Batch Id\>: Description** page appears. You can also see the **Stores Location** and **Status** of the selected batch.

The cycle count batch details has two standard tabs:

-   [Configuration](#configuration)
-   [Item](#item)

Also you can perform the following actions in Details page:

1.  **Open in New Tab** : You can click on ![](../assets/inventory/f112e1b5654e89ef27f5d029b2253699.png) icon to open the details page in a new separate tab.
2.  **Close**: You can click on **X** button to close the **Details** panel.

### Configuration

The **Configuration** tab consists of the following section:

Basic Information

Here, you can provide some basic details of a cycle count batch. This section consists of the following:

-   Cycle Count Name\*
-   Stores Location\*
-   Employee\*: This field is defaulted to logged in employee while creating the new cycle count batch.
-   Target Date to Complete\*: By default, today's date will be selected while creating the new. It is recommended to enter the future dates to avoid multiple errors.
-   Comment
-   Blind Count: This toggle is disabled by default. You can enable it if required. If this toggle is enabled, it will not show the **System Qty** column while counting.
-   Require Comment on Discrepancy: This toggle is disabled by default. You can enable it if required. If this toggle is enabled, then comment is required if count vary.

### Item

This tab provides the item and bin details present in the selected batch. The items will be displayed in **Cycle Count** grid.

You can perform the following actions on the grid records: Some actions are dependent on the status of the Batch. Edits to Items are only available if the batch is in Created mode. Once the batch has been published, items can not be added or removed.

#### Add New Item

You can add new items to the selected item count batch. To add the items:

-   Click on **New** button from the action bar. **Add New Item** panel appears.
-   Search and select the required **Item** that belong to the selected Stores Location. If the item is already added to any cycle count batch, the confirmation pop up appears. You can proceed to add that item again.
-   Click **Save** to add the selected item/s to the grid. Click on **Clear** to select the different item.

#### Remove Item

You can delete an item from the cycle count batch. To delete an item:

1.  In the grid, select an item to delete.
2.  Click **Remove** from the action bar.

    A message prompt appears: **Are you sure you want to remove Item (\<Item\>)?** with the following buttons:

    -   **Delete**: You can select this to delete an Item. If deleted successfully, the item will be removed from the grid. Error pop up will be displayed if the selected item can not be removed. You can see the various conditions for not deleting the item and proceed further.
    -   **Cancel**: You can select this to exit the pop up.
    -   **Send Email**: You can select this to send an email to the concerned person.

#### Set Group

You can group items in the cycle count batch to better manage the items that need to be counted. To set the group:

-   In the grid, click **Set Group** from the action bar.
-   Set Group panel appears. You can select any of the radio button from the following and the enter the required value in **Enter Value** field.
-   \# of items for each group: If you have 100 items, and you enter 10 in this entry field, the sys- tem will create 10 groups with 10 items in each group in order as they appear in the query.
-   Total \# of days to finish count: If you have that same 100 items, and you enter 5 in this field, the system will create 5 groups and divide the items among that number of groups so in this case you would have 20 items per group. Again, the items get assigned from the order they are in the query.
-   After updating and selecting the values, you can click on any of the following buttons:
-   **Save**: Selecting this will save and set the group to the selected item. The **Group Number** column will be updated in the grid.

-   **Clear**: Selecting this will clear the value in the Enter Value field.
-   **X**: Selecting this will close the panel.

#### Assignment

You can assign the cycle count batch to the concerned person. To assign:

-   In the grid, select an item and click **Assignment** from the action bar.
-   Assignment panel appears. You can search and select the required **Employee ID\***.
-   After updating and selecting the values, you can click on any of the following buttons:
-   **Save**: Selecting this will save and assign the batch to the selected employee. The **Assigned To** column will be updated in the grid.
-   **Clear**: Selecting this will clear the value in the Enter Value field.
-   **X**: Selecting this will close the panel.

#### Publish Cycle Count

You can finalize and publish the cycle count batch to freeze the items on batch. After publish, you will not be allowed to add or remove item.

To publish:

-   In the grid, click **Publish Cycle Count** from the action bar.
-   If any error, message will be displayed. If not, the status of the cycle count batch will be converted to **Open**

>[!important]
>New, Remove, Set Group, Assignment and Finalize Cycle Count features will be visible only for the batch with Created Status.

#### Count Entry

You can select the batch with **Open** status and count the exact quantity of items using Count Entry feature.

To enter the count:

-   Select **Cycle Entry** from the action bar.
-   Cycle Entry grid appears to list all the uncounted items by default.
-   The **Include Counted** toggle is disabled by default to show only the uncounted items. You can enable the toggle to include all items on the batch (All counted and uncounted items).
-   For each items, you can update the **Count Result** column if you have security access.

-   If the item is not serialized, you can directly enter the **Count Result** column to the required value.
-   If the item is serialized, clicking on the column will display the pop up to select serial Id for the selected item. You can select the serials (Only with **Status** New, Uninstalled and Restocked) from the **List of Serials Present In the \<Bin\> for Stores Location \<Stores Location\>** grid (Columns: Serial Id and Status). To add the serials from other bins from the same stores location, select the required serial from **Select Serial** drop down and click on **Add** button to add that serial to the grid. After selecting the required serials, click on **Import** button to add the value to **Count Result** column. The column will be updated with the num- ber of serials selected.
-   For each items, you can also edit the **Comments** column if required based on the setting for requiring a comment at the Batch level.
-   After updating the count, you can click on any of the following buttons:
-   Select **Save** to update the **Count Result** column value to the **System Quantity** value. If no error, the System Quantity on Hand will be updated to the counted value. you can see each updated transactions in **Stores Activity** screen.
-   You can click on **cancel** to close the Count Entry panel.

>[!note]  
> When an error occurs, the status column displays a **warning icon**, and the row changes to red. Once the error is corrected, the status column shows a green checkmark, and the red row reverts to black.

>[!note]  
> To view errors, hover over the warning icon.

#### Close Batch

Refer [Close Batch](#close-batch) for more details.

>[!Important]
>Count Entry and Close Batch features will be visible only for the batch with Open Status.

#### Print

You can select this to print the selected cycle count batch details. This will be printed in .pdf format in a separate tab. The error message will be displayed if there is no records to print.

#### Cloud Print

To print the selected cycle count, utilize the **Cloud Print** option. For instructions on using Cloud Print, refer to *Cycle Count Cloud Printing*, Setup Cloud Printing.

>[!note]
>The Cloud Print button is enabled, only if the plant is setup to use cloud print.

#### Export

Selecting this will export the grid data to an excel sheet. The data will be downloaded in excel and you can open the excel to view the grid details.

#### Delete Batch

To delete the selected batch:

-   Select any record and click on **Delete Batch**.
-   Delete pop up will appear with message **Are you sure you want to delete this Cycle Count Batch?** and the following buttons:
    -   **Delete**: You can select this to delete the selected batch. If deleted successfully, the batch status will be converted to **Deleted** state. Error pop up will be displayed if the selected batch can not be removed.
    -   **Cancel**: You can select this to exit the pop up.

> [!important]
> Delete Batch feature will not be visible for the batch with Deleted Status.

#### Contextual Panel

You can see the following contextual panel items in Item tab:

-   [Details](Using-the-Inventory-Notebook.md): Opens the Item module for the selected item.
-   Hierarchy: Opens the hierarchy window to allow you to select an item and drag it to the grid using **Import** button.
-   [Inventory Search](Using-the-Inventory-Search.md): Opens inventory search to add the item/s. You can select the required item/s and click on **Add to Grid** to add the items to the grid. If selected, the items will be added to the grid.

#### Editing the Cycle Count Batch Details

You can click **Edit** button to open the batch details in edit mode. You can update all the required/ mandatory fields (The fields marked with \*) and perform all the necessary functions in all the tabs explained above.

See Edit for more details.

You can not see the **Edit** button for the batches with Status **Deleted** and **Closed**.
