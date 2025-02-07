---
title: "EasyPost Account Setup"
draft: false
type: Article
---

The Aptean Ship interface for EasyPost allows you to ship with USPS and USPS Consolidator services for domestic and international shipments through your EasyPost account(s). Consolidators will appear as Carriers in Aptean Ship once you set them up.

### Don't have an EasyPost account?


If you don't already have an EasyPost account, you can create a free EasyPost account using the link on the Setup page.  Or, click [here](https://www.easypost.com/signup?utm_source=vtechpb) to register for a free EasyPost account.


EasyPost account sign-up includes a USPS account, which is automatically created for you. You'll be able to select this account during Aptean Ship setup.
## Add the EasyPost Account


1. Log in to your EasyPost account. In the EasyPost Dashboard, click the arrow next to your account name to reveal the menu.
2. Select the **API Keys** menu item.

![](assets/images/aptean-ship-easypost-1-1.png)

3. Use the **Copy** button to copy the Production API Key to the Windows clipboard.

![](assets/images/ep-copy.png)

4. In Aptean Ship, select Setup > Carrier Interfaces > EasyPost. On the Accounts tab, click **New Account**.
5. In the API Key field, paste the Production API Key you copied earlier.
6. Back in the EasyPost Dashboard, copy the Test API Key.

![](assets/images/ep-copytestapi.png)

7. In Aptean Ship, paste the Test API Key into the Test API Key field.


## Add the Carrier Account


Once you have entered the API keys, you can either select to add an existing EasyPost carrier account, or create a new carrier account in your EasyPost portal.
### "Add an account that is already set up in EasyPost" Option


1. After selecting this option, select the USPS account from the Existing Accounts field. Click Next. More info: [See how to display a meaningful reference instead of the long account number in Aptean Ship](easypost-account-setup.md#usps-carrier-account-references).

	![aptean-ship-easypost-2](assets/images/aptean-ship-easypost-2.png)

2. Enter USPS shipping data and click **Next**.
		 <br> **Account Name**:  Enter a unique name to identify this account in Aptean Ship.
		 <br>**Account Number**: This field will be used for the EasyPost Reference.
		<br>**Account ID**: The Account ID is automatically populated. This is the Carrier Accounts > Account ID in the EasyPost Dashboard.
		* **Shipper Identifier**: This ID is set up in your EasyPost Dashboard. Once entered, it cannot be changed.
	<br>3. Enter or confirm the address information. Click the Status icon to validate the address. You can also select an [Address ID](company-setup.md#address-id) Click here for more info on setting up Address IDs in Company Setup." to associate with this account; this will populate the fields with the address saved for that Address ID. If you do choose to link this account with an Address ID, you will then be able to select the USPS Account on the Shipping window > under Sender while processing a shipment. Click **Next**.
	<br>4. Configure account settings as described below, and click **Finish**.


### Services


**My account has been set up to use the Media Mail service**


Check this box if your account is enabled for Media Mail. If checked, the Media Mail service will appear under Services for USPS on the Shipping window.


**I have a special USPS Bill on Delivery Returns account to use for return shipments**


Check this box and enter your Returns account number if you have a returns account. When this option is checked, Aptean Ship sends the Bill On Delivery Returns to EasyPost with the account number you entered. If this option is unchecked, Aptean Ship sends the current Pay-On-Use Returns to EasyPost.


### SCAN Form


 **Print SCAN Form**


The Shipment Confirmation Acceptance Notice (SCAN) form consolidates an entire day’s shipments into a single form with a barcode that is scanned by the driver when the packages are picked up.


> [!Tip] "DHL Shipments" <br>EasyPost only returns the manifest for domestic shipments (DHL eCommerce). For international shipments, the DHL Global Mail International Manifest info is transmitted to DHL on End of Day but the manifest must be printed from your DHL Web Portal. If you are shipping domestic and international, you must give the driver the manifest forms for both. 


**Group By**


You can also select to group shipments on the SCAN form by Sender Zip Code or Cost Center.


### Pickup


**Send pickup request to USPS** 


When enabled, Aptean Ship will send the pickup request to USPS and the options below are available.


**Send pickup on Fridays for Saturday pickup?**


Check to have the pickup request sent on Friday for a Saturday pickup.


**Pickup Location**


Select the pickup location from the drop-down list. If you select Other, you can type your instructions in the Pickup Instructions field.


### Web Tools


Aptean Ship uses USPS Web Tools to return tracking information for a shipment.To register for USPS Web Tools, you can use this link: [USPS Web Tools Registration](https://registration.shippingapis.com/). After submitting the form, you will receive an email containing your login information, which you can enter below.


**Enable Web Tools**


Check this option to track shipments, and then enter your USPS Web Tools login information.


 
### "I want Aptean Ship to create a new Carrier Account in my EasyPost portal" Option


After signing up with EasyPost, you can also add new accounts for use with Consolidators.

>[!Tip] If you create a new EasyPost Carrier account in Aptean Ship, and later delete the account in your EasyPost Dashboard, the account is not automatically deleted from Aptean Ship. You must delete the account manually in Aptean Ship Setup. See Notes below for more information.
1. Select the Carrier from the drop-down list and click Next.

![aptean-ship-easypost-3](assets/images/aptean-ship-easypost-3.png)


### Supported Consolidators


 + APC Postal Logistics
	+ Asendia
	+ DHL eCommerce and Global Mail International
	+ Globegistics
	+ RR Donnelley Logistics
	+ UPS Mail Innovations


2. Enter the account data used for shipping with this Consolidator. The requested information varies based on the Consolidator but generally includes the account data, such as the Account Name, Account Number, Username, Password, etc. for the Consolidator.
3. Enter or confirm the address information. Click the Status icon to validate the address. You can also select an Address ID to associate with this account; this will populate the fields with the address saved for that Address ID. If you do choose to link this account with an Address ID, you will then be able to select the USPS Account on the Shipping window > under Sender while processing a shipment.
4. Click **Finish**.


## Set Up Additional Consolidator Accounts


To set up additional Consolidator accounts.
1. In Setup > Carrier Interfaces > EasyPost, select the Accounts tab and click **New Account**.
2. The API Key will populate automatically. You can 
a Add an existing account or 
b Create a new account.


a. Add existing account: Select the Consolidator from list of Existing Accounts. Aptean Ship only lists the accounts that have not already been added. Select the Consolidator and click **Next**.


b. Create new account: Select the Consolidator from the drop-down list. Click **Next**.


3. Enter the data to use when shipping with this Consolidator. The requested information varies based on the Consolidator but generally includes the account data, such as the Account Name, Account Number, Username, Password, etc. for the Consolidator. If you chose to add an existing account, some or all fields will already be populated.


	>[!Note] Deleting Accounts: You can create new EasyPost Carrier accounts in Aptean Ship. However, if you decide to delete one of these accounts in your EasyPost Dashboard, it will not be removed from Aptean Ship automatically. When Aptean Ship rates a shipment using this account, the user will receive an error. To avoid rating with a deleted EasyPost account, you can go into Setup > Carrier Interfaces > EasyPost, click on the Accounts tab, and delete the account from the list. 
## USPS Carrier Account References


If you use multiple carrier accounts for EasyPost, you can more easily identify them in Aptean Ship by populating the Reference field in your EasyPost Dashboard. For example, instead of the long account number (shown below), you can display a location name or other identifying term.

![easy-reference1](assets/images/easy-reference1.png)

 
1. To do this, log in to EasyPost and from the user menu, select **Carrier Accounts**.

![aptean-ship-easypost-4](assets/images/aptean-ship-easypost-4.png)

2. Select the USPS Carrier Account and click Edit to update the Reference field.

![aptean-ship-easypost-5](assets/images/aptean-ship-easypost-5.png)

3. Once you do this, the Reference will display in Aptean Ship wherever the account is shown...for example, in EasyPost account setup or End of Day.

![easy-reference4](assets/images/easy-reference4.png)


 

