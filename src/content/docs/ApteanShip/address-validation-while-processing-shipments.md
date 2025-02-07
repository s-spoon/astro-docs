---
title: "Address Validation While Processing Shipments"
draft: false
type: Article
---

This topic covers how to validate addresses when processing a shipment in Aptean Ship.
### Manual address validation


You can validate a recipient address at any point during a shipment using the address
validation button. This button, located next to the recipient address on both the
recipient and the shipment overview section, indicates whether the address is
validated or not.
### Not validated


An orange question mark appears on button. Click the button to validate.
If the address can be immediately validated, the icon will turn green. If the validation
requires user intervention, the Address Validation dialog appears.

Options
* Choose a validated address from the list. Click Revalidate Address to return to the
Company Setup dialog.
* Type an address into the fields provided in the Final Address section. Click Revalidate
Address to perform the validation again.
* Click Revert to Original to revert any changes and return to the original address.
* Click Ignore Validation Status to disregard the results and return to the Company
Setup dialog. You will receive a message confirming that you want to stick with the
unvalidated and possibly incorrect address


### Validated


A green check mark on the button indicates that the address has been validated.
### Failed


A red x on the button indicates that address validation has failed.
### Mapping address fields from the source interface


Address validation is based on the following fields:
* Company Name
* Address 1  or 2 (depending upon Preferences settings above)
* City
* State
* Postal Code


When mapping address fields from the source interface to the Aptean Ship Shipment,
it is recommended that you map the actual street address to the Address 1 field.
This will ensure correct results when using the address validation feature.

