---

title: "Switching From Freight to Parcel"
draft: false
type: Article

---

This scenario is about switching modes from Freight to Parcel when items are packed in packages with a quantity greater than one. This means that you switch from a Freight carrier to a Parcel carrier and you have multiple items packaged across multiple (more than 1) packages on the same line in the Packaging view.

With Parcel, since there can only be one package per row, Aptean Ship needs to divide the packages into separate lines. The default setting for what to do when switching from freight to parcel is to prompt the shipper with a dialog containing selections for dividing or not dividing. The shipper has the option to save the selection made on this dialog as the default setting.

You can also change this setting in Setup > Preferences > Parcel > [Packing Preferences](http://ask.shipping.apteancloud.com/akb/pprefs-packing/#when-switching-modes-from-freight-to-parcel-and-items-are-packed-in-packages-with-quantity-greater-than-one). Note that once packages are divided for a shipment, the process cannot be reversed.

* Don't divide: All items will remain in the original package.

* Divide if evenly distributable: Aptean Ship will only distribute items if the same amount of items can be placed in each package.

* Divide: Aptean Ship will automatically divide items into packages.


### Save selection and don't ask again

Check this box before making your selection if you do not want to be prompted again. When enabled, your selection will be saved to Setup > Preferences > Parcel > Packing Preferences. This preference is saved per user. To go back to your original setting or change this setting, you will need to return to General Preferences and change the "When switching modes from Freight to Parcel and items are packed in packages with quantity greater than one..." setting.

 

