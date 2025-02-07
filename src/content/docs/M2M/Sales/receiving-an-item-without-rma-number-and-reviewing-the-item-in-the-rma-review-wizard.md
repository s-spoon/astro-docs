---
title: "Receive and review item without RMA number"
draft: false
type: Article

---

Follow these steps to receive an item without an RMA number and review it in the RMA Review wizard.

- Create a Sales Order for more than one item.
- Ship the items for the Sales Order, ensuring the status of the Sales Order is set to **CLOSED**.

### To receive an item without an RMA Number and review it

1. Open the **Return Material Authorization (RMA)** page.

   
2. On the toolbar, click **New**.


2. Do one of the following actions:
   - Enter the Sales Order Number:
     1. Click the **Sales Order Number** Lookup Reference.  
     The **Lookup For Sales Order Number** window appears.
     
     2.  Select the row that contains required Sales Order and click **Select** or double-click the row.
     3. The following fields are populated automatically:
        - Customer Number
        - Company
        - Customer PO Number
        - Invoice Number
   - Enter the Customer Number:
     1. Click the **Customer Number** Lookup Reference.  
     The **Lookup for Customer Number** window appears.


     2. Select the required customer and click **Select** or double-click the row.

      The **First Name** and **Last Name** fields will populate automatically.

     3. Use the **Sales Order Number** and **Customer PO Number Lookup References** to populate the values in **Company** and **Customer Number** fields respectively.

3. Select the values for:
   
     - **Entered By**: Select the person who entered the RMA.
     - **Authorized By**: Select the authorizer.
     - **Severity**: Select the severity level.

      The fields **Entered On** and **Incident On** are displayed.

4. On the toolbar, click **Save**.
   
   The **Items** tab is available.

6. In the RMA **Items** tab:
   
     - Click the **Part Number** Lookup Reference.

        The **Lookup For Part Number** window appears.  
     - Select the row that contains the required part number and click **Select**.

        Or double-click the required row.
     - In the **Quantity** box, enter the quantity returned.
     - In the **Instructions** dropdown, select one of the RMS instructions. See **RMA Instructions**. 
     - In the **Reason** box, enter the reason.
7. Click **Save**.

6. Click the **General** tab.
   
7.  In the **Status** dropdown, select one of the following status.
     - *Ready for Credit*: Indicates a credit memo can be created.
     - *Cancelled*: Cancels the RMA and any related SO/JO transactions.

     A warning message, *No further transactions will be allowed for a 'Closed or Cancelled' RMA.* appears.
7. Change the status from **Started** to **Open**.

7. Open the **Receiving (RECV)** page:
8. Specify which customer is returning the goods:

   - On the toolbar, select **Copy > Returned Goods**.

        The **Copying Returned Goods** window appears.

    - Select the row that contains the required RMA Number and click **Next**.
    - Select the row that contains the required part number and click **Select**.
    - Select **Freight Carrier**.
    - Click **Save**.

13. Or on the toolbar, click **New**.

    The **Create New Receiving** window appears.

    - In the **Create New Receiving** window, select type as **Miscellaneous Customer Return**.

    - Click **Accept.**

    - 	Click the **RMA Number** Lookup Reference to find the RMA number.
    The **Lookup For RMA Number** window appears.

    - Select the row that contains the RMA No created in the **RMA** page and click **Select**.

        The **Customer No** and **Company** fields are filled automatically.

    - Select **Freight Carrier** from the dropdown list from the Receiving (RECV) page.



14. On the toolbar, click **Save**. The **Item Details** page is available.


3. In the **Receiving (RECV)** page, set information about the receiver:

17.	On the child toolbar, click **New**.
18.	Add another part number, which is associated with the created SO and not added to the RMA.
19.	Select the following to ensure that you receive all the items of this Receiver.

20. In the **Facility** dropdown, select the facility.

21. In the **U/M** dropdown, select the unit of measure.
22. In the **Quantity Received** box, enter the required value.

6. Select one of the following RMA Instructions:
   - Credit only
   - Credit and replace
   - Rework and return
   - Replace only
   - Pending Disposition

    Or click the **Part Number** Lookup Reference. The above mentioned fields are automatically populated.
   Enter appropriate values in the **Quantity Received** and **Instructions** fields.

7. On the toolbar, click **Save** to save the receiver.  
   After receiving the items, ensure the receiver number is defaulted in the RMA screen.

8. In the **Return Material Authorization (RMA)** page, click the **Items** tab and verify that the second item added in the receiver is not present in the **Items** tab.

9. Open the **RMA Review (RMARVW)** page.

10. In the **RMA Review** page, 
    the second item added in the receiver should appear in the list.

11. Select the **Part number** from the grid and click **Mark as Reviewed**.  
 The item is removed from the list.  
If the selected part number is already present in the RMA, a message *Part no xxxxxxxx is already present in the RMA # and should not be able to assign it* appears. 
      
