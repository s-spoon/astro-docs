---
title: "Navigating By License Plate Number"
draft: false
type: Article
---

Aptean Ship can print out a label for each package as the user clicks Next to move to the next package in the shipment. For Freight shipments, this feature also allows you to process packages in a shipment using License Plate Numbers.
## Setup


The "Print label when shipper clicks Next" option must be enabled under Setup > Preferences > Freight > Shipment Processing. You can find more about this setting [here](shipment-processing.md#print-label-when-shipper-clicks-next).

![starship-shipping-software-license-plate-nav-1](assets/images/starship-shipping-software-license-plate-nav-1.png)

## More about SSCC and License Plate


SSCC fields are populated based on settings in [SSCC Preferences](sscc.md) in Setup > Preferences > EDI > SSCC; there you can set up SSCC generation options.

License Plate Number can be mapped to a field in the ERP or Ecommerce interface, or you can scan the License Plate Number of any package in the shipment to begin processing the shipment (for some ERP interfaces only).
## Shipping


Aptean Ship uses the package License Plate Number or SSCC numbers to track which package labels are already printed when you click Next, and which package labels still need to be printed, therefore one of those fields is required. If a package does not have either field populated, then the Print on Next feature will not be available.
1. To begin processing a shipment, scan the License Number of any package in the shipment or select a package in the shipment.

2. Weigh the first package or enter the package weight, and press Ctrl+F7.  Aptean Ship prompts for the next package's license plate number.

    ![shipping-software-license-plate-nav-2](assets/images/starship-shipping-software-license-plate-nav-2.png)

3. Once entered or scanned, that package is made the "Next" package and Aptean Ship processes the current package.

4. Repeat for each package in the shipment.


Ctrl-F7 can also be used to navigate among packages that have already been processed without changing the order.

>[!Important] Do not manually change the License Plate or SSCC numbers for packages in the shipment after clicking the Print on Next button. This will require the modified package's label to be reprinted manually.
## Labels


The labels that are printed during Print on Next are Aptean Ship labels and not labels returned by the carrier; this is due to the fact that the shipment cannot yet be confirmed or transmitted to the carrier. The Next button will be available for a package even if its label has already been printed. If you click "Next" on a previously printed package, no label will print. This is a result of Aptean Ship keeping track of the labels that have already been printed. If you want to reprint a label, you have to click the Reprint button. See [Reprint Package Label](navigating-by-license-plate-number.md#reprint-package-label) below for more information.
## BOL


If Aptean Ship is set up to automatically generate the BOL number, the BOL will be assigned to the first package in the shipment. Note that the BOL data (Class, NMFC Code, Weight, etc.) is not validated until you Ship/Process the shipment.
## Reprint Package Label


If you need to reprint a package label that was printed using the Print on Next feature, you will need to view the shipment (Shipments > View button on the shipment) and go to the Shipping Documents section. Clicking "Print on Next" a second time will not reprint the same label twice.

