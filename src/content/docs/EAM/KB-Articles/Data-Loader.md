---  
 
title: "Data Loader"  
draft: false 
type: KB Article
 
---

The data loader application is used to load data into the EAM database from Excel spreadsheets.
The following data types can be loaded into the EAM database by utilizing their respective
templates:
* **Blanket lines**
* **Blanket Pricing**
* **Codes**
* **Equipment**
* **Events**
* **Item Master**
* **Item Others**
* **Meter**
* **Parts Hierarchy**
* **PM Schedules**
* **PO Receipts**
* **Requisitions**
* **Serial**
* **Suppliers**
* **Users**
* **Work Orders**
* **Non-PO Receipts**

> [!Note]  
> The Non-PO Receipts template is designed to enable users to add new records
only, restricting the ability to update, edit, or delete existing records.


In the **Task Management Portal**, you can see the task name as **Data Loader-Plant** Name if
you have sufficient security access.

On selecting a data loader task, you can see the **Task Detail** in the action bar if you have the
necessary access permissions.

> [!Note]  
> The Create New Schedule, Modify Schedule, and Disable Schedule features
are not available for Data Loader.

To access the data loader details, click the **Execute** button. This button will only be visible if users
have sufficient security access. Refer to [Uploading Data using Data Loader](Data_Loader.md#uploading-data-using-data-loader) for more details.

> [!Note]  
> Two users, namely taskmanagement and taskexecution, have been added with
appropriate security access for the Data Loader module. Additionally, these users are
assigned to the necessary plant and store location in the back end.

## Uploading Data using Data Loader

To upload a data using data loader, perform the following:
1. Navigate to the Data Loader: Data Loader-\<PlantName\> window:
2. **Select Type of Sheet** from the drop down.

3. Based on the type of sheet, **Select Sheet** from the drop down. The sheets which are
available for the selected sheet type will be listed in the drop down. Default value is **All**, you
can change if needed to upload data for specific sheet.
4. If you don't have the ready data template, you can click the **Download Template** and
**Instruction** button. The template and instructions for the selected sheet type will be
downloaded as separate .xlsx files (`EAM_<Sheet Type>_1_0_Spreadsheet
INSTRUCTIONS.xlsx` and `EAM_<Sheet Type>_1_0_Spreadsheet Template.xlsx`).  
The instructions spreadsheets contain the descriptions and attributes of the data fields that
can be loaded using data loader. You can fill the template with suitable values.
    * The values in the excel sheet are case sensitive.
    * Do not add, delete, or rename the tabs at the bottom of the spreadsheet.

    * Do not change the column headings on the spreadsheet.
    * Row 1 of the data worksheets contains field labels. Data should be entered starting with row 2 of the data worksheets.
5. Once the data template is ready, click on **Select File to Upload** to add the data template
from your local machine. You are supposed to add the file in the form of excel in .xlsx only.
6. If the file is uploaded successfully, No File Chosen label will be replaced with your local file
name.
7. Select the option(s) mentioned below for which the file is uploaded. This checkbox will be
used as filters to upload the selected records from the file being uploaded.
    * Add new items
    * Update existing items

    * Process rows marked "error"
    * Delete rows flagged for deletion.  
    Refer [Manipulating data](Data_Loader.md#manipulating-data) for more details on adding, updating, processing, or deleting
items.
8. Click the **Run Process** button once the file is uploaded and filter/s are applied. The
particular data file will be processed and updated in the Data Loading Status grid. To view
the uploaded data, refer to the View uploaded Data section.  
See Also,  
[Formatting of Data in Excel](Data_Loader.md#formatting-of-data-in-excel)  
[Using Data Loader to Update Data](Data_Loader.md#using-data-loader-to-update-data)  
[Special Rules for Data Loading](Data_Loader.md#special-rules-for-loading-data)


## Manipulating Data

The data loading process can be run with multiple checkboxes checked - so that a given run could
process **New rows**, **Updates**, **Deletes**, and **Process rows** marked **Error**.

### Add New Items

To load new data into the EAM database, check the **Add New Items** checkbox. With checked:
* The Data Loader will attempt to load all spreadsheet rows with an empty/blank value of
**Status** ('Status' and 'Error' are the last columns in every data spreadsheet and are used by
the utility to control processing).

* The data in each row will be validated.
* If a row is successfully loaded, its **Status** field will be set to **Added**; and the **Error** field will
remain Empty.
* If the row cannot be loaded, its **Status** field will be set to **Failed add**, and the **Error** field will
contain an **Error Message**.
* For example, suppose you attempt to load a piece of equipment and enter an Area code on
the spreadsheet containing more than 30 characters, In that case, the row will not be loaded
into EAM, and the **Error** field will contain a message saying that the *Value for Area
exceeded the maximum field length*.
* If the row already exists in the database, the database will be updated with the values in the
spreadsheet, and the Status field in the spreadsheet will be set to **Updated**.

### Update Existing Items

You can update items, equipment, suppliers, etc., that are already in the database, applying data
values from a spreadsheet as follows:

In the spreadsheet, set the Status field to Update for every row to be applied to the EAM
database.

On the Data Loader screen, check the **Update Existing Items** checkbox. With the check box
checked:

* This will attempt to process all rows in the spreadsheet where **Status** equals **Update**.
* The data in each row will be validated.
* If a row is successfully updated, its **Status** field will be set to **Updated**, and the Error field
will remain empty.
* If the row cannot be updated, its Status field will be set to Failed update; the **Error** field will
contain an Error message.
* If the row does not exist in the database, the row will be added to the database using the
values in the spreadsheet, and the Status field in the spreadsheet will be set to Updated.

### Delete Rows Flagged for Deletion

You can delete **Items**, **Equipment**, **Suppliers**, etc. from the EAM database as follows:
* In the spreadsheet, set the Status field to Delete for every row to be deleted from the
database.
* Check the **Delete Rows Flagged** for Deletion checkbox on the Data loader screen.
With the checkbox checked:
* The utility will attempt to process all rows in the spreadsheet where Status equals Delete.
* If a row is successfully deleted, its **Status** field will be set to Deleted, and the Error field will
remain Empty.

* If the row cannot be deleted, its Status field will be set to **Failed delete**, and the Error field
will contain an error message.
* If the row to be deleted does not exist in the EAM database, the Status is set to Deleted, as
if the deletion occurred.

### Process Rows Marked "Error"

To re-process errors, check the Process Rows Marked "Error" checkbox. With the check box
checked:
* The utility will attempt to process all rows in the spreadsheet where Status equals **Failed Add**, **Failed Update** or **Failed Delete**.
* The data in each row will be validated.
* If a row is successfully processed, its Status field will be set to **Added**, **Updated** or **Deleted**,
and the Error field will be cleared.
* If the row cannot be processed, its **Status** field will remain unchanged, and the latest error
will be written to the **Error** field.

To see errors in the data loading process, users can download the spreadsheet and check the
contents of the Error column. Alternatively, they can click the **See More** button in the status grid
to access details on the number of processed rows along with their respective statuses.

### View Uploaded Data

As soon as the data loads, the data file and its status will be recorded in the Data Loading Status
grid.  
You can click on the Refresh button to view the latest data loading status to the EAM database.
You can select any record and click on Task Detail to see its processing details.  
The grid consists of the following columns:  
**File Name**: It is the name of the file for loading the data.  
**Status**: It is the data loading process status. It can be Created (Amber), In **Progress** (Amber),
**Processed** (with green) and **Fail **(with red). If the status is Processed, you can click on the
record to open the processing status of each row in the spread sheet. If selected, Sheet Process:\<Sheet Status\> pop up appears with the following columns:  
* **Sheet Name**: Name of the file.

* **Total Rows**: Total number of processed rows in the excel sheet.
* **Success Rows**: Total number of rows processed successfully.
* **Failed Rows**: Total number of rows processed in fail.
* **Unprocessed Rows**: Total number of unprocessed rows.
* **Download**: You can only download the records with Processed status. If you click on
download hyperlink, the file will be downloaded, and you can see the success and errors if any to update and address them.
* **Uploaded By**: This represents the logged in user for Tenant Portal.
* **Uploaded Date**: This is the file uploaded date.

### Formatting of Data in Excel

When you key in or paste data into a spreadsheet, Excel can automatically change the format of
the cell based on the values entered.  
Format errors can occur when entering values for ‘plant’ in column A of the spreadsheets.  
For example, if your plant code is ‘100’, Excel may interpret this as numeric and process the plant
code as a number, resulting in an error on every row of the spreadsheet. This error is easy to fix:
In cell A2, simply enter a single quote in front of the 100, and then copy-and paste that value into
column A for all remaining rows in the spreadsheet.  
You can usually tell if Excel is interpreting a text field as numeric if the values are displayed as
right justified. P ay attention to how Excel treats the values of Item Manufacturer Part Number,
Equipment Model Number, etc. These fields are text/character fields in the EAM database, but
your data may contain only numbers. For example, if you have values of ‘Model’ that consist
solely of numbers 0 through 9, and they are right justified, then Excel is interpreting the data as
numeric, and incorrect values may be loaded (usually blanks will be loaded). In this case, you can
use the Excel command of TEXT to force Excel to handle the values as text.  
Here is an example, using the Equipment field of ‘Model’:
* Open a blank spreadsheet. In column A of the blank spreadsheet, cut-and-paste in the
values of ‘Model’ from the original spreadsheet.

* In the blank spreadsheet, make sure that the Excel format of column B is ‘General’. Enter
this formula into the corresponding rows of Column B:
    * = TEXT(A1,0)
    * = TEXT(A2,0) etc.
* Copy the contents of Column B, and then paste them into Column C – USING PASTE SPECIAL...VALUES. The new spreadsheet now looks like this:
* Copy the contents of Column C back into the original spreadsheet, over top of the values of
‘model’. You have now forced Excel to treat the values for ‘model’ as text data.

### Using Data Loader to Update Data

When updating existing data using Data Loader, a data field is updated only if a value is entered in
the spreadsheet. For example, supposed Item ABC exists in the EAM database, with unit cost
equal to $123.45. The Data Loader is being run to update the item’s description. The row in the
spreadsheet contains the plant code, item number and description. The spreadsheet column titled
‘unit_cost’ is left empty. When the data loader is run, it will update the description for the item, and
leave the unit_cost unchanged. Note that if the spreadsheet contained a zero in the unit_cost
column, the item’s unit_cost would be changed from $123.45 to 0.  
When updating existing data, text fields can be nulled out using the Data Loader by entering
\<null\> in the spreadsheet cell. The greater than/less-than symbols (<>) are required.


## Special Rules for Loading Data

This section describes various special rules used by the Data Import Utility when loading data.

### Rules for setting the Rank field when loading Item Suppliers

In the EAM database, Item Supplier data is stored based on plant code, item, supplier_id and
manufacturer_part_no. All four fields are used to establish a unique key. When the Data Loader
processes a row in the spreadsheet, it reads the database using plant/item/supplier_
id/manufacturer_part_no. If the dataloader finds a matching row, it goes into ‘Update mode’, using
the data fields on the spreadsheet (rank, current_price, etc) to update that row. I f the Data Loader
does not find an exact match based on plant/item/supplier_id/manufacturer_part_no, it goes into
‘Add mode’, using the data fields on the spreadsheet to build a new entry in the item’s supplier list.

#### Add Mode

If the ‘rank’ column is left blank, the system will add the supplier to the item using the next
sequential rank number. So, i f the item already has two suppliers, with ranks 1 and 2, the new
supplier will be added to the list with rank = 3.  
If the ‘rank’ column is filled in on the spreadsheet, the system will add the supplier to the item
using that value of rank. If the database already contains a supplier for that item having the same
rank, the rank on the existing database entry will be updated to the next available sequential rank
number (opening a ‘slot’ for the entry being added via the spreadsheet).  
Example:  
Database contains this:  
| **Item** | **Supplier** | **Rank** |
|-----------------|----------|---------|
|STOCK10| Acme |1|
|STOCK10| Allied| 2|

Spreadsheet contains just 1 row:  
| **Item** | **Supplier** | **Rank** |  
|----------|----------|--------|
|STOCK10| DXP |1|

End result in database:
| **Item** | **Supplier**| **Rank** |
|------|--------|--------|
|STOCK10 |DXP |1|
|STOCK10 |Allied |2|
|STOCK10 |Acme| 3(original rank changed to 3, to open a place for the spreadsheet’s supplier)|

#### Update Mode

If the ‘Rank’ column is left blank, the rank field on the record for the plant/item/supplier/manufacturer_part_no will not be updated.  
If the ‘rank’ column is filled in, the value will be used to update the record for the
plant/item/supplier/manufacturer_part_no. If the database already contains a supplier for that
item having the same rank, the rank on that record will be updated to the original rank on the
item/supplier being updated.  
For example:  
Database contains this:  
| **Item** | **Supplier** | **Rank** |
|--|-|------|
|STOCK1| Acme| 1|
|STOCK1 |Allied| 2|
|STOCK1 |DXP |3 |

Spreadsheet contains just 1 row:  
| **Item** | **Supplier** | **Rank** |
|------|-|---|
|STOCK1| DXP |1|

End result in database:  
| **Item** | **Supplier** | **Rank** |
|--------|--------|-----|
|STOCK1| DXP| 1|
|STOCK1 |Allied |2|
|STOCK1| Acme| 3 ( Acme moved from rank 1 to 3, to make room for re-ranking of DXP)|

### Rules for setting Parent-Child Equipment Hierarchy Relationships

If you enter values in the 'Parent Equipment' column of the Equipment spreadsheet, you may
need to import the spreadsheet twice. The first execution may produce errors related to loading
the Parent/Child equipment relationships. The second execution of the import should clear the
errors. H ere is an example showing the details of the process: 

Suppose there are three Equipment ID's: 'A', 'B' and 'C'. 'A' and 'B' are child equipment of parent 'C'. Suppose the spreadsheet contains three rows, in this order:  

| **Plant** | **Equipment** | **Parent Equipment** |
|--|--|--|
|001 |A |C|
|001| B| C|
|001| C |-|

When the Data Loader runs, two errors will be produced, for the first two rows of data. The error
message will say that Hierarchy data could not be loaded, because the Parent Equipment 'C' does not exist. The Data Loader processes each spreadsheet row sequentially, so the Parent
Equipment 'C' does not exist when the rows for 'A' and 'B' are processed. Equipment Master rows
will be created for 'A', 'B' and 'C', even though the Hierarchy rows cannot be written. A second run
of the Data Loader, using the same spreadsheet, will clear the errors, because, during the second
execution, an Equipment Master row will already exist for 'C'.

If an Equipment ID is created with an incorrect value of Parent Equipment ID, then the problem
can be fixed by changing the spreadsheet's Parent Equipment ID to the correct Parent ID,
changing the Status column to 'Update', and re-importing the spreadsheet. If there should be no
Parent ID for the Equipment (i.e., the Equipment is not part of the Hierarchy structure), then the
problem can be fixed by deleting the Equipment ID (set Status = 'Delete') and then re-creating the
Equipment ID with the Parent Equipment field blank in the spreadsheet.

### Rules for Updating Work Order Status and Event Start/End Dates

The spreadsheet for loading Work Order headers contains columns for Entered Date and
Completed Date.
If a work order is created using the Aptean EAM, with the work order status set to 70 (completed)
or higher, then:
* Completed Date must be populated.

* The corresponding Event record will be created with Event End Date equal to the Completed
Date and Event End Time equal to 00:00:00.
* If Date Entered is populated, then Event Start Date will be set to Date Entered and Event
Start Time will be set to 00:00:00.
* If Date Entered is not populated, then Event Start Date will be set to Completed Date and
Event Start Time will be set to 00:00:00.

If a work order is created using the Aptean EAM, with the work order status set to less than 70,
then the corresponding Event record will be created with Event End Date and Time null. If Date
Entered is populated, then Event Start Date will be set to Date Entered and Event Start Time will
be set to 00:00. If Date Entered is not provided, then Event Start Date and Start Time will equal
the current date and time when the Data Import Utility added the work order to the database.

If the Aptean EAM is used to update Work Order Status from less-than-70 to 70-or-higher
(completing a work order) or from 70-or-higher to less-than-70 (reopening a work order), then the
Event’s Start and End Date and Event Status will be updated accordingly. Note that using the
Data Loader to change the value of work order status between planned/reserved/scheduled/etc
will not update material requirements or reservations.

### Rules for updating Work Order Requisition Lines

Each time the Data Loader is used to create or update a work order requisition line, the current
values of area, department, account, and project from the Work Order Header are used to re-set
the values of area, department, account, and project on the Requisition Line’s Charge Line
(visible on the Charges Tab of the Requisition Notebook).

### Rules for loading Component/Condition/Action Codes

The EAM application allows the user to enter multiple sets of Component/Condition/Action codes
for each Work Order/Event/Equipment History record.  
The Data Loader allows entry of just one triplet of
Component/Condition/Action codes. Additionally, the Data Loader does not provide the ability to
update the values of Component/Condition/Action codes on an existing record. Suppose the Data
Loader is used to create a Work Order or Equipment History record with
Component/Condition/Action values of gasket/vibrating/cleaned. Suppose t he values of
gasket/vibrating/cleaned are valid codes but are not the correct values for this Event. T o fix the
data using the Data Loader, set Status = 'Delete' to delete the entire Work Order Event/Equipment
History record, and then readd the Work Order Event/Equipment History record with the correct
values, e.g., gasket/leaking/replaced.

### Rules for loading Meter Reading History

Before loading Meter Readings History, it's crucial to sort the spreadsheet by Reading
Date/Reading Time in ascending order. Failure to do so may result in incorrect values for the
Previous Reading displayed on Aptean EAM's Meter Definition window and Meter Reading Entry
window.

If Meter Reading History is loaded without proper sorting, there are two options for correction, use the Data Loader to delete the readings, sort the spreadsheet, and then re-load the readings or ignore the Problem. The incorrect values of Previous Reading will not impact the PM Generation
process. As new meter readings are entered in Aptean EAM, these values will be replaced with
accurate data.

### Rules for updating Serial ID's

When using the Data Loader to update an existing Serial ID, do not enter a value for serial_status
(Column D in the spreadsheet). T he status of the serial ID cannot be changed using the Serial
spreadsheet. If a value for serial_status is entered in the spreadsheet, this error message will be
returned: serial_status cannot be entered for existing Serial IDs. Use t he Equipment spreadsheet
to install or uninstall Serial IDs.

When using the Data Loader to update an existing Serial ID which is at a status other than
'Uninstalled', do not enter a value for spares_ holding_equip ( column W) or repair_supplier_equip
(column X) in the spreadsheet. If a value is entered in column W or X for an existing Serial ID
whose status is other than 'Uninstalled', this error message will be returned:
*spares_holding_equip and repair_supplier_equip cannot be entered for existing Serial IDs that
are at a status other than 'Uninstalled'*.

### Rules for Updating Location ID's

When using the Data Loader to update an existing Equipment ID, do not enter a value for
location_status (column AE). If a value is entered in column AE for an existing Equipment ID, the
value will be ignored. No error message will be displayed, and any other data updates for that
Equipment ID will be processed. Changes to Location Status must be made using the Aptean EAM application.

### Rules for Updating Item Data

When using the Data Loader to update an item data, do not enter a value for item_id in the spread
sheet if your inventory control is configured to use Auto-numbering for inventory item Ids. In this
case, once the spread sheet is processed, the item ids will be appended for each row.  
If you are not using line item control (Auto-numbering), then you need to provide the item id and
that id gets saved after processing.

### Rules for Character Casing

When using the Data Loader to update an Item Id, Supplier Id, Work Order Id, Equipment Id and
Serial Id, the values will always be stored as Uppercase even though you enter in lower case in
the corresponding spread sheets. But for employee Id, it is always lower case only.  
This casing is applicable only if you are using Standard Casing feature in EAM application. You
can see the latest data in the output sheets.  
If you are an existing customer before the new EAM solution and using the mixed casing not the
standard casing, the above values will be stored as you provide without any case conversion.

## Historical record

The Data Loader facilitates the migration of old data (legacy data) to the new system. Some of this
older data, like area codes and department codes, may no longer align with the new system's
requirements. However, there is still a need to incorporate such details.

Within the templates for **Events**, **Requisitions**, and **Work Orders**, an additional column,
**historical_load**, has been introduced. If the historical_load column value is set to Yes, the data
will bypass all validation processes, allowing for the direct addition of details to the system.
Conversely, if the historical_load column value is set to No, the data will be treated as a new
record and subjected to standard validation procedures.

## Validation code

The Data Loader templates are equipped with specific validations to enforce field length limits.
For instance, if the code field length is configured as 30, using a standard data loader template
prevents users from entering a code exceeding this limit. However, if users opt for their own
template, such restrictions are not enforced during data entry in the Excel file. Consequently,
errors may arise during the upload process.  
If users upload a file and subsequently use the same template to re-upload, the standard
validation could be lost. In such cases, users would need to download the file again and copy-
paste the content into a new document.  
To see errors in the data loading process, users can download the spreadsheet and check the
contents of the **Error** column. Alternatively, they can click the **See More** button in the status grid
to access details on the number of processed rows along with their respective statuses.

