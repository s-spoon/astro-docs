---  

title: "Using the Supplier Search"  
draft: false 
type: Article


---

Using the **Supplier Search** , you can search for and display records related
to suppliers. From the list of suppliers displayed, you can click a supplier
hyperlink from the displayed list or select the required supplier and click **Details** in the
**contextual panel** to access the supplier's module that contains detailed
information about the selected supplier.

The supplier search window allows you to search by Supplier or Name. Only if
you have access to supplier search window then you are able to search
suppliers.

If you do not enter a value in these fields, the search uses only the
selection criteria of the selected query.

To perform a search:

  1. Select a **Query** from the drop-down list and click **Search**.
<br>It displays all the suppliers for the selected query.

  2. To search for a specific supplier, perform the following:
       1. Enter a full or partial value in the **Supplier** or the **Name** field. The value you enter becomes an add-on to the selection criteria built into the selected query. The more complete the description entered, the narrower the resulting search will be.
        2. Click **Search**. 

It displays a list of suppliers matching the selection criteria. See Generic Components and
Troubleshooting-**Scenario 2** also.

## Supplier Search Screen Grid

In Supplier Search Screen, a list of suppliers matching the selection criteria
will be displayed in grid. See Grid Operations for more details on the grid.

## Action bar

In the **Suppliers Search** window, you can select one or more of the
displayed records to enable the action bar located at the top of the window.
The Supplier Search window remains open when you jump to other windows using
the action buttons. The actions buttons are:

  * New Supplier: Opens Supplier window to create a new supplier. Only if you have access, then you can add a supplier. 
  * Delete: Opens a pop up to delete the selected supplier. 
  * **Export** : Exports the grid data to an excel sheet. The data will be downloaded in excel and you can open the excel to view the grid details.
  * Rename Supplier: Opens Rename Supplier window to rename the selected supplier. 

## Contextual Panel

In the **Suppliers Search** window, you can select a record to enable the
Contextual Panel located at the right of the window. The Supplier Search
window remains open when you jump to other windows using the Contextual Panel.
The Contextual Panel consists of the following:

  * **Details**: Opens the supplier module for the selected supplier. 
  * **Documents**: Opens Document window which contains all the reference documents attached for the selected supplier.

## Delete Supplier

You can delete a supplier from the **Supplier Search** screen.

To delete a supplier:

  1. In the Supplier Search window, select a supplier to delete. 
  2. Click **Delete** from the action bar.
<br>A message prompt appears: **Are you sure you want to delete Supplier(\<Name>)?** with the following buttons:
    
      * **Delete** : You can select this to delete a supplier. If deleted successfully, the **Supplier <Name> Deleted Successfully** notification appears. 
     * **Cancel** : You can select this to cancel the supplier deletion.

## Rename Supplier

You must have security access to Supplier rename in order for the action to be
enabled. If you have the access, you can assign a new name to an existing
supplier. After you have provided the new name, the normal process is to have
Task Management Portal implement the change throughout all records in the
database.

To rename a supplier:

  1. In the  Supplier Search window, select a supplier to rename.

  2. Click **Rename Supplier** from the action bar.

The **Rename Supplier** window opens with Old Supplier. You can click on **X**
to close the window.

  3. Enter the required value in the **New Supplier** field. 

  4. Read the message and click the check box to acknowledge the renaming action. 
  5. Click **Save**.

>[!note]
>The renaming changes can take a long time to execute, changes on the **Rename
Supplier** window are normally handled through Task Management Portal. If the
job is not on a regular schedule, you may need to notify your systems support
to have it executed. Refer _Task Management User Guide_ for more details.

>[!note]
>You can not delete or rename the supplier if any purchase orders are linked to
that supplier.

