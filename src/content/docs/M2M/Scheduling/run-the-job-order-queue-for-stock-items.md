---
title: "Run the job order queue for stock items"
draft: false
type: Article
---

Use the job order queue to generate batch of job orders for standard parts in inventory that are below safety stock.

Non-nettable quantities are not considered available. Therefore, this page subtracts the non-nettable quantity from the quantity on hand to compute the net on-hand quantity.

## To run the job order queue for stock items

1. Open the **Job Order Queue for Stock Items (JOQUEI)** page.

    1. Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Order Queue** > **Job Order Queue for Stock Items**.

        Or

    2. Search for **JOQUEI** or **Job Order Queue for Stock Items** in the **Navigation box** and then select **Job Order Queue for Stock Items**.

        The **Job Order Queue for Stock Items (JOQUEI)** page appears.

2. On the **Toolbar**, click **Refresh Queue** to regenerate the queue with your company's latest production information.

    A message, *This might take a while, do you wish to proceed?* appears.

3. Click **Yes** to continue.

    Click **No** to exit.

    A message, *Job Order Queue Regeneration for Stock Items is complete* appears.

4. Close the message window.

5. On the **Toolbar**, click **Browse**.

    The **Browse For Job Order Queue for Stock Items** window appears.

6. Select the row that contains the part number whose queue you want to view, and click **Select**. Or double-click the row that contains the part number whose queue you want to view.

    Click **Cancel** to exit from the **Browse For Job Order Queue for Stock Items** window.

7. Prepare to create a job order for the part:

    1. In the **Job Order Quantity** box, type the quantity of parts to produce in the job order.

        Or click the icon at the end of the **Job Order Quantity** box to display the calculator. Enter the required value.

    2. In the **Due Date** box, type the job order's due date.

        Or click the icon at the end of the **Due Date** box to display the calendar. Select the required date.

    3. Select the **Auto Release Job** check box, to automatically release the job order to the production floor.

    4. On the **Toolbar**, click **Save**.

        Or click **Cancel** to exit.