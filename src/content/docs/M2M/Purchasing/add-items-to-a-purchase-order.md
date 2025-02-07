---

title: "Add items to a purchase order"
draft: false
type: Article

---

A purchase order specifies goods or services you want to buy from a vendor. After you add a purchase order, add the items.

**To add items to a purchase order**

1. Open the **Purchase Orders (PO)** page.

    - Select **Production Management** > **Production Transactions** > **Purchasing** > **Purchase Orders**.

        Or

    - Search for **PO** or **Purchase Orders** in the **Navigation box** and then select **Purchase Orders**.

        The **Purchase Orders (PO)** page appears.

2. Click **Browse**.

    The **Browse For Purchase Orders** window appears.

3. Select a row and click **Select**. Or double-click the purchase order to open.

    Click **Cancel** to exit from the **Browse For Purchase Orders** window.

4. Click the **Items** tab.

5. Make the necessary changes:

    1. On the grid toolbar, click **New**.

   2. From the **Facility** list, select the facility.

6. Specify the purchasing category for the item:

    1. Click the **Purchase Category** lookup reference and select the purchasing category for the item.

    2. If the item is for a job order or sales order, click the **JONo** or **SONo** lookup reference and double-click the associated sales order or job order.

7. Specify quantity, size, and cost:

    1. Type the amount of the item you need in the **Order Quantity** box.

    2. If the part is multi-dimensional, type the size and number of the items you need in the **Size** boxes.

        The required dimensions default to the standard size for multi-dimensional parts. The dimensions for this instance come from the **Item Master** record.

    3. Type the cost of the item in the **Unit Cost** box.

8. To indicate that the order quantity and promise date are final, select the **Order Qty and Promise Date Are Final** check box.

    When you select this box, no more changes can be made to the purchase order's last promise date or order quantity. In addition, planning and scheduling stops making change recommendations.

9. Type the last date by which the vendor promised to have the items to you in the **Last Promise Date** box.

10. To allow Planning to add additional release items to a purchase order, select the **Blanket PO** check box.

    This option is used only by the **Planned Purchase Queue (PLNPOQ)** page in conjunction with M2M Planning & Scheduling. If a demand exists for a part which is on a blanket PO, the user has the option to add the demand as a subsequent release to the blanket PO.

    For more information on how the Blanket PO check box functions, see [Blanket PO](blanket-purchase-order.md).

11. If the items require inspection, select the **Inspection Required** check box.

12. If the items are taxable, select the **Taxable** check box.

13. If your company uses geography-based taxes and you want to change the jurisdiction, click the **Jurisdiction** lookup reference and select a jurisdiction.

    Click the **Tax Detail** to view details about the tax code for the item's jurisdiction.

    Or type a tax rate for the item in the **Tax Rate %** box.

14. To include comments about the item:

    1. Type comments about the item in the **Memo** box.

    2. To print these comments on the purchase order, select the **Print Memo** check box.

15. Click **Save** to keep the changes.