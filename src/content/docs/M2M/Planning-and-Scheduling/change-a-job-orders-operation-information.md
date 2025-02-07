---

title: "Change a job order's operation information"
draft: false
type: Article

---

You can change a job order's operation information. You must update the schedule after you complete this task. 

**To change a job order's operation information**

1. In the **Job Order (PSSDJO)** page, select the the Job Order number.

2. Under the **Action** column, click the ellipsis.

3. Select **Grid Actions** > **Job Order**.

4. In the Operation tab, select the operation.

5. Under the **Action** column, click the ellipsis.

6. Select **Grid Actions** > **Operation Data**.

The **Operation Data (PSOPDATA)** page appears.

7. Set general information about the operation:

In the **Qty to Go** field, specify the quantity of goods left to produce.

> [!Note] If you decrease the quantity, you may need to run infinite planning or risk creating an infeasible schedule situation (schedule will not run).

a. Select the **Frozen** check box to freeze the start and end date for this job order. If this check box is not selected, you can change the dates.

b. Click the **Resource ID** lookup reference button and select the work center from the **Lookup For Resource ID** window.

c. In the **Simultaneous Operations** field, specify the number of simultaneous operations.

8. Configure the operation information in the different tabs of the **Operation Data** window.

| **Tabs**    | **Description**                                                                                                                                          |
|-------------|------------------------------------------------------|
| Total       | Use the **Total** tab to change the Start and End date and work time for the operation. If the **Frozen** check box is selected, you cannot change the dates.  **To change the Start date and time**  In the **Start** field, specify the start date of the operation. In the adjacent field, specify the start time. **To change the End date and time**  In the **End** field, specify the end date of the operation. In the adjacent field, specify the end time. |
| Set Up      | The number of hours required to set up the operation (Setup Hrs) defaults from the Job Order Routing.  In the **Setup Hrs** field, specify the setup time.                                                                                                   |
| Production  | The number of hours per unit or rate (Hrs/Unit) associated with the operation defaults from the Job Order Routing.  In the **Hrs/Unit** field, specify the number of hours per unit or rate (Hrs/Unit) associated with the operation.                                                                                                                            |
| Remaining   | The move time (Move Hrs) associated with the operation defaults from the Job Order Routing.  In the **Move Hrs** field, specify the number of hours for the next operation to start.  In the **Time to Go** field, specify the time remaining on the job operation.                                                                                              |
| Completion  | This tab displays the units, operation hours, setup hours completed on the operation, as well as the method used to track job progress. You cannot modify these fields.   You set the 'Progress Based On' method in the **Global Parameters** window. See Set a company's Global Parameters for detailed information.                                                                                  |
|

9. On the **Toolbar**, click **Save**.

​