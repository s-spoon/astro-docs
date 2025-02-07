---

title: "AP aging status - AP Forecasting"
draft: false
type: Article

---

Use the **AP Forecasting** selection criteria from **AP Aging Status** report to generate invoices due each week for the next three weeks, plus invoices due more than three weeks from now.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. For more information on **Advanced Filters**, [click here]()

**To generate AP forecasting report**

1.  Open the **AP Aging Status (RPAPAG)** page.

    1. Select **Financial Management** > **Financial Reports** > **Accounts Payable** > **AP Aging Status**.

    Or

    2.  Search for **RPAPAG** in the **Navigation box** and then select **AP Aging Status**.

        The **AP Aging Status (RPAPAG)** page appears.

2.  In the **Selection** dropdown, select **AP Forecasting**.

3.  In the **Sort Order** dropdown, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  Select the **Summary** checkbox to obtain a high-level data report.

6.  In the **Date Range** area, enter the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** dropdown, you can select from the predefined date ranges. They are:

    - **Custom**:

        Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - **Calendar Year**:

        Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the dropdown list.

    - **GL Periods**:
    
        Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the dropdown list.

7.  In the **Sort Range** area, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:
    
    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1.  In the **From** field, enter the item reference .

        2.  Click the lookup reference and select the sort item from the Lookup for **From**. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1.  In the **From** and **To** fields, enter the first and last values of the range.

        2.  Click the lookup reference, if available, and select the sort item from the Lookup. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.


4.  In the **Other Variables** section, type or select the date in the **Enter Date for Aging (default today)** field.
    Only on selecting **Aging By Due Date** or **Aging By Invoice Date** options in the **Selection** list, the **Other Variables** section becomes available.
4. Click **Run Report** on the **Toolbar**. The **Please Select** dialog box appears.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.