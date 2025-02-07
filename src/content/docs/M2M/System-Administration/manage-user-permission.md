---
title: "Manage User Permission"
draft: false
type: Article
---

A good secure system assigns permissions only on a need-to basis. You can improve the security of your system by providing proper permissions to the users and ensuring that they only access the pages required to perform the functions defined by their role.

Use the **User Permission Wizard (PERMWIZ)** page to manage user permissions. After you have assigned users to groups or pages to groups, assign the required permissions to the various groups or individual users or pages. You can also manage company-level permissions.

Made2Manage computes user permissions additively. When a user belongs to multiple groups and you add the same pages/reports to the different groups with different permissions in each group, Made2Manage assigns the permissions from all groups to the user. When the user has individual page/report permissions outside a group, then that takes precedence over the group permissions.

### To manage user permission

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **User Permission** tab.

    The left pane contains three grids under the following sections:

    - **Users**: Lists all users.

    - **Screens**: Lists all pages.

    - **Group With Screens**: Lists all groups to which pages have been assigned.

    The right pane displays a grid under the **User Permission** section. The companies are displayed as **00**, **01**, and so on in the grid.

    >[!TIP]In the grid under the **Users** section, double-click a user name to view the permissions assigned to the user.

3. Assign or remove permissions:

    >[!NOTE]If you remove the **View** permission, Made2Manage automatically removes all other permissions.

    >[!NOTE]The permissions of the parent group/page flow to its children. When you assign a permission to a parent group/page by selecting the corresponding check box, Made2Manage auto-assigns the permission to its sub-groups/sub-pages. When you remove a permission assigned to a parent group/page by clearing the corresponding check box, Made2Manage automatically removes the permission from its sub-groups/sub-pages.

    >[!TIP]To remove permission information at the group, or user, or page level, in the grid under the **User Permission** section, select the group, user, or page row, click the ellipsis under the **Action** column, and select **Grid Accessories > Grid Actions > Remove Permission Information**.

    - To manage company-level permissions, perform the following steps:

        - In the grid under the **User Permission** section, select the required company row.

            >[!TIP]In the blank field under the:  <BR><LI> **Name** column, type the company number to locate a company.   <LI> **Description** column, type the description in full or in part to locate the company.

    - Select the check box under the appropriate permission column to grant that permission. Clear the check box to revoke the assigned permission.

        >[!TIP]In the grid under the **User Permission** section, select the company row and on the grid toolbar, click **Grant All** to grant all permissions to that company. Click **Revoke All** to revoke all the permissions to that company.

    - To manage permissions at the user-level, perform the following steps:

        - Expand the **Users** section.

        - Select the required users in the grid and drag them to the required groups under the required companies in the grid under the **User Permission** section.

            >[!TIP]In the blank field under the **User Name** column or the **First Name** or the **Last Name** column, type the user name, first name, or the last name to locate a user.

            >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

            >[!TIP]Drag the user to the group **\<=’NO GROUP’=\>** if the user does not belong to any group.

        - Expand the required group in the required company, and select the user for whom you want to grant permissions.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to revoke the assigned permission.

            >[!TIP]In the grid under the **User Permission** section, select the user row, and on the grid toolbar, click **Check All** to grant all permissions to that user. Click **Uncheck All** to revoke all the permissions to that user.

            >[!TIP]To identify the groups that different users belong to, at the bottom of the page, click **Group With Users**. This displays the **Group With Users** popup that shows the different groups and the users who belong to that group.

    - To manage permissions at the page-level, perform the following steps:

        - Expand the **Screens** section.

        - Select the required pages in the grid, and drag them to the required users under the required groups in the appropriate companies in the grid under the **User Permission** section.

            >[!TIP]In the blank field under the **Mnemonic** column type the page's mnemonic or in the blank field under the **Description** column, type the full description or a partial one to locate the page.

            >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

            >[!NOTE]When you assign a page to a group, Made2Manage automatically assigns the child pages also to the group.

        - Expand the required user row and select the page for which you want to grant permissions.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to revoke the assigned permission.

            >[!TIP]In the grid under the **User Permission** section, select the page row, and on the grid toolbar, click **Check All** to grant all permissions for that page to that user. Click **Uncheck All** to revoke all the permissions for that page to that user. In the grid under the **User Permission** section, select the user row and on the grid toolbar, click **Grant All** to grant all permissions to all pages assigned to that user for the current group and company. Click **Revoke All** to revoke all the permissions to all pages assigned to that user for the current group and company.

    - To manage permissions for a group with pages, perform the following steps:

        - Expand the **Group With Screens** section.

        - Select the required groups, and drag them to the required companies in the grid under the **User Permission** section for which you want to grant access to.

            >[!TIP]In the blank field under the **Name** column, type the group name to locate a group.

            >[!TIP]Drag the group to the company numbered **00** to grant access to all companies.

            >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

            >[!NOTE]When you drag a group that includes sub-groups or pages, Made2Manage retains the group hierarchy. That is, the system assigns the child groups and its assigned pages also to the company.

        - Expand the required company, and select the group for which you want to manage permissions.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to revoke the assigned permission.

            >[!TIP]In the grid under the **User Permission** section, select the group row, and on the grid toolbar, click **Check All** to grant all the permissions to that group. Click **Uncheck All** to revoke all the permissions to that group. Click **Grant All** to grant all the permissions to that group and its pages. Click **Revoke All** to revoke all the permissions to that group and its pages.

4. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.