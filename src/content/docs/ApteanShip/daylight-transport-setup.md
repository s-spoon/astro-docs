---
title: "Daylight Transport Setup"
draft: false
type: Article
---

Aptean Ship directly integrates with Daylight Transport to provide rating, pickup, tracking, and proof of delivery via the Internet for LTL shipments to the USA (excluding Alaska and Hawaii) and Canada. Aptean Ship prints the Daylight Transport-generated BOL, package, and pallet labels, which you can set up under [Printing Profiles](printing-profiles.md).

Have the information from your Daylight Transport account available before setting up your account in Aptean Ship.

### Add the Daylight Transport Account


1. In Aptean Ship, select Setup > Carrier Interfaces > Daylight Transport.
2. Select the **Accounts** heading and click the **New Account** button.

![aptean-ship-daylight-1](assets/images/aptean-ship-daylight-1.png)

3. Enter the account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship. It can be whatever name you like.
	* Account Number: This is your Daylight Transport account number.
	* Username: Enter the Username you use to log into [MyDaylight](https://mydaylight.dylt.com/login).
	* Password: Enter the Password you use to log into MyDaylight.
4. Enter the account address. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. If prompted, confirm whether to use the original or validated address.

![](assets/images/aptean-ship-daylight-2.png)

5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to Daylight Transport when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
	
	![aptean-ship-daylight-3](assets/images/aptean-ship-daylight-3.png)

6. Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to Daylight Transport when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings. A Pickup Number will be sent to the email address on the account once your pickup request has been scheduled.

![aptean-ship-daylight-4](assets/images/aptean-ship-daylight-4.png)

7. Click **Finish**. On the Accounts page, click **Save**.


