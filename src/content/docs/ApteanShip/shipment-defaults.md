---

title: "Shipment Defaults"
draft: false
type: Article

---

When creating a new shipment, Aptean Ship can automatically populate the Ship screen with shipment values, based on Shipment Defaults. This feature allows you to set up default data values for most shipment fields.

### Source and Shipment Import Configuration

When a field is mapped to the Source or as part of Shipment Import configuration, Aptean Ship will use the value from the source document or imported shipment when a value exists. If no value is imported from the source or imported shipment, Aptean Ship will populate the shipment value with the value set up in Shipment Defaults.

### Line Items

Shipment Defaults for Line Item fields are only used when the line item is imported from the source interface or Shipment Import. If a line item is added from Aptean Ship Inventory Items, or added manually, Shipment Defaults are not used.

### Setup

Select Setup > Shipment Defaults to load the Shipment Defaults screen. There are four groups of fields: Recipient, Sender, Order, and Shipment.

> [!TIP] Click the Flat View check box to expand the groups to show all the fields.
You can also start typing a field name into the Filter field to display a list of matching fields. Use the "With default value only" check box to only show fields that have a default value already assigned.

### Select a Field

Locate the field you want by expanding the group or using a filter. Once you find the field, click on it to expand the default value information.

![](assets/images/shipdefaults-01.png)

### Set a Default Value

To the right of the field, check the "Use default value" check box. Depending upon the type of field you selected, there are a few different types of values you can select or enter, shown below.

### Value

Select a predefined value from a drop-down list.

![](assets/images/shipdefaults-02.png)

### Selected

This type of value is either turned "on" or "off," like a check box. If you want the field to be selected (on) by default, select True. If you want the field to be deselected (off) by default, select False.

![](assets/images/shipdefaults-03.png)

### Enter a value

A blank field is provided so that you can type in the default value you want to use.

![](assets/images/shipdefaults-04.png)
 
### General Rules and Notes

* For fields that are mapped to the source document or in Shipment Import configuration, the imported values will be used and not the Shipment Defaults.

* If a field is not mapped to the source interface or in Shipment Import configuration, or a value does not come in from these sources, Shipment Defaults are used.

* For field where defaults are set up in Setup > Preferences, such as Hazardous Materials contact information, BOL type, Freight Class, etc., these defaults will be used if no Shipment Defaults are set up.

* Packages, Pallets, and default packaging: Packages and pallets may be assigned default values. In these cases, whenever a new package or pallet is created, the default values are applied to this item. If a particular package or pallet is specified as the default (in Maintain > Packaging), whenever a new package or pallet is added, the Shipment Defaults are applied to the selected default package.

* Package and Pallet Classifications: You can now set default values for NMFC Code and NMFC Subcode, Freight Class and Freight Group. When values for these fields are set up in Shipment Defaults, only relevant fields, based on your settings in [Bill of Lading Preferences](http://ask.shipping.apteancloud.com/akb/bol-prefs/), will be used when a shipment is created.




