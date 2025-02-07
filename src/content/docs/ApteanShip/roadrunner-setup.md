---
title: "Roadrunner Setup"
draft: false
type: Article
---

Users who are registered for the Roadrunner Transportation Systems module can set up their Roadrunner account in Aptean Ship.
## Add the Roadrunner Transportation Systems Account


1. In Aptean Ship, select Setup > Carrier Interfaces > Roadrunner Transportation Systems.
2. Select the **Accounts** heading and click the **New Account** button.

![](assets/images/rr-1.png)

3. Enter the account Information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Account Number: Enter your Roadrunner Transportation Systems account number.
	* User ID/Password: Enter your Roadrunner Transportation Systems user ID and password. The User ID and Password are used to access your discounted rates.

	![](assets/images/rr-2-1.png)

4. Enter the account address. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The account address must match the address for the account number provided. If prompted, confirm whether to use the original or validated address.

![](assets/images/rr-3.png)

5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to Roadrunner when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.

	![](assets/images/rr-4.png)

6. Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to New Penn when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings.
	>[!Tip] Click [here](roadrunner-shipment-pickup-requests.md) for more information about Shipment Pickup Requests.
	
![](assets/images/rr-5.png)

7. Click **Finish**. On the Accounts page, click **Save**.


