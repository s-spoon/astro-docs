---

title: "Configure the Late Reason Analysis Report"
draft: false
type: Article

---

You can perform the following configurations for the **Late Reason Analysis** report:

- Select the chart type.

- Select the buffer to include.

- Select the information to show in the chart.

- Set a period scope.

- Set the work center scope.

**To configure the Late Reason Analysis report**

1. On the **Toolbar**, click **More Actions**.

2. Select **More Actions** > **Actions** > **Late Reason Analysis Maintenance**.

    The **Late Reason Analysis Maintenance (BMGLTRP)** page appears.

3. In the **Show Charts** area, click the appropriate option to select the chart you want to view:

- **Reasons Frequency**: Shows the reason frequency as a pie chart.

- **Reasons by Period**: Shows the reasons by period.

- **Work Centers Frequency**: Shows the work center frequency of reasons as a pie chart.

- **Work Centers by Period**: Shows the work centers reason for lateness by period.

- **Reasons by Buffer Origin**: Shows the reasons by buffer origin as a pie chart.

- **Reasons by Buffer Origin by Period**: Shows the reasons by buffer origin and period.

4. In the **Include Buffers** area, select the appropriate check boxes:

- Click the **Constraint** check box to include constraint buffers.

- Click the **Shipping** check box to include shipping buffers.

5. In the **Report Type** area, select the appropriate option to view a line or bar chart.

> [!Note] If you had selected **Reasons Frequency**, **Work Centers Frequency**, or **Reasons by Buffer Origin** in the **Show Charts** area, the chart is always a pie chart and the **Report Type** options are disabled.

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