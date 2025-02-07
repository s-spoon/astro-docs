---

title: "Add warranty information for a machine component"
draft: false
type: Article

---

You can add warranty information for a machine to indicate in the system what expenses are billable on service orders. Follow these steps to add warranty information for individual components of a machine in its entirety. 

When you create an active warranty:

- The system displays the default warranty type in the **Type of Warranty** box. You can change this information in the **Machine Warranty** window. Or you can add a new warranty type.

- You can click Calculate button next to Payment Amount to open Payment Calculator window to calculate a payment amount and link that calculation to this warranty. The periodic amount is based on the contract amount and the frequency to obtain a periodic payment.

A component can have only one active warranty.

**To add warranty information for a machine component**

1. Open the **Machine(MACHSER)** page.

    - Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Machine**.

    Or

    - Search for **MACHSER** or **Machine** in the **Navigation box** and then select **Machine**.

    The **Machine(MACHSER)** page appears.

2. Click the **Machine History** tab.

3. In the list of parts, highlight the part for which to add a warranty.

4. Click the ellipsis under the **Action** column of the selected part.

5. Select **Grid Accessories** > **Grid Actions** > **Component Warranty**.

    The **Machine / Component Warranty (FSWAR)** page opens.

6. On the **Toolbar**, click **New**.

7. In the **Customer PO** field, type the purchase order number for this warranty.

    This number is required if you create a recurring invoice.

8. If necessary, change the warranty's type and status:

    1. To change the warranty type:

        1. Click the **Type of Warranty** lookup reference.

            The **Lookup For Type of Warranty** window appears.

        2. Highlight a row and click **Select**. Or, double-click to select a warranty.

            Only warranties with a warranty type of **Include Parts** appears in this menu.

    2. From the **Warranty Status** list, select the warranty's status.

        >[!TIP] Click the **Warranty Status field** to open selection list, click **Edit** in the list to open Popup Table Maintenance to view the status values.

9. For the items to include in the part's warranty, set the date the warranty takes effect and the date it expires in **Effective Date** and **Expiration Date** fields respectively.

    >[!TIP]To specify the items to include in the component's warranty, select the **Include Expenses**, **Include Software**, **Include Labor**, or **Include Parts** check boxes. Items included can only be changed in the **Warranty (WARNTY)** page.

10. Specify the warranty's financial information:

    1. From the **Payment Frequency** list, select the frequency at the warranty is billed.

    2. In **Contract Total Amount** field, type the contract amount for this warranty.

    3. In the **Service Contract Coverage** field, type notes about this warranty.

11. On the **Toolbar**, click **Save**.

12. To calculate the periodic payment for this warranty:

    1. Click Calculate button to open Payment Calculation window.

    2. Enter Interest Rate in Payment Calculation, to enter 10% type in 10.

    3. Click **Save**.

        Calculated Payment will be saved in Payment Amount field.

13. Click the **Recurring Invoice**.

    The system creates a Recurring Invoice for the payment amount. After the system creates an invoice, you must make any subsequent payment changes on the **Recurring Invoices** window.

​