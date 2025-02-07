---

title: "View supply and demand by period"
draft: false
type: Article

---

You can view information for a group of parts by specific calendar periods such as daily, weekly, or monthly. The **Supply/Demand by Period** report displays demand, supplies, and inventory measures for a group of parts bucketed by periods.

You can add new scripts with specific settings for each report to view immediately or later. For example, you can create three different scripts each with a different calendar period defined. When you generate the monthly report, for example, part information is grouped by month on the report.

**To view supply and demand by period**

1. Open the **Supply/Demand by Period (RPPSSDP)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Reports** > **Supply/Demand by Period**.

    Or

    - Search for **RPPSSDP** or **Supply/Demand by Period** in the **Navigation box** and then select **Supply/Demand by Period**.

        The **Supply/Demand by Period (RPPSSDP)**  page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Supply Demand by Period Report Maintenance**.

The **Supply Demand by Period Report Maintenance** page appears.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

From the **Filter** list, select the appropriate filter to display only the parts that meet the filter value.

[What values are available?]

6. In the **Supply/Demand Calculation Based on** area, click:

    - **Plan**: To project supply/demand based on the plan.

    - **Schedule**: To project supply/demand based on the schedule.

7. Select the **Compressed Format** checkbox to compress the font used in the report so that you can view more than nine periods in each line.

8. In the **Periods Per Line** field, specify the number of periods to display on each line of the report.

> [!Note] If you chose to use the compressed format, the maximum number of periods per line is 26. If you chose not to use the compressed format, the maximum number of periods per line is 9.

9. Specify the type of information to include for make or stock parts:

    a. Click the appropriate tab.

    b. To specify the information to display for a make part, click the **Options for Make** tab.

    c. To specify the information to display for a stock part, click the **Options for Stock** tab.

    d. From the **Line** lists, select the appropriate value.`

10. Specify how to group the report results:

    a. Click the **Aggregation** tab

    b. From the **Aggregate By** list, select an appropriate option to group results together. For example, choose **Class** to group together all results by product class.

    c. From the **Display Option** list, select an appropriate option to view make or stock parts.

11. Define the part scope:

    a. Click the **Part Scope** tab.

    b. Enter the part-related information in one or more of the following fields:

    i. In the **Part No** field, type the part number.

    > [!TIP] Type the exact part number to include a specific part. Type the first few characters of the part number to view all parts beginning with those characters. For example, if you type an exact value of **KH123A** in the **Part No**field, the scope will include only this part. If you type **K** in the **Part No.** field, all part numbers that begin with  **K** are included in the scope.

    ii. In the **Rev** field, type the part revision number.

    iii. In the **Group Code** field, type the group code of the parts that you want to view.

    iv. In the **Product Class** field, type the product class of the parts that you want to view.

    > [!TIP] Type the exact group code / product class to include a specific group code / product class. Type the first few characters of the group code / product class to view all parts that belong to the group / product class beginning with those characters.

    v. In the **ABC Code** field, type the ABC inventory code.

    vi. In the **Planner** field, type the planner's name.

    vii. In the **Source** field, type the part source.

    viii. In the **Filter Expression** field, type a valid SQL Where clause.

    For example, type **PART_NO NOT LIKE "%ABC%"** to exclude all part numbers that have the ABC string.

    ix. Select the parts on the bills of material to view:

    | **Click…**         | **…to**                                         |
    |--------------------|-------------------------------------------------|
    | Make               | Show non-stock parts you manufacture.           |
    | Stock              | Show manufactured parts you keep in inventory.  |
    | Purchased          | Show parts you purchase.                        |
    | Inter Fac Sourced  | Show items that come from another facility.     |
    |

12. Specify the date scope:

    a. Click the **Date Scope** tab.

    b. From the **Calendar** list, select an appropriate option to group part information in Daily, Weekly, or Monthly calendar period format.

    c. In the **Offset** field, type the number of days, forward or backward, from the current date that you want to set as the report start date.

    > [!TIP]Type a negative sign (-) in front of the number to start the report before the current date.

    d. In the **Number of Days** field, type the number of days that you want to display on the report.

13. On the **Toolbar**, click **Save** .

14. On the **Toolbar** of the **Supply/Demand by Period** page, click one of the output options to generate the report.

> [!TIP] Each time you change these settings, you must save and regenerate the report to view the changes.

​