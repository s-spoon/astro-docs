---
title: "Sales Transaction Rating"
draft: false
type: Article
---

A link to Aptean Ship Rate Quote has been added to the Sales Transaction Entry screen, allowing quick import of the current order information to the Rate Quote interface. Once in Rate Quote, you can add or modify shipment details and rate the shipment. The freight charge can be written back to the Sales Transaction. Aptean Ship can also update the Ship To address and Shipping Method. See [Custom Write-Back] for setup information.
1. After entering or pulling up an order in Sales Transaction Entry, click on the Additional menu and select Aptean Ship Rate Quote.

![](assets/images/dynamicsgp-ratequote1.png)

2. If there are multiple line items with different Ship To addresses on the Sales Transaction, you may be prompted to select one address for rating purposes.
You will only see this dialog if the Options setting "Always use ship-to address from Sales Transaction header and ignore line item ship-to" is unchecked. See [Options] for more information on this setting.
3. Log in using your Aptean Ship username and password, if prompted.
4. Aptean Ship Rate Quote opens with the order information populated. You can edit the sender, recipient, carrier, shipment option, and packaging information if necessary.
5. Click the Rate menu item and select to either **Rate Current** or **Rate Shop**.
	* Rate Current will use the selected shipment information to retrieve rates and information for the currently selected carrier;
	* Rate Shop can be used to get rates for any eligible carriers.

	![](assets/images/dynamicsgp-ratequote-ratemenu.png)

6. Review the Rate Quotes section. Choose a rate and click Apply to select it for this shipment. You can also click Cancel to go back to the Sales Transaction Entry screen.

![](assets/images/dynamicsgp-ratequote-ratequotes.png)

7. After clicking Apply, the Rate Quote window closes and the freight is written back to the Freight field.

![](assets/images/dynamicsgp-ratequote5.png)

## Sender


The Sender area displays the selected Aptean Ship Sender Address. The drop-down list will display the Sender Addresses configured in Aptean Ship [Company Setup](company-setup.md). You can switch to a different Sender Address, if desired.
## Recipient


### Residence flag


Both FedEx and UPS validate and set the Residence flag when a shipment is rated. Therefore, the Residence flag may change if the carrier validates and rates the shipment as different than what was checked.

![](assets/images/dynamicsgp-ratequote6.png)

### Change Recipient


To select a different recipient from the Aptean Ship Customer database, click the Search Customers button.

![](assets/images/dynamicsgp-ratequote7.png)

Select a customer and click OK. The Aptean Ship Customer database can be administered from [Maintain > Customers](customers-overview.md).

 
## Carrier


This section shows the Carrier detail for the shipment.

For the Account field, you can change the carrier account to any account set up for the selected carrier in Aptean Ship. When the account postal code is used for the Origin of the rate, this postal code is displayed in parentheses in the Account drop-down. This allows users who drop-ship to view the postal code that generated the rate. If no postal code is shown, the Sender postal code is used to rate.

>[!Tip] **Carrier Interfaces** <br>To edit a carrier interface account in Aptean Ship, select Setup > Carrier Interfaces and choose the carrier you want to set up. To specify which Carrier Interface is the default for a carrier, select Maintain > Carriers.

Rate Quote uses Key Word translations to select a carrier based on the Shipping Method imported from the Sales Transaction. For more information, see [Key Words](http://ask.shipping.apteancloud.com/akb/key_words/).
>[!Note] In some cases, the Service drop-down list may be blank for a selected carrier. This occurs when the carrier does not service the Recipient address selected (Postal code, country, etc), or does not support some combination of address and another shipment property. 
## Shipment Options


The shipment options displayed depend upon the currently selected carrier in the Carrier section.
## COD


The COD option is checked automatically with the COD amount filled in when the imported Sales Transaction Terms Key Words indicate it is a COD shipment.
## Insured Value


The Rate Quote client will calculate the line item total value of an imported Sales Transaction data and display the amount in the Insurance field; however, the Insurance option must be manually checked by the user.
>[!Note] If a line item quantity from the Sales Transaction is 0, Rate Quote will ignore the value of that item. See [Line Item Quantity] for more information.
## Packaging


The Packaging section displays package/handling unit information. When importing Sales Transaction data from Dynamics GP, items will be packed into the default box (set in Aptean Ship) or a custom box if no default packaging defined. The drop-down list in the Name column will contain all entries from the Packaging and Handling Unit Types database set up in [Maintain Packaging](packaging-overview.md) in Aptean Ship. If set to Custom, you can also define the Type field (box, bag, barrel, etc.).
>[!Note] If the line item quantity from the Sales Transaction is 0, Rate Quote ignores that item's weight. See [Line Item Quantity] for more information.

![](assets/images/dynamicsgp-ratequote8.png)

## Add Packaging


To add a package, click the

* ![](assets/images/salestran1.png) to add a package; or

* ![](assets/images/salestran2.png) to add a handling unit

To place a box on a pallet, click the "Packed On" drop-down field and select the pallet name. When adding a package or handling unit manually, the default packaging set up in Aptean Ship will be used as well. Default packaging is set up in Aptean Ship in [Maintain Packaging](packaging-overview.md).

## Configure Options


Click the link in the Options column to configure Package Options.
## Rate Quotes


When rating, the Rate Quotes section displays the rate for the currently selected carrier. When rate shopping, it displays rates for all available carriers. You can select a rate for the shipment by double-clicking it. Then, you can apply the selected rate to the Dynamics GP Sales Transaction by clicking Apply.

The Charge Summary tab is similar to the Charges tab in Aptean Ship. It gives you a break down of shipment charges, by List, Contract, and Applied Charges. The Entire Shipment view breaks down the totals for all packages in the shipment. The Single Package view breaks down charges for one package in the shipment. Select the package (Package 1, Package 2, etc.) for which you want to view charges from the Package field. The information that displays next to the grid shows how package or shipment charges were created. If you are using freight rules, this section would display the initial charges and then how rules were applied.

The charge columns (List, Contract, Applied) that display in the Rate Quotes and Charge Summary grid can be defined in the Aptean Ship Client, in [Setup > Preferences > Rate Quote](rate-quote-preferences.md).
## Line Item Quantity


If a line item quantity is "0", Rate Quote will ignore it's weight and value. This may occur when back-ordering an item.

