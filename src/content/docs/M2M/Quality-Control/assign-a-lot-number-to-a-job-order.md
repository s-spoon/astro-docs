---
title: "Assign a lot number to a job order"
draft: false
type: Article 
---

Lot control is the process of tracking parts or assemblies throughout production. You can assign a lot or serial number to a job order's part to manufacture. Then you can link the lot or serial number of each component part to the job lot number.

## To assign a lot number to a job order and its component parts

1.  Open the **Assign Lot/SNs to Job Orders (ASSIGN)** page.

    - Select **Production Management** > **Production Transactions** > **Quality** > **Assign Lot/SNs to Job Orders**.

        Or

    -  Search for **ASSIGN** or **Assign Lot/SNs to Job Orders** in the **Navigation box** and then select **Assign Lot/SNs to Job Orders**. <br> The **Assign Lot/SNs to Job Orders (ASSIGN)** page appears.

2.  To assign a lot number to all or some of a job order's part to manufacture (or assign a serial number to one part):
    1.  On the grid toolbar, click **New**.

        The **Create New Lot** window appears.

    2.  In the **Lot/SN** field, type the lot or serial number.
    3.  Select the job:
        1.  Click the **Job No.** Lookup Reference.
        2.  The **Lookup For Job No.** window appears.
        3.  Select the row that contains the required job order, and click **Select**.

            Or, double-click the row that contains the required job order.

    4.  Select the part:
        1.  Click the **Part No.** Lookup Reference.
        2.  The **Lookup For Part No.** window appears.
        3.  Select the row that contains the required part to manufacture, and click **Select**.
        
            Or, double-click the row that contains the required part to manufacture.

            Lot controlled parts from the job's bill of material appear at the bottom half of the page if they were issued from inventory to the job or manufactured as sub jobs.

    To add a non-standard machine record in the **Assign Lot/SNs to Job Orders (ASSIGN)** page, the **Add Machine** button must be available in the **ASSIGN** page.

    1.  In the **Revision** column, select **NS**.
    2.  In the **Lot/SN Quantity** field, specify the number of parts that you want to assign to the lot number. Or, if you are assigning a serial number, type **1**.
    3.  In the **Job Quantity** field, type the job quantity.
    4.  On the **Toolbar**, click **Save**.

        This enables the **Add Machine** button.

        If Field Service is really working for **NS** items, click **Add Machine** to add the record to the **MACHSER** page (to display **NS** in the **Rev** field).

5.  To associate each component part's lot number with the job lot number:
    1.  Make the necessary changes.
    1.  Click the **Quantity Assigned** column for a component part, and type the quantity of the part to assign.

        To assign the job lot number to all the component parts, click Assign All.

    1.  On the **Toolbar**, click **Save** to keep the association between the component and job lot numbers.

    The quantity of the component part still available for assignment reduces by the quantity you assign. To assign the balance to a different job lot number, repeat this step.