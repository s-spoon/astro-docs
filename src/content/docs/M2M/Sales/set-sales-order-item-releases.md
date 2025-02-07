---

title: "Set sales order item releases"  

draft: false 

type: Article
---


You can ship items in multiple releases, allowing you to:  
- Ship from the same sales order to different locations.  
- Ship various quantities at different times.  
- Ship a quantity before the shipping due date.  

### To set item releases

1. [Open the sales order]().  
2. From the **Items** tab, open the required item from the grid.  
3. **Set up the sales order to allow multiple releases:**  
   a. Select the **Multi-Release** checkbox.  
   b. On the toolbar, click **Save**.  
4. On the toolbar, click **More Actions**.  
5. Select **More Actions > Actions > Sales Order Releases**.  
   The **Sales Order Releases (SORELS)** page is displayed.  
6. Modify the master release quantity.  
7. To add a release, on the child toolbar, click **New**.  
8. Set shipping information:  
   a. Select the **Use Misc Shipping Address** checkbox to specify an alternate address.  
      The **Shipping Address** field's value is automatically set to **9999**. Click **Shipping Address** to add a new record or modify the existing record.
      
   b. Enter the **Ship Date** and information about the delivery commitment. 

   c. Select the **Ship Item**, **Split Ship**, and **Ship Early** checkboxes to:
      - Allow the item to be shipped.  
      - Allow the item to be shipped in more than one shipment.  
      - Allow the item to be shipped before the ship date.  

   d. Specify the quantity to ship and the Unit Price in their respective fields.  
    The **Jurisdiction** field is automatically populated under certain conditions. Refer to [Identify Release Jurisdiction]() for more information.  
9. If your company uses geographic-based taxes, and you want to change the jurisdiction, click the **Jurisdiction** lookup reference and select the jurisdiction. 

   Click **Tax Detail** to view details about the tax code for the item's jurisdiction.
10. To apply progress billing for each release separately,   from the **Progress Billing Type** list, select the type of progress billing. 
For information on progress billing types, see **Related Information**.
11. On the toolbar, click **Save** to save the release [schedule]().  

To view commissions associated with a release, see **Related Information.**
