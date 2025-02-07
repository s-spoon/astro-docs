---
title: "Generate the user permissions report"
draft: false
type: Article
---

Use the **User Permissions (RPUSER)** report to generate a listing of the user permissions that you assign.

If the user doesn't belong to any group, you can assign permissions for the user in the **User Permissions (PERM)** page. For users who belong to a group, use the **User Permission Wizard (PERMWIZ)** page to assign permissions.

### To generate the user permissions report

1. Open the User Permissions (RPUSER) page.

    1. Select **Utilities** > **Utility Reports** > **User Permissions**.

    Or

    2. Search for **RPUSER** or **User Permissions** in the **Navigation box** and then select **User Permissions**.

    **User Permissions (RPUSER)** page appears.

2. In the **Selection** list, select:

    - **Assigned User Permissions**: To generate a report of only the assigned user permissions.

    - **Detailed User Permissions**: To generate a report of the permissions for all pages.

3. In the **Sort Order** list, select how to sort the report.

    The **Sort On** field is populated based on the order selected in the **Sort Order** list.

4. In the **Layout** list, select the layout in which you want to view the report.

    The **Layout** list is populated based on the type of report selected in the **Selection** list.

5. In the **Sort Range** list, specify the sort range:

    >[!NOTE] The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    - Type the item reference in the **From** field.

    - Click the Lookup Reference and from the **Lookup For** **From** window, select the required sort item, and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    - Type the first and last values of the range in the **From** and **To** fields.

    - Click the Lookup Reference (if available) and from the **Lookup For** window, select the required sort item, and click **Select**.

    - **All**: Select this to include all available items.

6. To generate a company-specific report if required, in the **Other Variables** section, in the **Company (Optional)** field, type the company number.

7. On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

>[!NOTE] Made2Manage displays a check mark in the report's permission column, if the permission is assigned. If you've enabled **No Security** to the assigned page, then Made2Manage displays the page's name in parentheses.

​