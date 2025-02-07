---
title: "Manage user table permission"
draft: false
type: Article 
---

Made2Manage enables you to manage the table-level permissions of users and groups. Use the **User Permission Wizard (PERMWIZ)** page to manage table permissions. You can specify if a particular group or user can add entries to a table, modify a table, or delete a table. Besides these, the **Default** permission is also available.

If you set the **Default** permission to **True** and if the user has the permission to view the page, then the user can add, copy, edit, or delete the table-related information on the page. However, if the user does not have permission to view the page, then the user cannot perform any actions on that table-related information on the page.

If you set the **Default** permission to **False**, irrespective of whether the user has permission to view the page or not, the user can perform the add, copy, edit, or delete operations according to the permissions given for the table.

### To manage table permission

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Tables Permission** tab.

    The left pane contains four grids under the following sections:

    - **Users**: Lists all users.

    - **Group With Users**: Lists all groups to which users have been assigned.

    - **Group With Screens**: Lists all groups to which pages have been assigned.

    - **Tables Template**: Lists all the tables that have been added to the tables template.

    The right pane displays the grid under the **User Table Permission** section. The companies are displayed as **00**, **01** and so on in the grid.

    >[!TIP]In the grid under the **Users** section, double-click a user name to view the table permissions assigned to the user.

3. Select the users or groups for whom you want to specify table permissions:

    - To select users, perform the following steps:

        - Expand the **Users** section.

        - Select the required users in the grid and drag them to the required company or the required group in the required company in the grid under the **User Table Permission** section.

        >[!NOTE]If you add the users to the company level, Made2Manage assigns the users to the group **\<=’NO GROUP’=\>** as their permissions are managed individually and not at the group level.

        >[!TIP]In the blank field under the **User Name** column or the **First Name** or the **Last Name** column, type the user name, first name, or the last name to locate a user.

        >[!TIP]To select multiple users, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    - To select one or more groups for which users have been assigned, perform the following steps:

        - Expand the **Group With Users** section.

        - Select the required groups in the grid and drag them to the appropriate companies in the grid under the **User Table Permission** section.

        >[!TIP]In the blank field under the **Name** column, type the group's name or in the blank field under the **Description** column, type the full description or a partial one to locate the group.

        >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

        >[!NOTE]When you drag a group that includes sub-groups or pages, Made2Manage retains the group hierarchy. That is, the system also assigns the child groups and its assigned pages to the company.

        >[!TIP]Drag the group to the company numbered **00** to specify permissions for all companies.

    - To select groups for which pages have been assigned, perform the following steps:

        - Expand the **Group With Screens** section.

        - Select the required groups and drag them to the required companies in the grid under the **User Table Permission** section for which you want to grant access to.

        >[!TIP]In the blank field under the **Name** column, type the group's name or in the blank field under the **Description** column, type the full description or a partial one to locate the group.

        >[!TIP]Drag the group to the company numbered **00** to specify permission for all companies.

        >[!NOTE]When you drag a group that includes sub-groups or pages, Made2Manage retains the group hierarchy. That is, the system also assigns the child groups and its assigned pages to the company.

        >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

4. Select the pages for which you want to manage the table permissions:

    - To select pages for users belonging to a group or for a group, perform the following steps:

        - Expand the **Group With Screens** section.

        - Select the required pages and drag them to the required groups or users under the required company in the grid under the **User Table Permission** section.

        >[!NOTE]You can only drag pages that have been assigned to the user or group.

        >[!NOTE]If you drag a page directly to a company, Made2Manage also adds the group to which the page belongs to under the company, and maintains the hierarchy.

        >[!TIP]To locate the page for which you want to manage the table permission, in the blank field under the **Name** column, type the page's mnemonic or in the blank field under the **Description** column, type the full description or a partial one.

        >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

        >[!NOTE]When you assign a page to a group, Made2Manage also automatically assigns the child pages to the group, and retains the hierarchy.

    - To select pages for individual users, perform the following steps:

        - Expand the **Tables Template** section.

        - Select the required pages and drag them to the required users under the required company in the grid under the **User Table Permission** section.

        >[!NOTE]If you drag a table directly to a user, Made2Manage also adds the page to which the table belongs to under the user reflecting the hierarchy.

        >[!TIP]To locate the page for which you want to manage the field permission, in the blank field under the **Name** column, type the page's mnemonic or in the blank field under the **Description** column, type the full description or a partial one.

        >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

        >[!NOTE]When you assign a page to a group, Made2Manage also automatically assigns the child pages to the group, and retains the hierarchy.

5. Select the tables for which you want to assign specific permissions:

    1. Expand the **Tables Template** section.

    2. Select the required tables and drag them to the required companies, groups, or users in the grid under the **User Table Permission** section.

    >[!TIP]Drag the table to the company numbered **00** to specify permission for all companies.

    >[!TIP]To select multiple tables, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

6. To assign table permissions, perform the following steps:

    >[!TIP]To remove table permission information at the group, or user, or page level, in the grid under the **User Table Permission** section, select the group, user, or page's row, click the ellipsis under the **Action** column, and select **Grid Accessories \> Grid Actions \> Remove Permission Information**.

    >[!NOTE]The permissions of the parent group/page flow to its children. When you assign a permission to a parent group/page by selecting the corresponding check box, Made2Manage auto-asigns the permission to its sub-groups/sub-pages. When you remove a permission assigned to a parent group/page by clearing the corresponding check box, Made2Manage automatically removes the permission from its sub-groups/sub-pages.

    - To manage company-level permissions, perform the following steps:

        >[!NOTE]The table permissions specified at the company level apply to all the groups/users/pages assigned to the company, However, you can modify the permissions for specific groups/users/pages.

        - In the grid under the **User Table Permission** section, select the required company row.

        >[!TIP]To assign the same permissions for all the companies, select the **00** company row.

        >[!TIP]In the blank field under the:  
\- **Name** column, type the company number to locate a company.   
\- **Description** column, type the description in full or in part to locate the company.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to remove the assigned permission.

        >[!TIP]In the grid under the **User Table Permission** section, select the company row and on the grid toolbar, click **Grant All** to grant all the permissions to that company. Click **Revoke All** to revoke all the permissions to that company.

    - To manage table permissions at the group level, perform the following steps:

        >[!NOTE]The permissions assigned to the group override the permissions specified for the company the groups belong to. The permissions assigned to the group are applicable to all the pages and users that belong to the group.

        - In the grid under the **User Table Permission** section, expand the required company row and select the group for which you want to grant permissions.

        >[!TIP]In the blank field under the **Name** column of the grid under the **User Table Permission** section, type the group's name or in the blank field under the **Description** column of the grid under the **User Table Permission** section, type the full description or a partial one to locate the group.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to remove the assigned permission.

        >[!TIP]In the grid under the **User Table Permission** section, select the group row, and on the grid toolbar, click:  
\- **Grant All**: To grant all the permissions to the group and the users for all the tables assigned to the group.   
\- **Revoke All**: To revoke all the permissions for the current group and the users for all the tables assigned to that group.

    - To manage table permissions at the user level, perform the following steps:

        >[!NOTE]The permissions assigned to the user override the permissions specified for the groups or the company the user belongs to.

        - In the grid under the **User Table Permission** section, select the user row under the required group in the required company or under the required company for whom you want to manage permissions.

        - Select the check box under the appropriate permission column to grant that permission. Clear the check box to remove the assigned permission.

        >[!TIP]In the grid under the **User Table Permission** section, select the user row, and on the grid toolbar, click **Check All** to grant all permissions to that user. Click **Uncheck All** to revoke all permissions granted to that user.

7. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.