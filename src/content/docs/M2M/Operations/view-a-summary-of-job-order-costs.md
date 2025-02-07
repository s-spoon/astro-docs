---
title: "View summary of job order costs"
draft: false
type: Article
---

You can view a summary of a job order's costs at any time.

## To view summary of job order costs

1. Open the **Job Orders (JO)** page.

    1. Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

    Or

    2. Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

    The **Job Orders (JO)** page appears.

2. On the toolbar, click **Browse**.

    The **Browse For Job Orders** window appears.

3. Select the row that contains the required job order, and click **Select**. Or double-click the row that contains the required job order.

    Click **Cancel** to exit from the **Browse For Job Orders** window.

4. On the toolbar, click **More Actions**.

5. Select **More Actions** > **Actions** > **Cost Summary**.

    The **Job Order Cost Summary** page appears.

6. Select the costs to view:

    - Click the **Single Job** tab to view the costs not including costs associated with the sub-jobs.

        The **Single Job** tab allows you to view the costs including sub-job costs.

    - Click the **All SubJobs** tab to view only single-job costs.

        >[!NOTE]If the **Use INV Yield In Supply Order and Costing** check box is selected in **CSPROD > Material/Costing** tab, then the costs in **Job Order Cost Summary** page are calculated based on the Yield Factor defined in the **INV**.

### Example

Following is an example for a Level-2 Make part with a Yield Factor of 97.5%, when the **Use INV Yield In Supply Order and Costing** checkbox is selected.

Consider a Parent Make part that has to go through three levels of manufacturing process. The calculations based on the Yield is done from bottom level to Parent level, so the calculations shown below are for Level-2 Make, and similarly Level-1 Make and Parent Level Make is calculated accordingly.

In a standard routing for Level-2 Make part with two operations. Production yield and setup yield set on both the operations (SPQ30).

| Oper No. | Oper Qty | Ovrhd Cost/Hr | Setup Hrs | Hrs/Unit | Setup Yield | Production Yield | Labor Cost/Hr |
|----------|----------|---------------|-----------|----------|-------------|------------------|---------------|
| 1        | 30       | \$0.25        | 0.25      | 0.1      | 2           | 98%              | \$0.1         |
| 2        | 30       | \$0.2         | 0.3       | 0.1      | 1           | 97.5%            | \$0.1         |

For Level-2 Make:

| Component Parts          | Unit Qty | Source          | UM | Material Yield (%) | Material Cost (\$) | Safety Stock |  Used in Oper |
|--------------------------|----------|-----------------|----|--------------------|--------------------|--------------|---------------|
| Level 1-3 Buy            | 2        | Buy             | FT | 95                 | 0.5                | NA           | 1             |
| Level-3 BuyStockPurchase | 1.5      |  Stock Purchase | FT | 96                 | 0.25               | 3500         | 2             |

At Material yield of 97.5%, the recalculated Operation Quantity for Level-2 Make is 30.77 (i.e. (SPQ * 100) / Production Yield) = (30 * 100) / 97.5 ) = 30.77

**Operation 2:**

Operation 2 Quantity = ((Recalculated Operation Qty)*100) / Production Yield of Operation 2 + Setup Yield of Operation 2 = ((30.77 * 100) / 97.5) + 1 = 32.56

Total Production Hrs for Operation 2 = Operation 2 Quantity * (Hrs/Unit) of Operation 2 = 32.56 * 0.1 = 3.25 Hours

Total Labor Cost = (Total Production Hrs for Operation 2 + Setup Hrs for Operation 2 ) * Labor Cost/Hr for operation 2 = (3.25 + 0.3) * 0.1 = \$0.36

Total Overhead Cost = (Total Production Hrs for Operation 2 + Setup Hrs for Operation 2 ) * Over Head Cost/Hr for operation 2 = (3.25 + 0.3) * 0.2 = \$0.71

**Operation 1:**

Recalculated Operation Qty = Operation 2 Quantity = 32.56

Operation 1 Quantity = ((Recalculated Operation Qty)*100) / Production Yield of Operation 1 + Setup Yield of Operation 1 = ((32.56 * 100) / 98) + 2 = 35.22

Total Production Hrs for Operation 1 = Operation 1 Quantity * (Hrs/Unit) of Operation 1 = 35.22 * 0.1 = 3.52 Hours

Total Labor Cost = (Total Production Hrs for Operation 1 + Setup Hrs for Operation 1 ) * Labor Cost/Hr for Operation 1 = (3.52 + 0.25) * 0.1 = \$0.38

Total Overhead Cost = (Total Production Hrs for Operation 1 + Setup Hrs for Operation 1 ) * Over Head Cost/Hr for Operation 1 = (3.52 + 0.25) * 0.25 = \$0.94

Total:

Total Labor Cost for Level-2 Make = (Total Labor Cost for Operation 1) + (Total Labor Cost for Operation 2) = 0.38 + 0.36 = \$0.74

Total Overhead Cost for Level-2 Make = (Total Overhead Cost for Operation 1) + (Total Overhead Cost for Operation 2) = 0.94 = 0.71 = \$1.65

Total Labor Cost for Level-2 Make = (Total Labor Cost for Operation 1) + (Total Labor Cost for Operation 2) = 0.38 + 0.36 = \$0.74

Unit labor cost = (Total Labor Cost for Level-2 Make) / (Re-calculated SPQ for Level-2 Make) = (0.74) / (30.77) = \$0.02

Total Overhead Cost for Level-2 Make = (Total Overhead Cost for Operation 1) + (Total Overhead Cost for Operation 2) = 0.94 + 0.71 = \$1.65

Unit Overhead cost for Level-2 Make = (Total Overhead Cost for Level-2 Make) / (Re-calculated SPQ for Level-2 Make) = 1.65 / 30.77 = \$0.05

Total Material Cost = (Unit Material Cost of Level-3 Buy * Unit Qty defined in BOM of Level-2 Make) + (Unit Material Cost of Level-3 StockPurchase * Unit Qty defined in BOM of Level-2 Make) = (0.5 * 2) + (0.25 * 1.5) = \$1.38

Final Unit Cost of Level-2 Make = Unit Material Cost + Unit Labor Cost + Unit Ovrhd Cost = 1.38 + 0.02 + 0.05 = \$1.45

>[!NOTE]If the **Adjust Unit JODBOM Quantities Based On Operation Quantities** check box is selected in **CSPROD** > **Material/Costing** tab, then the costs in **Job Order Cost Summary** page are calculated based on the Extended Quantity, Total BOM Cost, and Yields in **RTG**.

### Example

In a standard routing for STK001 part number with two operations, production yield, and setup yield set on both the operations (SPQ1).

| Work Center | Oper No | Hrs/Unit | Setup Hrs | Prod Hrs | Setup Yield | Production Yield | Labor Cost/Hr | Ovrhd Cost/Hr |
|-------------|---------|----------|-----------|----------|-------------|------------------|---------------|---------------|
| EDM         | 10      | 1        | 0         | 1        | 0           | 80%              | \$10          | \$20          |
| PAINT       | 20      | 1        | 1         | 1        | 0           | 75%              | \$5           | \$10          |

**Operation 20**:

At production yield of 75%, operation quantity required is 1.33 (i.e. (100/75)*1)

Total hours required for operation 20 = (Setup Hrs + (Hrs/Unit) * Operation Qty) = (1 + 1 * 1.33) = 2.33 hours

Total Labor Cost = Total hours required for operation 20 * Labor Cost/Hr = 2.33 * 5 = \$11.65

Total Overhead Cost = Total hours required for operation 20 * Overhead Cost/Hr = 2.33 * 10 = \$23.30

**Operation 10**:

At production yield of 80%, operation quantity required is 1.66 (i.e. 1.33*(100/80))

Total hours required for operation 10 = (Setup Hrs + (Hrs/Unit) * Operation Qty) = (0 + 1 * 1.66) = 1.66 hours

Total Labor Cost = total hours required for operation 10 * Labor Cost/Hr = 1.66 * 10= \$16.60

Total Overhead Cost = Total hours required for operation 10 * Overhead Cost/Hr = 1.66 * 20 = \$33.20

Unit Costs on RTG page

**Labor** = Labor Cost of Op 10 + Labor Cost of Op 20 = 16.60 + 11.65 = \$28.25

**Overhead** = Overhead Cost of Op 10 + Overhead Cost of Op 20 = 33.20 + 23.30 = \$56.50

**Total** = **Labor** + **Overhead** = 28.25 + 56.50 = \$84.75

**Unit Hrs** = Total hours required for Op 10 + Total hours required for Op 20 = 2.33 + 1.66 = 3.99 hours

Say, you create a BOM and add two buy-to-stock parts, BTS001 and BTS002 with material costs \$21 and \$32 respectively.

Consider the Unit Quantity required as 2 for BTS001 and 1 for BTS002 in BOM, and Used in Operation as 10 and 20 for BTS001 and BTS002 respectively.

For a Job order of 1 Qty (Make Order Qty is 1), in JODRTG, for operation 10 - the Operation Qty is 1.66 and for operation 20 - the Operation Qty is 1.33.

| Stock Parts | Material Costs | Operation No | Unit Quantity in BOM | Operation Qty |
|-------------|----------------|--------------|----------------------|---------------|
| BTS001      | \$21           | 10           | 1                    | 1.66          |
| BTS002      | \$32           | 20           | 2                    | 1.33          |

In **JODBOM**,  
For BTS0001, Extended Qty = Operation Qty * Unit Qty = 1.66 * 2 = 3.32

Extended Cost for BTS001 = Extended Qty * Material Cost = 3.32 * \$21 = \$69.72

For BTS0002, Extended Qty = Operation Qty * Unit Qty = 1.33 * 1 = 1.33

Extended Cost for BTS002 = Extended Qty * Material Cost = 1.33 * \$32 = \$42.56

**Total BOM Cost** = Extended Cost for BTS001 + Extended Cost for BTS002 = \$69.72 + \$42.56 = \$112.28

In **JOSUMM** and **JODRTG**, the Material Cost will be same as the Total BOM Cost in the **JODBOM** = \$112.28

7. To add or change information in the cost summary:

    - Make your changes.

    -  On the toolbar, click **Save**.

        Or click **Cancel** to discard the changes.

 ​