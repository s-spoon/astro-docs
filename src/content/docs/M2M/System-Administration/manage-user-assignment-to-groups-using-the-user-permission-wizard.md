---
title: "Manage user assignment to groups using the User Permission Wizard"
draft: false
type: Article
---

You create groups by basing them on some criteria such as the user role or the department. By adding users to groups, you can manage their permissions easily. When you add a user to a group, the user inherits the permissions of the group. Users in Made2Manage can belong to one or more groups. For example, a sales manager can belong to the **Sales** group and the **Manager** group. When a user belongs to multiple groups, you can set a particular group as the default group for that user. Made2Manage then assigns the user the permissions of the default group. If you don't define a default group for a user, then Made2Manage assigns the user the permission of the first group the user is assigned to. If you don't assign a user to any group, the user by default belongs to the group **EVERYONE**.

Use the **User Permission Wizard (PERMWIZ)** page to assign users to groups or to remove them from a group.

When you delete a user from a group, then Made2Manage deletes all permissions associated with the group and user combination. When you delete a user from the default group then:

- If the user is not added to any other group or if no other group exists, then Made2Manage assigns the user to the **EVERYONE** group.

- If the user is added to other groups, then Made2Manage sets the first group to which the user is added to as the default group for the user.

To assign users to groups

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Users** tab.

3. Select the required users in the grid under the **Users** section, and drag them to the desired group in the grid under the **Group With Users** section.

    >[!TIP]To select multiple users, hold down the **Shift** or the **Ctrl** key while clicking the left mouse button.

    >[!TIP]You can also move a user from one group to another in the grid under the **Group With Users** section. Drag the user from the source group to the target group.

4. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

    >[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.

### To remove a user from a group

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** \> **Maintenance** \> **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Users** tab.

3. In the grid under the **Group With Users** section, expand the group from which you want to remove the user. Or, on the grid toolbar, click **Expand All** to expand all groups.

4. Select the row that contains the user in this group.

5. Under the **Action** column, click the ellipsis.

6. Select **Grid Accessories** > **Grid Actions** > **Remove User from Group**.

7. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

    >[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.

### To set a group as the default group for a user

1. Open the **User Permission Wizard (PERMWIZ)** page.

    1. Select **Utilities** > **Maintenance** > **User Permission Wizard**.

    Or

    2. Search for **PERMWIZ** or **User Permission Wizard** in the **Navigation box** and then select **User Permission Wizard.**

    **User Permission Wizard (PERMWIZ)** page appears.

2. Click the **Users** tab.

3. In the grid under the **Group With Users** section, expand the group that you want to set as default for the user. Or, on the grid toolbar, click **Expand All** to expand all groups.

4. Under the **Action** column, click the ellipsis.

5. Select **Grid Accessories** > **Grid Actions** > **Set Group as Default**.

6. On the **Toolbar**, click:

    - **Save**: To save the changes and remain in the wizard.

    - **Save & Continue**: To save the changes and move to the next tab of the **User Permission Wizard (PERMWIZ)** page.

    - **Cancel**: To discard the changes.

    >[!NOTE] Restart Made2Manage if you have made any changes on the **User Permission Wizard (PERMWIZ)** page.