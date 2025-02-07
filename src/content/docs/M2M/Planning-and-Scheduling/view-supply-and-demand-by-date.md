---

title: "View supply and demand by date"
draft: false
type: Article

---

You can view make and stock part information for each day that has a supply or demand for that part. You can create a script to run the report immediately or later.

**To view supply and demand by date**

1. Open the **Supply/Demand by Date (RPPSSDD)** page.

    - Select **Planning and Scheduling > P&S Production** > **Reports** > **Supply/Demand by Date**.

    Or

    - Search for **RPPSSDD** or **Supply/Demand by Date** in the **Navigation box** and then select **Supply/Demand by Date**.

        The **Supply/Demand by Date (RPPSSDD)**  page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Supply Demand by Date Report Maintenance**.

The **Supply Demand by Date Report Maintenance (PSSDDRP)** page appears.

4. On the **Toolbar**, click:

    - **New**: To create a completely new script.

    - **Copy**: To base the new script on the one that is displayed.

5. In the **Script Name** field, type the script name.

6. From the **Filter** list, select the appropriate filter to display only the parts that meet the filter value.


7. In the **Supply/Demand Based on** area, click:

    - **Plan**: To project supply/demand based on the plan.

    - **Schedule**: To project supply/demand based on the schedule.

8. Choose the type of information to include for make or stock parts:

    a. Click the appropriate tab.

    b. To specify the information to display for a make part, click the **Options for Make** tab.

    c. To specify the information to display for a stock part, click the **Options for Stock** tab.

    d. From the **Column** lists, select the appropriate value.


9. Specify the part scope:

    a. Click the **Part Scope** tab.

    b. Enter the part-related information in one or more of the following fields:

    c. In the **Part No** field, type the part number.

    Type the exact part number to include a specific part. Type the first few characters of the part number to view all parts beginning with those characters. For example, if you type **AF**, all parts that begin with AF are included in the scope.

    d. In the **Rev** field, type the part revision number.

    e. In the **Group Code** field, type the group code of the parts that you want to view.

    f. In the **Product Class** field, type the product class of the parts that you want to view.

    > [!TIP] Type the exact group code / product class to include a specific group code / product class. Type the first few characters of the group code / product class to view all parts that belong to the group / product class beginning with those characters.

    g. In the **ABC Code** field, type the ABC inventory code.

    h. In the **Planner** field, type the planner's name.

    i. In the **Source** field, type the part source.

    j. In the **Filter Expression** field, type a valid SQL Where clause.

    For example, type **PART_NO NOT LIKE "%ABC%"** to exclude all part numbers that have the ABC string.

    k. In the **Show Parts** area, select the parts on the bills of material that you want to view:

    | **Click…**         | **…to**                                         |
    |--------------------|-------------------------------------------------|
    | Make               | Show non-stock parts you manufacture.           |
    | Stock              | Show manufactured parts you keep in inventory.  |
    | Purchased          | Show parts you purchase.                        |
    | Inter Fac Sourced  | Show items that come from another facility.     |

10. Specify the date scope:

    a. Click the **Date Scope** tab.

    b. In the **Offset** field, type the number of days, forward or backward, from the current date that you want to set as the report start date.

    > [!TIP] Type a negative sign (-) in front of the number to start the report before the current date.

    c. In the **Number of Days** field, type the number of days that you want to display on the report.

11. On the **Toolbar**, click **Save** .

12. On the **Toolbar** of Supply/Demand by Date page, click one of the output options to generate the report.

> [!TIP] Each time you change these settings, you must save and regenerate the report to view the changes.


​