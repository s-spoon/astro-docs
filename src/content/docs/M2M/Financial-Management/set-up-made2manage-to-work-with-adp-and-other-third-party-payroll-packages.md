---

title: "Set up Made2Manage to work with ADP and third-party payroll packages"
draft: false


---

Made2Manage works with ADP PC/Payroll payroll software and other third-party payroll packages. After you install the payroll package and after you set up the necessary General Ledger chart of accounts numbers, configure Made2Manage to work with the payroll package.


**To set up Made2Manage to work with ADP or third-party payroll package**

1.  Click the **Utilities** tab. From the **Company Setup** group, click **Module Setup**\> **Payroll Setup**.

Or press **Alt+T**, enter **CSPAYR**, and press **Enter**.

The **Payroll Setup (CSPAYR)** page appears.

2.  In the **Software** section, click **Use Other 3rd Party Payroll Software**.

3.  Set information about the payroll software:

    -   In the **File Type** dropdown, enter the data format.

> [Tip] For ADP, select ADP–GL Download Format.

-   If you use ADP, in the **Company Name Equivalent** and **Department Field Length** (3 Or 6) fields, enter the ADP company code and the department field length.

> [Tip] Made2Manage's department numbers must match those in ADP. Pad ADP department numbers with leading zeros: Department 01 in Made2Manage corresponds to 001 or 000001 in ADP.

-   Click **Employee Input File**, Select **File**, and select the pathname of the employee input file.

> [!Note] For ADP, this is C:\ADP\Pcpw\Adpexp\Mfout.xxx, where, xxx is the company code.

-   Click **General Ledger Input File**, Select **File** and select the pathname of the General Ledger input file.

> [!Note] For ADP, this is C:\ADP\Pcpw\Adpexp\Gdxxxyyp.gli, where, xxx is the com- pany code and yy is the payroll number.

> [Tip] For each payroll, you must change the payroll number in the general ledger input file before you copy transactions from your payroll system to ADP.

-   Click **Timecard Output File**, select **File** and select the pathname of the timecard output file.

> [!Note] For ADP, this is C:\ADP\Pcpw\Adpdata\Prxxxepi.csv, where, xxx is the company code.

4.  In the **Employee Add Option** section, click:

    -   **Add Only New Employee Entries from Payroll**: To copy only new employees from the payroll package to Made2Manage.

    -   **Add/Copy All Employee Data Changes from Payroll**: To copy both new employees and changes to existing employees such as new addresses from the payroll package to Made2Manage.

5.  In the **Transfer Option** section, click:

    -   **Transfer Hours Worked for Timecard Employees**: To transfer only the hours that timecard employees worked to the payroll program.

> [!Note] The quantities produced by the employees are not transferred.

-   **Transfer Quantity Produced and Hours Worked for Timecard Employees**: To transfer both the hours worked and the quantity produced to the payroll program.

6.  On the toolbar , click **Save** to save the changes.