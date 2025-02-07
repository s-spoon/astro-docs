---
title: "Add warranty information for a machine"
draft: false
type: Article
---

You can add warranty information for a specific machine to indicate in the system what expenses are billable on service orders.

When you create an active warranty:

-   The system displays the default warranty type in the **Type of Warranty** box. You can change this information on the Warranty tab of the **Machine** page. You can also add a warranty type.
-   You can use **Calculate** button to open the **Payment Calculation** window to calculate a payment amount and link that result to this warranty. The periodic amount is based on the contract amount, the frequency and interest rate to obtain a periodic payment.

    A machine can have only one active warranty.

## To add warranty information for a machine

1.  Open the **Machine (MACHSER)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Machine**.

        Or

    1.  Search for **MACHSER** or **Machine** in the **Navigation box** and then select Machine. <br> The **Machine (MACHSER)** page appears.

1.  On the **Toolbar**, click **More Actions**.
2.  Select **More Actions** > **Actions** > **Machine Warranty**. <br> The **Machine / Component Warranty (FSWAR)** page appears.
    -   Click the **Copy** on the **Toolbar**.
1.  In the **Customer PO** field, Type the purchase order number for this warranty. This number is required if you create a recurring invoice.
2.  If necessary, change the warranty's type and status:
    1.  Click the **Type Of Warranty** Lookup Reference to change a default warranty. <br> The **Lookup For Type Of Warranty** window appears.

    1.  Select the row that contains the required warranty, and click **Select**. Or, double-click the row that contains the required warranty.

        Click **Cancel** to exit from the **Lookup For Type Of Warranty** window.


    1.  In the **Warranty Status** list, select the warranty’s status. Or, click **Edit Warranty Status**.

2.  Type the date the warranty takes effect and the date it expires.
3.  Specify the warranty's financial information:
    1.  Set the frequency at which to bill for the warranty in the **Payment Frequency** list.
    1.  Type the contract amount for this warranty in **Contract Total Amount** field.

        Or, click the icon at the end of the **Contract Total Amount** field to display the Calculator. Enter the required value.

    2.  In the **Service Contract Coverage** box, type notes about this warranty.
2.  On the **Toolbar**, click **Save**.
3.  To calculate the periodic payment for this warranty:
    1.  Click **Calculate** button next to Payment Amount. <br> The **Payment Calculation** window opens.
    1.  Enter Interest Rate in Payment Calculation. To enter 10 percent, type in **10**.
    2.  Click **Save** to save the periodic payment to the **Payment Amount** field.
2.  Click the **Recurring Invoice**.

    The system creates a Recurring Invoice for the payment amount. After the system creates an invoice, you must make any subsequent payment changes on the **Recurring Invoices** window.

    The next step is to add a technician. 