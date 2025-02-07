---
title: "Print On Next"
draft: false
type: Article
---

"Print on Next" is a Aptean Ship feature that prints out a label for each package as you click "Next" to move to the next package in a Parcel or Freight shipment.
### Setup


To use Print On Next, you have to enable its setting in Parcel and/or Freight Preferences.

For Parcel, go to Setup > Preferences > Parcel, and in the Shipment Processing section, enable the **Print label when shipper clicks “Next”** option.

![](assets/images/print-on-next-settings-parcel.png)

For Freight, go to Setup > Preferences > Freight, and in the Shipment Processing section, enable the **Print label when shipper clicks “Next”** option.

![](assets/images/print-on-next-settings-freight.png)

 
### Shipping with Print On Next


With the shipment open in the Shipment Editor, expand the Packaging section.

Enter the total number of packages in the Expected Packages fields. Fill out the weight and package details and click the Print On Next button (green arrow). The Tracking Number will populate for each package as you go to the next one. Repeat until all packages are added.

![](assets/images/print-on-next-packaging.png)

 

Alternately, you can enter information for the first package, click the Print on Next button, and allow Aptean Ship to prompt you for the total package count.

![](assets/images/print-on-next-prompt.png)

 
### Reprint Package Label


If you need to reprint a package label that was printed using the Print on Next feature, you will need to view the shipment (Shipments > View button on the shipment) and go to the Shipping Documents section. Clicking "Print on Next" a second time will not reprint the same label twice.

![](assets/images/print-on-next-reprint-label.png)
### Notes


**Package Tracking** <br>Aptean Ship uses the package Tracking Number as a way to track which package labels were already printed when you clicked "Next" and which package labels still need to be printed when the shipment is processed. Aptean Ship keeps track of any fields that are changed on the shipment after the Next button is clicked so that the tracking numbers can be voided and a label regenerated. For example, if the label prints for a package and then you change the Weight field, Aptean Ship will void the package, and the label will be reprinted.

<br>**UPS Web Services** <br>Because shipments are processed in real-time with UPS Web Services, each print-on-next-package is its own shipment and will print as "1 of 1" on the shipping label. If you are using Print on Next, be aware that those packages do not qualify for Hundredweight or Ground Freight discounts. 

**Navigating By License Plate Number** <br>For Freight Shipments, you can use the License Plate Number to process and navigate through packages in a shipment. See [Navigation By License Plate Number](http://ask.shipping.apteancloud.com/akb/navigating-by-license-plate-number/) for more information.

