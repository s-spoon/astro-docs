---

title: "Set a company's global parameters (Advanced Scheduling only)"
draft: false
type: Article

---

You must set global parameters for each Made2Manage company that uses M2M Planning and Scheduling to schedule production. To generate effective schedules, set all parameters. Depending on the stability of your environment, you may have to adjust these parameters occasionally.

For M2M Planning and Scheduling to generate effective schedules, set all parameters. If you use M2M Planning and Scheduling to schedule more than one company's production but want all companies to use the same global parameters, set them only for the first company.

**To set a company's global parameters from within M2M Planning and Scheduling**

1. Open the **Global Parameters (PSGLPARM)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Options** > **Global Parameters**.

    Or

    - Search for **PSGLPARM** or **Global Parameters** in the **Navigation box** and then select **Global Parameters**.

        The **Global Parameters (PSGLPARM)**  page appears.

2. Click the **General** tab.

3. Set information about your schedule's scope:

    - In the **Scheduling Horizon (Days)** field, type the number of days that you want to schedule jobs.

    When setting the number of days, keep the following points in mind:

    - The scheduling horizon cannot be greater than the planning horizon because scheduling produces Gantt charts for the scheduling horizon.

    - The scheduling horizon should be long enough to cover the longest manufacturing lead time and should be included within the planning horizon, not outside.

    - Longer scheduling horizons generally improve the accuracy of need dates for purchased items.

    - Only job orders with due dates that fall within the schedule horizon are actually scheduled.

    - In the **Planning Horizon (Days)** field, type the number of days in the future you want Planning to add jobs to support demands .

    > [!Note] While scheduling and planning horizons are based on calendar days, Scheduling recognizes your actual workdays established in the base calendar window (and subsequent variations) when scheduling.

4. (Not in Basic Scheduling) Set your schedule's buffers. uses time-based buffers to minimize disruptions of workflow before and after the Critical Constraint Resource (CCR) and to insert time allowances between the job finish date and the customer due date. The Drum-Buffer-Rope scheduling technique used in (Advanced Scheduling) depends on the Buffer values entered in this form.

    - In the **Assembly Buffer (Hours)** field, type the number of hours to buffer work centers that feed the CCR so the CCR never has to wait for assembly on parts.

    - In the **CCR Buffer (Hours)** field, type the number of hours to buffer the CCR so materials never arrive late.

    - In the **Shipping Buffer (Days)** field, type the number of days to buffer shipping so that finished goods never ship after the sales order's due date.

    - In the **Purchase Buffer (Days)** field, type the number of days to buffer purchases (the number of days after the purchase order due date that the material is considered available).

    - In the **Release Date Offset (Days)** field, type the number of extra scheduled days to add to unreleased job orders . This number is used to release a job and gather the material and paperwork prior to actually starting the job.

5. Specify the calendar options:

    - From the **Sub Contract Elapsed Days** list, select the calendar to use for calculating the sub contract elapsed days.

    - From the **Vendor Lead Time** list, select the calendar to use for calculating the vendor lead time.

    - From the **Move Time** list, select the calendar to use for calculating the move time.

6. In the **Progress Based On** area, select the option to use as a basis for tracking the job progress:

    - Click **Units Produced** if you want to reserve work center capacity based on the quantity remaining in the operation. This option is beneficial for repetitive manufacturing, where produced quantities provide more accurate scheduling.

    - Click **Hours Posted** if you want to reserve work center capacity based on the number of hours reported against the total number of hours required at the job operation. This option is helpful for manufacturers with relatively small job order quantities, but long manufacturing times.

7. In Advanced Scheduling, in the **% Beyond Estimated Hours** field, indicate an estimate of work remaining for operations that are incomplete, yet already have posted hours in excess of standard estimate. The value entered (%) is multiplied by the original estimated hours, and is used when Progress Based On is set to Hours Posted.

8. (Advanced Scheduling only) Select the **Constrain By Purchased Materials** check box to constrain your schedule to the availability of purchased material.

> [!Note] The availability of purchased material does not constrain the schedule beyond the purchasing lead time.

> [!Note] Non-constrained materials should have no greater than 1 day of lead time in the item master.

9. On the **Toolbar**, click **Save** to save your parameter settings.

​

