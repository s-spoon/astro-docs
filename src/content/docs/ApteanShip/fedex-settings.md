---
title: "FedEx Settings"
draft: false
type: Article
---

Define additional settings that apply to all FedEx accounts.
### Reference Fields


Reference Fields define the package level fields that are used for the Customer Reference, Department Number, Invoice Number, PO Number, or Shipment Integrity reference fields.

You can map up to four reference fields, one of each type, to a Aptean Ship Shipment field. For example, you could not use "Customer Reference" twice.

The following reference fields will print on the shipping label:
* Customer Reference appears after the text REF:
* Invoice Number appears after the text INV:
* Department Number appears after the text DEPT:
* PO Number appears after the text PO:


Note that the Shipment Integrity reference will not print on the label.

![](assets/images/fdx1-1.png)

 
### Settings


This tab contains settings for adding information to labels under specific conditions, as well as other miscellaneous settings.
#### Perform Location Type Validation


Check this setting to set the residential flag based on address validation results from FedEx. This setting resolves a discrepancy that can occur between Dial a Zip and FedEx regarding residential or non-residential addresses.


#### COD Return Label Reference Type


Select the type of reference information to include on the COD return shipping label: Customer Reference, Invoice, PO, or Tracking Number.


#### Require package dimensions to ship


When checked, package dimensions must be entered on the Packaging tab in order to Ship/Process a shipment.


If this option is checked and package dimensions are missing from the shipment, Ship/Process will fail and an error message displays.


#### Address Line 3


Choose how Address Line 3 data will be handled by Aptean Ship when present.


* Ignore: The Address Line 3 field is grayed out (read-only) on the Shipment Editor and is not uploaded.
* Warn: The Address Line 3 field is available, and if it contains data, Aptean Ship prompts the user to continue processing or cancel to go back and make changes. If the shipment is processed anyway, the Address Line 3 data will not be uploaded. 
     >[!Note]  If the Address Line 2 field is blank, Address Line 3 data will be uploaded instead of Address Line 2.

* Combine : Line 3 will be appended to Line 2 when uploaded, until it reaches the 75 character limit.

    ![](assets/images/fdx2.png)

