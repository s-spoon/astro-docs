---

title: "Set schedule rules"
draft: false
type: Article

---

Set your company's scheduling rules to prepare for generating schedules.

The **Schedule** page is only available when Advanced Scheduling is active.

**To set schedule rules in the Planning and Scheduling application**

1. Start the What If session.

2. Open the **Schedule (PSSCHEDU)** page.

    - Select **Scheduling > Schedule**.

    Or

    - Search for **PSSCHEDU** or **Schedule** in the **Navigation box** and then select  **SSchedule**.

        The **Server Management (PSSRVMNG)** page appears.

2. On the **Toolbar**, click:

    - **New** (): To create a totally new schedule.

    - **Copy** (): To base the new scheduling rules on those already in the window.

3. From the **Facility** list, select the facility for which you want to create the scheduling rules.

4. In the **Script Name** field, type the name of the script for the schedule you want to create.

5. Specify the options in the **Process Options** tab:

    - From the **Goal** list, choose the type of goal you want to meet for this schedule.

    > [!Note]  These goals control job end times based on their due dates. M2M Planning and Scheduling applies the just-in-time policy to all goals so production starts as late as possible, yet still meets the delivery date for the finished goods.

    - Choose **Minimize Number of Late Jobs** to reduce the number of late jobs on the schedule.

    - Choose **Minimize Sum of Hours Late** to reduce the total number of delayed hours for late jobs.

    - Choose **Minimize Worst Case Lateness** to minimize the maximum lateness of a job.

- In the **Minimize Earliness** area, select:

    - **All**: To minimize job order earliness for all jobs.

    - **All Except Allow Ship Early**: To minimize job order earliness for all jobs except those that are marked for early shipping.

    - **None**: To allow early job completion for all jobs.

    > [!Note] Capacity will be allocated to jobs nearing completion or those that risk finishing past the due date, instead of those that are expected to finish early.

    - Select the **Setup Reduction** check box to reduce the setup processing time during scheduling. Advanced Scheduling will schedule two jobs with the same item on the same operation together to reduce setup time and expense.

    > [!TIP] This process requires additional calculation, and should only be selected when setup is significant.

    -   In the **Time Fence (Days)** field, specify the number of days that you want to prevent Advanced Scheduling from making changes to scheduled start or finish dates.

    -   In the **Ship Early Limit (Days)** field, specify the number of days to limit the Sales Orders flagged as Ship Early to be scheduled Just In Time. This will prevent Ship Early Sales Orders from bumping Sales Orders that are not flagged as Ship Early during the scheduling phases.

6. Set schedule start times:

    a.  Click the **Start Alignment** tab.

    b.  Choose the start time for the selected schedule:

    -   Click **Preserve Current** to use the start time of the most recent scheduling run.

    -   Click **Now** to begin the schedule based on the current system date and time.

    -   Click **Start of Shift** to begin scheduling at the start of the current shift.

    -   Click  **Start of Day** to begin scheduling at the start of the current day.

        > [!Note] If you generate a schedule and Advanced Scheduling detects unmet demand for a manufactured item, you may be prompted to regenerate infinite capacity planning prior to generating a new schedule.

7.  Select the demands to be part of the first phase scheduling process:

    a.  Click the **Two Phase Scheduling** tab.

    > [!Note] The two phase scheduling process allows you to prioritize your different demand types whether you work with Capable to Promise approved sales orders or non-CTP approved sales orders. High priority demands and their supporting jobs are scheduled in the first phase. The schedule of the first phase is kept fixed in the second phase such that only the remaining capacity and material resources are available to support the lower priority demands and their associated jobs.

    b.  From the **Demand Type** list, select the demand type to include in the first phase scheduling process.

    -   Select **All** to include all jobs that support all demand types.

    -   Select **CTP Approved SO** to include only those jobs which support CTP approved sales orders and their lower level jobs. All other jobs for all other demand including non-CTP sales orders are scheduled in the second phase.

    -   Select **SO** to include all jobs that support all sales orders and their lower level jobs in the first phase, all other jobs supporting other demand will be scheduled in the second phase.

    -   Select **SO + FCST** to exclude jobs that support safety stock from the first phase scheduling process.

    c.  Select the **Only Previously Scheduled** check box to include only previously scheduled demands in the first phase scheduling process.

    > [!TIP] To include both new demands and previously scheduled demands in the phase one scheduling process, leave the check box unselected.

8.  On the **Active Form** ribbon, click **Save** to save the changes.

    > [!TIP] Each time you change these settings, you must save and regenerate the schedule for the changes to reflect.

9.  Click **Execute** to generate the schedule.