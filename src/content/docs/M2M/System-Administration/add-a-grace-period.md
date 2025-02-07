---
title: "Add a grace period"
draft: false
type: Article
---

You can set grace periods for activities that you enter using barcode. For example, to allow employees to clock-in when they arrive but pay them only from the beginning of their 7:30 shift, set a grace period that shows all clock-in's between 7:15 and 7:35 as happening at 7:30.

You can set grace periods for the company, any department, or any employee.

The grace period entered for an employee overrides the grace periods assigned for the department or company. The grace period entered for a department overrides the grace periods assigned for the company.

For more information about barcode, see the **Related Information**.

### To add a grace period

1. Open the Bar Code Grace Periods (BCGRAC) page.

    1. Select **Production Management** > **Production Transactions** > **Shop Floor** > **Bar Code** > **Bar Code Grace Periods**.

    Or

    2. Search for **BCGRAC** or **Bar Code Grace Periods** in the **Navigation box** and then select **Bar Code Grace Periods**.

    **Bar Code Grace Periods (BCGRAC)** page appears.

2. Select the appropriate option to set grace periods for the **Company**, a **Department**, or an **Employee**.

    For department and employee grace periods, you must select the department or employee number.

3. Click the **Department** or **Employee** Lookup Reference.

    The **Lookup For Department** or the **Lookup For Employee** window appears accordingly.

4. Select the row that contains the department or employee, and click **Select**. Or, double-click the row that contains the department or employee.

5. On the grid toolbar, click **New**.

6. In the **Function** column, type the function for which to add the grace period.

    Refer to the **Function Legend** area to determine the function.

7. Set information in the **From** columns:

    - In the **From DOW** column, select the day of the week for which to add the function.

        Use the **DOW Legend** to select a day of the week.

    - In the **From Time** column, type the time to begin the grace period.

    Irrespective of the **CSPROD** time settings, use military time. 3:15 p.m. is 15:15. Midnight is 0:00, not 24:00.

8. Set information in the **To** columns:

    - In the **To DOW** column, select the day of the week for which to add the function.

    - In the **To Time** column, type the time to end the grace period.

9. Set information in the **Set To** columns:

    - In the **Set To DOW** column, select the day of the week to which to round any time recorded within the grace period.

    - In the **Set To Time** column, type the time to round any time recorded within the grace period.

10. On the **Toolbar**, click **Save** to save the information entered.

​