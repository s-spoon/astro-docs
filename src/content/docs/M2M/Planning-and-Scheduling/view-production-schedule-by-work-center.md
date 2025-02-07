---

title: "View production schedule by work center"
draft: false
type: Article

---

You can view or print a work center dispatch list sorted by work center. This indicates the order and timing for operations scheduled in every work center. You can generate dispatch reports based on a What-If schedule without first committing the schedule.

> [!Note]   The **Work Center Dispatch List (PSWCDL)** window is only available when Advanced Scheduling is active.

**To view production schedule by work center**

1. Open the **Work Center Dispatch List (RPPSWCDL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Reports** > **Work Center Dispatch List**.

    Or

    - Search for **RPPSWCDL** or **Work Center Dispatch List** in the **Navigation box** and then select **Work Center Dispatch List**.

    The **Work Center Dispatch List (RPPSWCDL)**  page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Work Center Dispatch List Report Maintenance**.

    The **Work Center Dispatch List Report Maintenance (PSWCDLRP)** page appears.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

6. Define the work center scope, if required.

    a. Click the **Work Center Scope** tab.

    b. Specify the scope:

    i. In the **Work Center ID** field, type the work center ID.

    > [!TIP] Type the exact work center ID to include a specific work center. Type the starting characters of the work center ID to view all work centers beginning with those characters.For example, if you type **A**, all work centers that begin with A are included in the scope.

    ii. In the **Department** field, type the department number.

    > [!TIP] Type the exact department number to include a specific department. Type the starting digits of the department number to view all departments beginning with those digits.For example, if you type **1**, all departments that begin with 1 are included in the scope.

    iii. In the **Filter Expression** field, type any valid SQL Where clause.

    For example, type **WORK_CENTER NOT LIKE "%AS%"** to exclude all work centers that have the AS string.

7. Specify the days for which you want to generate the report:

    a. Click the **Date Scope** tab.

    b. In the **Number of Days** field, specify the total number of days that you want displayed.

    c. In the **Offset** field, specify the number of days by which the report start date differs from the current date.

    > [!Note]  The report start date is calculated by adding the value specified in the **Offset** field to the current date. Give a negative number to start from a date before the current date.

8. Specify the type of information to include in the report and how to sort the report:

    a. Click the **Selection and Order** tab.

    b. Select the type of information and sort order:

    i. From the **Selection** list, select the type of information to include in the report.

    ii. From the **Sort Order** list, select the report sort order.

9. On the **Toolbar**, click **Save** .

10. On the **Toolbar**, click one of the output options to generate the report. For more information.

Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

> [!TIP] Each time you change these settings, you must save and regenerate the report to view the changes.

​