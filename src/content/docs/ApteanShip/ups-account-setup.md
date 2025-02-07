---

title: "UPS Account Setup"
draft: false
type: Article

---

The UPS Developer Kit License and Registration Wizard helps you to complete the necessary requirements for registering your UPS account. You will need to register each account separately.

UPS Account Setup is accessible from Setup > Carrier Interfaces > UPS. You will find any UPS accounts registered to your serial number by selecting the Accounts heading. Each account must be set up individually.

To set up an account that is not yet ready for rating/shipping, click the Edit button next to the account:

![](assets/images/aptean-shipping-software-ups-1-1.png)
 
1. Click **Next** on the UPS Developer Kit wizard screen.

    ![](assets/images/aptean-ship-ups-web-services-2.png)

2. Enter the **Account Info**. For the Account Name, you can enter any name you want to identify this account in Aptean Ship.

    ![](assets/images/aptean-ship-ups-web-services-1-1.png)

3. Next, enter the account **Billing Address** information. You can also select a previously set up Address ID from the drop-down list to populate the address fields. If you do choose to link this account with an Address ID, you will then be able to select the UPS Account ID in the Sender section of the Shipment Editor when shipping.

    ![aptean-ship-ups-web-services-3](assets/images/aptean-ship-ups-web-services-3.png)

4. Do the same for the **Shipping Address**. If the Shipping address is the same as the Billing address, check the Same as Billing Address check box.

5. Read the **UPS Technology Agreement** and click Next to agree.

6. Configure UPS Options as described in the more detailed sections below.


## Rating

### Invoice Information

Enter the Invoice Information (if applicable). If you have a UPS invoice from the past 90 days, check the  "This account has been issued a UPS invoice within the past 90 days" check box. Then, fill in the Invoice information from your last UPS Delivery Service Invoice.

![](assets/images/ups-invoice-1.png)

Entering the Invoice Information will add the account to your UPS Profile. This will allow shipping with UPS Web Services and access to the account's negotiated rates.

### Dimensional Weight Factor

For each UPS service, you can enter custom dimensional weight divisors that are used to calculate the billed weight. Although UPS calculates and returns both the list (published) and custom rates, only the list value of the billed weight is returned. The dimensional weight factors below are used by Aptean Ship to calculate and display the custom billed weight value on the Ship screen.

The factors default to list (published) values, but can be modified here to reflect contract rates. This will not affect the charges, only the billed weight that shows on-screen. So, for example, If you have any freight rules that use the billed weight field, it will be updated so that freight rules work correctly. Use the Revert to Defaults button to reset values to the original defaults.

The default dimensional weight for U.S. domestic service packages and Canada Origin packages to the U.S. are calculated as follows:

* U.S. domestic services packages that are greater than 1,728 cubic inches use a 139 divisor to calculate dimensional weight.

* U.S. domestic services packages less than or equal to 1,728 cubic inches use a 166 divisor to calculate dimensional weight.

## Account Settings

### Contract Services

Select or deselect your registered contract services based on what you want to allow in Aptean Ship. If you select a service for which you are not registered, you will get an error when you try to process a shipment. Here are additional notes about some of the options:

### Request UPS Hazardous forms

When shipping UPS HazMat shipments, UPS Web Services validates HazMat shipments and returns the required shipping papers. Check this option if you want to use the UPS-generated hazardous forms.

A few notes before you select this option:

* UPS Web Services does not allow the combination of hazardous packages and non-hazardous packages in the same shipment. When the option to Request UPS Hazardous forms is checked, you will be required to create different shipments for hazardous and non-hazardous packages.

* Also, when you check this option, you will need to use different label stock to print the hazardous forms. For more information on enabling and printing the required forms, see [UPS Hazardous Materials Shipments](ups-hazardous-materials-shipments.md).


### Restricted Articles

Certain items that UPS lists as restricted can still be shipped on a contractual basis but you must have a contract with regular volume and be able to adhere to all regulations before UPS accepts it. Once your contract has been approved to ship restricted articles, you can select those items you were approved for here.

![](assets/images/ups-restricted.png)

### UPS Mail Innovations and UPS SurePost

When you enable one or both of these options, you will be able to select the Services to include and add or maintain USPS Cost Centers.

### UPS SurePost

When enabling UPS SurePost, at least one SurePost service must be selected. If the "Only UPS SurePost APO/FPO & PO Boxes" box is selected, SurePost will only be available to those specific destinations.

![](assets/images/ups-surepost-1.png)

### Maintain USPS Cost Centers for SurePost and Mail Innoations

If you ship from multiple locations with a single account, you can use the Cost Center to differentiate between locations. In the field provided, enter a Cost Center code and click Add. The code may be alphanumeric and is limited to 50 characters. You can add multiple cost centers, which appear in the list below. The Cost Center is optional for both Mail Innovations and SurePost shipments.

![](assets/images/ups-mailinnov-1.png)

### UPS Simple Rate

UPS Simple Rate offers flat rate pricing for a variety of package sizes up to 50 lbs.

For more information, see [UPS Simple Rate](ups-simple-rate.md).

### International

The first section allows you to select the International documents to request from UPS when you process an International shipment. The documents will be compiled together into one PDF file, called the "UPS International Forms".

> [!Tip] See [International Documents Setup](ups-international-documents-setup.md).

### Documents

Place a check mark next to the documents that you want to print. Some notes:

* CN22 is for Sure Post and Mail Innovations only.

* If you select to print the Packing List, there must be at least one item in each package.

![](assets/images/ups-intl-1.png)

### Company is AES4 approved

If you are AES4 Approved, check this box so you can file the EEI post-departure. This setting must be enabled in order for the EEI post-departure option to appear on the International tab when processing International shipments.

## Rate Discounts

This section allows users who signed up for a UPS account through Worldwide Express to set up their rate discounts for WWEX or Unishippers.

Check the "Use rate discounts" check box to enable Worldwide Express. You can then enter the discount percentage for each service you use. The weight break is the weight threshold at which your discount percentage is applied. For all services, you can modify the percentage by clicking in the Discount(%) field.

>[!Note] Only the UPS Ground service allows you to enter a different weight break (Add UPS Ground Discount button). To change the weight break, click in the "Wt. Break" field and enter the new weight break. Then, add the corresponding discount percentage. 

When shipping, the Contract charges will be the UPS List rates minus the discount percentages you set up here.

## Accessorials

These are the list and contract charges for some accessorials for your UPS account. Only the accessorials not supported by the UPS Developer Kit will be shown in this grid. If you are currently using the Contract charges, you can use the Revert to List Charges button to go back to list rates.

 

