---
title: "Set user permissions"
draft: false
type: Article
---

User permissions are part of your system's security. To protect sensitive business data, you can control which pages each user can use. Use the **User Permissions (PERM)** page to set permissions for individual users. You can access this page from the **User Management (USER)** page.

>[!IMPORTANT] You can only set permissions for users who do not belong to any group other than the **STANDARD** group in the **User Permissions (PERM)** page. For users who are part of any group other than the **STANDARD** group, you can only view the permissions and not change the permissions in the **User Permissions (PERM)** page. Use the **User Permission Wizard (PERMWIZ)** page to configure the permissions of users who belong to one or more groups.

### To set user permissions for users who do not belong to any specific group

1. Select the user.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Permission**.

    The **User Permissions (PERM)** page appears.

    The **User Permissions (PERM)** page lists the pages for which the user is assigned permissions, in the grid under the **Permissions** section.

4. To change the pages displayed, in the **View Mode** area, click:

    - **Full**: To view all the pages including the pages for which the user is not assigned any permission.

    - **Permitted**: To view only the pages for which the user is assigned permissions.

5. In the **Company** list, select the company number to change the company for which you want to view the user's permissions.

6. Set the permissions:

    - On the grid toolbar, click **Grant All**, to grant permission to access all pages.

        >[!NOTE] You typically grant permission to all pages only to Administrator users.

    - To grant permission for only a small set of pages:

        - On the grid toolbar, click **Revoke All**.

        - Select the page or group parent row.

            >[!TIP]To locate a page, in the blank field under the **Mnemonic** column, type the page's mnemonic. Use the **%** wildcard character in the blank field at the top of the **Mnemonic** column to locate pages that match the wildcard character. For example, type **%EFT** to view all pages whose mnemonic contains EFT.

        - Select the check box under the appropriate permission column to grant that permission to the user.

            >[!TIP]If you select or clear the check box in a parent row, all the child pages inherit the parent's permissions.

            >[!TIP]On the grid toolbar, click **Check All** to grant all permissions for the selected row.

    - To restrict permission for a single page or group of pages:

        - Select the page or group parent row.

            >[!TIP]To locate a page, in the blank field under the **Mnemonic** column, type the page's mnemonic. Use the **%** wildcard character in the blank field at the top of the **Mnemonic** column to locate pages that match the wildcard character. For example, type **%EFT** to view all pages whose mnemonic contains EFT.

        - Clear the check box, for each kind of access to restrict.

            >[!TIP]On the grid toolbar, click **Uncheck All** to clear all the permissions for the selected row.

7. On the **Toolbar**, click **Save**, to save the permissions.

    The message, *User Permission has been modified. Screen will auto refresh in \<number\> seconds.* appears.

8. Close the message window.

​