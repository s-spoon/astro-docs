---

title: "Set up Made2Manage to work with Abra"
draft: false


---

Made2Manage works with Sage HRMS that was formerly called Abra. After you install Sage HRMS and after your finance manager sets up the necessary General Ledger chart of accounts numbers, configure Made2Manage to work with Abra.

Sage Abra 9.x uses Visual FoxPro (VFP) for storing and managing its data. So, in Made2Manage you only have to specify where the Abra VFP database files are located and the three character ID of the company in Abra that is integrated with Made2Manage.

The latest version of Sage Abra called Sage HRMS has migrated the data stored in the VFP data- base to the SQL Server database. So, you must specify the Abra SQL Server details in Made2Manage for proper integration.


**To set up Made2Manage to work with Abra**

1.  Click the **Utilities** tab. From the **Company Setup** group, click **Module Setup** \> **Payroll Setup**.

Or press **Alt+T**, enter **CSPAYR**, and press **Enter**.

The **Payroll Setup (CSPAYR)** window appears.

2.  In the **Software** section, click:

    -   **Use Abra Payroll Software**: If your company uses the general Abra payroll software.
    
    -   **Use Abra – Canadian Payroll Software**: If your company uses the Canadian Abra payroll software.

3.  To configure Made2Manage to work with Abra when you use Visual Foxpro:

    1.  In the **Abra Backend** section, click **Visual Foxpro**.

    2.  Set Abra program and database directories:
    
    -   Click the **Abra Directory** Select **File** and select the directory that contains the Abra program.

    > [!Note] This is typically C:\Program Files\ABRA\SUITE\ALL USERS\SAGE\ABRASUITE.

    -   Click the **Abra Database Directory** Select **File** and select the directory that contains the Abra database.

    > [!Note] This is typically C:\Program Files\ABRA\SUITE\ALL USERS\SAGE\ABRASUITE\DATA.

    3.  In the **Company Name Equivalent** dropdown, select the company code setup in Abra.

    4.  To configure Made2Manage to work with Abra when you use SQL Server:

        1.  In the **Abra Backend** section, click **SQL Server**.

    2.  In the **Server Name** box, enter the host name of the SQL Server in which the Abra company / employer databases are installed.

    3.  In the **User Name** and **Password** boxes, enter the user name and password used to login to the Abra SQL Server.

    4.  In the **Enterprise DB Name** box, enter the name of the Enterprise database that constitutes the Abra employer/company to be integrated with Made2Manage.

    5.  In the **Company Name Equivalent** dropdown, select the database ID of the company database.

    6.  In the **Payroll DB Name** box, enter the name of the Abra payroll database.

    7.  In the **Timecards Export Path** box, specify the path of the folder in which the daily labor timecards are stored.

5. In the **State of Operations** box, enter the two-letter abbreviation of the state in which you are located. Or if you are using Canadian Abra, in the **Province of Operations** box, enter the province.

11. In the **3rd Party Timecard Transfer** section, click:

    -   **Separate Postings**: To post labor transactions separately.

    -   **Aggregate Postings**: To group together labor transactions with the same employee number, employee earnings code, and pay rate, and post grouped transactions collectively.

7. In the **Employee Add Option** section, click:

    -   **Add Only New Employee Entries from Payroll**: To copy new employees from Abra to Made2Manage.

    -   **Add/Copy All Employee Data Changes from Payroll**: To copy new employees and changes to existing employees such as new addresses, from Abra to Made2Manage.

8. On the toolbar, click **Save**.

    The message that Made2Manage must be restarted for the changes to be effective is displayed.

9. Click **Close**.