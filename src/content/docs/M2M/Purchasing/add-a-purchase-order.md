---

title: "Add a purchase order"
draft: false
type: Article

---

A purchase order specifies goods or services you want to buy from a vendor. You can add a purchase order from scratch, or you can base a new purchase order on an existing purchase order.

It is easy to use the purchasing queue to place a purchase order.

**To add a purchase order**

1. Open the **Purchase Orders (PO)** page.

    - Select **Production Management** > **Production Transactions** > **Purchasing** > **Purchase Orders**.

        Or

    - Search for **PO** or **Purchase Orders** in the **Navigation box** and then select **Purchase Orders**.

      The **Purchase Orders (PO)** page appears.

2. **Set up the order**.

    For type of purchase order, see **Types of purchasing order**.

3. Set vendor information in the **Vendor Information** tab:

   1. Click the **Name** lookup reference and select the vendor from the **Lookup For Name** window.

   2. If your company uses geography-based taxes, click the **Jurisdiction** lookup reference and select the jurisdiction from the **Lookup For Jurisdiction** window.

      1. On the **Toolbar**, click **More Actions**.

      2. Select **More Actions** > **Actions** > **View Jurisdiction**.

    3. If the vendor uses a different currency from you, click the **Currency** lookup reference button and select the vendor's currency from the **Lookup For Currency** window.

    4. Type any additional information you need in the appropriate fields.

    >[!NOTE]
    >When you create a PO for the inter-company vendor, the Inter-company link ID automatically generates and appears on the window.

4. Click **Save** to save the changes.

5. Add order item details in the **Items** tab:

    1. On the grid toolbar, click **New**.

    2. From the **Facility** list, select the facility.

    3. Click the **Purchase Category** lookup reference and select the category from the **Lookup For Purchase Category** window.

        If the item is for a job order or a sub-contract job order, click the **JO No** lookup reference and select the associated job order.

        If the item is for a sales order, click the **SO Number** lookup reference and select the associated sales order.

    4. Click the **Part Number** lookup reference and select the part from the **Lookup For Part Number** window.

   5. For standard parts that have a part revision, in the **Revision** field, type the part revision number.

    6. Set quantity and cost:

      1. In the **Order Quantity** field, specify the quantity of the item you need.

      2. In the **Unit Cost** field, change the cost of the item, if required.

    >[!NOTE]
    >When Inter-Company Buy Sell is enabled the unit cost on the purchase order line item will only carry to the correspondingly created sales order for non-standard items. Standard items which exist in the item master of the corresponding company will use the selling price from the item master and apply any price schedules or customer contracts that are associated with that part number.

   7. Select the **Order Qty and Promise Date Are Final** check box if the order quantity and promise date are final.

        When you select this check box, no more changes can be made to the purchase order's last promise date or order quantity. In addition, planning and scheduling stops making change recommendations.

   8. In the **Last Promise Date** field, specify the date by which the vendor promised to have the items delivered.

   9. Select the **Blanket PO** check box to allow Planning to add additional release items to a purchase order.

        This option is used only by the planned purchasing queue. If a demand exists for a part which is on a blanket PO, the user has the option to add the demand as a subsequent release to the blanket PO.

        For more information on how the Blanket PO check box functions, see Blanket PO.

   10. Select the **Inspection Required** check box if the items require inspection.

   11. Specify tax information:

       1. Select the **Taxable** check box.

       2. If your company uses geography-based taxes and you want to change the jurisdiction, click the **Jurisdiction** lookup reference button and select a jurisdiction.

       3. If your company does not use geography-based taxes, in the **Tax Rate %** field, type the tax rate for the item.

   12. Specify comments about the item:

       1. In the **Memo** field, type comments about the item.

       2. Select the **Print Memo** check box to print these comments on the purchase order.

    >[!NOTE]
    >When Inter-Company Buy Sell is enabled the item will be included in the Sale Order as a non-standard item unless it matches with a Cross Reference Part for the Account in the corresponding company or with an Item Master that corresponds to the part on the PO.

6. Click **Save** to save the changes.

    >[!NOTE]
    >For any Inter-Company PO edits or status changes, they must be updated manually in the corresponding company.

​