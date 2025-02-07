---

title: "Schedule the inter-facility supply order queue to regenerate"
draft: false
type: Article

---

You can regenerate the **inter-facility supply order (ISO) queue** to update it with the most current material needs. For convenience and efficiency, you can schedule regeneration to run unattended.


Scheduled tasks run when a computer is in command-processing mode. 


**To schedule the **inter-facility supply order** queue to regenerate**

1. Open the **Command Scheduler (CMDS)** page.

    - Select **Utilities** > **Maintenance** > **Command Scheduler**.

    Or

    - Search for **CMDS** or **Command Scheduler** in the **Navigation box** and then select **Command Scheduler.**

   The **Command Scheduler (CMDS)** page appears.

2. Make the necessary changes.

3. Specify execution parameters:

    1. Click the **Priority** arrows at the end of the field to set the task's priority. **1** is the highest priority.

        When you schedule a task to run at the same time as another task, the Command Processor runs them in order of priority.

    2. Click the **Interval** arrow at the end of the field and select how often to regenerate.

        To turn off a task, set this to **Never**. To run it exactly once, set this to **On Date**.

    3. In the **Next Execution Date** box, type the date and time to run the command next.

        Or click the icon at the end of **Next Execution Date** field. This displays the calendar. You can select the desired date.

        Made2Manage regenerates the **ISO Queue** at the time you specify. If you chose **Daily** and set a time of 11 pm., Made2Manage regenerates it each night at 11.

    4. Clear the selected **Execute for All Companies** check box.

    5. Click the **Company** lookup reference at the end of the field.

        The **Lookup For Company** window appears.

    6. Highlight a row and click **Select**. Or double click to select the companies for which to run the command.

        Click **Cancel** to exit from **Lookup For Execute for** window.

    7. Clear the selected **Execute by Any User** check box.

    8. Click the **User** lookup reference at the end of the field.

        **Lookup For User** window appears.

    9. Highlight a row and click **Select**. Or double click to select the user for which to run the command.

        Click **Cancel** to exit from **Lookup For Execute by** window.

        Select **Execute By Any User** to allow any machine in command processor mode to run this command. Or select a particular username to allow only a machine logged in under that account to run this command.

        Selecting either **Execute For All Companies** or **Execute By Any User** check box(es) disables the field.

4. Click **Save** on the **Toolbar**.

​