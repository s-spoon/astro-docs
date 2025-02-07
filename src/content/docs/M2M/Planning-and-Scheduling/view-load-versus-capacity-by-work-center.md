---

title: "View load versus capacity by work center"
draft: false
type: Article

---

You can view information about a work center's workload and capacity for a specific schedule. You can enter criteria about specific or partial work center information to narrow the amount of information you view on the report.

**To view load versus capacity by work center**

1. Open the Work **Center Load Analysis (RPPSWCLA)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Reports** > **Work Center Load Analysis**.

    Or

    - Search for **RPPSWCLA** or **Work Center Load Analysis** in the **Navigation box** and then select **Work Center Load Analysis**.

    The **Work Center Load Analysis (RPPSWCLA)**  page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Work Center Load Analysis Report Maintenance**.

    The **Work Center Load Analysis Report Maintenance (PSWCLARP)** page appears.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

6. In the **CalcBased** area, click:

    - **Schedule**: To calculate the load based on a finite view.

    - **Plan**: To calculate the load based on an infinite plan.

7. In the **Report Type** area, click:

    - **Text**: To view the report in a text format.

    - **Graph**: To view the report in a graphical format.

8. Specify the Work Centers and Departments to include in the report:

    a. Click the **Work Center Scope** tab.

    b. Enter information in one or more of the following fields:

    i. In the **Work Center ID** field, type the work center ID, to include a specific work center.

    > [!TIP] Type one or more letters to include all work centers beginning with those letters. For example, if you type **Assembly**, the analysis will only include that work center. If you type **A**, the analysis will include all work centers that begin with A.

    ii. In the **Department** field, type the department number, to include a specific department.

    > [!TIP] Type a number to include all departments beginning with that number.

    iii. In the **Filter Expression** field, type a valid SQL "Where clause" to further filter the information included in the analysis.

    > [!TIP] For example, if you want to include all work centers except ABC, you would type:  **WORK_CENTER NOT LIKE "%ABC%"**.

    > [!Note]  See Microsoft SQL Server documentation for more information about SQL Where clauses.

9. Specify the period information:

    a. Click the **Period Scope** tab.

    b. In the **Calendar** list, select the appropriate option to display the analysis results by shift, or in a daily, weekly, or monthly calendar period format.

    c. Set the date scope:

        i. In the **Offset** field, type the number of days, forward or backward, from the current date that you want to set as the report start date.

        ii. In the **Number Of Days** field, type the number of days that you want to display on the report.

10. Specify additional options:

    a. Click the **Options** tab.

    b. In the **Sort Order** list, select the sort order as either **Period** or **Work Center**.

    c. In the **Unit Of Measure** list, select the unit of measure as either **Hours** or **Resource Count**.

11. On the **Toolbar**, click **Save**.

12. On the **Toolbar** of **Work Center Load Analysis** page, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

    > [!Note] Each time you change these settings, you must save and regenerate the report to view the changes.

​