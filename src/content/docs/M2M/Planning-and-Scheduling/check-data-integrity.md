---

title: "Check data integrity"
draft: false
type: Article

---

You can run reports to generate data statistics or to check for errors in your data at any time. Create scripts to run the reports at scheduled time.

**To create a script to run a report**

1. Open the **Calendar Report (RPPSCAL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Calendar** > **Calendar Report**.

    Or

    - Search for **RPPSCAL** or **Calendar Report** in the **Navigation box** and then select **Calendar Report**.

        The **Calendar Report (RPPSCAL)**  page appears.

2. On the Toolbar, click **More Actions**.

3. Select **More Actions** > **Actions** > **Calender Report Maintenance**.

    The **Calender Report Maintenance** page appears.

4. From the toolbar:

    - **New** : To create a new script.

    - **Copy**: To copy an existing script and modify it.

5. In the **Script Name** field, type a name for the script.

6. In the **Select Process Type** area, choose the kind of report to run with this script:

    | Report name                                          | Information the report shows                                                               |
    |------------------------------------------------------|--------------------------------------------------------------------------------------------|
    | Data Analysis                                        | general statistics about your data                                                         |
    | Show Purchase Parts without Cost                     | purchase parts that do not have costs assigned to them                                     |
    | Show Stock Parts without Price                       | stock parts that do not have costs assigned to them                                        |
    | Show Make Parts without Price                        | make parts that do not have costs assigned to them                                         |
    | Show Stock Parts with Undefined Max Order Qty        | stock parts that do not have maximum order quantities assigned to them                     |
    | Show Parent Make Parts with Undefined Max Order Qty  | the highest level of make parts that do not have maximum order quantities assigned to them |
    | Show Scheduled Operations with Large Production Time | operations that are scheduled to take a long time in production                            |
    |

7. On the **Toolbar**, click **Save**.

**To run an existing report**

1. Open the **Calendar Report (RPPSCAL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Calendar** > **Calendar Report**.

    Or

    - Search for **RPPSCAL** or **Calendar Report** in the **Navigation box** and then select **Calendar Report**.

        The **Calendar Report (RPPSCAL)**  page appears.

2. From the **Facility** list, select the facility.

> [!TIP] To refresh the report data, select the **Refresh Report Data** check box.

3. In the **Selection** area, select the script that you want to run.

4. On the **Toolbar**, click one of the output options to generate the report.

Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

​