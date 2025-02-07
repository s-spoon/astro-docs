---
title: "Pitney Bowes Printing Setup"
draft: false
type: Article
---

Review these special instructions for setting up USPS label printers for Pitney Bowes.
## Supported Printers


Your printer must support the ZPL II thermal programming language. EPL-only printers are not supported by Pitney Bowes.

>[!Tip] See a list of [supported printers](supported-printers.md).

## Check Printer Compatibility and Label Settings


These steps should be performed on each Aptean Ship shipping station where USPS shipments may be processed.

### 1. Determine if each label printer is compatible with Pitney Bowes


In Setup > Printing & Scale > Printers, select each thermal printer and click the Edit Printer button.

![](assets/images/pb-print1.png)

**Printer Model \= ZPL II Thermal Printer Model**
If the Printer Model field is set to ZPLII Thermal Printer, this printer CAN be used to print USPS labels with Pitney Bowes.

**Printer Model \= EPL2 Thermal Printer Model**
If the Printer Model is set to EPL2 Thermal Printer, click the **Print Model Type** button.

![](assets/images/pb-print2.png)

* If the text "EPL2 Model" prints on the label, this means your printer only supports EPL2. This printer cannot be used with Pitney Bowes.
* If the text "ZPLII Model" prints on the label, change the Printer Model field to the ZPLII Thermal Printer Mode setting. This printer can now be used for USPS printing with Pitney Bowes.


### 2. Verify Thermal Label Setting


In Setup > Printing & Scale, edit the Printing Profile that will be used to print Pitney Bowes documents and labels. Select the Pitney Bowes USPS Parcel thermal label and confirm that the Printer field is set to use a ZPL II compatible thermal printer.

![](assets/images/pb-print3.png)

 

