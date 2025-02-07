---

title: "UPS Settings"
draft: false
type: Article

---

### Reference Fields

Reference fields allow the recipient to track incoming packages using a reference (such as the PO #) along with the ship date or your shipper number, or other information that may not normally appear in a shipment's details.

Aptean Ship supports up to two Reference Fields at the Shipment Level for international shipments.

![](assets/images/ups-reference-1.png)

There are three Package Level Reference Fields for domestic shipments. The third Reference Field is only supported for UPS Mail Innovations.

![](assets/images/ups-reference-2.png)

Additionally, we provide two other specialized Reference Fields: one for the HazMat Reference Number and one for the Receiver Location ID; both at the Shipment Level.

![](assets/images/ups-reference-3.png)

One Reference Field from each the Shipment Level and the Package Level fields can be printed as a barcode below the Reference Fields on the shipping label. To do this, check the "Barcoded" check box to the Reference Field. A 4 x 6.75 or larger label is required to use barcodes.

>[!Note] Reference Fields do not print on the UPS SurePost label.

### Configure Reference Fields

Specify the shipment fields to include as Reference Fields by selecting them from the drop-down lists. Each of the standard Shipment and Package Level Reference Fields has an identifier to help the recipient determine the nature of the information.

### Other Settings

### Use line items as commodities for UPS-generated international documentation

When this setting is checked, Aptean Ship will individually upload each line item to UPS. For example, two items identified by the same code are uploaded as two lines: Item A with quantity 1 and Item B with quantity 1, along with the individual item description, value, etc.

When this setting is unchecked, the items are rolled up by Schedule B Code in the upload to UPS. So, for example, the two items above are uploaded as one line with a quantity of 2, and the item description is populated from the Schedule B description.

### Require package dimensions to ship

Check this option to require the shipper to enter the package dimensions in the Packaging section in order to Ship/Process a shipment.

If this option is checked and the package dimensions are missing from a shipment, a warning icon is displayed to the shipper on the Ship screen:

![](assets/images/starship-shipping-software-ups-4.png)

