---

title: "XPO Logistics Setup"
draft: false
type: Article

---

Aptean Ship supports direct integration with XPO Logistics. XPO Logistics is a global provider of transportation and logistics solutions and provides services for truck brokerage and transportation, less-than-truckload, intermodal, highly-engineered supply chain solutions, contract logistics, last mile, expedite, global forwarding and managed transportation.

The XPO Logistics module supports LTL shipments to the US (including Alaska, Hawaii, and Puerto Rico) and Canada. Rating, shipping, tracking and pickup requests are all done via the Internet. Aptean Ship also prints the BOL, package, and pallet labels. Have the information from your XPO Logistics account available before setting up your account in Aptean Ship.

### Add the XPO Logistics Account

1. In Aptean Ship, select Setup > Carrier Interfaces > XPO Logistics.

2. Select the **Accounts** heading and click the **New Account** button.

	![](assets/images/aptean-ship-xpo-1.png)

3. Enter the account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Customer ID: Enter your XPO Logistics Customer ID number.
	* User Name/Password: Enter your XPO Logistics User Name and Password. The User Name and Password are used to access your discounted rates.

4. Enter the account address. You can type in your company name and address or select a Sender Address from the Address ID field to automatically populate the fields. The account address must match the address for the account number provided. If prompted, confirm whether to use the original or validated address.

5. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to XPO Logistics when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.

	* Enable Prepaid: Check to enable a default Prepaid Billing Type.

	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.

6. Check the **Request Shipment Pickup** option if you want Aptean Ship to automatically send a pickup request to XPO Logistics when a shipment is processed. This will only occur if you selected a Tendering Type of Electronic in Billing settings. Once the pickup is scheduled, an e-mail confirming the pickup is sent to the e-mail on the account from the applicable service center.

7. Check the **Auto-assign PRO number on ship** to have Aptean Ship automatically assign the PRO # to the shipment when it is processed. If checked, the PRO # field will be disabled in the Shipment Editor. If unchecked, the shipper can type the PRO # manually or it can be left blank.
When this option is unchecked, Aptean Ship will not validate the PRO # when you ship.

> [!Note] In order for "Auto-assign PRO number on ship" and "Request shipment pickup" options to function, a Tendering Type of "Electronic" must be selected in Billing settings.
>- For **Type**, select the type of account you are adding. Use "Pickup/Delivery" for normal Ship From accounts or "Bill to" for third party billed accounts.
>- Click **Finish**. On the Accounts page, click **Save**.


