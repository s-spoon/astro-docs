---
title: "Manage page assignment to groups using the User Permission Wizard"
draft: false
type: Article 
---

You create groups by basing them on some criteria, such as the user role or the department. You can assign permission to pages based on the groups. For example, you can assign modification permission for the finance management pages only to the users who belong to the **Finance** group. You can add the same pages to multiple groups and assign different permissions to the different groups. For example, you can assign only view permission for the finance management pages to the **Sales** group.

Use the **User Permission Wizard (PERMWIZ)** page to assign pages to groups or to remove them from a group.

When you assign a page to a group, the page's hierarchy is retained. That is, when you assign a parent page to a group, then its child pages are also automatically assigned to the group. For example, if you assign the **Shipping (SHIP)** page to the **ACCOUNTING** group, Made2Manage automatically assigns its child pages—**Assign Serial Numbers (SERL)** and **Shipping Lot Quantity Breakdown (SHIPLT)**— to the **ACCOUNTING** group.

When you remove a page from a group, then Made2Manage deletes all permissions associated with the group and page combination. The system also automatically removes from the group the child pages of the page removed. For example, if you remove the **Shipping (SHIP)** page from the **ACCOUNTING** group, Made2Manage automatically removes its child pages—**Assign Serial Numbers (SERL)** and **Shipping Lot Quantity Breakdown (SHIPLT)**—from the **ACCOUNTING** group.

>[!IMPORTANT] You can only remove a page at the parent level and not at the child level from a group. If you do not want to assign all the child pages to a group, then assign the child pages individually.

### To assign pages to groups

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Screens** tab.

    This tab lists only the pages that are not marked as **No Security** pages in the grid under the **Screens** section.

3. Select the required pages in the grid under the **Screens** section, and drag them to the desired group in the grid under the **Group With Screens** section.

    >[!TIP]To select multiple pages, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!NOTE]When you assign a page to a group, Made2Manage also automatically assigns the child pages to the group and retains the hierarchy.

4. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.

### To remove a page from a group

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Screens** tab.

3. In the grid under the **Group With Screens** section, expand the group from which you want to remove the page. Or, on the grid toolbar click **Expand All** to expand all groups.

4. Select the row that contains the page in this group.

5. Under the **Action** column, click the ellipsis.

6. Select **Grid Accessories** > **Grid Actions** > **Remove Screen from Group**.

    >[!NOTE]When you remove a page from a group, Made2Manage automatically removes the child pages also from the group.

7. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

>[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.