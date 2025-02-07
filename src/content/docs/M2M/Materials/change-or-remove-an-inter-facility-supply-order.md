---

title: "Change or remove an inter-facility supply order"
draft: false
type: Article

---

An inter-facility supply order (ISO) enables you to procure materials from another facility. You can change information in an Open or Started inter-facility supply order and you can remove a started inter-facility supply order.

You can change ISOs in the inter-facility supply order queue.

**To change an inter-facility supply order**

>[!NOTE] You can make changes to an ISO provided that it has not been marked as a **Firm Order**.

1. [Open the ISO](#to-open-the-inter-facility-supply-order).

2. Make any of the following changes, as required:

    - In the **Source Facility** and **Ship-via** fields, enter the new source facility and carrier.

        >[!NOTE] You can change the Source Facility provided the following conditions are met: - The corresponding IDO has not been shipped and the ISO has not been received. - If fulfilling a SO requirement, the SO Item Release cannot have a shipped quantity. - Any existing Job Orders (JOs) or Purchase Orders (POs) are canceled. 

    - In the **Quantity** field, change the quantity required.

        >[!NOTE] You can decrease the value in the **Quantity** field provided the following conditions are met: - If a JO exists to fulfill the ISO, no costs must have been posted against the JO. - If a PO exists to fulfill the ISO, it cannot be in the **Open** status. - If the ISO fulfills a SO requirement, the shipped quantity in the SO Item Release cannot be greater than the quantity changed on the ISO. If the ISO fulfills a JODBOM requirement, the ISO quantity must be less than or equal to the JODBOM quantity. 
    - In the **Need Date** field, specify the new date by which you require the items to be supplied.

    - In the **Memo** field, enter an appropriate comment.

3. On the **Toolbar**, click **Save**to save your changes.

### To remove the inter-facility supply order

1. Open the ISO.

2. On the **Toolbar**, click **Delete**.

    A message, *Preparing to delete this information. Are you sure?* is displayed.

3. Click **OK** to delete.

### To open the inter-facility supply order

1. Open the Inter-Facility Supply Order (ISO) page.

    1. Select **Production Management** > **Production Transactions** > **Planning** > **Inter-Facility Supply Order**.

    Or

    2. Search for **ISO** or **Inter-Facility Supply Order** in the **Navigation box** and then select **Inter-Facility Supply Order.**

   The **Inter-Facility Supply Order (ISO)** page appears.

2. On the **Toolbar**, click Browse .

    The **Browse For Inter-Facility Supply Order** window appears.

3. Select the required row and click **Select.** Or double-click the required inter-facility supply order.

​