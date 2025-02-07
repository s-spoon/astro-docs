---  
 
title: "Troubleshooting: Intermittent Missing of Work Order Edit Button"  
draft: false 
type: KB Article
 
---

**Problem**:  
There are reported instances where the Work Order Edit button occasionally goes missing; this
issue is linked to a specific setting within a user group. Specifically, when the users have a
Supervisor/Planner group assigned to them, it restricts users from updating work orders entered
by others, causing the Edit button to vanish.

**Solution**:  
To resolve this issue, administrators can disable security settings (Restrict Update to WOs
Entered by Users) for any group within a specific plant. Let us consider the Supervisor group as
an example to illustrate the process. Additionally, removing the Supervisor group from the
affected User restores their ability to update work orders entered by others.

## To uncheck the Supervisor option within a Group for a specific Plant, follow the steps
outlined below:
1. Navigate to **Security** > **Security Groups** in the navigation pane. The **Security Groups** tab
will open in the top bar.

2. Search for and select the desired **Plant > Supervisor** (Group ID) in the grid.
3. Click the **Window Access** icon in the contextual panel to open the window for the selected
**Group ID** (Supervisor) on the right-side panel.
4. Select the Module **Work Order** from the drop-down menu.
5. Select or search for **Work Order Notebook** under the column Window Description.

6. Click the Edit button, uncheck the action name **Restrict Update to WOs Entered by Users**, and click **Save**.

    ![](../assets/kb-articles/Work%20Order%20Edit%20Button/Screenshot%202024-02-20%20140857.png)


## To remove the Supervisor group from the User, follow the steps outlined below

1. Navigate to **Security** > **Assign User Access** in the navigation pane. The Assign User Access tab will open in the top bar.
2. Search for and select the desired **Plant** > **User ID**.
3. Click the **Groups** icon in the contextual panel; the available groups for the selected User ID are
displayed on the right-side panel.

4. Choose the desired **Plant** and select or search for the group **Supervisors**.
5. Click the **Edit** button, uncheck the Group Supervisors, and click Save.

By removing the **Supervisor** group from the **User**, they regain the ability to update work entered
by others.

![](../assets/kb-articles/Work%20Order%20Edit%20Button/Screenshot%202024-02-20%20141808.png)

