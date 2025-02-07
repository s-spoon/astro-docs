---  

title: "Repair Log"  
draft: false 
type: Article

---

The repair log will be generated when you issue a repairable item, with the core return flag enabled.

## Action Bar

From the Repair Log page, you can:

-   CREATE REPAIR LOG: Click this option to create repair log.
-   RETURN FOR REPAIR: Select the item and click this option to return for repair.
-   ISSUE FOR REPAIR: Select the item and click this option to issue for repair.
-   RESTOCK: Select the item and click this option to restock after the repair.
-   SCRAP: Select the item and click this option to move the item to scrap.
-   REPAIR TAG: Select the item and click this option to edit/update the repair tag.
-   PRINT REPAIR WO: Select the item and click this option to print the repair WO.
-   DELETE: Select the item and click this option to delete.
-   EXPORT: Select the item and click this option to export the item repair log records.

## CREATE REPAIR LOG

You have to perform the following configuration to enable create repair log.

#### Security Configuration

For security configuration,

1.  Navigate to **Security** \> **Security Groups**.
2.  Select **Plant** and **Group** and click **Window Access**.
3.  In the **Module** drop-down list, select **Inventory**.
4.  In the **Has Access** column, select the **New** under **Repair Log**. This enables issue for repair.

#### Setup Configuration

For setup configuration

1.  Navigate to **Setup** \> **Setup Option** \> **Inventory Options** \> **Repairables** \> **General**.
2.  From the right pane, click **DETAILS**.
3.  In the **Inventory Options: Repairables** section, Click **EDIT**.
4.  Turn on the **Allow Repair Without Issuing Replacement** toggle button.
5.  Click **SAVE**. 

**Create Repair Log** 

To create a repair log:
   
 1.  From the Repair Log page, click **CREATE REPAIR LOG**. The **Create Repair Log** section appears.
2.  By default the **Outside Repair** toggle button will be turned on.
3.  For inside repair, turn off the **Outside Repair** toggle button. This will navigate you directly to new WO created if it is a serialized Item.

**Outside Repair**

For outside repair,

1.  Ensure the **Outside Repair** toggle button will be turned on.

    The **Create Repair Log** section appears.

2.  Enter the **Repaired By** user name.
3.  Enter the **Repair Tag**. You can configure this in setup to generate the repair tag automatically.
4.  Search and select the Item.
5.  Select the **Stores Location**.
6.  Search and select the Serial ID Repaired. You can enter the serial ID or create a new serial if it is a serial item.
7.  Enter the **Comments** and click **NEXT**. The **Issue For Repair** section appears.
8.  You will have the option to issue repair on **Create Work Order**, **Store Account**, and **Account**. The **Account** will be selected by default.
    >[!note]
    >If you select Store Account, the Add to Existing WO option appears for Non serialized repairable item. If you select Account, the Add the Existing Work Order Option appears.
9.  Select/Enter the **Account**, **Area**, **Department**, and **Project**.
10.  Click **SAVE**. 

**Inside Repair**

For inside repair,

1.  The **Create Repair Log** section appears.
2.  Enter the **Repaired By** user name.
3.  Enter the **Repair Tag**. You can configure this in setup to generate the repair tag automatically.
4.  Search and select the Item.
5.  Select the **Stores Location**.
6.  Search and select the **Serial ID Repaired**. You can enter the serial ID or create a new serial if it is a serial item..
7.  Enter the **Comments** and click **NEXT**.
8.  The **Create New Work Order** page appears.
9.  As you are creating the repair log for inside repair, and serialized item. The New Work Order option will be selected. For non-serialized item, you will be able to create new and add to existing WO.
10. Select/Enter the **Work Order Type**, **Equipment**, **Work Order Number**, and click **NEXT**.

**RETURN FOR REPAIR**

To return for repair:

1.  From the **Repair Log page**, select the item, and click **RETURN FOR REPAIR**. The **Core Return** section appears.
2.  Search and select a user for **Returned By**.
3.  The **Repair Tag** is optional for a serialized item, but it is mandatory for a non-serialized item. Enter an ID for the Repair Tag.
4.  In the **Serial Id Replaced** field, select a **Serial ID** from the existing serial IDs. You also create a new serial ID.
5.  To create a new serial ID, Click **NEW SERIAL**. The **New Serial Quick Entry** dialog box appears.
6.  Enter the **Serial ID**, **Serial Description**, **Class**, **Original Value**, and **Current Value**, and then click **SAVE**.

    A success message appears.

7.  Click **OK**.
8.  Enter the Storage Location for the serial ID.
9.  Click **SAVE**. A success massage appears. Click **OK**.

The Repair Status will be changed to Awaiting Repair and the activity will be updated in the repair log.

**ISSUE FOR REPAIR**

To issue an item for repair:

1.  From the **Repair Log** page, select and item with Awaiting Repair status and click **ISSUE FOR REPAIR**.

    The Issue For Repair section appears.

2.  You can issue the item for Inside Repair or Outside Repair. The inside repair option allows you to directly jump to new work order creation, where as outside repair option allows you to create work order, stores account, and account.

>[!note]
>Add to existing work order option appears for non-serialized repairable item.

For Inside Repair:

1.  Select **Inside Repair**, enter the employee, and click **NEXT**. 

For Outside Repair:
1.  Select **Outside Repair** and click **NEXT**.
2.  In this screen, you can create **Work Order**, **Stores Account**, or **Account**.

    >[!note]
    >If you select Account, the Add to existing work order option appears for non- serialized repairable item.

3.  Click **NEXT**.

    The Create New Work Order page appears.

4.  Select the **Work Order Type**.
5.  Search and select the Equipment.
6.  Enter the Work Order Number. You can leave this field blank if you want to auto generate the Work Order Number.
7.  Click **NEXT**. The Work Order page appears.
8.  Enter the Work Order Details, Equipment details, and Location details.
9.  Click **CREATE**. The item will be issued for REPAIR and available in the Ready for Purchase list.

>[!note]
>The item will be available in the Ready for Purchase list only if it is an outside repair.
For inside repair, no repair requisition will be generated and only the repair work order will be updated based on creating new work order/adding to existing work order option.
The Repair Work Order and the Repair Requisition number will be generated. The Repair Status will be changed to Being Repaired and the activity will be updated in the repair log.


#### Approve Requisition

To approve requisition with repair item:

1.  Navigate to **Requisition** \> **Approve/Review**.

2.  From the **Requisition** page, select the requisition and click **APPROVE/REVIEW**.

The **Requisition Approval/Review** section appears.

1.  Select **Approve** and click **SAVE**.

**RESTOCK**

To restock an item to the inventory:

1.  From the **Repair Log** page, select the item, and click **RESTOCK**.
2.  The **Restock Repairable** section appears.

    >[!note]
    >Only the records in Being Repaired status can be selected for Restock. If it is outside repair then repair status should be Being Repaired and Date Received should be populated to have the Restock window open, else an error will be displayed.

3.  Search and select the Restocked by user name.
4.  Select the required Bin.
5.  Enter the comments.
6.  Click **Save**. The item will be restocked and the Repair Status will be changed to Restocked and the activity will be updated in the repair log.

### SCRAP

To scrap an item:

1.  From the Repair Log page, select and item and click SCRAP.

    >[!note]
    >You cannot scrap an item that is not returned.

    The Scrap Repairable section appears.

    >[!note]
    >Only the records in Being Repaired status can be selected for Restock. If it is outside repair then repair status should be Being Repaired and Date Received should be populated to have the Restock window open, else an error will be displayed.

2.  Search and select the Scrapped by user name.
3.  Enter the comments.
4.  Click Save. The item will be scrapped and the Repair Status will be changed to Scrapped and the activity will be updated in the repair log.

>[!note]
>An item can be scrapped when the repair status is Awaiting Repair.

#### Contextual Panel

In the Activity Log Search window, you can select a record to enable the Contextual Panel located at the right of the window. The Activity Log Search window remains open when you jump to other windows using the Contextual Panel. When multiple items are selected, the contextual buttons will be disabled. The Contextual Panel consists of the following:

-   ITEM: Displays the item details.
-   SERIAL REPLACED: Displays the serial detail if the item is serialized.
-   SERIAL ISSUED: Displays the serial detail if the serial is issued for the item.
-   PURCHASE ORDER: Display the linked purchase order.
-   ISSUING WORK ORDER: Display the issuing work order.
-   REPAIR WORK ORDER: Display the linked repair work order.
-   COMMENTS: Enables the user to enter the comments for the existing logs.
-   REPAIRABLE STORES ACTIVITY: Displays the transaction activities.

#### Create New Batch

This feature is used to create the new batch of the cycle count for the set of items. The new batch created will get the status **Created** by default.

Menu Path: Inventory \> Create Cycle Count

To create the new batch:

-   From the navigation menu, select **Inventory \> Create Cycle Count**.

    Or

    In the **Cycle Count** search screen, select any grid record and click **New** from the action bar. The **Create Cycle Count** window opens.

 -   Enter the necessary and mandatory (The fields marked with \*) details in the [Configuration](Cycle-Count.md#configuration) tab and click on **Create**. The new cycle count batch will be created and the unique Batch Id will be assigned by the system. You can update other tabs in the cycle count **[Details](Cycle-Count.md#details)**. For more information, see the Details.
