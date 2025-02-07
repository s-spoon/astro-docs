---

title: "Specify sales order item defaults"  

draft: false 

type: Article
---


Use the **Sales (CSSALE)** page to specify the Sales Order (SO) item defaults.

### To specify the SO item defaults:

1. Open the **Sales (CSSALE)** page.  
2. Click the **Miscellaneous** tab.  
3. In the **Sales Order Item Defaults** area, specify the defaults for the SO line items:  
   - **Ship Item**: Select this checkbox if the line item is available to be selected for a shipper.  
   - **Split Ship**: Select this checkbox to enable splitting the line item quantity into multiple, partial shipments.  
   - **Print Memo**: Select this checkbox to print the memo of the line item on the sales order document.  
   - **Ship Early**: Select this checkbox to allow the shipment of the line item before its due date.  
   - **Update Delivery Commitment with Modified Ship Date**:  
        i. select this checkbox to modify the **Delivery Commitment** field in the **Items** tab of the Sales Orders (SO) page as follows:  
        - When you add a new line item and change the date or text in the **Delivery Commitment** field before saving, the **Ship Date** value is inserted at the beginning, and the entered text is retained.  
        - When you edit the **Ship Date** on the **Items** tab, the date at the beginning of the **Delivery Commitment** field is overwritten with the new value, and all other text entered is retained.  
     ii. Clear this checkbox to modify the **Delivery Commitment** field as follows:  
        - By default, the **Update Delivery Commitment with Modified Ship Date** checkbox is cleared.  
        - The **Delivery Commitment** field is never automatically updated.  
        - When adding a line item, the **Ship Date** is added to the **Delivery Commitment** field. Changes to the text or date in the field during the add (before saving) are retained and not overwritten by the **Ship Date**.  
        - When copying a line item, the **Delivery Commitment** text is not copied to the new line item.  
        - When editing the **Default Due Date** field on the **Customer Info** tab, the **Ship Date** is set to the new default due date only on confirmation. The date at the beginning of the **Delivery Commitment** field is overwritten, but all other text is retained.  
        - When copying a line item in the SO, the text in the **Delivery Commitment** field is copied to the new line item's **Delivery Commitment** field, with the **Ship Date** inserted at the beginning of the field.  
   - **Update Ship Date When Shipper Is Shipped**: Select this checkbox to set the **Ship Date** of the shipper created for the sales order to the date the shipper is confirmed.  
     - Clear this checkbox to leave the **Ship Date** as the date the shipper was created, even when the shipper is confirmed.  
     - By default, this checkbox is cleared.  

4. On the toolbar, click **Save**.
