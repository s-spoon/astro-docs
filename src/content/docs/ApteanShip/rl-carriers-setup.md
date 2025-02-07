---
title: "R+L Carriers Setup"
draft: false
type: Article
---

Once you have the R+L API key, you can set up your R+L Carriers account in Aptean Ship.
## Add the R+L Carriers Account


1. In Aptean Ship, select Setup > Carrier Interfaces > R+L Carriers.
2. Select the **Accounts** heading and click the **New Account** button.
![](assets/images/aptean-ship-rl-1.png)
3. Enter the account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* My RLC Login: Enter the username used to log in to this MyRLC account on the R+L website.
	* API Key: Enter the API key from the B2B setup page. If you don't have your API Key, there are steps for getting it [here](http://ask.shipping.apteancloud.com/akb/rl-carriers-api/).
4. On the next screen, enter the account address information. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The account address must match the address for the account number provided. If prompted, confirm whether to use the original or validated address.
5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to R+L Carriers when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
6. Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to R+L Carriers when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings. Once the pickup is scheduled, an e-mail confirming the pickup is sent to the e-mail on the account from the applicable [service center](http://m.rlcarriers.com/ShippingTools/ServicePoints/).
7. Click **Finish**, and then click **Save** on the Accounts page.


