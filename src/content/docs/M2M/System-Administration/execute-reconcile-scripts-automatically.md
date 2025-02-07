---
title: "Execute Reconcile Scripts automatically"
draft: false
type: Article
---

From Made2Manage 7.50, a command has been added to schedule and generate reconciliation tables for common issues found at month end reconciling. In Made2Manage 7.51, the Reconcile Scripts are converted to stored procedures in the master M2M database. To generate the reconciliation tables, you need to setup this command to execute.

>[!NOTE]It is recommended to set the interval to "Monthly" for this command and be aware that this command adds the following backup tables to your database. The date/time stamp is not appended to the table name, but is now a column within the single table to indicate when the data was captured.  
• STD_INONHANDHISTORY  
• STD_JOPACTHISTORY  
• STD_RPRGNI_SNAPSHOT_HIST  
• STD_RPIVAL_SNAPSHOT_HIST  
• STD_RPWIP_SNAPSHOT_HIST

### To enable the Execute Reconcile Scripts command

1. In the **Command Scheduler (CMDS)** window, change the interval of the **EXECUTERECONCILESCRIPTS** command.

    >[!NOTE]By default, the **EXECUTERECONCILESCRIPTS** command's interval is set to **NEVER**.

2. Execute the CMDS scheduled tasks using the **M2M Processor Service Configuration (PROC)** window.

### To automatically generate the Execute Reconcile Scripts command to create the reconciling tables

1. Open the **Command Scheduler (CMDS)** page.

    1. Select **Utilities** > **Maintenance** > **Command Scheduler**.

    Or

    2. Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler.**

    **Command Scheduler (CMDS)** page appears.

2. On the **Toolbar**, click **Browse** .

    **Browse For Command Scheduler** window appears.

3. Highlight the **Execute Reconcile Scripts** row and click **Select**. Or, double-click the command with the description **Execute Reconcile Scripts**.

4. From the **Interval** list, select the interval in which you want to execute the command.

    >[!TIP]Do not select **Never** from the **Interval** list.

5. In the **Priority** field, set the task's priority.

    >[!NOTE] **1** is the highest priority.

6. To run the command only for a specific company database:

    1. Clear the selected **Execute for** **All Companies** check box.

    2. Click the  **lookup reference button** ​ at the end of the field.

        The **Lookup For Company** window is displayed.

    3. Highlight a row and click **Select.**Or, double-click a row to select the company for which you want to run the command.

7. Specify who can execute the command:

    - To ensure that only a specific user can execute the command:

        - Clear the selected **Execute By Any User** check box.

        - Click the  **lookup reference**  button at the end of the **User** field.

            The **Lookup For User** window appears.

        - Highlight a row and click **Select**.Or, double-click a row to select the user who can run the command.

    - To allow any user to run the command, select the **Execute By Any User** check box.

8. On the **Toolbar**, click **Save**.

9. Close the **Command Scheduler (CMDS)** window.

10. Execute the CMDS scheduled tasks using the **M2M Processor Service Configuration (PROC)** window. For more information, see the Related Information.

​