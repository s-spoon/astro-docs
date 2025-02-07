---
title: "Manage user field permission"
draft: false
type: Article
---

Made2Manage enables you to control the fields that can be edited or viewed by a user. Use the **User Permission Wizard (PERMWIZ)** page to manage field permissions. There are two types of field-level permissions that you can assign to fields:

- **ReadOnly**: Enable this to make the control a read-only field on the related page. Disable it to retain the default behavior of the control.

- **Hidden**: Enable this to hide the control on the page and in the related Browse, Lookup, and Copy Source pages. Disable it to retain the default behavior of the control.

>[!NOTE]By default, Made2Manage disables both these permissions.

>[!TIP] To hide a field for a user/group/company, only select the check box in the **Hidden** column for the field row under the user/group/company row.

### To manage field-level permissions

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Fields Permission** tab.

    The left pane contains four grids under the following sections:

    - **Users**: Lists all users.

    - **Group With Users**: Lists all groups to which users have been assigned.

    - **Group With Screens**: Lists all groups to which pages have been assigned.

    - **Fields Template**: Lists all the fields that have been added to the fields template.

    The right pane displays the grid under the **User Field Permission** section. The companies are displayed as **00**, **01** and so on in the grid.

    >[!TIP]In the grid under the **Users** section, double-click a user name to view the field permissions assigned to the user.

3. Select the users or groups for whom you want to specify field permissions:

    - To select users, perform the following steps:

        - Expand the **Users** section.

        - Select the required users in the grid and drag them to the required company or the required group in the required company in the grid under the **User Field Permission** section.

    >[!NOTE]If you add the users to the company level, Made2Manage assigns the users to the group **\<=’NO GROUP’=\>** as their permissions are managed individually and not at the group level.

    >[!TIP]In the blank field under the **User Name** column or the **First Name** or the **Last Name** column, type the user name, first name, or the last name to locate a user.

    - To select one or more groups for which users have been assigned, perform the following steps:

        - Expand the **Group With Users** section.

        - Select the required groups in the grid and drag them to the appropriate companies in the grid under the **User Field Permission** section.

    >[!TIP]In the blank field under the **Name** column, type the group's name or in the blank field under the **Description** column, type the full description or a partial one to locate the group.

    >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!TIP]Drag the group to the company numbered **00** to specify permissions for all companies.

    >[!NOTE]When you drag a group that includes sub-groups or pages, Made2Manage retains the group hierarchy. That is, the system also assigns the child groups and its assigned pages to the company.

    - To select groups for which pages have been assigned, perform the following steps:

        - Expand the **Group With Screens** section.

        - Select the required groups and drag them to the required companies in the grid under the **User Field Permission** section for which you want to grant access to.

    >[!TIP]In the blank field under the **Name** column, type the group's name or in the blank field under the **Description** column, type the full description or a partial one to locate the group.

    >[!TIP]Drag the group to the company numbered **00** to specify permission for all companies.

    >[!TIP]To select multiple groups, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!NOTE]When you drag a group that includes sub-groups or pages, Made2Manage retains the group hierarchy. That is, Made2Manage also assigns the child groups and its assigned pages to the company.

4. Select the pages for which you want to manage the field permissions:

    - To select pages for users belonging to a group or for a group, perform the following steps:

        - Expand the **Group With Screens** section.

        - Select the required pages and drag them to the required groups or users under the required company in the grid under the **User Field Permission** section.

    >[!NOTE]You can only drag pages that have been assigned to the user or group. If you drag a page directly to a company, Made2Manage also adds the group to which the page belongs to under the company, and maintains the hierarchy.

    >[!NOTE]If you drag a page directly to a company, Made2Manage also adds the group to which the page belongs to under the company, and maintains the hierarchy.

    >[!TIP]To locate the page for which you want to manage the field permission, in the blank field under the **Name** column, type the page's mnemonic or in the blank field under the **Description** column, type the full description or a partial one.

    >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!NOTE]When you assign a page to a group, Made2Manage also automatically assigns the child pages to the group, and retains the hierarchy.

    - To select pages for individual users, perform the following steps:

        - Expand the **Fields Template** section.

        - Select the required pages and drag them to the required users under the required company in the grid under the **User Field Permission** section.

    >[!NOTE]If you drag a field directly to a user, Made2Manage also adds the page to which the field belongs to under the user, and reflects the hierarchy.

    >[!TIP]To locate the page for which you want to manage the field permission, in the blank field under the **Name** column, type the page's mnemonic or in the blank field under the **Description** column, type the full description or a partial one.

    >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!NOTE]When you assign a page to a group, Made2Manage also automatically assigns the child pages to the group, and retains the hierarchy.

5. Select the fields for which you want to manage the permissions:

    - Expand the **Fields Template** section.

    - Select the required fields and drag them to their corresponding pages in the required companies, groups, or users in the grid under the **User Field Permission** section.

    >[!TIP]To select multiple fields, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!TIP]If you drop a table, Made2Manage automatically drops to the page all the fields that have been assigned to the table in the **Tables Fields Template**.

6. To manage field permissions, perform the following steps:

    >[!NOTE]The permissions of the parent group/page flow to its children. When you assign a permission to a parent group/page by selecting the corresponding check box, Made2Manage auto-assigns the permission to its sub-groups/sub-pages. When you remove a permission assigned to a parent group/page by clearing the corresponding check box, Made2Manage automatically removes the permission from its sub-groups/sub-pages.

    >[!TIP]To remove permission information at the group, user, page, or field level, in the grid under the **User Field Permission** section, select the group, user, page, or field row, click the ellipsis under the **Action** column, and select **Grid Accessories > Grid Actions > Remove Permission Information**.

    >[!TIP]In the grid under the **User Field Permission** section, select the company row and on the grid toolbar, click **Grant All** to grant all the permissions to that company. Click **Revoke All** to revoke all the permissions assigned to that company.

    - To manage field permissions at the user level, perform the following steps:

        - In the grid under the **User Field Permission** section, expand the required group in the required company and select the user for whom you want to grant permissions.

        - Select the check box under the appropriate permission column to enable that permission. Clear the check box to disable the assigned permission.

        >[!TIP]In the grid under the **User Field Permission** section, select the user row and on the grid toolbar, click **Grant All** to select all the permission check boxes under that user. Click **Revoke All** to revoke all the permissions assigned to that user.

    - To manage field permissions at the group level, perform the following steps:

        - In the grid under the **User Field Permission** section, expand the required company row and select the group for which you want to grant permissions.

        - Select the check box under the appropriate permission column to enable that permission. Clear the check box to disable the assigned permission.

        >[!TIP]In the grid under the **User Field Permission** section, select the group row and on the grid toolbar, click:  
\- **Grant All**: To grant all the permissions to the group and the users assigned to the group.   
\- **Revoke All**: To revoke all the permissions for the current group and the users assigned to that group.

7. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.