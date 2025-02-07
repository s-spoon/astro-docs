---
title: "Check group permissions using the User Permissions (RPUSER) report"
draft: false
type: Article
---

Use the **User Permissions (RPUSER)** report to generate a listing of the group permissions that you assign using the **User Permission Wizard** **(PERMWIZ)** page.

### To generate the group permission report

1. Open the User Permissions (RPUSER) page.

    1. Select **Utilities** > **Utility Reports** > **User Permissions**.

    Or

    2. Search for **RPUSER** or **User Permissions** in the **Navigation box** and then select **User Permissions**.

    **User Permissions (RPUSER)** page appears.

2. In the **Selection** list, select **Group Permissions**.

3. In the **Sort Order** list, select:

    - **User Name**: To view the assigned group permissions of each user ordered by the user name.

    - **Group**: To view the assigned permissions for each group ordered by the group name.

4. In the **Sort Range** list, specify the sort range.

    >[!NOTE] The **Sort On** field is populated based on the type of report selected in the **Selection** list.

    The available sort ranges are:

    - **Single**: Select this option to include only one item. Selecting this option enables the **From** field. Do one of the following:

    - Type the item reference in the **From** field.

    - Click the Lookup Reference and from the **Lookup For** **From** window, select the required sort item, and click **Select**.

    - **Range**: Select this option to include a range of items to sort from. Selecting this option enables the **From** and **To** fields. Do one of the following:

    - Type the first and last values of the range in the **From** and **To** fields.

    - Click the Lookup Reference (if available) and from the **Lookup For** window, select the required sort item, and click **Select**.

    - **All**: Select this to include all available items.

5. To generate a company-specific report if required, in the **Other Variables** section in the **Company (Optional)** field, type the company number.

6. On the **Toolbar**, click **Run Report** to generate the report.

    Select **Open now** to open the report in a new tab or select **Notify when Complete** to get notification. You can open the downloaded report from **My Reports** page.

    >[!NOTE] Made2Manage displays a check mark under the report's permission column if you've assigned the permission.

>[!NOTE] When you select the sort order as **User Name**, if a user is assigned individual permissions apart from the permissions assigned to the groups that the user belongs to, or if the user doesn't belong to any group, then Made2Manage lists the user's permissions under the group **\<='NO GROUP'=\>**.

​