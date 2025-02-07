---

title: "UPS Hazardous Materials Shipments"
draft: false
type: Article

---

UPS Web Services supports validation of HazMat shipments and printing of the required paperwork.

### Required Forms

UPS requires the following forms for HazMat shipments. They can be set up in [Printing Profiles](printing-profiles.md). 
See [Enable HazMat/DG Documents](enable-hazmatdg-documents.md) for more information.

* Form 02111400: US Domestic 49 CFR Shipping Paper (no titles)

* Form 02111405: Standard to Canada Shipping Paper (no titles)

UPS account holders can order these forms online here or by contacting UPS Customer Service at 1(800) 742-5877.

### Account Setup

It is necessary to check the option to "Request UPS Hazardous forms" in your Aptean Ship UPS Account Settings. To do this, go to Setup > Carrier Interfaces > UPS, and on the Accounts page, select to Edit the UPS account. The required setting is under Settings > Contract Services. For more information, see [Contract Services.](ups-account-setup.md#contract-services)

### Preferences Setup

Another setting that affects how Hazardous Materials detail is populated when shipping is the Hazardous Materials Preference that, when checked, allows Aptean Ship to control the Hazardous Materials option and assign the Profile for a package based on its line items. This setting can be found in Preferences > Preferences > [Hazardous Materials Preferences](hazardous-materials-preferences.md).

### Printer Setup

Before printing these forms, check that the printer that is handling the UPS HazMat Shipping Papers has the proper page sizing set up. If the page sizing is set to something other than "Actual Size" or "Retain Size", the label will not print properly. The setting for the page size is usually in the Properties or Preferences for the printer. The setting name and location may vary based on your printer.

![](assets/images/actualsize.png)

[spacer size="2"]

### HazMat/Non-HazMat Packages in Shipments

UPS Web Services does not allow the combination of hazardous packages and non-hazardous packages in the same shipment. When the option to "Request UPS Hazardous forms" is checked, you will be required to create different shipments for hazardous and non-hazardous packages.

### Hazardous Materials Shipments

The following steps show you how to process a Hazardous Materials shipment for UPS.

Select **Rate/Ship** from the top menu. Select the source document you want to ship and click the **Create Shipment** button.

![](assets/images/ship-ecommerce-orders-1.png)

[spacer size="2"]

Select the **UPS Service**.

You can view Hazardous Materials line items by clicking the Edit button in the Line Items section.

![](assets/images/Aptean-Ship-shipping-software-hazmat-shipping-2-2.png)


[spacer size="2"]

When line items that are designated as Hazardous are on the shipment, Hazardous Materials information is automatically populated. The Hazardous option is checked and the HazMat Profile populated (if applicable).

![](assets/images/starship-shipping-software-hazmat-shipping-1.png)

[spacer size="2"]

You can also check the Hazardous option manually at the package level under Packaging or Package Details, as well as assign a predefined Hazardous Materials Profile.

![](assets/images/Aptean-Ship-shipping-software-hazmat-shipping-3-2.png)

![](assets/images/starship-shipping-software-maintain-hazmat-19.png)

[spacer size="2"]

> [!Note] ["**Hazardous Materials Profiles**"] - Aptean Ship allows you to maintain a database of hazardous goods (using the Maintain Hazardous Materials Profiles feature) that you can select from while shipping. For more information about setup, see [Hazardous Materials Profiles](hazardous-materials-profiles.md).

[spacer size="2"]

The Hazardous Materials option in Shipment Details will be automatically enabled.

![](assets/images/Aptean-Ship-shipping-software-hazmat-shipping-7-2.png)

[spacer size="2"]

After all of your shipment details have been entered and the shipment has been rated, select to Ship/Process the shipment. Once the shipment is processed, you return to the Documents screen. You can click on the Printer icon to view the printing status for the shipment documents. Click on the Shipment number to open the processed shipment to view or reprint any documents.

![](assets/images/starship-shipping-software-hazmat-shipping-4.png)

[spacer size="2"]

>[!Note] Aptean Ship will print the UPS Hazardous Materials Manifest when you run End of Day. 

