---
title: "FedEx Canada Origin Setup"
draft: false
type: Article
---

Aptean Ship support for FedEx Canada Origin allows you to ship to and from all Canadian provinces, as well as the U.S., Mexico, and International destinations. When logged into the Canadian Origin account, currency values are shown in Canadian Dollars (CAD). When rating shipments, only Canadian services will be shown.
### Login


You must use the Login credentials associated with the Canada Location to access the account used for Canada Origin shipments. When a user logs in with this location, only the Canadian FedEx accounts and services will be available. >[!Note]  If you log back into a U.S. location, you will only see the U.S. FedEx accounts.


### Setup


To set up the account used with FedEx Canada Origin, select Setup > Carrier Interfaces > FedEx.

On the Accounts tab, select the account and click **Edit**.
![fedex-canada2-1](assets/images/fedex-canada2-1.png)
### Main


Under the Account Name, you can enter a unique name to identify this account in Aptean Ship. This is the name you'll see when selecting the account while shipping in the Shipment Editor.

### Billing Address


Next, enter the account information (Billing Address). You can type in a new address or select an Address ID you added in [Setup > Company](company-setup.md).

>[!Note] For FedEx Ground email notification, an email address must be specified for the sender account.
### Shipping Address


On the Shipping Address screen, enter the shipper information. If the Shipping address is the same as the Billing address, check the **Same as Billing Address** check box.
### Settings


These settings are configured by account and accessible when you edit the account on the Accounts page in FedEx Setup.
### Account Time Zone


Set the time zone where this account is located in order to allow the account to synchronize with FedEx processing of shipments on their servers. Shipments for the account will be automatically posted at 4 a.m. in the account's local time based on the time zone selected in this field.
### Ground Economy Setup


Ground Economy must be set up for each account that will be using it. You will only see Ground Economy as a Service on the Ship screen if the account is enabled for it.


**This account has been configured by the carrier to support FedEx Ground Economy**

Select the services supported for your account. Available services are:
* FedEx Ground Economy Media
* FedEx Ground Economy Parcel Select
* FedEx Ground Economy Bound Printed Matter
* FedEx Ground Economy Parcel Select Lightweight


**This account has been configured by the carrier to support FedEx Ground Economy Returns**

Check this box if your account supports Ground Economy return shipments.



**Hub ID**

Select the hub you will be using from Hub ID drop-down list.
### International


These settings apply to International shipments.
### Request FedEx Electronic Trade Documents for applicable shipments


Select the documents that you want FedEx to submit to the government electronically. Request and print the NAFTA Certificate of Origin for the USA and Mexico; for all other locations, request and print the Certificate of Origin. FedEx will return a copy of the documents for printing. Documents that are not checked will not be submitted by FedEx.

FedEx account ETD settings override printer settings if any ETDs are selected and the shipment requires one of these documents. FedEx will not return documents that are not checked so you cannot print them even if they are enabled under [Printing Profiles](printing-profiles.md). If one or more documents are checked in FedEx settings, then the FedEx settings take precedence as far as what can be printed (either automatically On Ship or On End of Day, or later from Shipment History).

For example: If you only check the Commercial Invoice in FedEx settings, but both Commercial Invoice and Certificate of Origin documents are enabled under the Printing Profile, only the Commercial Invoice will be available for printing from Aptean Ship.

If you do not want to use ETDs but still want to print and send the documents yourself, do not check any documents here; instead, enable the documents in Manage Documents and check the [Auto-Print](document-settings.md#auto-print) option for those documents. If you do not check any documents on this dialog, a copy of ETDs you enable in the Printing Profile will be returned for printing and will print when the shipment is processed (if you have Auto-Print: On Ship checked). You can also print these documents later by opening the shipment and printing shipment documents.To only submit electronically and not print the documents, do not enable these documents here.

>[!Tip] **More Information** <br>The setting, "Request FedEx Electronic Trade Documents," on the International tab can override FedEx settings. When ETDs are set up, this check box is automatically checked by default. You can uncheck it on a per shipment basis if you do not want to submit ETDs for a certain shipment. When you uncheck this option but have ETDs enabled in printing setup, you can still print the documents and submit them manually. This check box may be automatically disabled by Aptean Ship if you are shipping to a country that does not accept ETDs. There is a list of where you can ship with ETDs on the FedEx website.

### Mask account numbers for International Air Waybills


You can choose to have account numbers masked on the shipping label for security purposes. Note that the account numbers will print on FedEx Air Waybill copies used by operations and customs clearance. Choices are :
* Do not mask
* mask Transportation/Costs Account
* mask Duties/Taxes Account
* mask both


### Select Images


Aptean Ship can submit your company's header and signature to FedEx to use for ETDs. You can select up to 5 images for each FedEx account, from any images you previously added in Setup > Company.

>[!Tip] See [Images](company-setup.md#images) for more information.
### FedEx Export AgentFile Communication settings


The FedEx Export AgentFile® authorizes FedEx (by email, or through phone or fax) to file an EEI on your behalf. A filing fee and certain limitations apply. Select the communication method and then provide the contact information.
### Dimensional Weight


For each FedEx service, you can enter custom dimensional weight divisors that are used to calculate the billed weight. When billed weight is not returned by FedEx rating, the dimensional weight factors below will be used to calculate it. The factors default to list (published) values, but can be modified here to reflect contract rates. This will not affect the charges, only the billed weight that shows on-screen. So, for example, If you have any freight rules that use the billed weight field, it will be updated so that freight rules work correctly.


Use the Revert to Defaults button to reset values to the original defaults.



