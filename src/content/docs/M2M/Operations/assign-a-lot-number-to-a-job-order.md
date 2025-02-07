---
title: "Assign lot number to job order"
draft: false
type: Article
---

Lot control is the process of tracking parts or assemblies throughout production. You can assign a lot or serial number to a job order's part to manufacture. Then you can link the lot or serial number of each component part to the job lot number.

## To assign lot number to job order and its component parts

1. Open the **Assign Lot/SNs to Job Orders (ASSIGN)** page.

    - Select **Production Management** > **Production Transactions** > **Quality** > **Assign Lot/SNs to Job Orders**.

        Or

    - Search for **ASSIGN** or **Assign Lot/SNs to Job Orders** in the **Navigation box** and then select **Assign Lot/SNs to Job Orders**.

        The **Assign Lot/SNs to Job Orders (ASSIGN)** page appears.

2. To assign a lot number to all or some of a job order's part to manufacture (or assign a serial number to one part):

    - On the child toolbar, click **New**.

        The **Create New Lot** window appears.

    - In the **Lot/SN** box, enter the lot or serial number.

    - TBD-Select the job:

        - Click the **Job No.** Lookup Reference.

        - The **Lookup For Job No.** window appears.

        - Select the row that contains the required job order, and click **Select**.

            Or double-click the row.

    4. Select the part:

        - Click the **Part No** Lookup Reference.

        - The **Lookup For Part No** window appears.

        - Select the row that contains the required part to manufacture, and click **Select**.

            Or double-click the row.

            Lot controlled parts from the job's bill of material appear at the bottom half of the page if they were issued from inventory to the job or manufactured as sub jobs.

        To add a non-standard machine record in the **Assign Lot/SNs to Job Orders (ASSIGN)** page, the **Add Machine** button must be available in the **ASSIGN** page.

    - In the **Revision** column, select **NS**.

    -  In the **Lot/SN Quantity** box, specify the number of parts that you want to assign to the lot number. Or if you are assigning a serial number, enter **1**.

    - In the **Job Quantity** box, enter the job quantity.

    - On the toolbar, click **Save**.

        The **Add Machine** button is available.

        If Field Service is really working for **NS** items, click **Add Machine** to add the record to the **MACHSER** page to display **NS** in the **Rev** field.

3. To associate each component part's lot number with the job lot number:

    - Make the necessary changes.

    - Click the **Quantity Assigned** column for a component part, and enter the quantity of the part to assign.

        To assign the job lot number to all the component parts, click **Assign All**.

    - On the toolbar, click **Save**. The lot number is assigned to the job order.

        The quantity of the component part still available for assignment reduces by the quantity you assign. To assign the balance to a different job lot number, repeat this step.

​