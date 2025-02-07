---
title: "Generate field service quote/estimate report"
draft: false
type: Article
---

Use the **Field Service Quote/Estimate** page to generate Field Service Order Quotation/Estimate Document.

## To generate field service quote/estimate report

1. Open the **Field Service Quote/Estimate (FSQTE)** page.

    1. Select **Customer Relationship Management** > **CRM Reports** > **Field Service Quote/Estimate.**

    Or

    2. Search for **FSQTE** in the **Navigation box** and then select **Field Service Quote/Estimate**.

    **Field Service Quote/Estimate (FSQTE)** page appears.

2. In the **Selection** dropdown, select the information you want to view.

3. In the **Sort Order** dropdown, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4. In the **Copy** dropdown, select the report copy you want to print.

5. Select the **Trial Print** check box to print **All Trial Copies** or **Standard Copy**.

6. In the **Date Range** area, enter the date range for the report to be generated. You can select the date in the **From** and **To** fields only if the **Custom** option is selected in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

    - **Custom**:   
Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - **Calendar Year**:   
Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the drop-down list.

    - **GL Periods**:   
Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the drop-down list.

7. In the **Sort Range** dropdown, you can sort the information.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        1. Type the item reference in the **From** field.

        2. Click the lookup reference and select the sort item from the Lookup For window. Select the required sort item and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        1. Type the first and last values of the range in the **From** and **To** fields.

        2. Click the lookup reference (if available) and select the sort item from the Lookup For window. Select the required sort item and click **Select**.

    - **All**: Select this to include all available items.

8. Specify the **Other Variables** value to filter the report generation based on **Standard Revision**, **Facility** or other variables.

    If you have enabled multi-currency for your company, in the **Other Variables** area, type:

    - **F**: To generate the report in the functional currency.

    - **T**: To generate the report in the transactional currency.

    By default, the **Standard Copy** displays the amounts in the functional currency while the **Customer Copy** displays the amounts in the transactional currency.

9. Click **Run Report** on the **Toolbar** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

​