---
title: "General Preferences"
draft: false
type: Article
---

These preferences encompass general functionality and behavior when shipping on the Ship screen. They are accessible from Setup > Preferences > General.
### Automatically collapse a section before expanding a new section in the Shipment Editor


This option controls whether a currently open section of the Ship screen collapses when you click on another section.

For example, you are editing the Transportation section and have it expanded, and then you switch to editing the Shipment Details section. This setting will decide whether the Transportation section is minimized when you click the edit button on Shipment Details. When this Preferences setting is checked, Aptean Ship will collapse the current section, accepting any changes, before expanding the new section you click on.
### Allow item ship quantity to exceed the order quantity


When the Shipment Quantity exceeds the Order Quantity and this option is checked,
the additional items are placed on a new line. Since they do not have a source document, they will be listed as "No Order.” These items are not counted against the inventory from your source interface.
### Line Items Settings


The next two settings, "**Use line item information from Aptean Ship database**" and "**Save line item information in Aptean Ship database**", control how line item information from the source interface is stored and updated to the Aptean Ship inventory database in Maintain > Inventory Items, and also how data from Aptean Ship's inventory database is used when processing shipments.

>[!Note] The second setting will only display if the first setting is checked.

When shipping, Aptean Ship will always use any available source interface data regardless of Preferences settings. However, the source interface may sometimes not include data that Aptean Ship needs for shipping. So if you have both the "Use" and "Save" settings checked, Aptean Ship can get any missing data from the database.

**When would Aptean Ship need both the source document values AND data from Aptean Ship's inventory database?**


One case is **international** shipments. International line item data, such as Schedule
B / HTS code, Export License codes, Certificate of Origin , etc., is often not provided
by the source interface. Aptean Ship would use the source data to get the Unit Weight and
Price of the item, for example, but get the Schedule B code from Aptean Ship's inventory
data. The international data for items can either be set up in Maintain Inventory
> international OR the international data would be saved for an item when the
shipment is processed for the first time (when both "Use line item information..."
and "Save line item information..." are checked). The saved international data from
Aptean Ship's inventory database would then be used the next time that item appears
on an international shipment.

**Some things to consider before configuring Line Item settings**

- If you want to use but not update Aptean Ship inventory data.

    Let's say that you have batch imported your inventory data into Aptean Ship or the data
has been saved when processing shipments. You want to use this data when shipping
but you don't want it to be updated by your source interface. To accomplish this
scenario:
    * Item Number, Item Unit of Measure, and Units to Ship* must be mapped to the source interface. The remaining line item fields can be unmapped.
    * "Use line item information from Aptean Ship database" should be checked.
    * "Save line item information to Aptean Ship database" should be unchecked.


    >[!Note]  The Shipped Units, Ordered Units, and Units to Ship field mappings and requirements will vary by source interface, but basically, Aptean Ship needs to know how many items are being shipped.

- You want to use and update Aptean Ship inventory data.

    Let's say you want Aptean Ship's inventory data to be updated every time you import
a source document; in this case, you may have done a batch import of inventory
from your source interface but you want to actively add new items as you process
shipments.

    Unmap any line item fields from the source interface that you don't want to update.
Aptean Ship will use the data from the inventory database if it is available.
    * "Use line item information from Aptean Ship database" should be checked.
    * "Save line item information to Aptean Ship database" should be checked.


    >[!Tip] [How to Import Data](import-data.md)

**Use line item information from Aptean Ship database**


When checked, inventory information stored in the Aptean Ship database will be used
when inventory data from the source interface is not available.

**Setting Properties**


* The default setting is checked.
* Disabling this setting will allow you to import large orders more quickly. This will
not impact most people.
* If this setting is unchecked, packaging scenarios will not be used.
* You must check this option in order to display the "Save line item information in Aptean Ship database" option below.


    >[!Tip] **More information**
    <br>If you want to use item information from Aptean Ship Inventory (i.e. packaging scenarios, groups, etc.) but don't want to overwrite that data with item information imported from your source interface, do not check the next setting, "Save line item information in Aptean Ship database."  Item fields that are mapped to the source interface will still be used. For example, if the item Unit Price is mapped to your source interface, the source Unit Price will be used and not the one from the Aptean Ship inventory. The line item information from the Source takes precedence when shipping over the information in the Aptean Ship database.

**Save line item information in Aptean Ship database**


When checked, Aptean Ship will "learn" any inventory that is imported from your source
interface. Each time you save or process a shipment, inventory will be updated with
line item information from the source interface. You would only uncheck this setting
if you do not want line items to be saved or updated in the Aptean Ship inventory database.

This setting works in conjunction with the next setting below, "Automatically learn
packaging scenarios for new inventory items", to learn how you package inventory items that are saved to the Aptean Ship inventory database.

You must check this setting in order to display the next option ("Automatically learn packaging scenarios...").

**Automatically learn packaging scenarios for new inventory items**


Check this setting for Aptean Ship to remember how new inventory items are packaged
after you ship them for the first time. This setting will only appear if "Save line item information in Aptean Ship database" is checked.

The packaging is saved as a scenario and will be used the next time you ship the items. This setting is off by default. See [Packing Line Items](packing-line-items.md) for more information about packaging scenarios.

>[!Tip] **More Info about Importing Items** <br>[Import Data](import-data.md) into Aptean Ship.

### Do not show comparison rates


When this option is unchecked, Aptean Ship will show comparative USPS rates for parcel
shipments up to 20 lbs. These rates are shown when rate shopping, and in the Aptean Ship Dashboard "Potential Savings" widget. When Aptean Ship finds a lower rate and/or faster delivery estimate, the comparison rate is shown.

To take advantage of these USPS rates, contact Aptean Sales to sign up for
USPS, or if you are already signed up for USPS, make sure to set up your account in Aptean Ship.
### Suppress messages


Aptean Ship will only suppress the type of message you select and any other messages with lower priority.

**None**

Messages of all priorities will display, including additional information on Ship/Process, such as when packaging scenarios are saved or inventory items are updated.

**Informational messages**


Messages stating facts related to current tasks will be suppressed; for example, result windows. Warning and error messages will display.

**Warning messages**


Aptean Ship will suppress informational and warning messages, but will display error messages.
### Use currently active Source freight rules for manual/import shipments


Default setting: This option will be unchecked by default if you have not run company setup yet or have not set up freight rules. If your company and freight rules have been set up, this option will default to checked.

Checked: If checked, Aptean Ship uses your active freight rules for shipments that are manual (recipient is entered or selected on the Shipment screen) or imported. Also, when this setting is checked, the freight rules setup option for Manual/Import is disabled.
### Allow addresses to contain a PO Box when shipping to a PO Box is not allowed by the carrier/service


Some carriers do not support shipping to P.O Boxes. A package that is addressed to a PO Box may incur address correction charges from the carrier or may be delayed.
Check this option if you want to allow PO Boxes anyway. The default setting is unchecked.
### When billing to Third Party, drop-down list should display as


For shipments that are billed to a Third Party, you can select the party on the Shipment screen. This option defines whether the Third Party appears as the Third Party Name followed by the Third Party ID, or vice versa.

The default is ID (Name). Third Party information is maintained in Maintain > Third Party Addresses.

