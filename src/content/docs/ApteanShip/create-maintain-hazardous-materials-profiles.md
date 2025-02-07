---
title: "Create or Maintain Hazardous Materials Profiles"
draft: false
type: Article
---

You can create and manage profiles in Maintain > Hazardous Materials Profiles. These profiles can be applied to inventory items in Maintain > Inventory >  Hazardous Details tab. When an item with Hazardous Materials details is in the shipment, this information automatically populates the shipment. Profiles can also be assigned to line items or packages on the Ship screen. A profile must contain 1 hazardous material and can contain up to 3 hazardous materials.

In this topic, we'll go through each of the sections you'll complete when creating or maintaining Hazardous Materials Profiles.
## Profile and Description


Enter a unique name and description for the Profile. This can be any identifying name/description that you like.
## CFR/IATA


These tabs indicate the regulation set associated with every regulated shipment.
### CFR


Hazardous Materials regulated by the U.S. Department of Transportation; This type of regulation is used for all domestic hazardous shipments, and hazardous ground shipments to Canada.

>[!Note] For Canada Origin shipments, CFR is replaced with TDG.

Use the **Copy for IATA** button to duplicate this information on the IATA tab. After copying values, be sure to make any required changes on the IATA tab.

![](assets/images/aptean-shipping-software-maintain-hazmat-16-1.png)

The CFR tab contains the Code of Federal Regulations information. The grid displays CFR detail for each hazardous material added to the profile. You cannot add CFR items manually; you perform a search for an item and can then select from a list of items returned in the search result.
### IATA


Hazardous Materials regulated by the International Air Traffic Association; This type of regulation applies to all international air shipments, and all FedEx domestic air shipments.
## Search the CFR table for Hazardous Materials


To search for a hazardous material to add to a profile, click the Search button. You can search by Shipping Name or the UNID. Enter the search term and press Search. Click Select to add the material to the profile.

[spacer size\="1"]

![](assets/images/aptean-ship-hazmat-2.png)

Once a hazardous material is added to the profile, some of the field data will populate. You can enter or change values for any of the enabled fields. Refer to your hazardous materials documentation or the following resources for hazardous materials guidelines.
* [UPS Guide for Shipping Ground and Air Hazardous Materials](https://www.ups.com/us/en/help-center/packaging-and-supplies/special-care-shipments/hazardous-materials.page)
* [UPS CFR 49 Examples](https://www.ups.com/us/en/help-center/packaging-and-supplies/special-care-shipments/hazardous-materials/49-cfr-examples.page?)
* [FedEx Ground Hazardous Materials](https://www.fedex.com/en-us/service-guide/hazardous-materials.html)
* [CFR 49](https://www.ecfr.gov/cgi-bin/text-idx?SID=b3e716ffc56f9c7d19e0c61709ad375b&mc=true&tpl=/ecfrbrowse/Title49/49tab_02.tpl)


Required fields are indicated by a blue field heading. Please note that shippers are responsible for validating their own hazardous materials information entered for profiles. Additional notes for some fields are provided below.
## Important Notes


### Shipping Name


This is the proper shipping name assigned to each regulated good. This field will default to the shipping name defined for the selected CFR item. For some items, there may be extra information in the field that is not actually part of the proper shipping name; for these items, the shipping name must be reviewed and corrected. Refer to the CFR book and remove anything from the field in Aptean Ship that is listed in italics in the CFR guide.

>[!Tip] If you search for UN1950 in Aptean Ship, the first result is: “Aerosols, corrosive, Packing Group II or III, (each not exceeding 1 L capacity)”.

When you cross-reference the CFR guide, it is listed as  “Aerosols, *corrosive, Packing Group II or III, (each not exceeding 1 L capacity)*”.

![](assets/images/starship-shipping-software-maintain-hazmat-18.png)

Remove the italicized sections and you will have the proper shipping name, which is “Aerosols”.
### Technical Name


A technical name must be provided for materials that require this field. Aptean Ship will not allow you to save the Hazardous Material Profile without it.
### Exemptions


This field is for entering any DOT Special Permits or Exemptions; for example, DOT-SP 1234.
### Packed In


This field specifies the inner packaging used. This will be printed on the FedEx OP-900 forms.
### Material Attributes


The shipper may select material attributes for each hazardous material. These selections can affect shipment and packaging requirements, and shipment rates. For Limited Quantity: Though small amounts of hazardous materials do not require as much documentation, the information needs to be printed on the FedEx OP-900.

