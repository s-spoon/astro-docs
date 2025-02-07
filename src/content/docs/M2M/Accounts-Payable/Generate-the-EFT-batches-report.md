---  

title: "Generate the EFT batches report"  
draft: false 
type: Article

---


Use the **EFT Register (RPEFTR)** page to generate a report of the EFT batches created for the EFT enabled vendors. Using the different selections, you can identify the EFT batches that:

-   Are in started status.
-   Are awaiting approval.
-   Have been approved.
-   Are ready for export.
-   Have been exported.
-   Have been voided.
-   Have no vendor records.

 You can also identify the reconciled and unreconciled EFT records.

**To generate the EFT batches report**

1.  Open the **EFT Register (RPEFTR)** page.

    - Select **Financial Management** > **Financial Reports** > **Bank Reconciliation** > **EFT Register**.

    Or

    - Search for **EFTTMPL** in the **Navigation box** and then select **EFT Register**. The **EFT Register (RPEFTR)** page appears.

2.  In the **Selection** area, select the information you want to view.

3.  In the **Sort Order** area, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Layout** area, select the layout in which you want to view the report.

    The **Layout** field is populated based on the type of report selected in the **Selection** field.

5.  Select the **Summary** check box to obtain a high-level data report.

6.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

The **Date On** field is populated based on the type of report selected in the **Selection** field.

To include the entire time frame, leave the date fields blank.

In the **Fill Dates** area, you can select from the predefined date ranges. They are:

- **Custom**:

Selecting this option enables the **From** and **To** fields in the **Date Range** area.

- **Calendar Year**:

Selecting this option displays the **Calendar Year** field. You can select any of the predefined calendar year formats from the drop- down list.

- **GL Periods**:

Selecting this option displays the **GL Periods** field. You can select any of the predefined GL period formats from the drop-down list.

7.  In the **Sort Range** area, specify the sort range.

    The **Sort On** field is populated based on the type of report selected in the **Selection** field.

    The available sort ranges are:

- **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    1.  Type the item reference in the **From** field.

    2.  Click the lookup reference and select the sort item from the Lookup For window. Highlight the required sort item and click **Select**.

- **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    1.  Type the first and last values of the range in the **From** and **To** fields.

    2.  Click the lookup reference (if available) and select the sort item from the Lookup For window. Highlight the required sort item and click **Select**.

- **All**: Select this to include all available items.

8.  Click **Run Report** on the **Toolbar** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.