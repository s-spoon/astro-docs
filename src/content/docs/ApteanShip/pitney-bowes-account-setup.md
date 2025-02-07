---
title: "Pitney Bowes Account Setup"
draft: false
type: Article
---

The Aptean Ship interface for Pitney Bowes supports small parcel domestic, international, and APO/FPO/DPO shipments. Pitney Bowes provides a service to manage postage, and print complete postage-paid shipping labels for domestic and international mail. Aptean leverages the latest web service technology to make Pitney Bowes functionality available through Aptean Ship.

If you already have a Pitney Bowes account, follow the steps to set up an existing Pitney Bowes account in Aptean Ship. Users who do not yet have a Pitney Bowes account should follow the steps to create a new account, which can be done directly in Aptean Ship.

## Set Up an Existing Pitney Bowes Account


1. In Aptean Ship, select Setup > Carrier Interfaces > Pitney Bowes.

2. Select the **Accounts** heading and click the **New Account** button.

![pb-1-1](assets/images/pb-1-1.png)

3. Select the **Add existing account** option. In the Account Name field, enter a unique name to identify this account in Aptean Ship. Then, enter your Pitney Bowes User Name and Password.

![pb-2-1](assets/images/pb-2-1.png)

4. On the next dialog, enter the company address information for this account. You may also select an Address ID to associate with this account; this is optional. If you do choose to link this account with an Address ID, you will then be able to select the Pitney Bowes Account ID in the Shipment Editor, under Sender, while processing a shipment. Phone number and email address are required.

![](assets/images/pb-3-1.png)

5. When you click Next, you can configure [Account Settings](pitney-bowes-account-setup.md#account-settings).


 
## Create a New Account


1. In Aptean Ship, select Setup > Carrier Interfaces > Pitney Bowes.

2. Select the **Accounts** heading and click the **New Account** button.

![pb-1](assets/images/pb-1.png)

3. Select the **Create new account** option and enter an Account Name, a unique name to identify this account in Aptean Ship.

![](assets/images/pb-newaccount-1-1.png)

4. Click Continue on the Payment Method screen to set up your payment method for your Pitney Bowes shipping postage account.

5. When complete, continue on to configure [Account Settings](pitney-bowes-account-setup.md#account-settings).


## Account Settings


### Refill


These settings allow you to configure how refills to your postage balance should occur. Check the **Refill Enabled** check box if you want your account to be automatically credited with the Refill Amount when you hit the Low Balance Threshold. The Low Balance Threshold indicates the balance, when reached, which will trigger your account to be refilled with the Refill Amount.

![pb-4-1](assets/images/pb-4-1.png)

## SCAN Form

Set up your USPS SCAN forms.

## Print SCAN Form


The SCAN form consolidates an entire day’s shipments into a single form with a barcode that is scanned by the USPS driver when the packages are picked up. You can also select to group shipments on the SCAN form by Sender Zip Code or Cost Center.

![](assets/images/pb-5-1.png)

The SCAN Form must also be set up to print in Setup > Printing & Scale under the Printing Profile you use to print Pitney Bowes documents and labels.

![](assets/images/pb-7-1.png)

>[!Tip] More information about setting up Documents, see [Printing Profiles](printing-profiles.md).

## Pickup


### Send pickup request to USPS (will be scheduled for the next day)


Check this setting to schedule a free next-day package pickup; USPS will come get your shipment during regular delivery hours.
### Send pickup on Fridays for Saturday pickup?


Check this option to have the pickup request sent on Friday for a Saturday pickup.
### Pickup Location


Select a pickup location from the drop-down list. If you select Other, you can type your instructions in the Pickup Instructions field.

![pb-6-1](assets/images/pb-6-1.png)

