---

title: "Create PO from RFQ"
draft: false
type: Article

---

You can create a purchase order from the **RFQ Vendor Response Summary** screen. The PO screen appears and the items selected are populated in the **Purchase Order** **Items** tab automatically. The quantity is taken from the **Demand document** either from **Quote** or **Sales Order**. Upon creation of the purchase order, the RFQ number is updated. You still have the option of overwriting it in the **PO Items** tab. Only those items for which the Vendor has been assigned are available to select for creation of a Purchase Order.

RFQ items that were driven by a Quote should have a Sales Order created for the Quote before a Purchase Order is created. For the RFQ items from the **Detailed BOM**, there must be a Job Order created and associated with that SO before the Purchase Order is created.

**To create PO from RFQ**

1. Open the **Request For Quote (RFQ)** page.

    - Select **Production Management** > **Production Transactions** > **Purchasing** > **Request For Quote**.

        Or

    - Search for **RFQ** or **Request For Quote** in the **Navigation box** and then select **Request For Quote**.

       The **Request For Quote (RFQ)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Request For Quote** window appears.

3. Select the required RFQ for which you want to create a PO.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **Compare Prices By RFQ**.

    The **RFQ Vendor Response Summary** page is displayed.

    The **Compare Prices By RFQ** is enabled only if the **RFQ** is in **OPEN** status.

6. From the **RFQ Vendor Response Summary** page:

   - Select the required part number and click **Assign Vendor**.

    **Creating a new PO:**

      1. Select the required part number and click **Create Purchase Order** on the grid toolbar in **RFQ Vendor Response Summary (RFQSUMM)** page.

            The **Purchase Order Creation** window appears.

            Verify the details of **Item**, **Vendor**, **Quantity**, and **Unit Price** in the **Purchase Order Creation** window.

            If the required Sales Order or Job Order is not created, the system will not allow you to select the check box in the line item grid.  

            A message, *Sales Order is not found* appears below the grid. 

      2. Click **Open PO** in the **Purchase Order Creation** window.

            A new Purchase Order is created with reference from RFQ. The Purchase Orders Creation information message is displayed.

      3. Click **Close**.

            You can double-click on the PO number to open the PO form and review information.

    **Assigning parts to an existing PO:**

     1. Select the required part number and click **Create Purchase Order** on the grid toolbar in the **RFQ Vendor Response Summary (RFQSUMM)** page.

        This pops-up the Purchase Order Creation window for existing PO.
   
    2.  Select the purchase order line and click **Create PO** in the **Purchase Orders Creation** window to change the status of the PO from *Started* to *Open*.
   
        The selected PO line is displayed in the next Purchase Order Creation window.
   
    3. Click **Open PO**.   

        An information message is displayed indicating that the RFQ is closed.

        If RFQ has only one item, then the RFQ status is automatically changed to *CLOSED*.

   4. In the **Change Status** window, click **Close**.  
        The Purchase Orders Creation information message is displayed.
   
   5. Click **Close**.

        Verify the **Vendor name** and **Vendor details** in the Purchase Order.

        Verify the **Item details**, **Quantity** and **Unit Price** in the Purchase Order and compare these details with RFQ.

        Verify if the PCAT is correctly displayed in the **Purchase Order (PO)** page > **Order items** tab.

>[!NOTE]
    > - If you created a PO from an RFQ associated with a Quote/SO or their DBOM, then the PCAT must be **SO** or **JO**.
    > - If you created a PO from an RFQ associated with an Inventory, then the PCAT must be **INV**.