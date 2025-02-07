---

title: "Use alternate ship-to addresses without storing"  

draft: false 

type: Article
---

Sometimes you may need to use multiple ship-to addresses. For example, you may sell to a distributor and ship the product to multiple locations. If a customer requires a sales order line item to be shipped one-time to another address, you can use a 9999 ship-to address to temporarily change the shipping address. These addresses are used once for a sales order and are not stored in the Made2Manage address table.  

You can also specify and store a ship-to address in Made2Manage. See **Related Information**.

Two Ways to Use 9999 Ship-To Addresses:

- **At the header level**: If you enter a 9999 ship-to address on the **Billing/Shipping Info** tab, any SO items added after that will be assigned the same address key. This applies only to new items and does not change the address on existing items.  
- **At the item level**: If you enter a 9999 ship-to address on the **Items** tab, the address applies only to that specific item.  

The following instructions explain how to use a 9999 ship-to address at the sales order header level. Refer to the topic [Change a Ship-To Address for a Sales Order Item]() for detailed instructions on adding 9999 ship-to-addresses for individual sales order items.

### To use alternate ship-to address at header level:

1. [Open the sales order](). 
2. Click the **Billing/Shipping Address** tab.
3. Select the **Use Misc Shipping Address** checkbox.  
4. By default, the
 **Address Key** field displays the ship-to address as **9999**.  
5. Enter the new ship-to company name, address, city, state, and zip code in the appropriate fields.  
   - If the ship-to address is in a country that uses a different currency than your company, type the country name. Otherwise, leave this field blank.  
6. Enter the phone and fax numbers, if available.  

7. Click **Save**.  
   - The temporary address is saved to the sales order for one-time use.  
   - This address will default in the **Ship Address** field for any new sales order items you add. Existing sales order items will not be updated.  
8. Choose a jurisdiction option by selecting one of the radio buttons:  
   - **None**: No line item jurisdictions will match the default jurisdiction of the sales order.  
   - **All**: All line item jurisdictions will match the default jurisdiction of the sales order.  
   - **Selective**: Allows you to select individual line items.  

   Click **Selective** to choose specific line items, or **All** to apply changes to all line items.