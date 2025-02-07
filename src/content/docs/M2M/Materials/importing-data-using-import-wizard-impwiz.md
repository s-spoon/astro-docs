---

title: "Importing Data using Import Wizard (IMPWIZ)"
draft: false
type: Article

---

You can view the **Import Wizard (IMPWIZ)** page only if you have assigned permissions for the page in the **User Permission Wizard (PERMWIZ)** screen. For more information on assigning permissions, see Assign default permission to the new windows/reports and Manage user permissions.

Use this page to import BOM files of type.xls,.xlsx,.csv (comma delimited text file) and.txt (tab delimited text file) into your company database.

**To import BOMs using the BOM Importer**

1. Open the Import Wizard (IMPWIZ) page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Import Wizard** .

    Or

    - Search for **IMPWIZ** or **Import Wizard**  in the **Navigation box** and then select **Import Wizard** .

   The **Import Wizard (IMPWIZ)** page appears.

2. The **Select Data** section lists the types of data to import in the **Select Data Import Type** area.

    The types of data to import are:

    - Standard Bill of Material

    - Job Bill of Material

    - Quotes Bill of Material

    - Sales Order Bill of Material

    - Copy Employee Info From Payroll

    - Copy GL Transactions From Payroll

3. Select the required type of data to import and click **Next**.

    The **Data and Mapping Selection** section appears.

4. Select the data to import and create/load import mappings.

    1. **Select the data to import**: Select the type of file you want to import. You can import either an Excel file or a text file using any of the following options:

        - Import from Microsoft Excel

        - Import from Text file

        >[!NOTE] Before importing an Excel file, ensure if all the fields are of data type "Text" and the data starts from the first cell.

5. To use a sample template of Excel files that are imported, in the **Download Sample Templates** field, click and select the required template.

    For example,

    1. Select **Import from Microsoft Excel**.

    2. In the **Excel File Path** field, click **Browse** to browse the Excel file path.  
        The **Select your data file** dialog box appears.

    3. Select the Excel file (for example, StandardBOM.xlsx) and click **Open**.

    4. From the **Excel Sheet** list, select the worksheet and click **Scan and Continue**.

    5. Click **OK** in the **Uploading** window.

    6. Select the **My data includes headers** check box. This option allows you to specify whether the data in the worksheet includes headers.

6. In the **Create or Load Import Mappings** section specify the fields mapped between your Excel spreadsheet and Made2Manage. You can select any one of the following:

    - **Create a new Import Mapping** – Creates a new mapping from scratch.

    - **Load an existing Import Mapping** – If you have previously created an Import Mapping for the data you want to import, you can re-use it by selecting this option.

        You can also select and re-use any mappings created in prior versions of **Import Wizard**.

7. To create a new import mapping:

    1. In the **Create or Load Import Mappings** section, select **Create a new Import Mapping** and click **Next** to continue.

        The **Data Mapping** section is displayed.

    2. In the **Import Settings** section, specify the following values:

        >[!NOTE] Before selecting, you can verify the **Date Format**, **Value for ‘Yes’**, and **Value for ‘No’** in the spreadsheet.

        1. By default, the **Date Format** field is disabled and the date format from the selected company is taken.

        2. From the **Value for ‘Yes’** list, select the value to use. For example, **Y**

        3. From the **Value for ‘No’** list, select the value to use. For example, **N**

    3. In the **Import Mappings** section, create the mappings. You can select the data you want to import from Made2Manage to the Excel file and map the available Made2Manage fields to your imported data.

        1. **Source** column: You can either map each field to a column in your data file, or manually enter a value.

            - From Imported Data: Fields that are available in the Excel file and imported from the spreadsheet.

            - Manual entry: To specify a default value for all the data in the data file

            - Not Imported: Fields that are not imported from the Excel file.

        2. **Setting** column: You can select from the list. Click the arrow at the end of each field to select and map them against the fields listed under **Required** or **Optional** fields.

            For example, From the **Setting** column, click the arrow and select **Facility** imported from the Excel file. The fields listed in the drop list are the headers from the Excel file. If the data is imported from the Excel file then **From Imported Data** option is selected, by default.

8. Click **Next**.

9. The **Import Preview** screen appears.

    Before importing, you can preview the data you want to import. Data is validated to match the format specified in the Import Mapping screen; it also checks if the facility exists in the Made2Manage database.

    The errors are listed in the lower panel of the screen. You can open the excel file and correct the errors. After saving the changes in the excel file, click the **Re-Import and Validate Data** button to reload and validate the data again.

10. Click **Next**.

11. The **Ready to Import** screen appears.

12. In the **Mapping Export** section, click **Save Mapping** and type a name for the file in the **Save Mapping** window and click **Save** to save the mappings you defined within the screen.

13. Click **Start Import** to begin import.

    The message '*Start the import process?*' appears.

    - Click **Yes** to continue.

    - Click **No** to exit.

    >[!NOTE] The **Status bar** displays the status or progress of the import.

    To save the Import log, right-click and select click **Save** to open the **Save Import Log** dialog, enter a file name and click **Save**.

14. Enter a file name (for example, BOMExcel.M2MStdBom) and click **Save**.

15. The file name extension (.M2M\<BOM-Type\>Bom) is hard-coded and should not be changed.

    The BOM types are:

    - Std (Standard Bill of Material)

    - Jod (Job Bill of Material)

    - Qtd (Quotes Bill of Material)

    - Sod (Sales Order Bill of Material)

    - EmpImp (Employee Info from Payroll)

    - GLTran (GL Transactions From Payroll)

    >[!TIP]If you save the mappings, you do not have to map them every time.

    The message, *Mappings saved* appears. Click **OK**.

    After importing the data file successfully, click **Start new Import** to import another data file. The button automatically changes from **Start Import** to **Start new Import**.

16. Click **Close**.