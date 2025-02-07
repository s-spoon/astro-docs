---
title: "Print a report of ECM errors"
draft: false

---

Use the **ECO Summary Report** report to generate messages logged by the ECM module with Date/Time, User Name, Message ID, and the Message text.

## To generate ECO Summary Report

1.  Open the **ECO Summary Report (RPECSM)** page.

    - Select **Production Management** > **Production Reports** > **Quality** > **ECO Summary Report**.

        Or

    -  *Search for* **RPECSM** *in the* **Navigation box** *and then select* **ECO Summary Report**. <br> *The* **ECO Summary Report (RPECSM)** *page appears.*

2.  In the **Selection** list, select the information you want to view.
3.  In the **Sort Order** list, select how to sort the report.

    The **Sort Order** list is populated based on the type of report selected in the **Selection** list.

4.  In the **Layout** list, select the layout in which you want to view the report.

    The **Layout** list is populated based on the type of report selected in the **Selection** list.

5.  In the **Date Range** area, type/select the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** list.

    The **Date On** field is populated based on the type of report selected in the **Selection** list.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** list, you can select from the predefined date ranges. They are:

    » **Custom**:

    Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    » **Calendar Year**:

    Selecting this option displays the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

    » **GL Periods**:

    Selecting this option displays the **GL Periods** list. You can select any of the predefined GL period formats from the list.

6.  In the **Sort Range** list, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    1.  Type the item reference in the **From** field.
    2.  Click the lookup reference and select the sort item from the Lookup for **From**. Highlight the required sort item and click **Select**.

    » **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    1.  Type the first and last values of the range in the **From** and **To** fields.
    2.  Click the lookup reference (if available) and select the sort item from the Lookup. Highlight the required sort item and click **Select**.

    » **All**: Select this to include all available items.

4.  In the **Other Variables** section, filter the report generation based on **Revision**.

    Only on selecting **All ECO's For Part No** in the **Sort Order** list, the **Other Variables** section becomes available.

5.  On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.