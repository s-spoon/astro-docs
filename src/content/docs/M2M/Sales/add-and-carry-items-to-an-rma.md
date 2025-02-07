---

title: "Add an RMA"
draft: false
type: Article

---

In a **Customer Service Inquiry**, you can create an RMA and attach it to the inquiry record.

You can provide a credit memo against those items received in the RMA.

**To add an RMA**

1. Access the RMA using one of the following methods:

    From the CRMCSR page

    Or

    From the RMA page

    The **Entered On** field automatically displays the current date.

2. Click **New** on the **Toolbar**.

3. Perform one of the following actions:

    Type the sales order number in the **SO Number** field or click the lookup reference magnifying glass and select the sales order number.

    The **Customer Number**, **Company**, **Customer PO Number**, and **Invoice Number** fields are filled in automatically.

4. Create an RMA based on account number.

    a. Click the **Customer Number** lookup reference to select a customer number.

    If you select the customer number of an inactive customer, a warning *Customer is INACTIVE*. is displayed.

    b. Type the sales order number in the **Sales Order Number** field. Or, click the lookup reference and select the sales order number.

    c. Click the **Customer PO Number** lookup reference to select the customer purchase order for the RMA.

    You can use the **Total Order Discount** from the **Accounts (CUST)** page when an RMA is created for an account, without referring to a Sales Order. The system should apply total order discount available for the customer while computing the unit price in RMA.

    You are not allowed to change the Total Order Discount in the RMA if the prices are taken from the Sales Order.

    Star (\*) denotes Unit Price with Total Order Discount (%)

5. Select the **Field Service RMA** check box.

    You can enable the check box only when creating a new RMA. If you mark a RMA as Field service RMA and try to add a regular item in **Items** tab then the RMA changes to regular RMA with a message and confirmation. You cannot merge Field service RMA items and regular RMA items.

6. From the **Entered By** list, select the user who entered the RMA.

    The date in the **Entered On** field is automatically filled in with the current date.

7. From the **Authorized By** list, select the user who authorized the RMA.

    The date in the **Incident On** field is automatically filled in with the current date.

8. From the **Severity** list, select a severity level for the RMA.

    The **Sales Code** field is used for reporting purposes only to further group companies by some special scheme.

    The **Receiver Number**, **Credit Memo Number**, **Ship Back SO Number**, **Job Order Number**, **Ship Number**, and **Shipper Status** fields are filled in automatically as and when credited for the RMA.

9. On the Toolbar, click **Save** to save the RMA.

    An RMA number is automatically generated and the focus switches to the **Items** tab.

See "[Adding items to an RMA](add-items-to-an-rma.md)" for more information.

The following fields are read only:

- **Inquiry Number** - The **General** tab displays the **RMA Number** and the **Inquiry Number**.

    If an RMA is created from an Inquiry, the **Inquiry Number** is displayed in the **RMA** page.

- **Receiver Number** - If the return goods are received, the **Receiver Number** and the **Received Date** are automatically filled in the **Receiver Details** tab.

- If the returned goods are received from an inspection location, the **Inspected** check box is selected if all items on the RMA have been inspected.

- If a Credit Memo exists for the RMA, the **Credit Amount**, **Credit Memo number**, and **Date** of the **Credit Memo** are filled automatically.

    If multiple **Credit Memos** exist, the **Credit Memo Number** drop-down list and the corresponding **Credit amount** and **Date** are displayed.

- If a **Ship Back SO** exists, the **SO Number** is displayed.

- If a job was created from the Sales Order, in the **Job Order Number** field, the job order number is displayed.

- The **Shipper Number** and **Status** fields are populated with appropriate values if a shipper has been created.



​