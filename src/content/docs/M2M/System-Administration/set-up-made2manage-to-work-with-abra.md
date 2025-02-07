---
title: "Set up Made2Manage to work with Abra (R1-NA)"
draft: false
type: Article 
---

Made2Manage works with Sage HRMS (formerly called Abra). After you install Sage HRMS and after your finance manager sets up the necessary General Ledger chart of accounts numbers, configure Made2Manage to work with Abra.

Sage Abra 9.x uses Visual FoxPro (VFP) for storing and managing its data. So, in Made2Manage you only have to specify where the Abra VFP database files are located and the three character ID of the company (employer) in Abra that is integrated with Made2Manage.

But, the latest version of Sage Abra (called Sage HRMS) has migrated the data stored in the VFP database to the SQL Server database. So, you must specify the Abra SQL Server details in Made2Manage for proper integration.

To set up Made2Manage to work with ADP or other third-party payroll package, see the **Related Information**.

To set access permissions for folders on the network, see the **Related Information**.

### To set up Made2Manage to work with Abra

1. Click the **Utilities** tab. From the **Company Setup** group, click **Module Setup** > **Payroll Setup**.

    Or press **Alt+T**, type **CSPAYR**, and press **Enter**.

    The **Payroll Setup (CSPAYR)** screen appears.

2. In the **Software** area, click:

    -   **Use Abra Payroll Software**: If your company uses the general Abra payroll software.
    -   **Use Abra – Canadian Payroll Software**: If your company uses the Canadian Abra payroll software.

3. To configure Made2Manage to work with Abra when you use Visual Foxpro:

    -  In the **Abra Backend** area, click **Visual Foxpro**.
    -  Set Abra program and database directories:
        -   Click the **Abra Directory** Select File button and select the directory that contains the Abra program.

            >[!NOTE]This is typically C:\Program Files\ABRA\SUITE\ALL USERS\SAGE\ABRASUITE.

        -   Click the **Abra Database Directory** Select File button and select the directory that contains the Abra database.

            >[!NOTE]This is typically C:\Program Files\ABRA\SUITE\ALL USERS\SAGE\ABRASUITE\DATA.

    -  From the **Company Name Equivalent** list, select the company code setup in Abra.

4. To configure Made2Manage to work with Abra when you use SQL Server:

4.  In the **Abra Backend** area, click **SQL Server**.
    -  In the **Server Name** field, type the host name of the SQL Server in which the Abra company / employer databases are installed.
    -  In the **User Name** and **Password** fields, type the user name and password used to login to the Abra SQL Server.
    -  In the **Enterprise DB Name** field, type the name of the Enterprise database that constitutes the Abra employer/company to be integrated with Made2Manage.
    -  From the **Company Name Equivalent** list, select the database ID of the company database.
    -  In the **Payroll DB Name** field, type the name of the Abra payroll database.
    - In the **Timecards Export Path** field, specify the path of the folder in which the daily labor timecards are stored

5. In the **State of Operations** field, type the two-letter abbreviation of the state in which you are located. Or if you are using Canadian Abra, in the **Province of Operations** field, type the province.

6. In the **3rd Party Timecard Transfer** area, click:

    -   **Separate Postings**: To post labor transactions separately.
    -   **Aggregate Postings**: To group together labor transactions with the same employee number, employee earnings code, and pay rate, and post grouped transactions collectively.

7. In the **Employee Add Option** area, click:

    -   **Add Only New Employee Entries from Payroll**: To copy new employees from Abra to Made2Manage.
    -   **Add/Copy All Employee Data Changes from Payroll**: To copy new employees and changes to existing employees (such as new addresses) from Abra to Made2Manage.

8. On the **Toolbar**, click **Save**.

    The message that Made2Manage must be restarted for the changes to be effective is displayed.

9. Click **Close** to close the message window.

​