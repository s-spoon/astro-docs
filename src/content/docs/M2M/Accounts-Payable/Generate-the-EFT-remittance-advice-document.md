---  

title: "Generate the EFT remittance advice document"  
draft: false 
type: Article

---

Use the **EFT Remittance Advice Document (RPREMADV)** page to generate the EFT remittance advice report. Using the different selections available, you can also preview the remittance advice and reprint it.

A separate remittance advice is generated for each vendor and EFT batch ID combination. For each EFT batch ID, only the vendor records that are in the **Exported** status are included.

The vendor records that have zero batch line amount are not included in the report.

**To generate the EFT remittance advice report**

1.  Open the **EFT Remittance Advice Document (RPREMADV)** page.

    - Select **Financial Management** > **Financial Reports** > **Accounts Payable** > **EFT Remittance Advice Document**.

    Or

    - Search for **RPREMADV** in the **Navigation box** and then select **EFT Remittance Advice Document**.

    The **EFT Remittance Advice Document (RPREMADV)** page appears.

2.  In the **Selection** area, select the information you want to view.

3.  In the **Sort Order** area, select how to sort the report.

    The **Sort Order** field is populated based on the type of report selected in the **Selection** field.

4.  In the **Copy** area, select the report copy to print.

5.  Select the **Trial Print** check box if the report printed is only a trial print and not the actual remittance advice.

6.  In the **Date Range** area, specify the date range for the report to be generated. You can select the date in the **From** and **To** fields only if you select the **Custom** option in the **Fill Dates** area.

    The **Date On** field is populated based on the type of report selected in the **Selection** field.

    To include the entire time frame, leave the date fields blank.

    In the **Fill Dates** area, you can select from the predefined date ranges. They are:

    - **Custom**:

    Selecting this option enables the **From** and **To** fields in the **Date Range** area.

    - Calendar Year:

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