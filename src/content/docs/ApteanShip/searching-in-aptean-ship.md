---
title: "Searching in Aptean Ship"
draft: false
type: Article
---

Aptean Ship Search functionality is available throughout the interface. You can start a search by typing in the magnifying glass field. Basic search allows you to search on any field, as well as keywords that you enter.
## Source Documents Search


Source documents can be searched by Order Number or Item Number. You can switch between them using the drop-down field on the Documents page.

![](assets/images/search-order-item.png)

The list of source documents in the documents grid can be refreshed at any time by clicking the Refresh button.

![](assets/images/search-refresh.png)
### Source Document Search Options


Options for controlling source document search/refresh can be found under Setup > Source Interfaces > "Your Interface" > Options. These settings will control the behavior of searching source documents for all users.
### Disable Search of Source Documents


You can disable the ability to search documents when shipping against a source interface. When this option is checked, users cannot browse documents and are required to type the exact Order or Document Number into the document field and click the Load button to retrieve a document to ship against. A message will also appear on the Documents screen alerting the user that source document search is disabled.
### Refresh List of Source Documents after shipping


When this option is checked, Aptean Ship will update the list of documents in the Documents grid after you process a shipment. New documents are retrieved and shipments no longer matching the filters (such as Unshipped) will not be seen. For eCommerce sources, which automatically update the available documents when you ship, the default setting is checked. For other sources, where you can ship a document multiple times, the default setting is unchecked.
>[!Note] If "Disable Search of Source Documents" is checked above, this setting will not be available because browsing the documents grid is disabled.
### Filters


When searching source documents, you can change and add filters to get results in the documents grid. Click the Add Filter button to create a new filter.

Then, select the field on which you want to search. You can narrow the list of fields by typing part of the field name into the search field.

![](assets/images/search-select-field.png)

Depending upon the field being searched on, a list of values to select from is provided or you can select an Operator to indicate how you want to match your search term. The possible Operator types are:
* Contains: The values found will contain either precise or "fuzzy" matches to your search data; for example, whole or partial words or phrases, partial numbers, etc
* Equals/Not Equal: The value found is equal/not equal to the specified value.
* Begins With: With this setting, a search for " kitch" will generate entries that contain "kitchen", "kitchens", "kitchen appliance", "kitchen knife", etc.
* Range: Value "from" and "until".


## General Search Info


In general, Search allows you to search on any field in a grid using a keyword or keywords that you enter in the Search field. Search can further narrow down the list of results (grid) you get when searching source documents.
### Available Fields to Search


Click the Fields button to change the fields in the grid and therefore the fields that can be searched. This drop-down list will vary depending upon the area in which you're searching. The example below shows the fields available when searching source documents.
![](assets/images/search-avail-fields.png)

But, for example, if you are searching from Setup > Maintain > Inventory, just the inventory item fields will be available for your search.
![](assets/images/search-maint-inv-ex.png)

 

