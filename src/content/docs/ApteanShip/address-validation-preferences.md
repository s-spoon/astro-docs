---
title: "Address Validation Preferences"
draft: false
type: Article
---

Aptean Ship integrates Dial-A-Zip software in order to provide automatic address validation of recipient addresses. Validation is only available for shipments to domestic addresses.

You can set up address validation options in Setup > Preferences > Address Validation. Address validation is also available for your company addresses (Setup > Company), Maintain Customers, Maintain Brokers, Maintain Third Party Addresses, and Maintain Importers (domestic addresses only). Validation is only supported for addresses in the United States, and not international addresses.
### Automatic address validation is first performed on the recipient address


Select an option from the drop-down list:
* Upon document import or customer selection: (Default) Aptean Ship will validate the address when you select a document to import (orders, invoices, etc.) from the source interface, or select an entry from the customer list.
* Upon rating or clicking "Ship and Process" without rating: The address is validated
when you either manually rate or the shipment is automatically rated, or you select the Ship and Process button.
* Never: Automatic address validation is turned off. Note that some carriers may not allow you to rate shop or process the shipment if the recipient address is invalid.


### Require valid recipient address before processing shipment


This option is enabled only when either of the first two options above is selected.
When you turn on this setting, Aptean Ship will not process the shipment until a valid
address has been chosen for the shipment.
### Apply standardized formatting to address when validating


Aptean Ship modifies the entered address to use standard abbreviations, ZIP +4, and
uppercase text when validating. We recommend that you do not change the default setting
(enabled) for this option.
### Confirm validated address


Select an option from the drop-down list:
* When the validated address postal code differs: Aptean Ship will ask you to confirm the validated address when the postal code is different than the one originally entered.
* When the validated city and postal code differ: Same as above but the city and postal code must differ than the original ones entered.
* Never: You will not be asked to confirm the validated address regardless of differences.


### Confirm validated address on location classification changes


In some cases, when address validation occurs, the validated recipient address has
a different location classification than the original.  When this option checked,
Aptean Ship will highlight the location type change to the user. The user can then accept
the change or keep the original address. The default setting is unchecked.
### Alternate Address Format Settings


These preferences define the address line for the primary street, as well as automatic
validation if the address line you defined fails to validate.
* The primary street address is usually found on: Address Line 1 or Address Line 2
* If initial validation fails, perform second validation using (Address Line 1) or
(Address Line 2): Choice of Address Line 1 or 2 depends upon selection in previous
setting. When this setting is checked, Aptean Ship will attempt to validate the address line specified here if validation for the address line specified in the field above fails.


### Validate Phone Numbers


You can set up Aptean Ship to validate phone numbers that are entered in the Phone Number fields on address forms across Aptean Ship. When a phone number is found to be invalid for the selected country, an error will display. Valid phone numbers are automatically formatted for the selected country.

You can select from the following options:
* For all addresses: The Phone Number field will be validated for any country selected on the address form. This is the default setting.
* For US addresses only: The Phone Number field will only be validated when the country selected on the address form is the United States.
* Do not validate: The Phone Number field will not be validated on any address form. The phone number that is entered is automatically formatted for the selected country.


