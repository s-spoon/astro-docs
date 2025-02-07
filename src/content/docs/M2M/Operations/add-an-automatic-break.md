---
title: "Add automatic break"
draft: false
type: Article
---

You can set the barcode system to clock employees out during assigned break times. You can set automatic breaks for a company, a department, or an employee.

>[!IMPORTANT] To enable setting of automatic breaks, you must select the **Use Auto Breaks** check box in the **Settings** tab of the **Bar Code Posting Setup (BCSETUP)** page.

The breaks you enter for an employee override any breaks you assign for the department or company. The breaks you enter for a department override the breaks assigned for the company. So if you assign an employee a special break but want the employee to receive the department and company breaks too, you must set those break times up for the employee.

If an employee manually clocks out during an automatic break, the employee does not receive the automatic break. If an employee manually clocks out during the final minute of an automatic break, or clocks in during the first minute of an automatic break, the employee does receive the automatic break.

## To add an automatic break

1. Open the Bar Code Automatic Break Periods (BCAUTO) page.

    Navigate **Production Management** > **Production Transactions** > **Shop Floor** > **Bar Code** > **Bar Code Automatic Break Periods**.

    Or

    Search for **BCAUTO** or **Bar Code Automatic Break Periods** in the **Navigation box** and then select **Bar Code Automatic Break Periods**.

    The **Bar Code Automatic Break Periods (BCAUTO)** page appears.

2. To copy automatic break information from another company, department, or employee:

    1. Select the **BarCode BreakPeriods - Copy**.

    2. In the **Copy From** section, click **Company**, **Department**, or **Employee** according to the information that you want to copy.

    3. Click the corresponding Lookup Reference and select the company, department, or employee from which you want to copy the information.

    4. In the **Copy To** section, click **Company**, **Department**, or **Employee** according to the information that you want to copy to.

    5. Click the corresponding Lookup Reference and select the company, department, or employee to which you want to copy the information.

    6. On the **Toolbar**, click **COPY**.

3. To add a new automatic break:

    1. Select **BarCode Automatic BreakPeriods**.

    2. In the **View/Modify Filter** section, click **Company**, **Department**, or **Employee** to set automatic breaks for the company, a department, or an employee.

    3. For department and employee breaks, click the corresponding Lookup Reference, and select the department or employee number.

    4. On the grid toolbar, click **New**.

    5. In the **DOW** column of the new row, enter the days of the week to which the breaks apply.

    6. Use the **DOW Legend** to select the days of the week. To apply the break to every day of the week, enter **1234567**. To apply the break to only Saturday and Sunday, enter **17**.

    7. In the **Start Time** column of the new row, enter the time to start the automatic break.

        Irrespective of the **CSPROD** time settings, use military time. 3:15 p.m. is 15:15. Midnight is 0:00, not 24:00.

    8. In the **End Time** column of the new row, enter the time to end the automatic break.

4. On the **Toolbar**, click **Save**. <br> The changes are saved.

​