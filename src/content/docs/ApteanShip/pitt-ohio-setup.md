---
title: "Pitt Ohio Setup"
draft: false
type: Article
---

Users who are registered for the Pitt Ohio module can set up their Pitt Ohio account in Aptean Ship.
## Enable Pickup and Tracking with Pitt Ohio


You will need to contact Pitt Ohio in order to submit pickup requests, and for your IRV Identifier code (required for tracking). Use the following information to contact the Pitt Ohio E-Business team and request that your account be enabled for pickup and for the IRV code.
* Toll-Free: 1.800.366.7488
* Email: webmaster@pittohio.com


## Add a Pitt Ohio Account


1. In Aptean Ship, select Setup > Carrier Interfaces > Pitt Ohio.
2. Select the **Accounts** heading and click the **New Account** button.
![](assets/images/pitt-1.png)
3. Enter the Account Information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Account Number: Enter the email address registered as the login for this Pitt Ohio account.
	* Password: Type in the password for this Pitt Ohio account.
	* IRV Identifier: Enter the IRV identifier you received from Pitt Ohio.
	![](assets/images/aptean-ship-pitt-2.png)
4. Next, enter the address information for the account. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The Sender Zip Code will be used for rating. >[!Note]  The Email Address specified here is where Email Pickup Confirmation notifications will be sent.
If prompted, confirm whether to use the original or validated address.
5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to Pitt Ohio when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
6. Configure account settings:
	* Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to Pitt Ohio when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings.
	* **Email Pickup Confirmation**: Once the pickup is scheduled, an e-mail confirming the pickup is sent to the e-mail entered above. This email will contain the Pickup Number and the contact information for the pickup terminal. Please contact the pickup terminal to make any modifications to a submitted pickup.
	* **Require PRO Number to ship**: Pitt Ohio only allows shipment tracking by the PRO number. When you check this option, the shipper must scan or enter the PRO # manually before a shipment can be processed. The default is unchecked.
	![](assets/images/pitt-5.png)
7. Click **Finish**.


