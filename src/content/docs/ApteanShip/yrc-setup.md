---

title: "YRC Setup"
draft: false
type: Article

---

Aptean Ship support for YRC allows you direct access to your YRC negotiated rates. You can generate a PRO#, tender the shipment, and request a pick-up. You can also print YRC-generated labels and BOLs.
### YRC Contract


If you don't already have a contract, you will need to go to my.yrc.com to register. This process can take 2-3 business days. Registered MyYellow.com users do not need to re-register for my.yrc. If you forgot your Username and Password, you can call 1-800-548-0435 to request the information.
### Enable Account for Rate Quote API Access


You will need to complete and fax a Non-Disclosure Agreement form before implementing Rate Quote API. You can download that form here:

[Rate Quote API Non-Disclosure Agreement](https://my.yrc.com/national/pdf/rqnda.pdf)

If you do not fax this completed form back to YRC, you will receive errors when attempting to rate shipments.
### Add the YRC Account in Aptean Ship


1. In Aptean Ship, select Setup > Carrier Interfaces > YRC.

2. Select the **Accounts** heading and click the **New Account** button.

	![](assets/images/aptean-ship-yrc-1.png)

3. Enter the account information.
	* Account Name: Enter a unique name to identify this account in Aptean Ship.
	* Username/Password: Enter your YRC username and password. The User ID and Password are used to access your discounted rates.
	* Business ID: Type in the business ID assigned to your YRC account. You can obtain your Business ID from your YRC Rep or by completing the YRC Non-Disclosure Agreement above.

4. Configure Billing settings.
	* Tendering Type: The choices are Call, Electronic, or Daily Pickup. Aptean Ship will only send a pickup request to YRC when Electronic is selected. For the Call or Daily Pickup options, you must contact the carrier directly.

	* Enable Prepaid: Check to enable a default Prepaid Billing Type.

	* Default Prepaid Billing Type: This is the default Billing Type for shipments that are paid for by the shipper. You can select from Sender or any other 3PL that you set up in [Maintain > 3PL](3pl-overview.md). These settings affect the options available for Billing in the Transportation section of the Shipment Editor.

5. Click **Finish**. On the Accounts page, click **Save**.


