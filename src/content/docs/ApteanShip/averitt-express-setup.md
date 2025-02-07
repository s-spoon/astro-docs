---
title: "Averitt Express Setup"
draft: false
type: Article
---

In order to ship with Aptean Ship using your Averitt account, you will need to contact Averitt to receive an API Key. This API Key is entered during Averitt setup along with your Account Number and other account information.

>[!Tip] For more information on requesting an API Key, see the [Averitt API & Web Services](https://www.averittexpress.com/public/technology/webservices.jsp) page.
## Add the Averitt Express Account


1. Select Setup > Carrier Interfaces > Averitt Express.
2. Select the **Accounts** heading, and click the **New Account** button

![averitt1](assets/images/averitt1.png)

3. Enter your account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Account Number: Enter your Averitt Express account number.
	* API Key: Enter the API Key you received from Averitt.
	
	![averitt-20-4-setup](assets/images/averitt-20-4-setup.png)

4. Type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The Sender Zip Code will be used for rating.

	![averitt3](assets/images/averitt3.png)

5. Configure Billing settings.
	* Tendering Type: The choices are Electronic, Call, or Daily Pickup. Aptean Ship will only send a pickup request to Averitt when Electronic is selected. For the Call or Daily Pickup options, you must contact Averitt directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.

	![averitt-20-4-setup-2](assets/images/averitt-20-4-setup-2.png)

6. Next, set up account settings.
	* **Request shipment pickup**: Check this option if you want Aptean Ship to automatically send a pickup request to Averitt when a shipment is processed.
	* Check the **Auto-assign PRO number on ship** option if you want Aptean Ship to request a PRO number from Averitt when a shipment is processed. When checked, the PRO number field cannot be edited in the Shipment Editor.

7. Click **Finish.** On the Accounts page, click **Save**.


