---

title: "Configure the History of Constraint Buffer Queues Report"
draft: false
type: Article

---

You can perform the following configurations for the History of Constraint Buffer Queues report:

- Select the chart type.

- Select the information to show in the chart.

- Set a period scope.

- Set the work center scope.

**To configure the History of Constraint Buffer Queues report**

1. On the **Toolbar**, click **More Actions**.

2. Select **More Actions** > **Actions** > **History of Constraint Buffer Queues Report Maintenance**.

    The **History of Constraint Buffer Queues Maintenance(BMGBCRP)** page appears.

3. In the **Show Charts** area, click the appropriate option to select the chart you want to view:

- **Buffer Zones Frequency:** Same as the **History Buffer Penetration** report, except for the difference in the zone definition

- **Zones by Period:** Same as the **History Buffer Penetration** report, except for the difference in the zone definition

- **Actual Buffer by Period:** Shows the average queue size at each period compared with the planned buffer.

4. In the **Report Type** area, select the appropriate option to view a line or bar chart.

> [!Note] If you had selected **Buffer Zones Frequency** in the **Show Charts** area, the chart is always a pie chart.

5. Specify the work center scope if required:

    a. Click the **Work Center** tab.

    b. Specify the scope:

    i. In the **Work Center ID** field, type the ID of the work center to generate the chart for a specific work center.

    ii. In the **Department** field, type the department ID to generate the chart for a specific department.

    iii. In the **Filter Expression** field, type a vaild SQL expression to filter the records.

6. Specify the period scope if required:

    a. Click the **Period** tab.

    b. Specify the scope:

    - From the **Calendar** list, select the appropriate period: **Daily**, **Weekly**, or **Monthly**.

    - In the **Offset** field of the **Set Date Scope** area, specify the number of days to offset from the current date.

> [!TIP] Specify a negative number to offset backwards from the current date.

- In the **Number of Days** field, specify the number of days you want to include in the calculation.

7. On the **Toolbar**, click **Save** to save the changes.