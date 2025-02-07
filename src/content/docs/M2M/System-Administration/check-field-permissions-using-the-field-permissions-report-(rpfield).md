---
title: "Check field permissions using the Field Permissions Report (RPFIELD)"
draft: false
type: Article 
---

Use the **Field Permissions Report (RPFIELD)** report to generate a listing of the field permissions that you've assigned using the **User Permission Wizard** **(PERMWIZ)** page.

### To generate the field permission report

1. Open the Field Permissions Report (RPFIELD) page.

    1. Select **Utilities** > **Utility Reports** > **Field Permissions Report**.

    Or

    2. Search for **RPFIELD** or **Field Permissions Report** in the **Navigation box** and then select **Field Permissions Report**.

    **Field Permissions Report (RPFIELD)** page appears.

2. In the **Sort Order** list, select:

    - **User, Company, Field**: To view the assigned field permissions of each user ordered by the user name, company number, and the field name.

    - **Screen**: To view the assigned field permissions of each user ordered by the page name.

    >[!NOTE] The user inherits the field permissions assigned to the groups that the user belongs to.

3. In the **Sort Range** list, specify the sort range.

    >[!NOTE] The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

        - Type the item reference in the **From** field.

        - Click the Lookup Reference and from the **Lookup For** **From** window, select the required sort item, and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

        - Type the first and last values of the range in the **From** and **To** fields.

        - Click the Lookup Reference (if available) and from the **Lookup For** window, select the required sort item, and click **Select**.

    - **All**: Select this to include all available items.

4. To generate a company-specific report if required, in the **Other Variables** section, in the **Company (Optional)** field, type the company number.

5. On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

​