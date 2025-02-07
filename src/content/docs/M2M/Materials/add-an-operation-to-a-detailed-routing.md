---

title: "Add an operation to a detailed routing"
draft: false
type: Article

---

You can add an operation to a detailed routing at any time.

**To add an operation to a detailed routing**

1. Open the **Job Orders (JO)** page.

    - Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

    Or

    - Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

        The **Job Orders (JO)** page appears.

2. Click **Browse** on the **Toolbar**.

    The **Browse For Job Orders** window appears. 


3. Highlight a row and click **Select**.

    Click **Cancel** to exit from the **Browse For Job Orders** window, Or double-click the job order.

4. On the Toolbar, click **More Actions**.

5. Select **More Actions** > **Actions** > **Routing Detail** .

    The **Job Order Detailed RTG** page appears. 


6. Click **New** on the grid toolbar.

    Or click **Copy** on the grid toolbar to add an operation based on the highlighted operation.

7. Complete the following fields -

    1. In the **Operation Number** field, type a number for the operation.

        Made2Manage suggests a number. Be sure the number places the operation in the proper sequence; if not, type a number.

        In the **Operation Quantity** field, type the quantity of items you need to produce at this operation in order to make the standard process quantity.

        The Yield on **RTG** will be used for calculating the **Operation Quantity** while creating new Job Order or while modifying an existing Job Order's Make Quantity.

        Or click the **Operation Quantity** icon. This action displays the Calculator. Select the value.

    2. Click the **Work Center ID** lookup reference and double-click a work center. The work center name automatically displays in the **Work Center** field.

    3. The description automatically displays in the **Operation Description** field of the operation.

        You can type additional information that you may want to include, such as **checklists**, **quality standards**, and many more.

    4. Set production time information:

        - If the **Setup Hours** box is available, type the number of hours it takes to set up the operation.

            Or click the **Setup Hours** icon to display the Calculator. Enter the values.

        - If the **Hours/Unit** field is available, type the number of production hours it takes to complete one unit.

            Or in the **Units/Hr** field, type the number of units you can complete per hour.

            Or in the **Production Hours** field, type the number of production hours it takes to complete the operation quantity.

            OR

        - Click the icon next to **Hours/Unit** or **Units/Hr** or **Production Hours** to display the Calculator.

    5. Set cost information:

        - In the **Labor Cost/Hr**, and **Overhead Cost/Hr** fields, type the labor and overhead cost per hour.

            Or click the **Labor Cost/Hr**, and **Overhead Cost/Hr** icon. This displays the Calculator. Select the values.

        - In the **Other Cost** and **Unit Cost** fields, type any other costs and the unit cost.

            Or

            Click the icon next to the fields to display the Calculator. Enter the values.

            Made2Manage uses the costs from the work center for the operation. If the information you want to use for this routing is different, type those costs here.

    6. In the **Move Hrs** field, type move hours.

        Or

        Click the icon next to **Move Hrs** to display the Calculator. Enter the values.

        The scheduling program uses move hours to determine when the next operation can start. This is the amount of time (positive or negative) that the next operation is delayed after completing the last part of the current operation. Material handling time or paint drying time are examples of how this can be used. If the move time is negative, it means the next operation can begin some (user-defined) time after the setup time for the current operation has started. This time is designated in hours or portions of hours. For example, a "-.5" means the next operation can start 1/2 hour after work is started for the current operation.

    7. Select the **Schedule** check box if you want to include the operation on the dispatch list and see the work center name when viewing the schedule in Project.

    8. Modify the number in the **Simultaneous Operations** box to increase or decrease the number of operations that can be in process simultaneously in this work center. The system uses this number when computing the job’s **Calculated Release Date**. If you are adding a new operation, the default value is from the Work Center. If you did an **Add and Carry** from an existing operation, the value defaults from the original operation. If you change this number, the job **Resync** on the **Job Orders (JO)** screen turns red, indicating that a job order resync is necessary.

        This number cannot be higher than the maximum allowable number of simultaneous operations set in the **Work Centers (WORK)** page for this work center.

8. Click **Save** on the **Toolbar**.

    Follow the steps above to add additional operations.

​