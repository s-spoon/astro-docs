---

title: "Schedule the purchasing queue to regenerate"
draft: false
type: Article

---

You regenerate the purchasing queue to update it with the most current purchasing needs. You can schedule the purchasing queue to automatically regenerate on a schedule. For example, you can schedule the purchasing queue to regenerate each night at midnight. Then you can view the most current information in the morning.

Some users may not have permission to use the Command Scheduler. See your system administrator.

At least one machine must be in Command Processor mode for the regeneration to occur.

**To schedule the purchasing queue to regenerate**

1. Open the **Command Scheduler (CMDS)** page.

    - Select **Utilities** > **Maintenance** > **Command Scheduler**.

        Or

    - Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler**.

       The **Command Scheduler (CMDS)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Command Scheduler** window appears.

3. Select PURCHASE QUEUE REGENERATION, and click **Select**.

4. Specify regeneration details:

    1. In the **Description** field, type a description of the task you want to perform.

    2. In the **Command** box, verify that **PQREGENERATE** appears.

5. Specify execution parameters:

    1. Click the **Priority** arrow to set the task's priority. **1** is the highest priority.

    When you schedule a task to run at the same time as another task, the Command Processor runs them in order of priority.

    2. In the **Interval** list, select how often to regenerate.

        To turn off a task, select **Never**. To run it exactly once, select **On Date**.

    3. In the **Next Execution Date** box, type the date and time to run the command next.

        Made2Manage regenerates the purchasing queue each interval at the time you specify. If you chose Daily and set a time of 11 p.m., Made2Manage regenerates it each night at 11.

    4. Clear the selected **Execute For All Companies** check box.

    5. Click the **Company** lookup reference.

        The **Lookup For Company** window appears.

         - Select a row that contains the required company, and click **Select**.

            Or, double-click a row that contains the required company for which you want to run the command.

         - Click **Cancel** to exit from this window.

    6. Clear the selected **Execute By Any User** check box.

    7. Click the **User** lookup reference.

        The **Lookup For User** window appears.

         - Select the row that contains the required user,and click **Select**.

            Or, double-click the row that contains the required user to select the user who can run the command.

         - Click **Cancel** to exit from this window.

    8. To allow any user who signs in to M2M to run the command, select the **Execute By Any User** check box.

    9. To allow a specific user who signs in to M2M to run the command, clear the **Execute By Any User** check box and select the user.

6. On the **Toolbar**, click **Save**.

    Ensure that the **ProcessCommands** process is enabled for the designated companies in the **PROC** page and if the **PROC** is running for the commands to be executed.

​