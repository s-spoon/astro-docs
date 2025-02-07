---
title: "Set up Made2Manage to work with ADP and other third-party payroll packages (R1-NA)"
draft: false
type: Article 
---

Made2Manage works with ADP PC/Payroll payroll software and other third-party payroll packages. After you install the payroll package and after you set up the necessary General Ledger chart of accounts numbers, configure Made2Manage to work with the payroll package.

Which third-party payroll packages can Made2Manage work with?

To set up Made2Manage to work with Abra, see the **Related Information**.

To set access permissions for folders on the network, see the **Related Information**.

### To set up Made2Manage to work with ADP or any other third-party payroll package

1. Click the **Utilities** tab. From the **Company Setup** group, click **Module Setup** > **Payroll Setup**.

    Or press **Alt+T**, type **CSPAYR**, and press **Enter**.

    The **Payroll Setup (CSPAYR)** screen appears.

2. In the **Software** area, click **Use Other 3rd Party Payroll Software**.

3. Set information about the payroll software:

    -   From the **File Type** list, select the data format.

        >[!TIP] For ADP, select **ADP – GL Download Format**.

        - If you use ADP, in the **Company Name Equivalent** and **Department Field Length** (3 Or 6) fields, type the ADP company code and the department field length.

            >[!TIP]Made2Manage's department numbers must match those in ADP. Pad ADP department numbers with leading zeros: Department 01 in Made2Manage corresponds to 001 or 000001 in ADP.

        - Click the **Employee Input File** Select File button and select the pathname of the employee input file.

            >[!NOTE]For ADP, this is C:\\ADP\\Pcpw\\Adpexp\\Mfout.xxx, where, xxx is the company code.

        - Click the **General Ledger Input File** Select File button and select the pathname of the General Ledger input file.

            >[!NOTE]For ADP, this is C:\ADP\Pcpw\Adpexp\Gdxxxyyp.gli, where, xxx is the company code and **yy** is the payroll number.

            >[!TIP]For each payroll, you must change the payroll number in the general ledger input file before you copy transactions from your payroll system to ADP.

        - Click the **Timecard Output File** Select File button and select the pathname of the timecard output file.

            >[!NOTE]For ADP, this is C:\ADP\Pcpw\Adpdata\Prxxxepi.csv, where, xxx is the company code.

    4. In the **Employee Add Option** area, click:

    -   **Add Only New Employee Entries from Payroll**: To copy only new employees from the payroll package to Made2Manage.
    -   **Add/Copy All Employee Data Changes from Payroll**: To copy both new employees and changes to existing employees (such as new addresses) from the payroll package to Made2Manage.

    5. In the **Transfer Option** area, click:

    -   **Transfer Hours Worked for Timecard Employees**: To transfer only the hours that timecard employees worked to the payroll program.

        >[!NOTE]The quantities produced by the employees are not transferred.

    -   **Transfer Quantity Produced and Hours Worked for Timecard Employees**: To transfer both the hours worked and the quantity produced to the payroll program.

    6. On the **Toolbar**, click **Save** to save the changes.

​