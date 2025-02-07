---
title: "Create a new report using the Made2Manage Report Wizard (R1-NA)"
draft: false
type: Article
---

Sometimes you may want to quickly generate a report that contains information not provided in the standard Made2Manage (M2M) reports. Use the **Made2Manage Report Wizard (RPWIZ)** to easily generate your own reports.

### To create a report using the Made2Manage Report Wizard

1. Open the **Made2Manage Report Wizard (RPWIZ)** window:

    -   Click the **Utilities** tab. From the **Maintenance** group, click **Report Customization** > **Made2Manage Report Wizard** .
    -   Press **Alt+T**, type **RPWIZ**, and press **Enter**.

2. Specify the report schema. See [Specifying the report schema](specify-report-schema-using-the-made2manage-report-wizard-r1-na-.md).

3. Construct your report query, using one of the following methods:

    -   Select the tables / views and specify the table join criteria, and construct the query. See [Specifying the table join criteria](specify-table-join-criteria-using-the-made2manage-report-wizard-r1-na-.md).
    -   Enter your own query. See [Enter your own query](enter-your-own-sql-query-in-the-made2manage-report-wizard-r1-na-.md) for more details.

4. Select the fields to be displayed in the report. See [Select report fields](select_the_table_columns_using_the_made2manage_report_wizard__r1_na_.md).

5. Specify the filter expression. See [Specify filter expression](specify-filter-expression-using-the-made2manage-report-wizard-r1-na-.md).

6. See the Data View of the report. Click **Next** to proceed with the report creation. Click **Back** to make any changes.

7. Create the report. See [Construct the report](construct-the-report-using-the-made2manage-report-wizard-r1-na-.md).

8. Preview the report. Click **Finish** to complete the report creation.

    >[!NOTE]A report schema file with the extension **.rsf** is created in the \<SysPath\>/Reports/ReportSchema folder. If a schema file with the same name already exists, a backup of the older file with the timestamp information is created.  
    >- You can view the newly created report in the **Modify Existing Report (RPMAKE)** window and customize it, if required.  
    >- The layout file is stored in the CustomLayouts folder and is uploaded to the report server.

    A message box with the message "Would you like to open and customize the layout in a separate window?" is displayed.

9. Perform one of the following actions:

    -   To customize the layout:
        1.  Click **Yes**.

            The layout is opened in Microsoft Visual Studio as an XML file.

        2.  Make the required changes.
        3.  Save and close the Visual Studio application.

            The message "Report Definition has been saved." is displayed.

    -   To save the report definition without any customizations, click **No**.

        The message "Report Definition has been saved." is displayed.

10. Click **Close** to close the message window.

    >[!NOTE]The Made2Manage Report Wizard also closes.

For more information about obtaining help in the **Made2Manage Report Wizard (RPWIZ)** or navigating between the screens, refer to Getting help in Made2Manage Report Wizard.

​