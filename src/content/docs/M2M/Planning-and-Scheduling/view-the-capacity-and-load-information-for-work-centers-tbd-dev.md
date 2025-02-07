---

title: "View the capacity and load information for work centers (TBD-Dev)"
draft: false
type: Article

---

The **Interactive Planning by Resource**page shows capacity and load information for work centers. Use this page to view work center information and to modify job quantities that are consuming capacity in work centers.

The **Interactive Planning by Resource** page is only available when Advanced Planning is active.

**To view the capacity and load information for work centers**

1. Open the **Interactive Planning by Resource** page for the work center for which you want to view information:

    - Open the **Advanced Planning** menu and choose **Interactive Planning by Resource**.

    - Click the **Search** button and choose the work center for which to view information.

2. In the **Filter** area, choose which periods to show for this work center:

    - Choose the periods:

    - To show all periods for the work center, click the **All** button.

    - To show only those work centers where there is at least one period where the calculated load on the work center (resulting from planned jobs) exceeds the capacity available, click the **Overloaded** button. To set the Overload Threshold value to a percentage other than the one set in the **Global Parameters** window, type a new percentage in the **Overload Threshold (%)** box.

    - To show only those work centers where there is at least one period where the calculated load on the work center (resulting from planned jobs) is less than the capacity available, click the **Underloaded** button. To set the Underload Threshold value to a percentage other than the one set in the **Global Parameters** window, type a new percentage in the **Underload Threshold (%)** box.

    - To show only those work centers where there is at least one period where the calculated load on the work center matches the capacity available (capacity at 100%), click the **Fully Loaded** button.

    - To display only the time periods meeting this filter, select the **Filter on Detail** box.

    - The main scroll list displays capacity and load information for the current work center.

3. To view or change details about a certain period:

    - Click on the period in the list.

    The **Supplies:** scroll list at the bottom of the window shows jobs that are consuming capacity in the selected period.

    - To view the maximum amount by which you can increase the job order quantity and still remain within capacity and material constraints, right-click on the job and choose **Max Add**.

    - The **Max Add** window opens.

    - To open the **Interactive Planning by Part** window for the affected part, right-click on the job and choose **Interactive Planning by Part**.

    - For more information on working in the **Interactive Planning by Part** window, see "View supply and demand information for parts" in the Related Information.

    - To view lot information for a job order, right-click on the job and choose Lot Sizing.

    - To display the sales order with which the job order (parent or component) is associated, right-click on the job and choose one of the following options:

    - If the part is a make-to-order part, choose **Interactive Planning by Sales Order**.

    - If the part is a make-to-stock part, choose **Interactive Planning by Part**.

    - To change a job order's amount, click in the **Change** box and type a number by which to increase the job order quantity.

    Or in the **Quantity** box for the job order, type a new total quantity.

Making changes here automatically changes quantities in the **Max Add** column.

To undo the most recent changes you made to the job order, right-click the job order and choose **Undo Changes**.

    -   To view more information about a job order, right-click the job and choose Job Order.

    -   If your company also uses Advanced Scheduling and you want to view the Job Gantt for a job order, right-click the job and choose Job Gantt.

**To change a job order's due date**:

    -   Highlight the job order to modify.

    -   Right-click the job order and choose **Move Job**.

    -   Click the arrow at the end of the **Due Date:** box and choose a new due date.

    -   Click the **Save** button.

4. If your company also uses Advanced Scheduling and you want to view the Resource Gantt chart for the work center, click the **Resource Gantt** button.