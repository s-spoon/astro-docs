---
title: "Old Dominion Setup"
draft: false
type: Article
---

Users who are registered for the Old Dominion module can set up their Old Dominion account in Aptean Ship.
## Add the Old Dominion Account


1. 1. In Aptean Ship, select Setup > Carrier Interfaces > Old Dominion.
	2. Select the **Accounts** heading and click the **New Account** button.
	![](assets/images/aptean-ship-newpenn-3.png)
	3. Enter the account information in the fields provided.
		* Account Name: Enter a unique name to identify this account in Aptean Ship.
		* Account Number: Type in your Old Dominion account number.
		* User ID/Password: Enter your ODFL4me User ID and Password.
		* Email Address: This email address will receive the BOL for each shipment processed against this account.
		![](assets/images/aptean-ship-oldominion-1.png)
	4. Configure account settings:
		* Auto-assign PRO number on ship: This setting is automatically checked. Old Dominion requires a PRO Number to process a shipment. Aptean Ship will retrieve the PRO Number from Old Dominion when you Ship/Process a shipment in Aptean Ship.
		* Request shipment pickup: Check this option if you want Aptean Ship to automatically send a pickup request to Old Dominion when a shipment is processed.
	5. Configure Billing settings.
		* Tendering Type: The choices are Call, Daily Pickup, or Electronic. Aptean Ship only sends a pickup request to Old Dominion when Electronic is selected. For the other options, you must contact the carrier directly.
		* Enable Prepaid: Check to enable a default Prepaid Billing Type.
		* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
	6. Click **Finish**.





