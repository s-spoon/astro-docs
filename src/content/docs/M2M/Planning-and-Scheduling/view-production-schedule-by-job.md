---

title: "View production schedule by job"
draft: false
type: Article

---

You can print a work center dispatch list to view a complete list of operations schedule to run on work centers, sorted by job. You can generate dispatch reports based on a What-If schedule without first committing the schedule.

> [!Note] The **Job Order Dispatch List** window is available only when Advanced Scheduling is active.

**To view production schedule by job**

1. Open the **Job Order Dispatch List (PSJODL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Reports** > **Job Order Dispatch List**.

    Or

    - Search for **PSJODL** or **Job Order Dispatch List** in the **Navigation box** and then select **Job Order Dispatch List**.

        The **Job Order Dispatch List (PSJODL)** page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Job Order Dispatch List Report Maintenance**.

    The **Job Order Dispatch List Report Maintenance (PSJODLRP)** page appears.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

6. Define the job order scope, if required.

    a. Click the **Job Scope** tab.

    b. Specify the job order information that you want to view:

    c. In the **Job Number** field, type the job order number.

    Type the exact job order number to include a specific job. Type the starting digits of the job order number to view all job orders beginning with those digits.For example, if you type **1**, all job orders that begin with 1 are included in the scope.

    d. In the **Part Number** field, type the part number.

    Type the exact part number to include a specific part. Type the first few characters of the part number to view all parts beginning with those characters.For example, if you type **AF**, all parts that begin with AF are included in the scope.

    e. In the **Part Rev** field, type the part revision.

    f. In the **Filter Expression** field, type any valid SQL Where clause.

    For example, type **JOB_ORDER NOT LIKE "%ABC%"** to exclude all job order numbers that have the ABC string.

7. Specify the days for which you want to generate the report:

    a. Click the **Date Scope** tab.

    b. In the **Number of Days** field, specify the total number of days that you want displayed.

    c. In the **Offset** field, specify the number of days by which the report start date differs from the current date.

    The report start date is calculated by adding the value specified in the **Offset** field to the current date. Give a negative number to start from a date before the current date.

8. Specify how you want to sort the report:

    a. Click the **Sort Order** tab.

    b. From the **Sort Order** list, select the sort order.

9. On the **Toolbar**, click **Save** .

10. On the **Toolbar** of **Job Order Dispatch List** page, click one of the output options to generate the report. For more information.

Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

> [!Note] Each time you change these settings, you must save and regenerate the report to view the changes.



​