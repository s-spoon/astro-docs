---

title: "Generate a finite plan (TBD-Dev)"
draft: false
type: Article

---

A finite plan will first determine the net demand for all parts at all levels of the bills of material, and then will generate the best set of jobs (with due dates and quantities) to meet that demand given limited capacity and purchased materials.

You can set up several different types of plan runs, with different Start Alignments or Buffer settings. Run specific scripts at any given time.

> [!TIP] The **Plan — Finite** window is only available when Advanced Planning is active.

**To generate a finite plan**

1. Open the **Advanced Planning** menu and choose **Plan — Finite**.

2. Click the **Add Record** button.

    Or to base the new script on the one the window shows, click the **Copy Record** button.

3. Set general script information:

    -   Type a name for the script in the **Script Name** box.

    -   If you want Planning and Scheduling to create an audit report listing the job order changes Finite Planning will make to the company's database, check the **Create audit** box.

    -   To make the script visible to you only, click the **Private** button in the **View options** area. Or to allow other users to see and use the script, click the **Public** button.

4. Set Finite Planning process options.

    -   Choose the type of goal you want to meet for this schedule:

        These goals control job end times based on their due dates. M2M Planning and Scheduling applies the just-in-time policy to all goals so production starts as late as possible, yet still meets the delivery date for the finished goods.

    -   Choose **Maximize Just in Time** to create a schedule that finishes products just-in-time so that you can avoid storing inventory, yet not ship the product early or late.

    -   Choose **Maximize Tactical Profit** to create a schedule that maximizes the total amount of profit.

    -   To automatically delete jobs that have no supporting demand in the planning horizon, check the **Delete Unneeded Jobs** box.

    -   To prevent changes to jobs that are already released and that are outside the work-in-progress period, check the **Don't change Released Jobs outside** **WIP periods** box.

    -   Select the **Auto Set CCR** check box if you want to first calculate how each work center would have been loaded if no capacity constraints were applied and to then set the work center with the highest average load as the primary **Capacity Constrained Resource (CCR)**.

5. Set finite planning demand options.

    -   Click the **Demand Options** tab.

    -   If you want Finite Planning to consider sales order demands during a plan run, check the **Sales Order** box.

    -   If you want Finite Planning to consider demand forecast demands during a plan run, check the **Forecast** box.

    -   If you want Finite Planning to consider safety stock demands during a plan run, check the **Safety Stock** box.

6. Choose a starting point for the schedule:

    -   Click the **Start Time Alignment** tab.

    -   To use the time shown in the Gantt chart, click the **Preserve Current** button.

        Or to begin scheduling starting at the current computer date and time, click the **Now** button.

    Use this setting when shop floor updates occur in real time.

    If your company uses only Advanced Planning, supply availability dates are based on the Job Due Date. If your company also uses Advanced Scheduling, supply availability dates can optionally be based on Best Known Date. The Best Known Date is the scheduled finish date, if one exists. Otherwise, it is the Job Due Date.

    Or to start the schedule at the beginning of the next shift, click the **Start of Shift** button.

    Use this setting when shop floor updates occur at the end of each shift.

    Or to start the schedule at the beginning of the next day, click the **Start of Day** button.

    Use this setting when shop floor updates occur at the end of each day.

7. Click the **Save** button.

8. To run a finite planning script, see the Related Information at the top right corner of the page.


