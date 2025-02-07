---
title: "EasyPost Settings"
draft: false
type: Article
---

Aptean Ship's EasyPost module supports small parcel, international, and APO/FPO shipments via USPS and domestic/international Consolidators.

To access EasyPost settings, select Setup > Carrier Interfaces > EasyPost.
## Main


The Main page has two general EasyPost settings that you can configure:
### Configuration


**Disable use of EasyPost**

Check this option if you do not want USPS or Consolidators to be available for rating or shipping.

**Enable background tracking**

Background tracking collects shipment data so that you can look up delivery information for past shipments and generate late deliveries reports from the Aptean Ship Dashboard.
### Supported Carriers


This section will list USPS and any Consolidators that you have added on the Accounts tab, along with supported Services. You can also edit a carrier by clicking on the Edit icon.

The currently supported **billing types** and **shipment options** available for EasyPost are also displayed on this page.
## Accounts


The Accounts page displays the account information and status for the accounts you added to the Accounts grid, as well as the account addresses.

You can add, edit, disable, or delete accounts in this section. See [Account Setup](easypost-account-setup.md) for information on how to add an account. See [EasyPost Account Settings](easypost-settings.md)  for more information about modifying specific settings for an EasyPost account.

## Settings

### Reference Fields


Reference fields allow you to print additional information on the shipping label using a reference field, such as the Shipment ID, or any other information that may not normally appear in a shipment’s details. Aptean Ship supports up to three different reference fields at the shipment level. Specify the shipment fields to include by selecting them from the drop-down lists.

### Settings


#### Require package dimensions to ship


Select when the user must enter package dimensions on the Packaging tab in order to Ship/Process a shipment. Choices are:
* for all services and weights: This selection will require the user to always enter package dimensions.
* only for Priority Mail service up to 20 lbs: In order to get USPS Priority Mail Cubic pricing, the user will be required to enter package dimensions for Priority Mail packages up to or equal to 20 lbs.
* never: The user will not be required to enter package dimensions in order to ship.


### International


#### Special nondelivery instructions for customs forms and International labels


Specify the action to take in the case of a shipment's nondelivery. These instructions, either "Return to Sender" or "Abandon," will print on customs forms and International labels.

