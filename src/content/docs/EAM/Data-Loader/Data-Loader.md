---  

title: "Data Loader"  
draft: false 
type: Article

---

The data loader application is used to load data into the EAM database from
Excel spreadsheets. The following data types can be loaded into the EAM
database by utilizing their respective templates:

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

The **Non-PO Receipts** template is designed to enable users to add new
records only, restricting the ability to update, edit, or delete existing
records.

In the T**ask Management Portal** , you can see the task name as **Data Loader \<Plant Name\>** if you have sufficient security access.

On selecting a data loader task, you can see the **Task Detail** in the action bar if you have the necessary access permissions.

>[!Note]
>The **Create New Schedule** , **Modify Schedule** , and **Disable Schedule**
features are not available for **Data Loader**.

To access the data loader details, click the **Execute** button. This button
will only be visible if users have sufficient security access. Refer to for [Uploading Data using Data Loader](#uploading-data-using-data-loader) more details.

>[!Note]
>Two users, namely **taskmanagement** and **taskexecution** , have been added with appropriate security access for the Data Loader module. Additionally,these users are assigned to the necessary plant and store location in the back end.

## Uploading Data using Data Loader

To upload a data using data loader, perform the following:

  1. Navigate to the Data Loader: **Data Loader \<Plant Name\>** window:

  2. **Select Type of Sheet** from the drop down.

  3. Based on the type of sheet, **Select Sheet** from the drop down. The sheets which are available for the selected sheet type will be listed in the drop down. Default value is **All** , you can change if needed to upload data for specific sheet.

  4. If you don't have the ready data template, you can click the **Download Template and Instruction** button. The template and instructions for the selected sheet type will be downloaded as separate .xlsx files (**EAM_ \<Sheet Type\>_1_0_Spreadsheet INSTRUCTIONS.xlsx** and **EAM_ \<Sheet Type>_1_0_Spreadsheet Template.xlsx**).

      The instructions spreadsheets contain the descriptions and attributes of the data fields that can be loaded using data loader. You can fill the template with suitable values.

     * The values in the excel sheet are case sensitive. 

     * Do not add, delete, or rename the tabs at the bottom of the spreadsheet. 

     * Do not change the column headings on the spreadsheet. 

     * Row 1 of the data worksheets contains field labels. Data should be entered starting with row 2 of the data worksheets.

  5. Once the data template is ready, click on **Select File to Upload** to add the data template from your local machine. You are supposed to add the file in the form of excel in .xlsx only.

  6. If the file is uploaded successfully, No File Chosen label will be replaced with your local file name.

  7. Select the option(s) mentioned below for which the file is uploaded. This checkbox will be used as filters to upload the selected records from the file being uploaded.

     * Add new items

     * Update existing items

     * Process rows marked "error"

     * Delete rows flagged for deletion

      Refer [Manipulating data](Manipulating-Data.md) for more details on adding, updating, processing, or deleting items.

  3. Click the **Run Process** button once the file is uploaded and filter/s are applied. The particular data file will be processed and updated in the **Data Loading Status** grid. To view the uploaded data, refer to the View uploaded Data section.

See Also,

[Formatting of Data in Excel](Manipulating-Data.md#formatting-of-data-in-excel)  
[Using Data Loader to Update Data](Manipulating-Data.md#using-data-loader-to-update-data)  
[Special Rules for Data Loading](Special-Rules-for-Loading-Data.md)

