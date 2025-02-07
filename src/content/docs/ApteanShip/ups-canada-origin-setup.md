---

title: "UPS Canada Origin Setup"
draft: false
type: Article

---

UPS Canada Origin allows you to ship to and from all Canadian provinces, as well as the U.S., Mexico, and international destinations. When logged into the Canada Origin account, currency values are shown in Canadian Dollars (CAD). When rating shipments, only Canadian services will be shown.

### Login

You must use the Login associated with the Canada Location to access the account used for Canada Origin shipments. When a user logs in with this location, only the Canadian UPS accounts and services will be available. This Login dialog displays when you launch the Aptean Ship login page in your browser. Note: If you log back in to U.S. location, you will only see the U.S. UPS accounts.

## Account Setup

Set up your Canada Origin account using the Account Setup process, accessible from Setup > Carrier Interfaces > UPS > Accounts.

Click the **Accounts** heading, select the account and click Edit.

![ups-canada1](assets/images/ups-canada1.png)

Use the Registration wizard to complete UPS registration. You can use [UPS Account Setup](ups-account-setup.md) as a guide for what to enter on the screens.

1. Enter an **Account Name** to help you identify this account in Aptean Ship.

2. Enter the **Billing** and **Shipping Addresses** for this account.

3. Accept the **UPS Technology Agreement** by clicking Next.

4. Configure settings for [Rating](ups-account-setup.md#rating) (Invoice and Dimensional Weight).

5. Configure [Account Settings](ups-account-setup.md#account-settings). See additional setup notes specific to UPS Canada Origin below.

### Setup Notes

### International Documents


You must select at least one international document to be requested in order to transmit the commodity information to UPS. In UPS Account Setup, this can be found in the [International](international.md) section.

### Inventory Items

This note involves Data Replication. If you replicate your inventory from US Origin to Canada Origin or vice-versa, you will need to adjust the Unit values in [Maintain > Inventory Items](inventory-item-international-data.md). When you edit or add the item, the values are found in the Main section.

![](assets/images/starship-shipping-software-ups-canada4.png)

International setup is required for Inventory Items. From [Maintain > Inventory Items](inventory-item-international-data.md), edit the item, and select the International section. Instead of Schedule B Information, Canada Origin uses the SC Classification information.

### Packaging

Packaging is set up per Location, so if you have custom packaging, you will need to set it up for the Canada Origin account. This can be done in [Maintain > Packaging.](packaging-overview.md)

 
## Printing Setup


### Enable UPS International Forms

* UPS returns all International forms as one multi-part PDF file, so they cannot be sent to different printers. To enable International forms to print for shipments, go to Setup > Printing & Scale, and under the Printing Profile, select UPS International Forms in the Laser Shipping Document section. Aptean Ship will print the forms you selected in UPS International Setup.


    ![shipping-software-ups-canada](assets/images/starship-shipping-software-ups-canada.png)

* If the shipment contains both NAFTA and Standard items, you cannot print the US Certificate of Origin or NAFTA Certificate of Origin; you will be prompted to use the StarShip forms instead.

### UPS High Value Report

The UPS High Value Report prints per shipment for Canada Origin. You can enable it by going into Setup > Printing & Scale, and under the [Printing Profile](printing-profiles.md), select Laser Printer Labels > UPS Laser Shipping Labels.


![shipping-software-ups-canada2](assets/images/starship-shipping-software-ups-canada2.png)

