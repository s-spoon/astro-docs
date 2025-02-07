---
title: "Notes About Importing HazMat Profiles"
draft: false
type: Article
---

Aptean Ship gives you the ability to import existing Hazardous Materials or Dangerous Goods Profiles from a .TXT or .CSV (comma-delimited) file. In Maintain > Hazardous Materials Profiles, select the Import button. For more details about the Import process, see [Import Data](import-data.md).

![software-maintain-hazmat-1-1](assets/images/aptean-shipping-software-maintain-hazmat-1-1.png)

On the mapping dialog,  you must map all of the required fields for the import to work correctly. The required fields are marked by an asterisk. You can use the **Auto Mapping** button to have Aptean Ship identify the data from the import file and map the fields for you. The Target Fields are the Aptean Ship shipment fields, and to the right you have the import data from your file.

![software-maintain-hazmat-2-1](assets/images/aptean-shipping-software-maintain-hazmat-2-1.png)
## Required fields


* Item Name / Profile ID
* UNID
* Proper Shipping Name
* Hazard Class
* Packing Group
* Subrisk (if applicable)
* Technical Name (if applicable)
* Unit Of Measure
* Packing Instructions (if using the IATA regulation set)


The following required fields can be set to a fixed value on import if they are missing from the file you are importing.
* Inner Packaging Count
* Inner Packaging: Type of Packaging
* Qty (In the *Unit of Measure* above)
* Regulation Set: CFR, IATA, CFR and IATA, or TDG (TDG is applicable to Canada origin only)

    ![software-maintain-hazmat-3-1](assets/images/aptean-shipping-software-maintain-hazmat-3-1.png)


For fields with values, you can translate the import field values to Aptean Ship values on the Value Translations dialog:

![software-maintain-hazmat-4-1](assets/images/aptean-shipping-software-maintain-hazmat-4-1.png)

 

