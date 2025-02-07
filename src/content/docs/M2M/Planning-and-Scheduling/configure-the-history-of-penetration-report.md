---

title: "Configure the History of Penetration Report"
draft: false
type: Article

---

You can perform the following configurations for the History of Penetration report:

- Select the chart type.

- Select the buffer to include

- Select the information to show in the chart.

- Set a period scope.

- Set the work center scope.

**To configure the History of Penetration report**

1. On the **Toolbar**, click **More Actions**.

2. Select **More Actions** > **Actions** > **History of Penetration Report Maintenance**.

    The **History of Penetration Report Maintenance(BMGBPRP)** page appears.

3. In the **Show Charts** area, click the appropriate option to select the chart you want to view:

- **Buffer Zones Frequency**: Shows the buffer zones frequency as a pie chart.

- **Zones by Period**: Shows the buffer zones by period.

4. In the **Include Buffers** area, select the appropriate check boxes:

- Select the **Constraint** check box to include constraint buffers.

- Select the **Shipping** check box to include shipping buffers.

5. In the **Report Type** area, click the appropriate option to view a line or bar chart.

> [!Note] If you had selected **Buffer Zones Frequency** in the **Show Charts** area, the chart is always a pie chart and the **Report Type** options are disabled.

6. Specify the work center scope if required:

    a. Click the **Work Center** tab.

    b. Specify the scope:

- In the **Work Center ID** field, type the ID of the work center to generate the chart for a specific work center.

- In the **Department** field, type the department ID to generate the chart for a specific department.

- In the **Filter Expression** field, type a vaild SQL expression to filter the records.

7. Specify the period scope if required:

    a. Click the **Period** tab.

    b. Specify the scope:

- From the **Calendar** list, select the appropriate period: **Daily**, **Weekly**, or **Monthly**.

- In the **Offset** field of the **Set Date Scope** area, specify the number of days to offset from the current date.

> [!TIP] Specify a negative number to offset backwards from the current date.

- In the **Number of Days** field, specify the number of days you want to go include in the buffer penetration history calculation.

8. On the **Toolbar**, click **Save** to save the changes.