---
title: "Check for Shipped Goods Invoice Status (RPSGIS) page"
draft: false
type: Article
---

Use the **Shipped Goods Invoice Status** page to generate the details of what items have been shipped, but not invoiced. It will also provide information concerning those items that have been invoiced from shipments.

Includes Shipper Items which have a Quantity Shipped > the Qty Invoiced for that Shipper Item unless the item is associated with a Sales Order Release for which the Quantity Invoiced is greater than or equal to the Quantity Shipped to date (via confirmed shippers), in which case the shipper line item will not appear on this report, because there is no additional 'shipped qty' which may be invoiced at this time [this may occur if you invoice directly against a Sales Order prior to the generation of a associated Shipper].

By default, generic filters are available to generate this report. You can use **Advanced Filters** to cus- tomize or expand your filter criteria. For more information on **Advanced Filters**, click here.

To generate Shipped Goods Invoice Status Report

1.  Open the **Shipped Goods Invoice Status (RPSGIS)** page.

Select Financial Management > Financial Reports > Accounts Receiv- able > Shipped Goods Invoice Status.

Or

1.  *Search for* **RPSGIS** *in the* **Navigation box** *and then select* **Shipped Goods Invoice Status**.

    **Shipped Goods Invoice Status (RPSGIS)** *page appears.*

2.  From the **Selection** box, select the information you want to view.
3.  In the **Sort Order** area, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the

    **Selection** field.

4.  In the **Layout** area, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selec- tion** field.

5.  In the **Date Range** area, type/select the date range for the report to be gen- erated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selec- tion** field.

To include the entire time frame, leave the date fields blank.

In the **Fill Dates** area, you can select from the predefined date ranges. They are:

» **Custom**:

Selecting this option enables the **From** and **To** fields in the **Date Range** area.

» Calendar Year:

Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the drop- down list.

» **GL Periods**:

Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the drop-down list.

1.  In the **Sort Range** area, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selec- tion** field.

    The available sort ranges are:

    » **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    1.  Type the item reference in the **From** field.
    2.  Click the lookup reference and select the sort item from the Lookup for **From**. Highlight the required sort item and click **Select**.

» **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

1.  Type the first and last values of the range in the **From** and **To** fields.
2.  Click the lookup reference (if available) and select the sort item from the Lookup. Highlight the required sort item and click **Select**.

» **All**: Select this to include all available items.

1.  Click **Run Report** on the **Toolbar** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Com- plete** to get notification. You can open the downloaded report from **My Reports** page.