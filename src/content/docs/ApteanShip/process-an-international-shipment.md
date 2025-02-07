---
title: "Process an International Shipment"
draft: false
type: Article
---

International shipping with Aptean Ship gives you the advantage of automating the shipping process by both importing international data from the source, when it's available, filling in any missing fields on the Ship screen, and saving that data for future shipments as you process shipments. In these steps we'll go over how to add or modify international detail on-the-fly while processing a shipment. That's the easiest way to bring your commodities into Aptean Ship and ship them without having to fill out a bunch of fields every time you ship.

>[!Tip] **Important to Remember** <br>To save international data that you add while processing a shipment, make sure you have Line Item settings enabled in [General Preferences](general-preferences.md#line-items-settings).

See [Set Up Line Items](set-up-line-items.md) for all of the details. For general setup information, see the [International Setup Overview](international-setup-overview.md).

### 1. Import the Source Document


In Rate/Ship, select the document (Order, Invoice, etc.) from the Documents screen. You can [search](searching-in-aptean-ship.md) or use [filters](searching-in-aptean-ship.md#filters) to find the document you want to ship. Then, click the truck icon to create the shipment. You can also click the check box next to the document and click the **Create Shipment** button.

![software-international-shipment-1a-1](assets/images/aptean-shipping-software-international-shipment-1a-1.png)

### 2. International Line Item Detail

Next, we'll configure international line item details that may not have been imported. If you have line item [Preferences](general-preferences.md#line-items-settings) enabled, any values you add will be saved with the item for the next time you ship.

Click the **Edit** icon in the Line Items section. On the item line, click the **Open** button to edit the international data for this item.

![shipping-software-international-shipment-3-1-2](assets/images/aptean-shipping-software-international-shipment-3-1-2.png)


Click the **International** heading to add or modify values for the Country of Manufacture, Schedule B information, EEI Classification information, and Certificate of Origin for the item.

![shipping-software-international-shipment-4-2](assets/images/aptean-shipping-software-international-shipment-4-2.png)

>[!Note] For users who already set up international data for the item either via field mapping or in Maintain > Inventory, this detail will be automatically populated.

### 3. Configure Packaging and other Shipment Details

Complete any remaining shipping details as you would with any shipment
* In the Packaging section, put items into packaging and enter the package weight. In the Packaging section, enter the weight of the first box or use an electronic scale to read the weight. Click Next to navigate to the next package and repeat the weighing process. If you have the [Print on Next](print-on-next.md) feature enabled in Parcel Preferences setup, shipping labels will print for each package as you click the Next button or press Enter.

![shipping-software-international-shipment-8-2](assets/images/aptean-shipping-software-international-shipment-8-2.png)

* Configure any other Package or Shipment options in Shipment Details.

![shipping-software-international-shipment-10](assets/images/starship-shipping-software-international-shipment-10.png)

### 4. Select/Add Transportation Details


In the Transportation > Details section, add or modify the shipment details.

![shipping-software-international-shipment-9-2](assets/images/aptean-shipping-software-international-shipment-9-2.png)

### Duties/Taxes

If the shipment billing is Prepaid and the Shipper Pays field is set to anything other than Transportation, Duties, and Taxes, you can choose Recipient or Third Party from the drop-down list. Available selections in the drop-down list also change when Recipient, Consignee, Collect, or Third Party is the Billing type. For Third Party, you will also select an address. This can be an address saved in Maintain > Third Party Addresses or you can enter a new address by clicking the pencil icon.

### Broker

Brokers perform AES filing on your behalf, and give you a copy of the information that was filed and the AES Internal Transaction Number (ITN) in return. The ITN must be entered under EEI Filing in order to process this shipment. Select from the list of brokers you added in Maintain > Brokers [Brokers Overview](brokers-overview.md), or add a new broker by selecting the pencil icon.

### Importer

The Importer typically pays any fees or tariffs associated with importing goods into the country. This information prints on the Commercial Invoice. Select from the list of importers you added in Maintain > Importers [Importers Overview](importers-overview.md), or add a new importer by clicking the pencil icon.

### Parties Related

Check the Parties Related check box if the sender and recipient are subsidiaries or divisions of the same company (At least 10% ownership between sender and recipient, or vice-versa).

### Ult. Consignee/Type

Shippers can assign a consignee to receive the exported shipment. This field is required when the Ultimate Consignee is not the recipient. You can also select "Recipient" if the Ultimate Consignee is the same as the recipient. Then select the type of consignee:
* Other/Unknown
* Direct Consumer
* Reseller
* Government Entity


![shipping-software-ultimate-consignee-1-1](assets/images/aptean-shipping-software-ultimate-consignee-1-1.png)

This information prints on the Commercial Invoice. If you would like to add a consignee address, click the pencil icon.

### Documents Only

Check this box if the shipment contains only documents (items of no commercial value / not dutiable).
### USMCA Shipment


The Shipment USMCA flag is automatically set by Aptean Ship when the recipient is located in either Canada or Mexico and at least one line item requires a USMCA Certification of Origin.
### 5. Configure International Shipment Fields


Select the International heading to add or modify data for the Commercial Invoice and EEI (Electronic Export Information) filing.
### EEI Filing


EEI (Electronic Export Information) EEI is required for Non-Document shipments when the value of any individual commodity is greater than 2500 dollar and/or an export license or license exemption is required. You can click the pencil icon next to the EEI Filing field to see the EEI Filing Status, which contains the information necessary to determine if EEI filing is required (or if all items are exempt).

The following values are available for EEI Filing:
* FTR Exempt (all commodities): No EEI is required because all commodities are exempt.
* Filed by UPS (pre-departure): UPS files EEI on the shipper's behalf, for a fee.
* Filed By Shipper (pre-departure): You are required to enter the International Transaction Number (ITN) provided to you by AESDirect before processing the shipment.
* File By Shipper (post-departure): You must be AES4 approved (UPS and DHL) and have the AES4 option "Company is AES4 approved (EEI can be filed post departure)" checked in Setup > Carrier Interfaces (under Account > Settings). >
    >[!Note]  Some values may not be available to you, depending upon your carrier accounts and the selected carrier.


### AESDirect Submission for Non-Exempt Shipments


If you will be submitting to AESDirect, make sure you are logged into the ACE Portal in another browser tab. Note that when submitting to AESDirect via the ACE Portal a license number or exemption code is required for all line items, even if they are C33—No License Required items. To avoid extra steps when shipping, make sure that you specify a license number or exemption code for your items before clicking the **Submit AESDirect Filing** button.

The **ITN** field will be red. Click the **Submit AESDirect Filing** button.

![international-shipment-14](assets/images/starship-shipping-software-international-shipment-14.png)


The ACE Portal will launch in another browser tab. Complete any missing details in the shipment.

![software-international-shipment-16-2](assets/images/aptean-shipping-software-international-shipment-16-2.png)



Proceed through the four Export Filing tabs and click **Submit Filing**. At this point, you may receive an error message to fix any missing fields. Once you have done that, press Submit Filing again.

![software-international-shipment-17-2](assets/images/aptean-shipping-software-international-shipment-17-2.png)



Click **View** or **Close** on the Accepted dialog.

![software-international-shipment-18-2](assets/images/aptean-shipping-software-international-shipment-18-2.png)


When you return to the Aptean Ship tab in your browser, you'll see that the shipment was successfully submitted to AESDirect.

![shipping-software-international-shipment-19](assets/images/starship-shipping-software-international-shipment-19.png)



If you set up [POP access in International Preferences](international-preferences.md#pop3-account-access), you can save the shipment as a draft and Aptean ship will check the AESDirect response email for the ITN Number and populate it for you shortly. Or, you can copy and paste the ITN from the Shipment Manager in the ACE Portal. Click the Inquire button at any time to look up the ITN.

![software-international-shipment-21](assets/images/starship-shipping-software-international-shipment-21.png)

### EU IOSS Changes for UPS


UPS has added support for the European Union’s Value Added Tax (VAT) new rules impacting imports into the EU valued up to €150.

There are several additional fields on the International tab for shipments to the EU if the shipper collects the VAT charge at the time of sale:

**Vendor Collect ID Type Code**
* OSS (One Stop Shop)
* VOEC (VAT on Ecommerce - Norway)
* HMRC (UK)


**Vendor Collect ID Number**

Enter your VAT Tax collection registration number. Entering this number implies that you as the shipper have collected or paid the required VAT tax.

**Value Threshold**

Choose whether the value of the shipment is below/equal to the threshold value, above the threshold value, or if this is not applicable.

![shipping-software-ioss-ups-1](assets/images/aptean-shipping-software-ioss-ups-1.png)

### 6. Rate and Ship/Process

Rate and process the shipment.
* Rate the shipment or Rate Shop (optional). Rate the shipment with the currently selected carrier by clicking Rate Current from the Rate menu or by pressing Ctrl + Alt + R. To rate shop, click Rate Shop from the Rate menu or press Ctrl + Alt + S. If you are shopping, you can select a carrier from the Rate Quotes section.

![software-international-shipment-11](assets/images/starship-shipping-software-international-shipment-11.png)

* Save: To save a shipment without processing it, select Shipment > Save or press Ctrl + S. This action saves the shipment as a draft, but does not process the shipment, request pickup from the carrier, automatically print shipping documentation, or write back any shipment information. The shipment is essentially saved as a draft so you may open it and make changes.
* Ship/Process: To process a shipment, select Shipment > Ship/Process or select the Ship/Process button on the Ship screen. The shipment is tendered to the carrier. If you set up the bill of lading and/or labels to print automatically, they are now generated. Write-back to the source interface is also performed.

![software-international-shipment-12](assets/images/starship-shipping-software-international-shipment-12.png)

### Carrier Notes


**UPS**
 <br>When shipping with UPS, if you ship from a Sender address that is not the same as the UPS account address, you will have to fill out the Freight Forwarder section for the shipment in the Step 2 tab of the ACE Portal.
 
 **FedEx**<br>FedEx does not accept vague commodity names and may return an error if the value you enter is not considered valid. See [Tips for Accurate Descriptions](https://www.fedex.com/en-us/shipping/international/create-documents.html) for more information about what is considered a "vague" description.
 
  **USPS** <br>USPS Priority Mail International shipments to Canada have zone-based rating instead of one rate for all of Canada. Zone-based rating requires that you enter a valid postal code when processing a shipment in Aptean Ship.

