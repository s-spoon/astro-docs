---
title: "Freight Packing Preferences"
draft: false
type: Article
---

These Preferences configure default settings for packing Freight shipments.
## Automatically Pack Items based on packaging scenarios


This setting enables/disables automatic item packing. This field works in conjunction with the "Automatically learn packaging scenarios while shipping" field in Maintain > Inventory. Packaging scenarios will not be used to automatically pack items unless you check this setting.


**Sort packages after auto-packing is performed**


This setting works in conjunction with the setting above, and is only available when that setting (Automatically Pack Items based on packaging scenarios) is checked. It allows you to control how package sorting occurs after Aptean Ship auto-packs your shipment based on packaging scenarios. You can also disable package sorting. Aptean Ship can sort by:
* Package Name
* Item Number
* Line Number
* Package Type
* Number of Packages
* Do Not Sort (if you do not want packages sorted)


 **Auto-Pack Preference**


This option is available if you selected to "Automatically Pack Items..." above. It relates to how auto-packing works. "Without remainder" signifies that inventory items should not be left unpacked. "With remainder" signifies that if there are any remaining inventory items, they should be left unpacked.
This drop-down list offers five choices:
* Pack tightly without Remainder
* Pack tightly with Remainder
* One Packaging Type without Remainder
* One Packaging Type with Remainder
* Pack in Fewest Packages


**For Pack Tightly (with or without Remainder)**: The Packing Assistant will first start by trying to find the packaging type that will hold the most quantity of the particular item. It will pack as many items in that packaging type and then repeat the same process again until it doesn't find a packaging type that can hold a quantity that is less than or equal to the current quantity that remains unpacked. If it is without remainder, it will find the smallest applicable packaging and create a partially full package (i.e. 10 items in a container that holds 15) or it will leave it unpacked (with remainder).

**For One Packaging Type (with or without Remainder)**: The Packing Assistant will try to find the one best packaging type that will hold the most quantity of items, and then exclusively use that to pack the items, i.e. pack 1000 items in 2 boxes that hold 400 each. With the remaining items, it will either pack the items into 1 additional box (200 items in 1 more box), or leave it unpacked (with remainder).

**For Pack in the fewest packages**: The Packing Assistant will attempt to pack all items, without remainder, in packaging types that will result in the lowest number of total packages.



## Automatically pack all loose items and packages onto one pallet


Check this option if you want Aptean Ship to automatically pack loose items and packages onto one pallet.



## Pallet Weight Classification


This setting determines whether the tare weight of handling units will be applied to the highest or lowest class included in the shipment. The default is highest. To initialize Pallet Weight Classification, enter the weight for each Handling Unit in Setup > Maintain > Packaging.

<br>**Highest Class**


Once the Handling Unit weight is defined and a Pallet Weight Classification is chosen here, for example, Highest Class, then the Pallet weight will be added to the Packaging Type with the Highest Freight Class. The Handling Unit weight will be seen on the last page of the Shipping Assistant in the Palletized Items section, in the BOL view on the Shipment Editor, and the Carrier information section of the BOL when you print the shipment.

**Lowest Class**


Once the Handling Unit weight is defined and a Pallet Weight Classification is chosen here, for example, Lowest Class, then the Pallet weight will be added to the Packaging Type with the Lowest Freight Class. The Handling Unit weight will be seen on the last page of the Shipping Assistant in the Palletized Items section, in the BOL view at the bottom of the Ship screen, and the Carrier information section of the BOL when you print the shipment.

**Example of Pallet Weight Classification**


In Maintain > Packaging, we set the Handling Unit "Pallet" to a weight of 40 lbs. There are two bags, each containing different items. The weight of the first bag is 100 lbs. The weight of the second bag is 450 lbs.
* When Pallet Weight classification is set to Highest class, the 40 lbs is added to the row for the bag with the highest class.
* When the default is set to Lowest Class, the 40 lbs is added to the line for the bag with the lowest class.


### Keep track of package contents


This setting affects how items can be packed when using the Packing Assistant or while in the Package View of the Shipment Editor. You would use this option, for example, if you need to track package content detail for EDI or label requirements. You can also enable this option when you want Aptean Ship to be able to print a package label that defines the package contents. When enabled:
* You can pack any quantity of a single item into one or more packages;
* You can pack multiple items into one package; Item A and Item B are packed into 1 box. 
    >[!Note]  You cannot put multiple items into multiple packages because this will not allow Aptean Ship to identify the package contents; for example, you cannot pack Items A, B, and C into 2 boxes.


    >[!Tip] **Multiple Packages** <br>A few functionality notes to keep in mind when you're shipping more than one package: you cannot add additional items to the package if the source interface document imports packaging information (such as MAS Invoices and MAS 500 shipments). Packed items are divided based on the Auto-Pack Preference setting.
* If, for example, the packaging scenario is 20 items to a box, and you are shipping a total of 102 items, Aptean Ship divides the items into 5 boxes of 20 items each, with 2 items in one box when "without remainder" or "fewest packages" Auto-Pack Preference is selected.
* Using the same packaging scenario (20/box) but this time with a remainder Auto-Pack Preference selected, Aptean Ship divides the items into 5 boxes of 20 items each and adds a separate row containing 2 loose items.
* Again, using the same packaging scenario but a total item count of 99, Aptean Ship would divide the items into 4 boxes of 20 each, and create a separate entry for a box of 19 items.








