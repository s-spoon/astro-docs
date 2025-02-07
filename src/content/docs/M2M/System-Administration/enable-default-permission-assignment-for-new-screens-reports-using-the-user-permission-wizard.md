---
title: "Enable default permission assignment for new pages/reports using the User Permission Wizard"
draft: false
type: Article
---

New pages and reports have been added in Made2Manage 8.0. Refer to the *What's New Guide* to identify these new pages and reports.

From Made2Manage 7.51, all users may not be able to view the new pages and reports added as part of the enhancements by default. You have to explicitly assign permissions for individual users or groups to enable the users to work with these new pages or reports. For more information about assigning user permissions, see Manage user permission. This ensures that you assign users the appropriate permissions for these new pages and reports only on a need-to basis.

Made2Manage has assigned some default permissions for these new pages and reports. You must explicitly enable the default permissions assignment for the new pages and reports to ensure that the users of a group inherit the permissions that are assigned to the group for the new pages and reports. If you do not enable the default permission assignment for a page or a report, you must assign permissions individually to each user who needs to work with the new page or report.

Use the **User Permission Wizard (PERMWIZ)** page to do this.

>[!NOTE]The default permission assignment is already enabled for the standard Made2Manage pages and you cannot change the setting. You can only enable the default permission assignment for the new pages and reports. After you enable the default permission assignment to any new page or report and save the changes, you cannot reset the default permission setting.

### To enable default permission assignment for new pages/reports

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Screens** **With Default Permissions** tab.

    Made2Manage lists all pages in the grid under the **Screens** section.

3. Locate the new page or report for which you want to enable the default permission assignment.

    >[!TIP]In the blank field under the **Mnemonic** column, type the page's or report's mnemonic or the first few characters of the mnemonic.

    >[!TIP]Click the filter icon in the **Default Permission** column header and select **Unchecked** to view the pages and reports for which the default permissions are not enabled.

4. Select the corresponding check box in the **Default Permission** column.

5. Repeat steps 3 and 4 for all the required pages or reports.

6. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

    >[!NOTE]After you save the changes, you cannot reset the default permission setting.

>[!NOTE]Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.