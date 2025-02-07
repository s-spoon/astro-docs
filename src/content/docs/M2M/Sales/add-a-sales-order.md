---

title: "Add sales order"
draft: false
type: Article

---

A sales order specifies a customer's request to buy something from your company. When a customer places an order, create a sales order in Made2Manage. You can add a fresh sales order or base the new sales order on another sales order, a job order , or a quotation.

**To add a fresh sales order**

1. Open the **Sales Orders (SO)** page.

    a. Select **Sales Management** > **Sales Transactions** > **Sales Orders**.

    Or

    b. Search for **SO** or **Sales Orders** in the **Navigation box** and then select **Sales Orders**.

    The **Sales Orders (SO)** page appears.

2. On the **Toolbar**, click **New**.

3. Specify the customer information:

    > [!Note] You cannot select an inactive customer. A message, *Cannot Create SO for an INACTIVE Customer.* appears.

    a. Click the **Customer Number** lookup reference, and select the customer from the **Lookup For Customer Number** window.

    b. Click the **Sold-To Address Key** lookup reference, and select the sold-to address from the **Lookup For Sold-To Address Key** window.

    c. In the **Estimator** field, enter the initials of the estimator, if required.

    d. In the **Salesperson Information** section, specify the salesperson information:
        
    i. Click the **Salesperson** lookup reference, and select the salesperson from the **Lookup For Salesperson** window.

    ii. In the **Commission Rate (%)** box, enter the salesperson's commission rate percentage.

    iii. Click the **Distributor** lookup reference, and select the distributor from the **Lookup For Distributor** window.

    iv. In the **Coordinator** box, enter the coordinator's initials, if required.

    e. In the **Order Details** section, specify the order details:

    i. In the **Customer PO Number** field, enter the customer's purchase order number.

    ii. Select the **Proforma Invoice Required** checkbox, if your company sends proforma invoices to customers to alert them to pay the deposit.

    f. Click the **Shipping/Billing Address** tab, and in the **Shipment Details** section, select the shipment details in the **Ship Via** and **FOB** lists.

    g. Click the **Financial Info** tab and set the financial information:

    i. In the **Payment Type** list, select either **Cash**, **COD**, or **Terms**.

    > [!Note] If you selected the **Payment Type** as **Terms**, click the **Terms** lookup reference, and select the terms from the **Lookup For Terms** window.

    ii. Click the **Currency** lookup reference, and select the customer's currency from the **Lookup For Currency** window, if your company uses the multiple currency feature and the customer uses a different currency.

    > [!Note]  If the Contract is selected on the header, it defaults to the newly added line items in the **Items** tab and the part number lookup is filtered based on the contract.

4. Click the **User Defined** tab to store other details that are not available in the other tabs.

5. On the **Toolbar**, click **Save** to save the order.

    The **Items** tab becomes available.

6. Click the **Items** tab.

    The **Item Details** page appears with the **Item Details** tab selected by default.

7. Specify the details of the first item:

    a. In the **DC Facility** list, select the distribution facility.

    > [!Note]  If the Contract is selected on the header, it defaults to the newly added line items and the **Part Number** Lookup is filtered based on the contract. 

    \- If you want to add part numbers that are not on the defaulted contract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** Lookup. 

    \- If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** Lookup.

    b. To add a standard part, click the **Part Number** lookup reference, and select the part number to use from the **Lookup For Part Number** window.

    c. To add a non-standard part:

    i. In the **Part Number** box, enter the part number.

    ii. Press the **Tab** key.

    
---
> [!Note] If the starting characters of the part number entered match the starting characters of an already existing part number in the **Item Master (INV)**, a browse window opens. If you click **Cancel** in the browse window or press **Esc**, the value entered in the **Part Number** field is retained, the **Revision** value is set to **NS** and the **Non Standard Item** checkbox is automatically selected.  If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revision** value is set to **NS** and the **Non Standard Item** checkbox is automatically selected. 
---

d. In the **Description** field, change the part description, if required. 

e. Select the **Non Standard Item** check box, to add a non-standard make item. 

f. In the **Source Facility** list, select the source facility.


g. In the **Quantity** field, specify the number of parts. 
h. Specify the part's shipping and billing information: 

i. Click the **Shipping/Billing Info** tab.

ii. In the **Delivery Commitment** field, type the delivery notes. 

iii. Select the **Taxable** checkbox if the item is taxable.  

---
> [!Note]  The **Jurisdiction** field is automatically populated with the jurisdiction under certain conditions. Refer to Identify Jurisdiction for more information. 

---
 8. On the **Toolbar**, click **Save** to save the part.
​