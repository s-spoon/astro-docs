---

title: "Security Groups"
draft: false


---
A security group makes it simple for you to manage user permissions. Use this feature with the Assign User Access feature to make a user ready to use the system.

**Menu Path: Setup > Security Groups**

>[!Important] 
>Security Groups option will be visible only if you have sufficient security under the **Security** navigation page called **Security**.

In the **Security Groups** window, the system displays a grid that contains all the plants to which you have access. Expand each plant to display the groups that you’ve created.

If you are the first customer administrator of a company, then the system assigns you to the groups:

  * AllAccess

  * CoreNamedLicense

You need to assign permissions for specific windows to each group, and then [assign a user to the group](Assign-User-Access.md). The grid displays the plants and groups alphabetically.

Three security groups with different permissions are delivered by default when a new plant is created:

  * Dataloader - Access to Dataloader

  * Integration Administrator - Configure and execute integration jobs

  * Task Management Administrator - Configure and execute task manager jobs

The grid contains the following columns:

  * Plant: The plant(s) to which you have access. Your Administrator grants you permissions to the plants from the Tenant Portal application.

  * Group Id: The name or ID of the group that you create in a plant.

  * Description: A brief explanation of the group’s function or its role.

  * Named License Assigned: The name of the license that your Aptean Administrator allocates to the group.

See **Grid Operations** for more details about the grid.

Action Bar

In the **Security Groups** window, the system displays the following action buttons above the grid:

  * New: Opens the **New Security Group** section in the **Security Groups** window from where you can [create a new security group](#create-a-new-security-group). Only if you have security access, then you can create a security group.

  * Edit: Opens the **Edit Security Group For : \<Group Id\>** section in the **Security Groups** window from where you can [edit the selected group](#edit-a-security-group).

  * Delete: Opens a popup to delete the selected group. If you delete the group, the system also deletes the group’s user assignment, associated window permissions, associated table elements, and database access. After you delete the group, the message, **GroupId \<Group Id\> deleted successfully.** appears.

  * Copy To: Opens a window that allows you to [copy the assigned window permissions](#assign-window-permissions-to-a-group-by-copying-another-groups-window-permissions) of a plant’s group to the group that you select in the grid.

  * Export: Saves the data present in all columns of the grid to a Microsoft Excel workbook. You can open the workbook to view the grid’s data.

**Contextual Panel**

In the **Security Groups** window, select a group within a plant to make the Contextual Panel available. This panel is located at the right of the window. In the Contextual Panel, click **Window Access**. You can [assign window permissions](#assign-window-permissions-to-a-group) to the selected group using this Contextual Panel.

### Create a New Security Group

You can create a group for those plants to which you have access.

To create a new security group:

  1. On the action bar, click the **New** button.

      The **New Security Group** section appears in the **Security Groups** window.

  2. In the **Plant** drop-down list, select the required plant.

      The list shows only those plants to which you have access.

  3. In the **Groupid** field, type any alphabetic or alphanumeric name for the group.

  4. In the **Description** field, type the group’s functional description. For example, the  description can be ‘Access to upload documents’, if the group has window permissions to upload documents for various windows.

      >[!Note]
      >Only your Aptean Administrator can enter a value in the **Named License Assigned** field.

  5. Click the **Save** button.

      The message, **GroupId \<Group Id\> added successfully.** appears, and the system adds the new group in the plant.

### Edit a Security Group

Once you’ve created a group, you cannot change its plant and its Groupid or name. You can only change a selected group’s description after you click the **Edit** button on the action bar, and change the description in the **Edit Security Group For : Group Id** section. Then, click the **Save** button.
The message, **GroupId \<Group Id\> updated successfully.** appears, and the system updates the group’s description in the plant.

  >[!Note] 
  >Only your Aptean Administrator can edit the value in the **Named License Assigned** field.

### Assign Window Permissions to a Group

When you assign a window permission to a group, all the group’s member users can perform certain [actions](#window-actions)  on that window. These users can be those who you add to the group or those who already belong to the group. Thus, the groups that you create should have permissions that are required for that group’s function.
For example, users who need to upload documents should belong to a group that has the **Upload Documents** permission.

### Window Access For : Group Id Window

When you select a group in the **Security Groups** window, and click **Window Access** in the Contextual Panel, the **Window Access For : Group Id** window appears. The **Window Access For : \<Group Id\>** window contains a grid from where you assign access to windows of the system. The grid has the following columns:

  * Window Description: Describes the window briefly, and shows the number of available actions in parentheses for that window. You can collapse or expand the rows in this column to hide or show the actions.

  * Action Name: Shows the [actions](#window-actions) or operations that you can perform on the window.

  * Has Access: Contains check boxes that correspond to each action for that window. Select a check box to assign the corresponding action of that window to the group. Conversely, if you clear that check box, the system removes that window’s action from the group. 

    >[!Note] 
    >By default, the system doesn’t assign any window permission to a new group.

  * Window Name: Shows the full technical name of the window.

See **Grid Operations** for more details about the grid.

The **Module** drop-down list above the grid contains the names of the various system modules. Select a module from this list to show all the related windows of that module in the grid. This helps to quickly find the window for a module.

To assign a window to a group:

  1. In the **Security Groups** window, select the required group.

      On the action bar, click the **Copy To** button and assign window permissions to the selected group by [copying another group’s window permissions](#assign-window-permissions-to-a-group-by-copying-another-groups-window-permissions). Or, continue to the next step to manually assign permissions to the group.

  2. In the Contextual Panel, click **Window Access**.

      The **Window Access For : \<Group Id\>** window appears.

  3. In the **Module** drop-down list, select the required module.

      The corresponding windows appear in the grid.

      >[!Note] 
      >By default, system selects the **All** option in the **Module** drop-down list. For this option, the grid displays the windows that are not specific to any module, but those that a user needs for basic access.

  4. Under the **Has Access** column, select the check boxes that correspond to the required action for that window.

      >[!Note] 
      >If you clear a selected check box, the system removes that window’s action for
that group.

      After you select or clear a check box, the message, **Window Access saved
successfully** appears.

### Assign Window Permissions to a Group by Copying another Group’s Window Permissions

After you create a new group it doesn’t have any window permissions. You can quickly copy the assigned window permissions of an existing group to your new group or to any other existing group. This establishes a starting point from where you can edit the new group’s permissions, if required.

To assign window permissions to a group by copying another group’s window permissions:

  1. In the **Security Groups** window, select the required group to which you want to assign window permissions.

  2. On the action bar, click the **Copy To** button.

      The **Copy Attributes** window appears.

  3. In the **Copy from Plant** drop-down list, select the plant that contains the group whose permissions you want to copy.

  4. In the **Copy from Group** drop-down list, select the group whose permissions you want to copy.

      >[!Note] 
      >The **Copy from Group** drop-down list shows only those groups that are contained in the plant that you select in the **Copy from Plant** drop-down list.

  5. Click the **OK** button.

      If you are copying permissions to a group that already has existing permissions, a message appears: **There are some window permissions already assigned. Do you want override?** with the following buttons:

      * **Yes** : Click this for the system to check for security for the group.

      * **No** : Click this to go back to the **Copy Attributes** window.

      If the group doesn’t have any existing permissions, the system checks for security, and a message appears: **Security already exists for Group Id. Do you want to continue?** with the following buttons:

      * **Yes** : Click this to continue with the copying operation.

          The message, **Copied Successfully** appears, and the system assigns the window permissions to the group you’ve selected in the grid.

      * **No** : Click this to go back to the **Copy Attributes** window.

### Window Actions

You’ll find window permissions or actions under the **Action Name** column of the [Window Access For: Group Id](#window-access-for--group-id-window) window. You can classify most window actions as follows:

Action | Action Description  
---|---  
View |  Opens the window in a new tab.  
Update |  Turns on the action buttons that help a user to edit data in a window or a section.  
Inquiry |  Grants read-only access to a window or to a section. For some windows, this action makes the module’s ‘search’ option visible in the navigation menu. Example, the Employee Search or Supplier Search options in the respective modules. This action may also make buttons visible in the Contextual Panel.  
New |  Turns on the visibility of a module’s ‘create’ option in the navigation menu. Example, the Create New Supplier or the Create New Employee options in the respective modules.  
Delete |  Turns on or turns off the Delete action button.  
Link |  Allows you to add a document as a link.

### MultiPlant Access

Enables users to access multiple plants.

Path: Security > Security Groups > Plant > **MultiPlant Access**