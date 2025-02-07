---
title: "Parcel Packing Preferences"
draft: false
type: Article
---

These Preferences configure default settings for packing Parcel shipments.
### Automatically Pack Items based on packaging scenarios


This setting enables/disables automatic item packing. This field works in conjunction with the "Automatically learn packaging scenarios while shipping" field in Maintain > Inventory. Packaging scenarios will not be used to automatically pack items unless you check this setting.

### Sort packages after auto-packing is performed




This setting works in conjunction with the setting above, and is only available when that setting (Automatically Pack Items based on packaging scenarios) is checked. It allows you to control how package sorting occurs after Aptean Ship auto-packs your shipment based on packaging scenarios. You can also disable package sorting. Aptean Ship can sort by:


* Package Name
* Item Number
* Line Number
* Package Type
* Number of Packages
* Do Not Sort (if you do not want packages sorted)


### Auto-Pack Preference


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
### When importing orders, pack all loose items into default package(s)


Check this setting to automatically pack loose items into your default packaging. You can set up packaging and packaging defaults in Maintain > Packaging.

**All Items In One Package**: Anything that is left loose after the packaging scenario is completed will be put into the default packaging.

**Max # of Items Per Package**: Designate the number of items automatically packed into a package by entering a number in the field provided. All items (even different ones) will be packed in the same package until the maximum number is reached.
### Default Box Freight Class


This setting enables you to rate with freight carriers when shipping. When set to NA, freight carriers will not be included when you rate shop. Choose a freight class for the default box from the drop-down list.

### When adding items from Aptean Ship inventory, place loose items in


* first package: Aptean Ship puts loose items to the first package in the shipment.
* new default package: Aptean Ship will add a new package based on your default package setting and add the items to it.
* leave loose: Aptean Ship will not pack the loose items into packaging.


### When switching modes from Freight to Parcel and items are packed in packages with quantity greater than one


This setting applies when, for example, you switch from a shipment being Freight to it being Parcel, and you have multiple items packaged across multiple (more than 1) packages on the same line in the Packaging view. In Parcel mode, since there can only be one package per row, Aptean Ship needs to divide the packages into separate lines. This setting controls the division process. Make a selection from the drop-down list.
* Prompt every time: This is the default setting. A prompt will appear and require user intervention.
* Never divide the items: All items will remain in the original package. For example, if a BOL row contains 50 items packaged across 5 boxes, "Box (Qty: 5)", and the shipper switches from Freight to Parcel, Aptean Ship will package all 50 items in the first box and create 49 additional boxes, 1 per row. The shipper may need to manually enter the weight, or weigh the boxes on a scale, to have the weight entered.
* Divide items only if they divide evenly among the packages: Aptean Ship will only distribute items if the same amount of items can be placed in each package.
* Always divide items: Aptean Ship will automatically divide items into packages. Note that once packages are divided, the process cannot be reversed.


    >[!Tip] **Save selection and don't ask again** <br>On the user prompt, you can select to "Save selection and don't ask again". Check this box before making your selection if you do not want to be prompted again. When checked, your selection will be saved to your Preferences. To go back to your original setting or change this setting, you will need to return to Preferences and change the "When switching modes from Freight to Parcel and items are packed in packages with quantity greater than one..." setting. 




