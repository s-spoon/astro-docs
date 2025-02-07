---
title: "Import Data"
draft: false
type: Article
---

You can import Inventory Items, Packaging, NMFC, Carriers, Customers, Groups, 3PLs, Third Party Addresses, Importers, Hazardous Materials Profiles, or Brokers information into Aptean Ship if you have exported the information from Aptean Ship or another application to a text or . csv (comma-delimited) file.

In any of the Maintain categories (Importers, Inventory Items, etc.), click the **Import** button to launch the import screen.
![](assets/images/aptean-ship-import-1.png)

Select **Import File**, navigate to and select the file, and click **Open**.
![](assets/images/aptean-ship-import-2.png)
## Import Dialog


After selecting the import file, the import data is populated on the initial import dialog. To use the first column values as header rows, click the **Use first row for column names** check box.
### Exclude a Column


![](assets/images/importer-columnhead.png)
### Edit Column Name


To edit the column name, click inside the Column Name field and edit the text.
![](assets/images/importer-changehead.png)
## Templates


Templates define the mapping types and input values for target fields, and using one to import similar data that shares a common format with data you previously imported prevents you from having to remap all of the fields. You can select an existing template to use with the current file if you have already imported data for a category. If/when you try to re-import using that same file for the same category, you can select an Import Template to select the mappings you previously used.

![](assets/images/aptean-ship-import-3.png)

After selecting the template, its properties display in the grid.

![](assets/images/aptean-ship-import-5.png)

 

>[!Tip] **Template Notes** 
>* You have the opportunity to save a template at the end of the Import process.
>* Templates for some Maintain items, such as Broker, Importer, and Third Party Addresses, are shared and will be available for those items in the Select Template drop-down field.


## Target Fields


For each Target Field you can define a Source information type and field Name from which it will attain its value. The source may be: an input column, fixed value, [auto-assigned numbers](import-data.md#tip), or [concatenation](import-data.md#tip-1).

![](assets/images/aptean-ship-import-6.png)

>[!Tip] **Auto Mapping** <br>Click the Auto Mapping button to have Aptean Ship automatically map the Target Fields based on common mappings. 
## Value Translations


Some Target Fields allow you to translate the imported values into values recognized by Aptean Ship. These fields will display on the Value Translations dialog. For each field, select an Input Column from the Mappings section, and then map the Input Column value to the Target Object value in the Value Translations section. You can do this by selecting values from the Target Object Value drop-down lists.
![](assets/images/aptean-ship-import-7.png)
## Import Results


The import results display. Any records that already exist in the database are marked as "duplicate" records, indicated by an asterisk next to the record (*). Select to "Import duplicate records..." if you want existing duplicate records in the database to be replaced by those you are importing.

If you don't want to import a record, deselect its check box. You can also Select/Deselect All records.
![](assets/images/aptean-ship-import-8.png)

You can also select any record to view more detail.
![](assets/images/importer8.png)

>[!Tip] **Errors** <br>See the [Errors](http://ask.shipping.apteancloud.com/akb/import-data/#errors) section for more information.
## Import Status


After submitting the import records, you will see the import status. After clicking OK, the new records appear for the Maintain item you are importing.
![](assets/images/importer9.png)
## Save the template


After importing the records, you can save the current field mappings as a template.

![](assets/images/aptean-ship-import-4.png)

If you were working from a template and made any changes to the field mappings, you can either overwrite the template or save it as a new template.

![](assets/images/aptean-ship-import-9.png)
## Errors


Occasionally, records on the Import Results dialog will show errors if information is missing or fields are not mapped correctly.
![](assets/images/aptean-ship-import-10.png)

To see where the errors occurred, you can click on a record to display more detail. Once you have located the errors, you can fix them in the import file or click the Back button to correct the mappings.

![](assets/images/importer-error2.png)



### >[!Tip] <br>
When importing a number of records a value is automatically assigned to this field. The first record will be assigned the value that is set in this dialog. The next imported record will be assigned the next incremented value. For example, the first record is assigned 0, the second is assigned 1, etc

### >[!Tip] 
<br>This allows you to integrate values from different columns. For example, if one column is First Name and another column is Last Name, you could use this option to connect the data from the First Name and Last Name columns into one target object field. You can specify a separator, such as a space, dash, or comma.