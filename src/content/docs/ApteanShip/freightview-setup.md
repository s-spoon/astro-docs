---
title: "Freightview Setup"
draft: false
type: Article
---

Aptean Ship connects to the Freightview.com transportation management system to provide multi-carrier rating, tendering, tracking and pickup requests for LTL shipments. You can print the BOL, package and pallet labels directly from Aptean Ship. Account setup with Aptean Ship requires that you already have a Freightview subscription.

To set up Freightview in Aptean Ship, you will first need to log into your account on Freightview and retrieve the Account API Key.
## Get the API Key


1. Log in to freightview.com and click your company name in the right-hand corner.
2. Under the Account Settings menu on the left, select **API Keys**.
3. Use the "Copy to Clipboard" functionality to copy the **User API key**.
![](assets/images/aptean-shipping-software-freightview-setup-1-1-1.png)

## Add the Account in Aptean Ship


The next step is to set up your Freightview account in Aptean Ship.
1. Select Setup > Carriers > Freightview from the left menu.
2. On the Accounts page, click the **New Account** button.
![](assets/images/aptean-ship-freightview-1.png)
3. Enter a name that will identify this account in Aptean Ship. It can be any name you want. In the API Key field, paste the User API Key that you copied in the previous steps.
![](assets/images/aptean-ship-freightview-2.png)
4. Next, configure Tendering and Billing settings for each carrier.
	* Tendering Type: The choices are Electronic, Call or Daily Pickup. For the last two options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.![](assets/images/aptean-ship-freightview-3.png)
5. On the next screen, you can enable the option to "Request Shipment Pickup", which allows the shipment (once processed) to be scheduled for pickup via the Internet.
![](assets/images/aptean-ship-freightview-4.png)
6. Click **Finish**.
Your account is now set up.


	>[!Note] **Next Steps** <br>You can click the Main tab to configure other settings.

 

