---  

title: "Special Rules for Loading Data"  
draft: false 
type: Article

---

This section describes various special rules used by the **Data Import Utility** when loading data.

## Rules for setting the Rank field when loading Item Suppliers

In the EAM database, Item Supplier data is stored based on plant code, item, supplier_id and manufacturer_part_no. All four fields are used to establish a unique key. When the Data Loader processes a row in the spreadsheet, it reads the database using plant/item/supplier_id/manufacturer_part_no. If the dataloader finds a matching row, it goes into **Update mode**, using the data fields on the spreadsheet (rank, current_price, etc) to update that row. If the Data Loader does not find an exact match based on plant/item/supplier_id/manufacturer_part_no, it goes into ‘Add mode’, using the data fields on the spreadsheet to build a new entry in the item’s supplier
list.

### Add Mode

If the ‘rank’ column is left blank, the system will add the supplier to the
item using the next sequential rank number. So, if the item already has two
suppliers, with ranks 1 and 2, the new supplier will be added to the list with
rank = 3.

If the ‘rank’ column is filled in on the spreadsheet, the system will add the
supplier to the item using that value of rank. If the database already
contains a supplier for that item having the same rank, the rank on the
existing database entry will be updated to the next available sequential rank
number (opening a ‘slot’ for the entry being added via the spreadsheet).

Example:

Database contains this:

Item | Supplier | Rank  
---|---|---  
STOCK10 | Acme | 1  
STOCK10 | Allied | 2  
  
Spreadsheet contains just 1 row:

Item  | Supplier  | Rank   
---|---|---  
STOCK10 | DXP | 1  
  
End result in database:

Item | Supplier | Rank  
---|---|---  
STOCK10 | DXP | 1  
STOCK10 | Allied | 2  
STOCK10 | Acme |  3 (original rank changed to 3, to open a place for the spreadsheet’s supplier)   
  
### Update Mode

If the **Rank** column is left blank, the rank field on the record for the
plant/item/supplier/manufacturer_part_no will not be updated.

If the ‘rank’ column is filled in, the value will be used to update the record
for the plant/item/supplier/manufacturer_part_no. If the database already
contains a supplier for that item having the same rank, the rank on that
record will be updated to the original rank on the item/supplier being
updated.

For example:

Database contains this:

Item | Supplier | Rank  
---|---|---  
STOCK1 | Acme | 1  
STOCK1 | Allied | 2  
STOCK1 | DXP | 3  
  
Spreadsheet contains just 1 row:

Item | Supplier | Rank  
---|---|---  
STOCK1 | DXP | 1  
  
End result in database:

Item | Supplier | Rank  
---|---|---  
STOCK1 | DXP | 1  
STOCK1 | Allied | 2  
STOCK1 | Acme | 3 ( Acme moved from rank 1 to 3, to make room for re-ranking of DXP)  
  
## Rules for setting Parent-Child Equipment Hierarchy Relationships

If you enter values in the 'Parent Equipment' column of the Equipment
spreadsheet, you may need to import the spreadsheet twice. The first execution
may produce errors related to loading the Parent/Child equipment
relationships. The second execution of the import should clear the errors.
Here is an example showing the details of the process:

Suppose there are three Equipment ID's: 'A', 'B' and 'C'. 'A' and 'B' are
child equipment of parent 'C'. Suppose the spreadsheet contains three rows, in
this order:

Plant | Equipment | Parent Equipment  
---|---|---  
001 | A | C  
001 | B | C  
001 | C | -  
  
When the Data Loader runs, two errors will be produced, for the first two rows of data. The error message will say that Hierarchy data could not be loaded, because the Parent Equipment 'C' does not exist. The Data Loader processes
each spreadsheet row sequentially, so the Parent Equipment 'C' does not exist
when the rows for 'A' and 'B' are processed. Equipment Master rows will be created for 'A', 'B' and 'C', even though the Hierarchy rows cannot be written. A second run of the Data Loader, using the same spreadsheet, will clear the errors, because, during the second execution, an Equipment Master
row will already exist for 'C'.

If an Equipment ID is created with an incorrect value of Parent Equipment ID, then the problem can be fixed by changing the spreadsheet's Parent Equipment ID to the correct Parent ID, changing the Status column to 'Update', and re-
importing the spreadsheet. If there should be no Parent ID for the Equipment (i.e., the Equipment is not part of the Hierarchy structure), then the problem
can be fixed by deleting the Equipment ID (set Status = 'Delete') and then recreating the Equipment ID with the Parent Equipment field blank in the spreadsheet.

## Rules for Updating Work Order Status and Event Start/End Dates

The spreadsheet for loading Work Order headers contains columns for Entered
Date and Completed Date.

If a work order is created using the Aptean EAM, with the work order status
set to 70 (completed) or higher, then:

  * Completed Date must be populated.

  * The corresponding Event record will be created with Event End Date equal to the Completed Date and Event End Time equal to 00:00:00.

  * If Date Entered is populated, then Event Start Date will be set to Date Entered and Event Start Time will be set to 00:00:00.

  * If Date Entered is not populated, then Event Start Date will be set to Completed Date and Event Start Time will be set to 00:00:00.

If a work order is created using the Aptean EAM, with the work order status set to less than 70, then the corresponding Event record will be created with Event End Date and Time null. If Date Entered is populated, then Event Start Date will be set to Date Entered and Event Start Time will be set to 00:00. If Date Entered is not provided, then Event Start Date and Start Time will equal the current date and time when the Data Import Utility added the work order to
the database.

If the Aptean EAM is used to update Work Order Status from less-than-70 to 70-or-higher (completing a work order) or from 70-or-higher to less-than-70 (reopening a work order), then the Event’s Start and End Date and Event Status will be updated accordingly. Note that using the Data Loader to change the value of work order status between planned/reserved/scheduled/etc will not update material requirements or reservations.

## Rules for updating Work Order Requisition Lines

Each time the Data Loader is used to create or update a work order requisition line, the current values of area, department, account, and project from the Work Order Header are used to re-set the values of area, department, account,
and project on the Requisition Line’s Charge Line (visible on the Charges Tab of the Requisition Notebook).

## Rules for loading Component/Condition/Action Codes

The EAM application allows the user to enter multiple sets of
Component/Condition/Action codes for each Work Order/Event/Equipment History record. The Data Loader allows entry of just one triplet of Component/Condition/Action codes. Additionally, the Data Loader does not provide the ability to update the values of Component/Condition/Action codes on an existing record. Suppose the Data Loader is used to create a Work Order or Equipment History record with
Component/Condition/Action values of gasket/vibrating/cleaned. Suppose the values of gasket/vibrating/cleaned are valid codes but are not the correct values for this Event. To fix the data using the Data Loader, set Status =
'Delete' to delete the entire Work Order Event/Equipment History record, and then readd the Work Order Event/Equipment History record with the correct values, e.g., gasket/leaking/replaced.

## Rules for loading Meter Reading History

Before loading Meter Readings History, it's crucial to sort the spreadsheet by Reading Date/Reading Time in ascending order. Failure to do so may result in incorrect values for the Previous Reading displayed on Aptean EAM's Meter
Definition window and Meter Reading Entry window.

If Meter Reading History is loaded without proper sorting, there are two options for correction, use the Data Loader to delete the readings, sort the spreadsheet, and then re-load the readings or ignore the Problem. The incorrect values of Previous Reading will not impact the PM Generation
process. As new meter readings are entered in Aptean EAM, these values will be replaced with accurate data.

## Rules for updating Serial ID's

When using the Data Loader to update an existing Serial ID, do not enter a value for serial_status (Column D in the spreadsheet). The status of the serial ID cannot be changed using the Serial spreadsheet. If a value for
serial_status is entered in the spreadsheet, this error message will be returned: serial_status cannot be entered for existing Serial IDs. Use the Equipment spreadsheet to install or uninstall Serial IDs.

When using the Data Loader to update an existing Serial ID which is at a status other than 'Uninstalled', do not enter a value for spares_holding_equip (column W) or repair_supplier_equip (column X) in the spreadsheet. If a value is entered in column W or X for an existing Serial ID
whose status is other than 'Uninstalled', this error message will be returned:
 *spares_holding_equip and repair_supplier_equip cannot be entered for existing Serial IDs that are at a status other than 'Uninstalled*'.

## Rules for Updating Location ID's

When using the Data Loader to update an existing Equipment ID, do not enter a
value for location_status (column AE). If a value is entered in column AE for
an existing Equipment ID, the value will be ignored. No error message will be
displayed, and any other data updates for that Equipment ID will be processed.
Changes to Location Status must be made using the Aptean EAM application.

## Rules for Updating Item Data

When using the Data Loader to update an item data, do not enter a value for
item_id in the spread sheet if your inventory control is configured to use
Auto-numbering for inventory item Ids. In this case, once the spread sheet is
processed, the item ids will be appended for each row.

If you are not using line item control (Auto-numbering), then you need to
provide the item id and that id gets saved after processing.

## Rules for Character Casing

When using the Data Loader to update an Item Id, Supplier Id, Work Order Id,
Equipment Id and Serial Id, the values will always be stored as Uppercase even
though you enter in lower case in the corresponding spread sheets. But for
employee Id, it is always lower case only.

This casing is applicable only if you are using **Standard Casing** feature in
EAM application. You can see the latest data in the output sheets.

If you are an existing customer before the new EAM solution and using the
mixed casing not the standard casing, the above values will be stored as you
provide without any case conversion.

## Historical record

The Data Loader facilitates the migration of old data (legacy data) to the new
system. Some of this older data, like area codes and department codes, may no
longer align with the new system's requirements. However, there is still a
need to incorporate such details.

Within the templates for **Events,** **Requisitions** , and **Work Orders** ,
an additional column, **historical_load** , has been introduced. If the
**historical_load** column value is set to **Yes** , the data will bypass all
validation processes, allowing for the direct addition of details to the
system. Conversely, if the **historical_load** column value is set to **No** ,
the data will be treated as a new record and subjected to standard validation
procedures.

## Validation code

The Data Loader templates are equipped with specific validations to enforce
field length limits. For instance, if the code field length is configured as
30, using a standard data loader template prevents users from entering a code
exceeding this limit. However, if users opt for their own template, such
restrictions are not enforced during data entry in the **Excel file.**
Consequently, errors may arise during the upload process.

If users upload a file and subsequently use the same template to re-upload,
the standard validation could be lost. In such cases, users would need to
download the file again and copy-paste the content into a new document.

To see errors in the data loading process, users can download the spreadsheet
and check the contents of the **Error** column. Alternatively, they can click
the **See More** button in the status grid to access details on the number of
processed rows along with their respective statuses.

