---
title: "ABF Freight Setup"
draft: false
type: Article
---

Aptean Ship directly integrates with ABF Freight to provide rating, shipping, tracking, and pickup requests via the Internet for LTL shipments to the USA (including Alaska and Hawaii) and Canada. Aptean Ship also prints the BOL, package, and pallet labels.
>[!Note] To disable ABF Freight, check the Disable use of ABF Freight option on the Main tab; when disabled, the ABF Freight carrier engine is disabled, though it can still be selected as a carrier for Enterprise TMS or Freightquote.

The Accounts page is where you set up the account information for your ABF Freight account(s) and also edit or delete accounts.

### Add the ABF Freight Account


At least one default account must be set up in order to process ABF Freight shipments. Please have your ABF Freight account information handy before setting up your account in Aptean Ship.
1. In Aptean Ship, select Setup > Carrier Interfaces > ABF Freight.
2. Select the **Accounts** heading and click the **New Account** button.
3. Enter the ABF Freight account information.
	* Account Name: Enter a unique account name to identify this account in Aptean Ship.
	* Account Number: Enter the ABF account number for this account.
	* abf.com Secure ID: Each account login for abf.com has a unique Secure ID. Enter the Secure ID used to authenticate this account.
	[spacer size\="2"]

	>[!Tip] Not Sure? <br>If you are unsure of the Secure ID, do the following: Log in to the ABF Freight website, select eCommerce, and then select ABF APIs. You can find your Secure ID on any of the ABF API pages (i.e. Rate Quote API, Shipment Tracking API, etc.) by scrolling down to the Account Information section. If you are not yet registered for the ABF Freight API, visit the ABF Freight website to register and get your Secure ID.
	
	![aptean-ship-abf-freight](assets/images/aptean-ship-abf-freight-3.png)

4. Configure Billing settings. The Billing section allows you to change specific settings for the ABF Freight account. If you set up multiple accounts, you can maintain different settings for each account.
	* Tendering Type: You can select from Call, Daily Pickup, or Electronic. >[!Note]  If you checked the "Request shipment pickup" option in ABF Freight setup, the Tendering Type for the account must be set to "Electronic".
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type : This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). This setting affects the options available under Billing on the Shipment tab.

		![abf-5](assets/images/abf-5.png)

5. Configure Account Settings.
	* Auto-assign PRO number on ship: Check this option if you want Aptean Ship to request a PRO number from ABF Freight when a shipment is processed. The PRO number field will be greyed out in the Shipment Editor. Aptean Ship also supports auto-assignment of the Pro Number for Inbound Freight shipments when this option is checked.
	* Request shipment pickup: Check this option if you want Aptean Ship to automatically send a pickup request to ABF Freight when a shipment is processed.
	* I have contract per cubic level pricing: If you have established cubic pricing associated with your ABF Freight account, check this option. When checked, Aptean Ship requires that you enter the dimensions of the package or pallet on the shipment.
	![abf-6](assets/images/abf-6.png)

6. Click **Finish**. On the Accounts page, click **Save**.


 

