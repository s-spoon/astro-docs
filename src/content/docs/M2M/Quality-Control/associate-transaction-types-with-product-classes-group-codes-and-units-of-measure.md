---
title: "Associate transaction types with product classes, group codes, and units of measure"
draft: false
type: Article 
---

In order for field service to create Made2Manage sales orders and customer invoices for the basic type of services, it is necessary to define for each of these items, the particular product class, group codes, and the unit of measure. The corresponding sales-order line items will be treated as non-inventory parts that use these assigned product class codes to determine the related sales and cost of goods sold general ledger accounts.

If you have not already done so, set service order information first. 

## To associate **transaction** types with product classes, group codes, and units of measure

1.  Open the **Field Service Setup Information (CSFSM)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Field Service Setup Information**.

        Or

    1.  Search for **CSFSM** or **Field Service Setup Information** in the **Navigation box** and then select **Field Service Setup Information**. <br> The **Field Service Setup Information (CSFSM)** page appears.

2.  Click the **Sales Order Classes** tab.
3.  Make the necessary changes.
4.  For each transaction type for which you want to associate a product class, group code, and unit of measure:
    1.  In the **Transaction** column, click the transaction to use.
    1.  Click the **Product Class** Lookup Reference.

        The **Lookup For Product Class** window appears.

    2.  Select the row that contains the required class, and click **Select**. Or, double-click the row that contains the required class.

        Click **Cancel** to exit from the **Lookup For Product Class** window.

    3.  Click the **Group Code** Lookup Reference.

        The **Lookup For Group Code** window appears.

    1.  Select the row that contains the required code, and click **Select**. Or, double-click the row that contains the required code.

        Click **Cancel** to exit from the **Lookup For Group Code** window.

    1.  In the **U/M** list, click the unit of measure to use.
    2.  Select the **This Can Be Billed to the Customer** check box, to have the system treat this type of charge as something that is billable.

        If you leave this box empty, the system assigns a zero sales price for these types of charges.

2.  Select the **This Item Is Taxable** check box, to have the item subject to sales tax calculations.
3.  On the **Toolbar**, click **Save** to keep your changes.

    The next step is to set service order numbering. 