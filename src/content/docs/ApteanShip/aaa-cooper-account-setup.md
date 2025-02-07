---
title: "AAA Cooper Account Setup"
draft: false
type: Article
---

Aptean Ship integrates directly with AAA Cooper to provide rating, tracking, and pickup requests via the internet for LTL shipments to the US (excluding Alaska and Hawaii) and Canada. Before setting up your account in Aptean Ship, make sure you have already set up [Web Services](aaa-cooper-web-services-setup.md) and received your Token ID from AAA Cooper.

>[!Note] To disable AAA Cooper, check the Disable use of AAA Cooper option on the Main tab; when disabled, the AAA Cooper carrier engine is disabled, though it can still be selected as a carrier for Enterprise TMS or Freightquote.

The Accounts tab is where you set up the account information for your AAA Cooper account(s). Under the Accounts section, you can add, edit, or delete accounts. The AAA Cooper Interface must have at least one default account to be available for shipping. Accounts are set up per [Location](logging-in-to-aptean-ship.md).

### Account Setup

1. Select Setup > Carrier Interfaces > AAA Cooper.

2. On the Accounts tab, click **New Account**.![aaa-accts1](assets/images/aaa-accts1.png)
3. Enter your account information. Then, click **Next**.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Account ID: Enter the company's AAA Cooper account number.
	* Token ID: Enter the unique Token ID you received when registering for web services on the AAA Cooper website.

	![aaa-main-set](assets/images/aaa-main-set.png)

4. Configure Company Name and Address.
Type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The Sender zip code will be used for rating.

![aaa-address](assets/images/aaa-address.png)

5. Configure Billing.
The Billing section allows you to change specific settings for the AAA Cooper account. If you set up multiple accounts, you can maintain different settings for each account.
	* Tendering Type: You can select from Call, Daily Pickup, or Electronic. Aptean Ship only sends a pickup request to AAA Cooper when "Electronic" is selected. For other options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type : This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in Maintain > 3PL. This setting affects the options available under Billing on the Shipment section of the Shipment Editor.
	
![aaa-billing](assets/images/aaa-billing.png)

6. Click **Finish**. The account appears in the Accounts list.


