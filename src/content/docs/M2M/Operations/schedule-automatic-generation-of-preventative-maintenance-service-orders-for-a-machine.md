---
title: "Schedule automatic generation of preventative maintenance service orderse"
draft: false
type: Article
---

You can schedule preventative maintenance for a machine so that Made2Manage creates a service order for each due or past-due preventative maintenance task for all machine records. The system also checks and changes warranty statuses to inactive when they expire.

## To schedule automatic generation of preventive maintenance service orders for a machine

1. Open the **Command Scheduler (CMDS)** page.

    Navigate **Utilities** > **Maintenance** > **Command Scheduler**.

    Or

    Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler.**

    The **Command Scheduler (CMDS)** page appears.

2. On the **Toolbar**, click **Browse** .

3. In the Browse for Command Schedule window, select **Schedule Preventive Maintenance** and click OK or double-click the required description.

    In the **Command** box, FSPMWARN appears by default.

4. Specify execution parameters:

    1. Click **Priority** dropdown to set the task's priority. **1** is the highest priority.

        When you schedule a task to run at the same time as another task, the Command Processor runs them in order of priority.

    2. Click **Interval** dropdown list and select how often to run this program.

    3. To turn off a task, set this to **Never**. To run it exactly once, set this to **On Date**.

    4. In the **Next Execution Date** box, enter the date and time to run the command next.

        Or click the calendar icon to display the Calendar. select the desired date.

        Made2Manage runs the command each interval at the time you specify. If you select **Daily** and set a time of 11 PM, Made2Manage regenerates it everyday at 11 PM.

    5. Clear **Execute for** **All Companies** check box.

    6. Click the **All companies** lookup reference at the end of the **All Companies** field.

        The **Lookup For Execute For** page appears.

    7. Select a row and click **Select**.

        Or double click to select the companies for which to run the command.

        Click **Cancel** to exit from **Lookup For Execute For** page.

    8. In the **Execute by** area, clear **Any User** check box.

    8. Click the **Any Area** lookup reference.

        The **Lookup For Execute by** page appears.

    9. Select a row and click **Select**.

        Or double click to select the user for which to run the command:

        Click **Cancel** to exit from **Lookup For Execute by** page.

    10. To allow any machine in command processor mode to run this command, select **Any User**.

    11. To allow only a machine logged in under that account to run this command, select a particular username.

5. On the **Toolbar**, click **Save**. <br>The automatic generation of preventive maintenance is scheduled.

    >[!NOTE] Esure you have enabled ProcessCommands within the Processor Service (PROC) so that your commands will execute.

​