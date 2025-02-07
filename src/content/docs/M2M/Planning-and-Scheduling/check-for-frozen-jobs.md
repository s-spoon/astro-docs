---

title: "Check for frozen jobs"
draft: false
type: Article

---

Use the **Job Order Dispatch List** to view or print the production schedule sorted by job. You can filter the report to check for frozen jobs or released jobs and to view resource assignments.

This page performs the same functions as the **Work Center Dispatch List**, except the job orders are used instead of the work centers as the search criteria.

> [!Note] The **Job Order Dispatch List** page is only available when Advanced Scheduling is active.

**To check for frozen jobs**

1. Open the **Job Order Dispatch List (PSJODL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Reports** > **Job Order Dispatch List**.

    Or

    - Search for **PSJODL** or **Job Order Dispatch List** in the **Navigation box** and then select **Job Order Dispatch List**.

        The **Job Order Dispatch List (PSJODL)** page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Job Order Dispatch List Report Maintenance**.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

6. Set a report filter to view and print frozen jobs only:

    a. Click the **Job Scope** tab.

    b. In the **Filter Expression** box, type **Jodrtg.flfreeze=.T.**.

7. Specify the days for which you want to generate the report:

    a. Click the **Date Scope** tab.

    b. In the **Number of Days** field, specify the total number of days that you want displayed.

    c. In the **Offset** field, specify the number of days by which the report start date differs from the current date.

The report start date is calculated by adding the value specified in the **Offset** field to the current date. Give a negative number to start from a date before the current date.

8. Specify how you want to sort the report:

    a. Click the **Sort Order** tab.

    b. From the **Sort Order** list, select the sort order.

9. On the **Toolbar**, click **Save**.

10. On the **Toolbar**, click one of the output options to generate the report. For more information.

> [!TIP] Each time you change these settings, you must save and regenerate the report to reflect the changes.

​