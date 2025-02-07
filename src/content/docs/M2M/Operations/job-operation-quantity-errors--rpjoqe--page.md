---
title: "Generate job operation quantity errors report"
draft: false
type: Article
---

Use the **Job Operation Quantity Errors** report to generate details of the Labor Reporting Errors, specifically at the Job Order level. This report provides details of skipped operations, and/or operations that have had a greater quantity reported than the preceding operation.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria.

This report does not include **Advanced Filters** feature.

### To generate job operation quantity errors report

1. Open the Job Operation Quantity Errors (RPJOQE) page.

    - Select **Production Management** > **Production Reports > Job Orders > Job Operation Quantity Errors**.

        Or

    - Search for **RPJOQE** or **Job Operation Quantity Errors** in the **Navigation box** and then select **Job Operation Quantity Errors.**

        The **Job Operation Quantity Errors (RPJOQE)** page appears.

2. In the **Selection** box, select the information you want to view.

3. In the **Sort Order** section, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4. In the **Layout** dropdown, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5. In the **Date Range** area, enter the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date Range** area is not populated on selecting **Quantities \< Subsequent Operations** or **Quantities > subsequent Operations** in the **Selection** field.  
    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

    - **Custom**: Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - **Calendar Year**: Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the dropdown list.

    - **GL Periods**: Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the dropdown list.

    The **Fill Dates** area is not populated on selecting **Quantities \< Subsequent Operations or Quantities > Subsequent Operations** in the **Selection** field.

6. In the **Sort Range** section, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single** : Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        - In the **From** field, enter the item reference.

        - Click the lookup reference and select the sort item from the **Lookup for From**. Select the required sort item and click **Select**.

    - **Range** : Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1. In the **From** and **To** fields, enter the first and last values of the range.

        2. Click the lookup reference, if available, and select the sort item from the Lookuu. Select the required sort item and click **Select**.

    - **All** : Select this to include all available items.

7. Specify the **Other Variables** value to filter the report generation based on **Standard Revision**, **Facility** or other variables.

8. Click **Run Report** on the **Toolbar**.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

​