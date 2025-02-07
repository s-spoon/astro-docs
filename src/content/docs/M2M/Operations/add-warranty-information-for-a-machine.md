---
title: "Add warranty information"
draft: false
type: Article
---

You can add warranty information for a specific machine to indicate in the system what expenses are billable on service orders.

When you create an active warranty:

- The system displays the default warranty type in the **Type of Warranty** box. You can change this information on the Warranty tab of the **Machine** page. You can also add a warranty type.

- Click **Calculate** button to open Payment Calculation window to calculate a payment amount and link that result to this warranty. The periodic amount is based on the contract amount, the frequency and interest rate to obtain a periodic payment.

*Note:*A machine can have only one active warranty.

## To add warranty information for a machine

1. Open the **Machine(MACHSER)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Machine**.

    Or

    2. Search for **MACHSER** or **Machine** in the **Navigation box** and then select **Machine**.

    **Machine(MACHSER)** page appears.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Machine Warranty**.

    The **Machine / Component Warranty (FSWAR)** page appears.

    - On the **Toolbar**,click **Copy** .

4. In the **Customer PO** box, enter the purchase order number for this warranty.

    This number is required if you create a recurring invoice.

5. If necessary, change the warranty's type and status:

    1. Click the **Type Of Warranty** Lookup Reference to change a default warranty.

        The **Lookup For Type Of Warranty** window appears.

    2. Select the required row that contains the required warranty, and click **Select**.

        Or, double-click the row that contains the required warranty.

        Click **Cancel** to exit from the **Lookup For Type Of Warranty** window.


    3. In the **Warranty Status** dropdown, select the warranty’s status.

        Or, click **Edit Warranty Status**.



6. Enter the date the warranty takes effect and the date it expires.

7. Specify the warranty's financial information:

    1. In the **Payment Frequency** list,enter the frequency at which to bill for the warranty.

    2. In **Contract Total Amount** field ,enter the contract amount for this warranty.

        Or, click the icon at the end of the **Contract Total Amount** field to display the Calculator. Enter the required value.

    3. In the **Service Contract Coverage** box, enter notes about this warranty.

8. On the **Toolbar**, click **Save**.

9. To calculate the periodic payment for this warranty:

    1. Click **Calculate**.

        The Payment Calculation window opens.

    2. Enter Interest Rate in Payment Calculation.

        To enter 10 percent, type in **10**.

    3. Click **Save**.The periodic payment to Payment Amount field is saved.

10. Click **Recurring Invoice**.

    The system creates a Recurring Invoice for the payment amount. After the system creates an invoice, make any subsequent payment changes on the **Recurring Invoices** window.

The next step is to add a technician. 

​