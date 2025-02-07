---
title: "Add standard routing from scratch"
draft: false
type: Article
---

A routing explains the path a part follows through production and sequentially lists the work centers and operations you use to make the part. A parts standard routing automatically becomes part of a job order that includes the part.

### To add standard routing from scratch

1. Open the **Standard Routings (RTG)** page.

    1. Select **Production Management** > **Master Data** > **Standard Routings**.

    Or

    2. Search for **RTG** or **Standard Routings** in the **Navigation box** and then select **Standard Routings**.

    The **Standard Routings (RTG)** page appears.

2. Select the part:

    1. On the toolbar, click **New**.

    2. If you have multiple manufacturing facilities, click **Facility** and select the facility where you will make the part.

    3. Click the **Part No** lookup reference.

    The **Lookup For Part No** window appears. 

    4. Select the row that contains the required part, and click **Select**. Or double-click the part to use.

    5. In the **Std Process Qty** field, enter the standard process quantity.

    6. On the toolbar, click **Save**.

3. For the first operation to include in the routing:

## Set operation information:

1. On the child toolbar, click **New**.

2. In the **Oper No** field, enter a number for the operation.

    >[!Note] Made2Manage suggests a number. Be sure the number places the operation in the proper sequence; if not, enter a number that does.

    For more information on how operation numbers work with bills of material, see *Working with bills of material* in the **Related Information**.

3. In the **Operation Quantity** box, enter the quantity of items you need to produce to make the standard process quantity.

    >[!Note] The Yield on **RTG** will be used for calculating the **Oper Qty** while creating new Job Orders or while modifying an existing Job Order's Make Quantity.

4. Click the **Work Center ID** lookup reference.

    The **Lookup For Work Center** window appears. 

5. Select the row that contains the required work center, and click **Select**. Or double-click a work center. The work center name automatically displays in the **Work Center ID** field.

6. Click the **Std Description Code** lookup reference at the end of the field.

    The **Lookup For Std Description Code** window appears.

7. Select a row that contains the required description and click **Select**. Or double-click the row to use.

8. The **Operation Description** of the work center operation is automatically populated based on the value in the **Std Description Code** field.

9. The description is displayed in the **Operation** **Description** area. 
    
    This description prints on the routing document. You can type additional information that you may want to include such as checklists, quality standards for the operation, and so on.

10. Set production information by entering one of the following: 

    1. If the **Setup Hours** field is available, enter the number of hours it takes to set up the operation.

    2. If the **Hours/Unit** field is available, enter the number of production hours it takes to complete one unit.

    3. In the **Units/Hours** field, enter the number of units you can complete per hour.

    4. In the **Production Hours** field, enter the number of production hours it takes to complete the operation quantity.

        Or click the Calculator icon at the end of **Setup Hours**, **Hours/Unit**, **Units/Hour**, and **Production Hours** field to display the Calculator. select an appropriate value.

## Set cost information:

1. Enter the labor and overhead cost per hour in the **Labor Cost/Hour**, and **Overhead Cost/Hour** fields.

2. Enter any other costs and the unit cost in the **Other Cost** and **Unit Cost** fields.

    Or click the icon at the end of **Labor Cost/Hour**, **Overhead Cost/Hour**, **Other Cost**, and **Unit Cost** fields to display the Calculator. Select an appropriate value.

    The Unit Costs are calculated based on the **Production Yield** and **Setup Yield**, if any. Using the operation quantity that includes the yields, labor, and overhead costs, the unit cost is calculated as follows.

    ### Example

    In a standard routing for STK001 part number with two operations, production yield, and setup yield set on both the operations (SPQ1),

    | Work Center | Oper No | Hrs/Unit | Setup Hrs | Prod Hrs | Setup Yield | Production Yield | Labor Cost/Hr | Ovrhd Cost/Hr |
    |-------------|---------|----------|-----------|----------|-------------|------------------|---------------|---------------|
    | EDM         | 10      | 1        | 0         | 1        | 5           | 80%              | \$10          | \$20          |
    | PAINT       | 20      | 1        | 1         | 1        | 10          | 75%              | \$5           | \$10          |

    **Operation 20**:

    At production yield of 75% and setup yield of 10, operation quantity required is 11.33 (i.e. ((100/75)*1) + 10)

    Total hours required for operation 20 = (Setup Hrs + (Hrs/Unit) * Operation Qty) = (1 + 1 * 11.33) = 12.33 hours

    Total Labor Cost = Total hours required for operation 20 * Labor Cost/Hr = 12.33 * 5 = \$61.65

    Total Overhead Cost = Total hours required for operation 20 * Overhead Cost/Hr = 12.33 * 10 = \$123.30

    **Operation 10**:

    At production yield of 80% and setup yield of 5, operation quantity required is 19.16 (i.e. 11.33*(100/80) + 5 )

    Total hours required for operation 10 = (Setup Hrs + (Hrs/Unit) * Operation Qty) = (0 + 1 * 19.16) = 19.16 hours

    Total Labor Cost = total hours required for operation 10 * Labor Cost/Hr = 19.16 * 10= \$191.60

    Total Overhead Cost = Total hours required for operation 10 * Overhead Cost/Hr = 19.16 * 20 = \$383.20

    Unit Costs in RTG screen

    **Labor** = Labor Cost of Op 10 + Labor Cost of Op 20 = 191.60 + 61.65 = \$253.25

    **Overhead** = Overhead Cost of Op 10 + Overhead Cost of Op 20 = 383.20 + 123.30 = \$506.50

    **Total** = **Labor** + **Overhead** = 253.25 + 506.50 = \$759.75

    **Unit Hrs** = Total hours required for Op 10 + Total hours required for Op 20 = 12.33 + 19.16 = 31.49hrs

    .[!Note] Made2Manage uses the costs from the work center for the operation. If the information you want to use for this routing is different, enter those costs here.

3. Enter move hours in the **Move Hours** field.

    Or click the Calculator icon at the end of **Move Hours** field to display the Calculator. Select an appropriate value.

    The scheduling program uses move hours to determine when the next operation can start. This is the amount of time either positive or negative by which the next operation is delayed after completing the last part of the current operation. Material handling time or paint drying time are examples of move hours. User-defined negative move time indicates that the next operation can begin some time after the setup time for the current operation has started. This time is designated in hours or portions of hours. For example, a *-.5* means the next operation can start half an hour after work is started for the current operation.

4. Select the **Schedule** checkbox if you want to include the operation on the dispatch list and see the work center name when viewing the schedule in Project.

5. Select the **Lot/SN Required** checkbox to add a lot or serial numbers for the component.

6. In the **Simultaneous Operations** field, enter the number of simultaneous operations that can be in process in this work center. The number of simultaneous operations is used on the **Job Order** to compute the **Calculated Release Date**, resulting in reduced total Work Center time, and precise material needs dates.

    Or click the upward or downward arrows to increase decrease the value by 1, respectively.

    You cannot set this to a number higher than the maximum allowable number of simultaneous operations set in the **Work Center (WORK)** screen for this work center.

    If you use the **Advanced Planning** option for Planning and Scheduling, click the **Alternate Resources** to add alternate resources.

7. In the Production Yield field, specify the percentage of non-defective items that will be produced in the **Production Yield** field.

    #### Example

    If the Production Yield is 90%, and if the Standard Process Qty is 100, then to produce 100 non-defective pieces, the Operation quantity must be Standard Process Qty/Production Yield.  
    **Operation Qty** = 100/90% = 111.11 ≈ 112

8. In the **Setup Yield** field, specify the number of defective  items that may be produced during the process setup. If you want to apply a yield loss quantity to the operation.

    #### Example

    If you know that a certain machine always scraps 2 pieces before it is ready for production, you would enter 2 in this field. If the Production Yield is 90%, Setup Yield is 2, and if the Standard Process Qty is 100, then to produce 100 non-defective pieces, the Operation quantity must be (Standard Process Qty/Production Yield) + Setup Yield.  
    **Operation Qty** = 100/90% = 111.11 +2 = 113.11 ≈ 114

    >[!NOTE] - If the unit of measure is Each (EA) or Piece (PC), the Operation quantity will be rounded up to the next integer after the calculation.  
    - If the unit of measure is other than EA or PC, the Operation quantity will remain as it is (decimal/integer) after the calculation and the same is used for other computations.

9. Click **Save**.

10. For each additional operation to include in the routing:

    1. On the child toolbar, click **New**.

        Or click **Copy** to base an operation on the highlighted operation

    2. Repeat **step 3**.