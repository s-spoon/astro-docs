---
title: "Pitney Bowes Settings"
draft: false
type: Article
---

Define additional settings that apply to all Pitney Bowes accounts enabled in Aptean Ship.
## Reference Fields


Reference fields allow you to print additional information on the shipping label using a reference field, such as the Invoice Number, or other information that may not normally appear in a shipment’s details. Aptean Ship supports up to five different reference fields at the package level. Specify the Shipment Fields to include by selecting them from the drop-down lists.

![](assets/images/pb-settings2.png)
### For International Forms


* Sender's Customs Reference
* Importers Customs Reference
* Invoice Number


### Other Reference Fields


* Reference ID 1
* Reference ID 2


## Settings


### Require package dimensions to ship


Select when the user must enter package dimensions in the Packaging section of the Shipment Editor in order to Ship/Process a shipment. Choices are:
* for all services and weights: This selection will require the user to always enter package dimensions.
* only for Priority Mail service up to 20 lbs: In order to get USPS Priority Mail Cubic pricing, the user will be required to enter package dimensions for Priority Mail packages up to or equal to 20 lbs.
* never: The user will not be required to enter package dimensions in order to ship.


### Print Postage on Shipping Label


Check this option to include the postage amount on the shipping label.
### Retrieve list rates when rating shipment


Check to retrieve the USPS Commercial Base rates for the List rates. In a future release, Aptean Ship will also support populating List rates with USPS Retail rates.

![](assets/images/pb-settings3.png)
## International


### Customs declaration signature


The name entered here will appear on the Customs Declaration form, in the signature field, for International shipments.
### Special nondelivery instructions for customs forms and International labels


Specify the action to take in the case of a shipment's nondelivery. These instructions, either "Return to Sender" or "Abandon," will print on customs forms and International labels.
### Always roll up line items by Schedule B information for customs forms 2976 and 2976A


Line items with the same Schedule B information will be listed on one line.  The default setting is unchecked.
### Use the following field as the description for line items that have been rolled up together


Select the field to use as the description for rolled up line items. The default setting is Schedule B commodity description.

For example, if you have multiple Schedule B codes for one package, and multiple line items with the same Schedule B code, you could check the first option (Always roll up line items...) to use the Schedule B code instead of the line item name; Aptean Ship will roll up the line items by the Schedule B code and use the Schedule B description as the commodity description.

Users that will only ship with one Schedule B code could use the line item settings (first line item only) to override what Aptean Ship uses as the commodity description.

![](assets/images/pb-settings4.png)
## Cost Center


(Optional) If you ship from multiple locations with a single account, you can use the Cost Center to differentiate between locations. In the field provided, enter a Cost Center code and click Add. The code may be alphanumeric and is limited to 50 characters. You can add multiple cost centers, which appear in the list below.

When shipping with USPS, this list will be available under Shipment Details. This allows you to select a Cost Center on a per shipment basis.

![](assets/images/pb-settings5.png)

