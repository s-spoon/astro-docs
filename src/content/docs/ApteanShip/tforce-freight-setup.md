---

title: "TForce Freight Setup"
draft: false
type: Article

---

UPS Freight no longer supports the TForce Freight interface. You must create a TForce Freight account before you can set one up. Follow the steps to sign up for a new account in [TForce Freight Prerequisite](https://ask.vtechnologies.com/kb/tforce-freight-prereqs/).

## Configure the TForce Freight Account on Cloud

1. In Aptean Ship, select **Setup** > **Carrier Interfaces** > **TForce Freight**.

2. Select the **Accounts** heading and click the **New Account** button.

3. Enter the **Account Name** that will identify this account in Aptean Ship. Enter the **Freight Account #**, no validation for Freight Account #, you can enter your previous Freight Account #.

4. To authorize Aptean Ship to access your TForce company data, follow the steps to generate the token.

	1. Click the **AUTHORIZE** button. It will direct you to the TForce Freight portal.
	
	![](http://ask.vtechnologies.com/Screenshot_14.png)

	2. Enter the username and password, click **Log In** button.
	
		> [!TIP] If you are new to TForce Freight, sign up for a new account first by following the steps in 
		
		[TForce Freight Prerequisite](https://ask.vtechnologies.com/kb/tforce-freight-prereqs/).

	3. Click the **Get Started** button.

	4. Enter your password again.
	
	5. Click the **Next** and **Accept** button to authorize Aptean Ship to access your account token.
	
	6. You should be able to see the following page.
	
	7. Go back to Aptean Ship. The TForce Token Info should be automatically populated. If not, please try to authorize it again.
	
5. Configure Billing settings.

	* **Tendering Type:** The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to TForce Freight when Electronic is selected. You must contact the carrier directly for the Call or Daily Pickup options.

	* **Enable Prepaid:** Check to enable a default Prepaid Billing Type.

	* **Default Prepaid Billing Type:** This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in 
	
	[Maintain > 3PL](http://ask.vtechnologies.com/ss-wc/kb/3pl-basics/). 
	
	These settings affect the options available for Billing in the Transportation section of the Shipment Editor.
	
6. Check the **I have density pricing** option if you already have density-based pricing set up with TForce Freight.

7. Leave the Request Shipment Pickup option off since the Pickup request is not supported in Aptean Ship Cloud until the TForce Freight side fixes the pickup issue.

8. Click **Finish**. On the Accounts page, click **Save**.

### Configure the TForce Freight Account for ON-PREM Web Client

#### Get your Client ID and Value

Before doing the following steps, please ensure you have created a new TForce Freight account or migrated your existing MyLTL accounts.

1. Go to <https://developer.tforcefreight.com/>, click **Log in**, enter the username and password you used to log in to the 
[TForce Freight Portal](https://www.tforcefreight.com/ltl/apps/home/), and click the **Log in** button.

2. After successfully logging in, click the **Profile** button located at the top of the page.

3. You will be directed to the following page.

4. Select **Configure My Client** and click the **Create** button.

5. You will see the following screen. In the **Add a Client Secret** section, enter the **description** and select **Expires** **date**. Click the **Create.**

	> [!Note] If the date has expired, you will not be able to pass authentication in Aptean Ship and must create a new secret.

6. A new secret will be created successfully after clicking the Create button. 

	> [!Note] Please store the value immediately, as it will not remain visible in the future. You can create a new secret if you cannot remember the Value.

7. Record the **Client ID** and **Value** that will be used to authenticate your account in Aptean Ship.

	![](assets/images/Screenshot_13.png)


### Set Up TForce Freight Account

1. In Aptean Ship, select **Setup** > **Carrier Interfaces** > **TForce Freight**.

2. Select the **Accounts** heading and click the **New Account** button.

3. Enter the **Account Name** that will identify this account in Aptean Ship. Enter the **Freight Account #**, no validation for Freight Account #, you can enter your previous Freight Account #.

4. Enter the Client ID and Value you created in the TForce Freight Developer Portal.

 	> [!TIP] If you have not created one, please follow the steps of **How to get your Client ID and Value** in [TForce Freight Prerequisite](https://ask.vtechnologies.com/kb/tforce-freight-prereqs/).

5. Click the GENERATE TOKEN button. The TForce Token Info field will be populated automatically if your Client ID and Value are correct.

6. Configure Billing settings.

	* **Tendering Type:** The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to TForce Freight when Electronic is selected. You must contact the carrier directly for the Call or Daily Pickup options.

	* **Enable Prepaid:** Check to enable a default Prepaid Billing Type.

	* **Default Prepaid Billing Type:** This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL] (http://ask.vtechnologies.com/ss-wc/kb/3pl-basics/).
	
	These settings affect the options available for Billing in the Transportation section of the Shipment Editor.

7. Check the **I have density pricing** option if you already have density-based pricing set up with TForce Freight.

8. Leave the Request Shipment Pickup option off since the Pickup request is not supported in Aptean Ship Cloud until the TForce Freight side fixes the pickup issue.


9. Click **Finish**. On the Accounts page, click **Save**.

### Configure the TForce Freight Account on Desktop

For customers who have only installed the desktop application without the Web Client, it is required to install the Web Client first, log in to the web interface, and then authenticate your account on the Web client; after generating the token, you can get back to the desktop to ship with TForce Freight.

Follow the steps above to add the TForce Freight Account on the on-prem Web Client.

