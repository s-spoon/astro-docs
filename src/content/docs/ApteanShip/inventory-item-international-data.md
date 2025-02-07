---
title: "Inventory Item International Data"
draft: false
type: Article
---

This information will populate the International section for the inventory item when shipping this item internationally.
## Country of Manufacture


This is the country where the item is manufactured or assembled, and not the country from where it is being shipped. Note that this field will default to the first country in the list if you do not select a country.
## Schedule B/HTS Code Information (US Origin)


The Harmonized Tariff System (HTS) assigns a number to each product that is traded internationally to insure that customs officers and statisticians around the world are referring to the same thing when classifying a product. Each country can assign on its own four additional numbers, making the entire number 10 digits. The United States does this with its Schedule B system, which is used to describe exports from the U.S.

If available, include this to assist the clearance of your goods. This global system of classification speeds up exports, reduces delays and avoids potential additional fees and charges.

When processing a shipment, the Schedule B information appears in the Line Item section.
### Code


Type in the 10-digit Schedule B Export Code, or click the magnifier icon next to the field to choose from the Schedule B Codes table. The Schedule B information will be saved for both the shipment and for the inventory item. The next time you ship this inventory item, the code will be filled in.

![](assets/images/schedulebcode-1.png)

You can use the Schedule B Lookup dialog, accessible from the magnifier icon on the Maintain Inventory Item dialog, to find your Schedule B code by code number or description.

>[!Tip] **Schedule B Lookup**<br>The search field defaults to searching by Code. If searching by Code, enter a sequence of numbers that appears anywhere in the code (in this case periods are ignored). Alternately, you can search the first four digits by entering four digits followed by a period. To search by Description, drag the Description column to the first column. Type in your search terms and press Enter or click Find. To select a code, click on it and click OK. Or, simply double-click it in the grid.
### Unit of Measure


If the Schedule B code has more than one unit of measure, select the unit of measure to use for this item.
### Multiplier


Specify a multiplier to convert the Inventory UOM to the Commodity UOM.
### Description


The description is populated from the code description.

![](assets/images/schedulebcode2-1.png)
## EEI Classification (US Origin)


This is the Electronic Export Information classification type; if this inventory item requires EEI data to be submitted, enter the EEI information. EEI is required when the value at the commodity line level is greater than $2500, or when the shipment requires an export license regardless of value.

The following are the possible EEI Classification types.
### Commodity is exempt


No EEI is required because all commodities are exempt. When selected, choose the FTR Exemption ID Number from the drop-down list. A description of the exemption is shown below it.

![](assets/images/aptean-shipping-software-eei-1-1.png)
### Commodity is subject to Export License (includes License Exception)


When checked, select the Exception or Type from the drop-down list. Depending upon the selection you make, enter the appropriate information into the following fields:
* **License Exception or Type**: A license exception is a specific grant of authority by the government to exporters for certain categories of products that would otherwise require an export license. Select an entry from the drop-down list.
* **License Number**: Enter the Commerce Export License Number.
* **Expiration Date**: This is the date on which the validated license number expires.
* **License Value:** This is the license line value. This field is required when a License Number is provided.
* **ECCN**: Enter the applicable Export Control Classification Number. Click [here](https://www.bis.doc.gov/index.php/licensing/commerce-control-list-classification/export-control-classification-number-eccn) for more information the ECCN.


### Commodity is subject to ITAR


An exemption in the International Traffic in Arms Regulations (ITAR) (CFR 120-130) serves as the written authorization from the Directorate of Defense Trade Controls (DDTC) to permit the export. Therefore, it is unnecessary to have any additional license or other written approval from DDTC. When selected, fill out the following fields:
* **DDTC Exemption #**: Exemption number that exempts the shipment from the requirement for a license or other written authorization from the DDTC.
* **Registration Number**: Registration Number - also called Registrant Code - is assigned by DDTC. Before applying for licenses or using an exemption, exporters must first register with DDTC.
    >[!Tip] **Examples of Registration Numbers** <br> M-1234 or M12345 where M = Manufacturer/Exporter;
F-1234 or F12345 where F = Foreign Government official inside the U.S.;
G-1234 or G12345 where G = U.S. Government Agency or employee acting in an official capacity;
B-1234 or B12345 where B = One-time registration exceptions assigned only to individuals who are not in the business of import/export.
* **DDTC United States Munitions List (USML) Category Code**: USML Category Code is a means of identifying your export shipment; Acceptable values are 01-17 and 20-21.
* **DDTC Unit of Measure and Multiplier**: Select the unit of measure for the article being shipped as stated on the license or other export authorization. This information should be provided on the license, unless the unit of measure is the commodity itself (i.e. 4 T-55 engines, 11 centerfire rifles). In those cases, simply use an appropriate Unit of Measure code ("Items", "Pieces", etc.). The multiplier is the number of units that correspond to the DDTC measure reported for this commodity.
* **DDTC Significant Military Equipment Indicator**: An indication that some or all of the articles to be exported warrant special export controls because of their capacity for substantial military utility or capability.
* **DDTC Eligible Party Certification Indicator**: A self-certification by the DDTC registered exporter that they can meet all the ITAR criteria to use the exemption and a certification by the DDTC registered exporter that all parties to the transaction are eligible to receive USML items under the ITAR.![](assets/images/eei-itar-1.png)


### EEI - N/A


Select this option if EEI information is not available for or does not apply to this item.
## SC Classification (Canada Origin)


The Canadian Export Classification system is based on the International Harmonized Commodity Coding and Description System (HS). Canadian exporters or their agents, are required to assign an Export HS Number on all export transactions. The Canadian Export HS Number is based on the international six digit “root” with an additional 2 digits added for Canadian domestic purposes.

Type in the SC Classification Code, or click the magnifier icon next to the field to choose from the complete list of codes. The description is populated from the code description. The SC Classification information will be saved for the shipment and for the inventory item. The next time you ship this inventory item, the code will be filled in. The SC Classification information appears on the Line Item in the Line Item section.
## Certificate of Origin


The purpose of the CO is to authenticate the country of origin of the merchandise being shipped. The CO verifies the country in which the goods were manufactured. The commodity being exported and its destination determine if the CO is required.

If the CO is required for this item, enter the Certificate of Origin information.


>[!Tip] **For UPS Canada Origin** <br>If the shipment contains both NAFTA and Standard items, you cannot print the US Certificate of Origin or NAFTA Certificate of Origin; you will be prompted to use the Aptean Ship forms instead. 

Select Not Required, Standard, or USMCA and Standard.

If you selected USMCA and Standard, Aptean Ship will print the USMCA Certificate of Origin for destinations to Canada and Mexico if the goods qualify as North American Origin goods. Aptean Ship will print the Standard CO for all other countries.

The USMCA CO also requires that you fill out the following information:
* **Net Cost Method**: This method calculates the regional value content as a percentage of the net cost to produce the good. Net cost represents all of the costs incurred by the producer minus expenses for sales promotion (including marketing and after-sales service), royalties, shipping and packing costs and non-allowable interest costs.
* **From/To**: A Certificate of Origin may cover goods imported over not more than a twelve-month period.
* **Producer**: Select the producer type for this good.
* **Preference Criterion**: There are six preference criteria, A through F. Refer to Article 401 of the NAFTA and Annex 401.


    ![](assets/images/co-usmca-1.png)

