---
title: "Enter your own SQL query in the Made2Manage Report Wizard (R1-NA)"
draft: false
type: Article
---

For more information about obtaining help in the **Made2Manage Report Wizard (RPWIZ)** or navigating between the screens, refer to Getting help in Made2Manage Report Wizard.

You can type your own query in the **Made2Manage Report Wizard (RPWIZ)** and generate a report. If you had selected the **Editor Query Option** in the initial screen of the Made2Manage Report Wizard, a blank screen appears.

>[!IMPORTANT] To use a custom table, view, or field in the **Advanced Filter** for the new report, you must manually add an entry for the table, view, or field in the **Data Dictionary (DICT)** window before creating the report.

### To enter your own SQL query in the Made2Manage Report Wizard

1. In the blank screen, type your SQL query.

    >[!NOTE]  
    >- If you had selected the **Allow Direct Query** check box in the initial screen of the **Made2Manage Report Wizard**, the query entered by you is retained as is in the stored procedure. As the stored procedure will not contain the Made2Manage Custom Report template formatting, you cannot edit it in the **Modify Existing Report (RPMAKE)** window.

2. Click **Next**.

    The query is parsed and a schema is generated if the query is correct. If your query is not correct, an error message that indicates the incorrect portion of the query is displayed. View the message and make the necessary corrections.

​