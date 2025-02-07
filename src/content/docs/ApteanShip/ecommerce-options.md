---
title: "eCommerce Options"
draft: false
type: Article
---

The following settings apply to all eCommerce interfaces.
## Related Documents



### Retrieve related documents (those having the same ship-to address) when shipping


When checked, Aptean Ship will show documents with the same Ship-To addresses, allowing you the possibility of combining related documents.


Aptean Ship will search for related documents based on the criteria chosen here. You can also limit the number of related documents to load when shipping by entering a number in the "Maximum number of related documents" field. The default setting is 8. For "Related document criteria," select the way Aptean Ship should find related Sales Orders and Invoices. You can choose from Ship-To Address or Ship-To Address and Shipping Method.
## Additional Options


### Purge unshipped orders from Aptean Ship database after




Enter the number of days (from the Order Date) to keep unshipped and shipped orders in the Aptean Ship database. Unshipped orders are orders that have been downloaded from your eCommerce company and are ready to ship, but have not yet been processed in Aptean Ship. The default setting is 30 days.
### Purge shipped orders from Aptean Ship database after




Shipped orders are orders that have been downloaded and processed in Aptean Ship. The number of days cannot be less than the value you selected for "Unshipped" orders above. The default setting is 31 days.

>[!Note] Shipments are purged only from the Aptean Ship database and have no effect on your orders in the eCommerce site.


 
### Keyed Import searches by


Aptean Ship can use either the Item Number or Order Number to find and import your eCommerce orders. The default setting is Order Number.

>[!Tip] The Item Number represents the eBay Item ID. For the buyer, an item’s number can be found on the item page, to the right of the listing title. For sellers, the item number appears in your listing confirmation email, and in your Selling section of My eBay. Order Number represents the Selling Manager Sales Record Number. 

>[!Tip] The Item Number represents the Seller SKU (Stock Keeping Unit), which is your product identifier. Order Number represents the Order ID, a unique Amazon-created identifier for an order.
## Options


### Run in Diagnostic Mode


Check this option to have Aptean Ship run in a special diagnostic mode that shows the raw input from the source interface before any mapping or translations are performed on it. When enabled, a Show Diagnostics button appears on the eCommerce tab.
### Enable logging of eCommerce transactions


Aptean Ship will run in a special mode that provides more information to aid Technical Support. You can also specify Normal or Maximum levels of logging. The log file can be found in the path specified in the Aptean Ship Connector > Settings > "Path to logging folder" field.
### Disable search of Source Documents


This option controls searching for eCommerce documents on the Shipping window. When it is checked, Aptean Ship will not display the Search Documents grid and will require that you enter the exact Order or Document Number.
### Refresh List of Source Documents after shipping


When this option is checked, Aptean Ship will update the list of eCommerce source documents in the Documents grid after you process a shipment. New documents are retrieved and shipments no longer matching the filters (such as Unshipped) will not be seen. For eCommerce sources, which automatically update the available documents when you ship, the default setting is checked.

>[!Note] If "Disable Search of Source Documents" is checked above, this setting will not be available because the Documents grid is disabled.





