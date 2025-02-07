---
title: "View received items that require inspection"
draft: false
type: Article 
---

Use the **Receiving Inspection Queue** report to generate details for the items that have been received and that require inspection. If you enter inspection details about an item, the system removes the item from the list.

By default, generic filters are available to generate this report. You can use **Advanced Filters** to customize or expand your filter criteria. For more information about **Advanced Filters**, click here.

To generate Receiving Inspection Queue Report

1.  Open the **Receiving Inspection Queue (RPRECQ)** page.

    1. Select **Production Management** > **Production Reports** > **Quality** > **Receiving Inspection Queue**.

        Or

    1.  Search for **RPRECQ** in the **Navigation box** and then select **Receiving Inspection Queue**. <br>The **Receiving Inspection Queue (RPRECQ)** page appears.

2.  In the **Selection** list, select the information you want to view.
3.  In the **Sort Order** list, select how to sort the report.
The **Sort On** field populates based on the order you select in the **Sort Order** list.

4.  In the **Layout** list, select the layout in which you want to view the report.
The **Layout** list is populated based on the type of report selected in the **Selection** list.

5.  In the **Date Range** area, type or select the date range to generate the report. You can select the date from the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** list.
The **Date On** field populates based on the type of report you select in the **Selection** list.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** list, you can select from the predefined date ranges. They are:

    - **Custom**: Select this option to enable the **From** and **To** fields in the
**Date Range** area.

    - **Calendar Year**: Select this option to display the **Calendar Year** list. You can select any of the predefined calendar year formats from the list.

    - **GL Periods**: Select this option to display the **GL Periods** list. You can select any of the predefined GL period formats from the list.

1.  In the **Sort Range** list, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        - Type the item reference in the **From** field.

        - Click the Lookup Reference and from the **Lookup For From** window, select the required sort item, and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        - Type the first and last values of the range in the **From** and **To** fields.

        - Click the Lookup Reference (if available) and from the **Lookup For** window, select the required sort item, and click **Select**.

    - **All**: Select this to include all available items.

1.  In the **Other Variables** section, type a value in the **Facility** field.
2.  On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.