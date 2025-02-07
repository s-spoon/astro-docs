---
title: "New Penn Setup"
draft: false
type: Article
---

Aptean Ship supports rating, shipping, pickup, tracking, voiding pickups, and retrieving proof of delivery for New Penn. Aptean Ship also prints the BOL, package, and pallet labels.
## Web Services


To start using New Penn web services, contact New Penn's IT department [webservices@newpenn.com] and request a User ID and Password, and access to Rate Quote, BOL/PU/Return, Shipment Tracking, and POD/BOL Images for New Penn’s production web services. You will then use this login information to set up your New Penn account in Aptean Ship.
## Add the New Penn Account


1. In Aptean Ship, select Setup > Carrier Interfaces > New Penn.
2. Select the **Accounts** heading and click the **New Account** button.
![](assets/images/aptean-ship-newpenn-1.png)
3. Enter the Account Information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Account Number: Enter your New Penn account number.
	* API User ID/Password: Enter the username and password assigned by New Penn to use web services. The Username and Password are those provided for web service access and are not the same as the login for the New Penn website.
	![](assets/images/aptean-ship-newpenn-2.png)
4. Enter the account address. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The account address must match the address for the account number provided. If prompted, confirm whether to use the original or validated address.
5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to New Penn when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.
	* Enable Prepaid: Check to enable a default Prepaid Billing Type.
	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
6. Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to New Penn when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings.
7. If you have customized pallet rates, check the **My account is set up for pallet pricing** check box.
![](assets/images/newpenn-4.png)
8. Click **Finish**.


