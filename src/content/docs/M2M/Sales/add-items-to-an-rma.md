---

title: "Add items to RMA"
draft: false
type: Article

---

Multiple line items can be added to an RMA. These items do not need to be linked to a specific Sales order. The user can also add non-standard items.

**To add items to RMA**

1. Access Add an RMA.

    The **Items** tab is enabled automatically.

    Or

    If you are opening an existing RMA and want to add new values to the **Items** tab, then:

    a. Click the **Items** tab.

    b. On the child toolbar, click **New**.

2. Enter the **Part Number**. Or click the **Part Number** lookup reference.

    The **Lookup For Part Number** window appears.

    This opens a list of all the parts that are on the sales order and are selected earlier.

- This allows you to add parts listed in the sales order.

    The fields on **Part Number**, **Revision**, **Quantity**, **Units of Measure (U/M)**, **Description**, **Source**, **Facility**, **Unit Price**, **Discounted Amount**, **Restock Amount**,   **Credit Amount**, and **Quantity Received** are automatically populated.

    Select the desired part and click the **Select** to close the **Lookup For Part Number** window.

    The selected part appears in the line item list.

    Or

    - On the child toolbar, click **Copy** to create a new list from the displayed information. See [Copy items to an RMA from an existing source]()

    You can add a new instruction to the Request for Material Authorization. User defined revision is used for transactions like **Receiving (RECV)**, **Ship Back Sales Order**, **Shipment**, and **Credit memo**. The user defined revisions are non-editable.

    Do not use the new instruction for any of the M2M related transaction.

    The contents of the new instruction is available in reports.

3. Enter the values in **Discount %** and **Restock %** fields.

4. Enter value in **Miscellaneous Charges** field. A negative Miscellaneous charges will decrease the Total credit.

5. To set up the Unit Price:

    a. **Unit Price** will be pulled from the Sales Order item, sales detailed BOM component, or standard BOM component when the user performs a **Copy**.

    b. If the user adds a standard item which is not on the referenced Sales Order, the Unit Price will be automatically pulled in from the **Item Master**.

    c. If the user adds a non-standard item which is not on the referenced Sales Order, the Unit Price must be entered by the user.

    d. You can create a Sales Order with zero unit prices irrespective of the instruction selected.

    e. If the Unit price is "0" in the Sales Order, the RMA will also be created for the "0" unit price, but you can still change the Unit price.

6. Set up the **Quantity** field.

    a. The field **Quantity Received** is populated when an item is received.

    b. Enter the quantity that you want to be credited in the **Quantity Credited** field.

7. Click on the **Lot/SN** lookup reference or enter the value.

    The **Lookup For Lot/SN** window appears.

    This allows you to select the LOT and Shipper details. This will pick up the lot numbers from the shipper that was created for those items. If the line item is not tied to a sales order and there is no original shipper, the lot number can be manually entered. The **Lot/SN Detail** is available.

8. On the **Toolbar**, click **More Actions**.

9. Select **More Actions** > **Actions** > **Lot/SN Detail**.

    The **Lot/SN Detail** page appears.

    The columns in the **RMA** page are populated with the values. If the lot control serial number does not match in the **RMA** window then when you click the **Lot/SN** lookup reference, then it appears blank.

10. On the **Toolbar**, click **More** **Actions**.

11. Select **More Actions** > **Actions** > **Serial Numbers**.

    The **Serial Numbers** window appears

    This is available only if the Sales Order Number is entered in the RMA **General** tab. This Sales Order should be shipped and the serial number should be entered because you cannot fetch the serial number details without a Shipper number. See [Assign serial numbers to RMA items]()

12. Click the **Standard Response** lookup reference.

    The **Lookup For Standard Response** window appears.

    The window displays the **Response Code** and **Response**.

13. Click the **Instruction** dropdown to select the Instructions from the list.

- If the instruction is **Pending Disposition**

    [Modify the Pending Disposition instructions]()

    Make sure you select **Pending Disposition** in the **Instructions** field.

- If the instruction is **Credit only** or **Pending Disposition**

    These instructions will not allow you to create a **Ship Back Sales Order**.

    Make sure you select **Credit Only** or **Pending Disposition** from the Instructions list.

14. If the item needs to be inspected then select the **Inspect** checkbox.

15. Enter the **User Defined Instruction.**

16. Enter the **Reason**.

17. On the toolbar, click **Save**.


​