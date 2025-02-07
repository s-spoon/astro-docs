---
title: "Inventory Item Packaging"
draft: false
type: Article
---

## Packaging Scenarios


Packaging Scenarios allow you to specify and automate how items are packed into packages and pallets. Aptean Ship can also "learn" how you pack items into packages and/or pallets as you enter information and save shipments on the Ship screen. Aptean Ship then uses those scenarios the next time you ship the item.
>[!Note] When using packaging scenarios, the packaging is calculated when the shipment is imported and is not recalculated if/when the quantity is changed. If quantities need to be changed when packaging scenarios are being used, shippers should use the Packing Assistant to first adjust the quantities. Packaging scenarios will then be adjusted based on changes to the line item quantity.
### Manually enter a package scenario


Follow this procedure to enter a packaging scenario for an inventory item.
1. Select Setup > Maintain > Inventory Items.
2. Select to edit an existing item or add an item.
3. Click the Add Packaging Scenario button.![](assets/images/aptean-ship-inventory-3.png)
4. Enter the following information:
	* **Item Quantity**: Number of inventory items.**Packaging**: Name of the packaging (Big Box, Small Box, Pallet, New Crate, Medium Barrel, etc.)
	* **Dimensions**: Length, Width, and Height as defined in the Packaging is simply for the packaging, i.e. a ”Big Box” is 20” x 20” x 20”. Packaging/handling unit weight is also listed, i.e. a Big Box has a weight of 1.25 lbs.
	* **Packaging Qty**: Number of packages or pallets into which item quantities should be packed; Note that when you enter the packaging quantity and press Tab to get to the next field, Aptean Ship will attempt to calculate the Total Weight field for you.
	* **Total Weight**: Weight of total package quantity; that is, the weight is of the Items and Packaging combined. So you would say that 20 items in 2 Big Boxes is 10 lbs. + 2.50 lbs \= 12.50 lbs. You must enter the packaging weight: if the weight is not correct the shipment might get audited by the carrier and that takes extra time for additional fees. As mentioned for the Packaging Qty field, Aptean Ship will calculate this value for you. You can also manually edit this field.![](assets/images/aptean-ship-inventory-4.png)
5. Click OK. A dialog box will appear, asking if the value it calculated for the Total Weight field is correct. If this value is correct, click OK. If not, click No and you can return to the previous dialog to change the Total Weight field. Once you have accepted or adjusted the Total Weight field, Aptean Ship will not recalculate the Total Weight field if you edit the packaging scenario. Automatic calculation of the Total Weight field only occurs as you enter a new packaging scenario.


## Auto-learn feature


Aptean Ship will automatically learn your packaging scenarios when you save a shipment. These auto-learned scenarios will appear in Maintain > Inventory for the item, under Packaging Scenarios, and are designated by a "Yes" in the "Auto-Learned" column.
Aptean Ship will only automatically learn packaging scenarios after you save a shipment. Aptean Ship can only learn a packaging scenario when you have one type of item in one package or on one pallet.
### Enable Auto-learn


In order for Aptean Ship to automatically learn your packaging scenarios, you must have the "Automatically learn packaging scenarios while shipping" check box enabled for the inventory item. Check this option on the Add or Edit Inventory Item dialog for the item.
## Automatic Packing


Aptean Ship can also automatically pack your items based on saved packaging scenarios. Enable this feature by selecting "Automatically Pack Items based on packaging scenarios" in Packing Preferences for [Freight](http://ask.shipping.apteancloud.com/akb/fprefs-packing/) or [Parcel](http://ask.shipping.apteancloud.com/akb/pprefs-packing/).

Example: Let's say you have auto-learn and autopack enabled. You then save a shipment of 100 widgets that are packed into 4 large boxes. From this point on, when Aptean Ship sees that you are shipping 1000 widgets, it will automatically pack them into 40 large boxes.

