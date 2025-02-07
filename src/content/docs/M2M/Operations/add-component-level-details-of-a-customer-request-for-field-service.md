---
title: "Add component-level details of a customer request for field service"
draft: false
type: Article
---

If you need to record further details of a service order, enter additional information on the **Service Order Problem Detail** window, available through the **Field Service Control (FSORD)** page. Here, you can record and classify the nature of the basic problem and define the specific technical problem with specific machine components.

You can also add information after you receive a report from the field. This allows you to update machine configuration even after you close a service order.

To add component-level details of **customer** request for field service

1. Open the Field Service Control (FSORD) page.

a. Select **Customer Relationship Management** > **CRM Transactions** > **Field Service**> **Field Service Control**.

Or

b. Search for **FSORD** or **Field Service Control** in the **Navigation box** and then select  **Field Service Control**.

**Field Service Control (FSORD)** page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Service Order Problem Details**.

The **Service Order Problem Details (FSPROB)** page appears.

4. On the **Toolbar**, click **New**.

5. Define the problem's details:

- Click the **Problem Type** dropdown and select the type of problem reported for this machine.

- Click the Open Linked Popup Screen at the beginning of the **Problem Type** field to view the values.

- Click the **Area Affected** dropdown and select the area of machine where the problem was located.

- Click the **Area Affected** Open Linked Popup Screen. You can add more information into each of these fields by either adding new values or modifying the existing values. This actions displays on the **Popup Table Maintenance (POPUP)** window.

- Click the **PM Procedures** lookup reference and double-click the description code to use.

The **Lookup For PM Procedures** window opens.

- Click the **Field Kit Procedures** lookup reference and select the description code.

6. On the **Toolbar**, click **Save**.

After you specify component level details of the customer's request, you can record actions you take on the service order.

Postings for direct labor

Direct *labor* Work related to the manufacturing of a product. is any labor performed towards a *job order* (JO, Also called work order, manufacturing order, production order, run order, shop order) A document that conveys all the information needed to produce a specific part or assembly. In Made2Manage, a job order for a make item is linked to the sales order so that the job can be scheduled to meet the sales order's due date. A job order for a stock item is initiated to replenish inventory.. This sample ledger shows how direct labor posts for standard or *weighted average costing*. 1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items. 
2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete. Methods..

| Date    | Transaction/Accounts     | Debit  | Credit  |
|---------|--------------------------|--------|---------|
| April 1 | **Direct labor**         |        |         |
|         |  Product Class WIP Labor | 22     |         |
|         | Accrued Payroll          |        | 22      |
|         | Product Class WIP Ovhd   | 98     |         |
|         | Overhd Absorpt           |        | 98      |

Postings for indirect labor

Indirect labor is any labor that is not associated with a *job order* (JO, Also called work order, manufacturing order, production order, run order, shop order) A document that conveys all the information needed to produce a specific part or assembly. In Made2Manage, a job order for a make item is linked to the sales order so that the job can be scheduled to meet the sales order's due date. A job order for a stock item is initiated to replenish inventory., such as time spent in meetings or on vacation. This sample ledger shows how *indirect labor* Labor that is necessary for production but is not specifically associated with a specific job order such as time spent in meetings or sweeping floors. posts for standard or *weighted average costing* 
1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items. 
2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete. methods.

| Date    | Transaction/Accounts    | Debit  | Credit |
|---------|-------------------------|--------|--------|
| Jan. 27 | **Indirect labor**      |        |        |
|         | Employee Dept. Accounts | 76     |        |
|         | Accrued Payroll         |        | 76     |