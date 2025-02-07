---
title: "Schedule the production schedule to regenerate"
draft: false
type: Article
---

You can regenerate the production schedule to update it with the most current job information. For convenience and efficiency, you can schedule regeneration of the production schedule to run unattended.

Scheduled tasks run when a computer is in command-processing mode.

## To schedule the production schedule to regenerate

1. Open the **Command Scheduler (CMDS)** page.

    1. Select **Utilities** > **Maintenance** > **Command Scheduler**.

        Or

    2. Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler**.

        The **Command Scheduler (CMDS)** page appears.

2. Click **Browse** on the Toolbar.

3. Select the line that reads REGENERATE SCHEDULE.

4. Specify regeneration details:

    If you do not have multiple production facilities, skip this step.

    1. In the **Description** box, type a description of the task you want to perform.

    2. In the **Command** box, replace the text **DEFAULT** with the facility name.

5. Specify execution parameters:

    1. In the **Priority** box, type or select a value to set the task's priority. **1** is the highest priority.

        When you schedule a task to run at the same time as another task, the **Command Processor** runs them in order of priority.

    2. In the **Interval** list, select how often to regenerate.

        To turn off a task, select **Never**. To run a task exactly once, select **On Date**.

    3. In the **Next Execution Date** box, type the date and time to run the command.

        Or click the icon at the end of the **Next Execution Date** box to display the calendar. Select the required date.

        Made2Manage regenerates the production schedule at the time you specify. If you chose **Daily** and set a time of 11 p.m., Made2Manage regenerates it each night at 11.

    4. Clear the **Execute For All Companies** check box.

    5. Click the **Company** Lookup Reference.

        The **Lookup For Company** window appears.

    6. Select the row that contains the required company, and click **Select**. Or, double-click the row that contains the required company.

        Click **Cancel** to exit from the **Lookup For Company** window.

    7. Clear the **Execute By Any User** check box.

    8. Click the **User** Lookup Reference.

        The **Lookup For User** window appears.

    9. Select the row that contains the user for whom to run the command, and click **Select**. Or, double-click the row that contains the user for whom to run the command.

        Click **Cancel** to exit from the **Lookup For User** window.

    10. Select **Any** User to allow any machine in command processor mode to run this command. Or, select a particular user name to allow only a machine logged in under that account to run this command.

6. On the **Toolbar**, click **Save**.