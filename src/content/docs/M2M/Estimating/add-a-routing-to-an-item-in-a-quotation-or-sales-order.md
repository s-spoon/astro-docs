---

title: "Add a routing to an item in a quotation or sales order"
draft: false


---

A routing records the operations necessary to produce a part or assembly. For items that do not already have a standard routing, you can create a casual routing or a detailed routing.

## To add a routing to an item in a quotation or a sales order

1.  Open the quotation or sales order.

2.  Click the **Items** tab.

3.  In the grid, select the required row or item.

4.  To open the casual routing:

    1.  Under the **Action** column, click the ellipsis.

    2.  Select **Grid Accessories** > **Grid Actions** > **Casual Routing**.

     The **Casual Routing** page appears.

        Or

    To open the **Detailed Routing** page, select **Detailed Routing** instead of **Casual Routing** in this step.

5.  On the grid toolbar, click **New** to add a new operation. Or, click **Copy** to add an operation based on the highlighted operation.

6.  In the **Operation Number** field, specify the number for the operation.

    Made2Manage suggests a number. Ensure the number places the operation in the proper sequence. If not, type a number that does.

7.  In the **Operation Quantity** field, specify the quantity of items you need to produce in this operation to make the standard process quantity.

This field displays only on the **Detailed Routing** page.

8.  Select the work center:

    1.  Click the **Workcenter ID** lookup reference.

    The **Lookup For Workcenter ID** window appears.

    2.  Select the row that contains the required work center, and click **Select.**

    Or, double-click the row that contains the required work center.

9.  Specify the operation code:

    1.  Click the **Operation Code** lookup reference.
    
    The **Lookup For Operation Code** window appears.

    2.  Select the row that contains the required operation description number, and click **Select**.

    Or, double-click the row that contains the required operation description number.

    The **Operation Memo** field displays the description. This description is printed on the routing document. You can type additional information that you may want to include, such as checklists and quality standards.

10.  Set production time information:

    1.  If the **Setup Hours** field is not disabled, specify the number of hours it takes to set up the operation.

    2.  If the **Hours/Unit** field is not disabled, specify the number of production hours it takes to complete one unit.

    Or, in the **Units/Hour** field, specify the number of units you can complete in one hour.

    Or, in the **Production Hours** field, specify the number of production hours it takes to complete the operation quantity.

11.  Set cost information:

    1.  In the **Labor Rate** and **Overhead Rate** fields, specify the labor and overhead cost per hour.

    2.  In the **Other Cost** and **Unit Cost** fields, specify any other costs and the unit cost.

    Made2Manage uses the costs from the work center for the operation. If the information you want to use for this routing is different, type those costs here.

12.  In the **Production Yield** field, specify the yield loss percentage, to apply a yield loss percentage to the operation.

13.  In the **Setup Yield** field, specify the yield loss quantity, to apply a yield loss quantity to the setup of an operation.

    For example, if you know that a certain machine always scraps 10 pieces before it is ready for production, type **10** in this field.

14.  Select the **Schedule** check box to include the operation on the dispatch list, and see the work center name when viewing the schedule in Project.

15.  In the **Move Hours** field, specify the move hours.

The scheduling program uses move hours to determine when the next operation can start. This is the amount of time (positive or negative) that the next operation is delayed after completing the last part of the current operation. Material handling time or paint drying time are examples of how this can be used. If the move time is negative, it means the next operation can begin some (user-defined) time after the setup time for the current operation has Started. This time is designated in hours or portions of hours. For example, a " –.5" means the next operation can start 1/2 hour after work is started for the current operation.

16.  In the **Simultaneous Operations** field, specify the number of operations that can be in process simultaneously in this work center.

 The number of simultaneous operations is used on the Job Order to compute the **Calculated Release Date**, resulting in reduced total Work Center time, and precise material needs dates. If you are adding a new operation, the default value is from the Work Center. If you did an add and carry from an existing operation, the value defaults from the original operation.

This number cannot be higher than the maximum allowable number of simultaneous operations set in the **Work Centers (WORK)** page for this work center.

17.  On the **Toolbar**, click **Save**.