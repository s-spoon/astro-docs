---
title: "Specify report schema using the Made2Manage Report Wizard (R1-NA)"
draft: false
type: Article
---

A report schema specifies the:

-   Data source
-   Layout
-   Report type

Use the **Made2Manage Report Wizard (RPWIZ)** to specify the report scheme of the reports that you create.

### To specify the report schema using the Made2Manage Report Wizard

1. Select the report schema file, if it already exists:

    >[!NOTE]You need not specify any value in the **Schema Path** field when you are creating a new report.

    1.  Click the **Schema Path** Select File button.
    2.  In the **Select Report Schema** dialog box displayed, navigate to the report schema location and select the file.
    3.  Click **Open**.

2. Specify the report identification parameters:

    **Method 1 - Existing report**

    1.  Click the **Report Name** lookup reference button .

        The **Lookup For Report ID** dialog box is displayed.

    2.  Select the report and click **Select**.

        You can view the selected report's description and data source in the appropriate fields.

    **Method 2 - New report**

    1.  In the **Report Name** field, type the report ID.

        >[!TIP]You cannot type the mnemonic of a standard report.

    2.  In the **Description** field, type a brief description of the report.
    3.  In the **Data Source** field, type the report stored procedure name.

3. In the **Layout** field, type the name of the Report Definition Language (RDL) file used by the report.

4. In the **Report Type** area, click:

    -   **Regular**: To create a regular report.
    -   **Document**: To create a special document report.
    -   **Analytic**: To create a business analytic report.

5. In the **Query Option** area, click:

    -   **Designer**: To visually select tables, columns, filter criteria, sort orders, and grouping, and create the report query.
    -   **Editor**: To write your own query.

6. Click **Next**.

    -   If you had selected the **Designer Query Option** in step 5, the next screen allows you to select the tables and views and specify the table join criteria. See Specify table join criteria for more details.
    -   If you had selected the **Editor Query Option** in step 5, a blank screen is displayed in which you can type the report SQL query. See Enter your own query for more details.

    >[!NOTE] If the stored procedure/layout specified already exists, a message confirming if you want to overwrite the stored procedure/layout is displayed.   
    Click **Yes** to overwrite the stored procedure/layout.   
    Click **No** to specify another stored procedure/layout.

For more information about obtaining help in the **Made2Manage Report Wizard (RPWIZ)** or navigating between the screens, refer to Getting help in Made2Manage Report Wizard.

​