---

title: "AP aging status"
draft: false
type: Article

---

Use the **AP Aging Status** report to generate details about individual invoices such as price, tax information, finance charges, discounts and write-offs, amount paid, and status.

You can enter an aging date prior to today's date, if desired. This will produce a report which IGNORES all activity after the date you input. Specifically the report excludes invoices with post dates after the date entered and exludes payments posted after the date entered.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

**To generate AP aging status report**

1.  Open the **AP Aging Status (RPAPAG)** page.

    1. Select **Financial Management** > **Financial Reports** > **Accounts Payable** > **AP Aging Status**.

    Or

    2.  Search for **RPAPAG** in the **Navigation box** and then select **AP Aging Status**. 

        The **AP Aging Status (RPAPAG)** page appears.

2.  From the **Selection** dropdown, select **AP Status-Full Detail** or **AP Status-Partial Detail**.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort On** field is populated based on the order selected in the **Sort Order** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  Select the **Summary** checkbox to obtain a high-level data report.

6.  In the **Date Range** area, enter the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** list.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** list, you can select from the predefined date ranges. They are:

- **Custom**: Select this option to enable the **From** and **To** fields in the **Date Range** area.

- **Calendar Year**: Select this option to display the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

- **GL Periods**: Select this option to display the **GL Periods** list. You can select any of the predefined GL period formats from the list.

7.  In the **Sort Range** area, you can sort the information.
<br> The **Sort On** field is populated based on the type of report selected in the **Selection** field.

The available sort ranges are:

- **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    1.  In the **From** field, enter the item reference.

    2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

- **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    - In the **From** and **To** fields, enter the first and last values of the range.

    - Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

- **All**: Select this to include all available items.

8. In the **Other Variables** section, enter the date in the **Enter Date for Aging (default today)** field. 

    Only on selecting **Aging By Due Date** or **Aging By Invoice Date** options in the Selection list, the **Other Variables** section becomes available. 

9. On the toolbar, click **Run Report**. The **Please Select** dialog box appears. 



    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.