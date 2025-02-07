---
title: "Freightquote.com Setup"
draft: false
type: Article
---

Freightquote.com is a freight carrier rating interface that acts as a 3PL. Aptean Ship integrates Freightquote.com to provide:
* Online rating and tendering for your direct contracts with supported freight carriers.
* Online rating, tendering, and billing for Freightquote.com carriers.
* Electronic Shipment scheduling (booking).
* Electronic Shipment status updates (tracking) for Freightquote.com carriers only.


## Freightquote.com Contract


If you don't already have a contract, you must first contact Freightquote.com, who will create a contract for you. Freightquote can also load your contract rates from your specific carriers into the Freightquote.com® system. This is a manual process that takes 2-3 days. Freightquote.com will provide you with an e-mail address and password that accesses your account online at Freightquote.com and from within Aptean Ship.

Once you have your account information, you can enter it into Aptean Ship from Setup > Carrier Interfaces > Freightquote.com > Accounts.
## Default Account


You must set up at least one Freightquote.com account to be used as the default shipping account. The first account you add to Aptean Ship is designated as the default account. If you add other accounts, you can designate a different default account by enabling the "Default" check box for that account. Please note that you can only rate and process shipments using the primary login for your Freightquote account.

When a Freightquote.com carrier is selected for a shipment, the default account will be set in the Transportation section of the Shipment Editor. There can be only one default carrier interface for each carrier regardless of the User ID/Location of the currently logged-in user.
## Add the Freightquote.com Account


1. On the Accounts page, click the **New Account** button.
![](assets/images//aptean-ship-freightquote-1-1.png)
2. Enter the account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Login email or access code: Type in the email address or access code used to log in to your Freightquote.com account. Only the primary login for the account can be used for rating and shipping from Aptean Ship.
	* Password: Enter the password for this account login.
	![](assets/images/aptean-ship-freightquote-1.png)
3. Modify the carrier account Billing settings. If you set up multiple accounts, you can maintain different settings for each account. Make any changes by selecting from the drop-down lists.
	* Tendering Type: The choices are Call, Daily Pickup and Electronic. Aptean Ship only sends a pickup request to Freightquote.com when Electronic is selected. With the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender, Freightquote.com or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). Recipient and Third Party billing are not supported by Freightquote.com. These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
	![](assets/images/aptean-ship-freightquote-2.png)
4. Click **Finish**.


