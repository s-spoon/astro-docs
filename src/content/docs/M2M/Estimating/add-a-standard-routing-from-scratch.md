---

title: "Add a standard routing from scratch"
draft: false


---

A routing explains the path a part follows through production and sequentially lists the work centers and operations you use to make the part. A parts standard routing automatically becomes part of a job order that includes the part.


## To add a standard routing from scratch

1.  Open the **Standard Routings (RTG)** page.

    -  Select **Production Management** > **Master Data** > **Standard Routings**.

    Or

    -  *Search for* **RTG** *or* **Standard Routings** *in the* **Navigation box** *and then select **Standard Routings**.

        The **Standard Routings** (RTG) page appears.

2.  Select the part:

    1.  On the **Toolbar**, click **New**.

    2.  If you have multiple manufacturing facilities, click **Facility** and select the facility where you will make the part.

    3.  Click the **Part No** lookup reference.

        The **Lookup For Part No** window appears.

    4.  Select the row, and click **Select**. Or, double-click the part to use.

    5.  Type the standard process quantity for the part in the **Std Process Qty** field
    5.  On the **Toolbar**, click **Save**.

3.  For the first operation to include in the routing:

Set operation information:

1.  Click **New** on the grid toolbar.
2.  In the **Oper No** field, type a number for the operation.

    Made2Manage suggests a number. Be sure the number places the operation in the proper sequence; if not, type a number that does.

    For more information on how operation numbers work with bills of material, see "Working with bills of material" in the **Related Information**.

3.  In the **Oper Qty** field, enter the quantity of items you need to produce to make the standard process quantity.

    The Yield on **RTG** will be used for calculating the **Oper Qty**(Operation Quantity) while creating new Job Orders or while modifying an existing Job Order's Make Quantity.

4.  Click the **Work Center** lookup reference.

    The **Lookup For Work Center** window appears.

5.  Select the row, and click **Select**. Or, double-click a work center. The work center name automatically displays in the **Work Center Name** field.

6.  Click the **Std Desc Code** lookup reference at the end of the field. The **Lookup For Std Desc Code** window appears.

7.  Select a row, and click **Select**. Or, double-click the row to use.

8.  The **Oper Desc** of the work center operation is automatically populated based on the value in the **Std Desc Code** field.

9.  The description is displayed in the **Operation Description** area.

    This description prints on the routing document. You can type additional information that you may want to include, such as checklists, quality standards for the operation, and so on.

10.  Set production information by entering one of the following:
    1.  If the **Setup Hrs** field is enabled, type the number of hours it takes to set up the operation.
    2.  If the **Hrs/Unit** field is enabled, type the number of production hours it takes to complete one unit.
    3.  In the **Units/Hr** field, type the number of units you can complete per hour.
    4.  In the **Prod Hrs** field, type the number of production hours it takes to complete the operation quantity.

    Or click the arrow at the end of **Setup Hrs**, **Hrs/Unit**, **Unit/Hr**, and **Prod Hrs** field to display the Calculator. select an appropriate value.

### Set cost information

1.  Type the labor and overhead cost per hour in the **Labor Cost/Hr**, and **Overhd Cost/Hr** fields.

2.  Type any other costs and the unit cost in the **Other Cost** and **Unit Cost** fields.

    Or click the icon at the end of **Labor Cost/Hr**, **Overhd Cost/Hr**, **Other Cost**, and **Unit Cost** field to display the Calculator. Select an appropriate value.

The Unit Costs are calculated based on the **Production Yield** and **Setup Yield**, if any. Using the operation quantity that includes the yields, labor, and overhead costs, the unit cost is calculated as follows.

### Example

In a standard routing for STK001 part number with two operations, production yield, and setup yield set on both the operations (SPQ1),

| **Work Center** | **Oper No** |  **Hrs/Unit** | **Setup Hrs** | **Prod Hrs** | **Setup Yield** | **Production Yield** | **Labor Cost/Hr** | **Ovrhd Cost/Hr** |
|-----------------|-------------|---------------|---------------|--------------|-----------------|----------------------|-------------------|-------------------|
| EDM             | 10          | 1             | 0             | 1            | 5               | 80%                  | \$10              | \$20              |
| PAINT           | 20          | 1             | 1             | 1            | 10              | 75%                  | \$5               | \$10              |

Operation 20:

At production yield of 75% and setup yield of 10, operation quantity required is

11.33 (i.e. ((100/75)\*1) + 10 )

Total hours required for operation 20 = (Setup Hrs + (Hrs/Unit) \* Operation Qty)

= (1 + 1 \* 11.33) = 12.33 hours

Total Labor Cost = Total hours required for operation 20 \* Labor Cost/Hr = 12.33

\* 5 = \$61.65

Total Overhead Cost = Total hours required for operation 20 \* Overhead Cost/Hr

= 12.33 \* 10 = \$123.30

Operation 10:

At production yield of 80% and setup yield of 5, operation quantity required is

19.16 (i.e. 11.33\*(100/80) + 5 )

Total hours required for operation 10 = (Setup Hrs + (Hrs/Unit) \* Operation Qty)

= (0 + 1 \* 19.16) = 19.16 hours

Total Labor Cost = total hours required for operation 10 \* Labor Cost/Hr = 19.16 

\* 10= \$191.60

Total Overhead Cost = Total hours required for operation 10 \* Overhead Cost/Hr

= 19.16 \* 20 = \$383.20

Unit Costs in RTG screen

**Labor** = Labor Cost of Op 10 + Labor Cost of Op 20 = 191.60 + 61.65 = \$253.25

**Overhead** = Overhead Cost of Op 10 + Overhead Cost of Op 20 = 383.20 + 123.30 = \$506.50

**Total** = **Labor** + **Overhead** = 253.25 + 506.50 = \$759.75

**Unit Hrs** = Total hours required for Op 10 + Total hours required for Op 20 = 12.33 + 19.16 = 31.49hrs

Made2Manage uses the costs from the work center for the operation. If the information you want to use for this routing is different, type those costs here.

3.  Type move hours in the **Move Hrs** field.

    Or click the icon at the end of **Move Hrs** field to display the Calculator. Select an appropriate value.

    The scheduling program uses move hours to determine when the next operation can start. This is the amount of time (positive or negative) that the next operation is delayed after completing the last part of the current operation. Material handling time or paint drying time are examples of how this can be used. If the move time is negative, it means the next operation can begin some (user-defined) time after the setup time for the current operation has started. This time is designated in hours or portions of hours. For example, a "-.5" means the next operation can start 1/2 hour after work is started for the current operation.

4.  Select the **Schedule** check box if you want to include the operation on the dispatch list and see the work center name when viewing the schedule in Project.
5.  To require lot or serial numbers for the component, select the **Lot/SN Required** check box.
6.  In the **Simultaneous Ops** field, type the number of simultaneous operations that can be in process in this work center. The number of simultaneous operations is used on the **Job Order** to compute the **Calculated Release Date**, resulting in reduced total Work Center time, and precise material needs dates.

    Or click the up/down arrows at the end of **Simultaneous Ops** field. You can increase decrease the value by 1.

    You cannot set this to a number higher than the maximum allowable number of simultaneous operations set in the **Work Center (WORK)** screen for this work center.

If you use the **Advanced Planning** option for Planning and Scheduling, click the **Alternate Resources** to add alternate resources.

7.  **Production Yield**: If you want to apply a yield loss percentage to the operation, specify the percentage of non-defective items that will be produced in the **Production Yield** field.

Example

If the Production Yield is 90%, and if the Standard Process Qty is 100, then to produce 100 non-defective pieces, the Operation quantity must be Standard Process Qty/Production Yield.

**Operation Qty** = 100/90% = 111.11 ≈ 112

8.  **Setup Yield**: If you want to apply a yield loss quantity to the operation, specify the number of defective items that may be produced during the process setup in the **Setup Yield** field.

Example

If you know that a certain machine always scraps 2 pieces before it is ready for production, you would enter 2 in this field. If the Production Yield is 90%, Setup Yield is 2, and if the Standard Process Qty is 100, then to produce 100 non-defective pieces, the Operation quantity must be (Standard Process Qty/Production Yield) + Setup Yield.

**Operation Qty** = 100/90% = 111.11 +2 = 113.11 ≈ 114

**Note:**

If the unit of measure is Each (EA) or Piece (PC), the Operation quantity will be rounded up to the next integer after the calculation.

\- If the unit of measure is other than EA or PC, the Operation quantity will remain as it is (decimal/integer) after the calculation and the same is used for other computations.

9.  On the **Toolbar**, click **Save**.

10.  For each additional operation to include in the routing:
    1.  Click **New** on the child toolbar.

    Or, click **Copy**on the child toolbar to base an operation on the highlighted operation

    2.  Repeat **step 3**.