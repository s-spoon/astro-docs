---
title: "Schedule automatic generation of preventative-maintenance service orders for a machine"
draft: false
type: Article
---

You can schedule preventative maintenance for a machine so that Made2Manage creates a service order for each due or past-due preventative maintenance task for all machine records. The system also checks and changes warranty statuses to inactive when they expire.

## To schedule automatic generation of preventative maintenance service orders for a machine

1.  Open the **Command Scheduler (CMDS)** page.
    -  Select **Utilities** > **Maintenance** > **Command Scheduler**.

        Or

    -  Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler.**

  <br> The **Command Scheduler (CMDS)** page appears.

2.  Click **Browse** on the **Toolbar**.
3.  From the Browse for Command Schedule window, highlight **Schedule Preventive Maintenance** and click OK or double-click the required description.

    In the **Command** box, FSPMWARN appears by default.

1.  Specify execution parameters:
    1.  Click the **Priority** arrows to set the task's priority. **1** is the highest priority.

        When you schedule a task to run at the same time as another task, the Command Processor runs them in order of priority.

    1.  Click the **Interval** arrow and select how often to run this program.
    2.  To turn off a task, set this to **Never**. To run it exactly once, set this to **On Date**.
    3.  In the **Next Execution Date** box, type the date and time to run the command next.

        Or click the arrow at the end of the **Next Execution Date** field to display the Calendar. Select the desired date.

        Made2Manage runs the command each interval at the time you specify. If you select **Daily** and set a time of 11 p.m., Made2Manage regenerates it each night at 11.

    1.  Clear **Execute for All Companies** selected check box.
    1.  Click the lookup reference at the end of the **All Companies** field.

        <br> The **Lookup For Execute For** page appears.

    2.  Highlight a row and click **Select**.

        Or double click to select the companies for which to run the command.

        Click **Cancel** to exit from **Lookup For Execute For** page.

    3.  From the **Execute by** area, clear **Any User** selected check box.
    4.  Click the lookup reference at the end of the **Any User** field.

        <br> The **Lookup For Execute by** page appears.

    5.  Highlight a row and click **Select**.

        Or double click to select the user for which to run the command: Click **Cancel** to exit from **Lookup For Execute by** page.

    6.  To allow any machine in command processor mode to run this command, select **Any User**.

    7.  To allow only a machine logged in under that account to run this command, select a particular username.
2.  Click **Save** on the **Toolbar**.

    >[!Note] Ensure you have enabled ProcessCommands within the Processor Service (PROC) so that your commands will execute.