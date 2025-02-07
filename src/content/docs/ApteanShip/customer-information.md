---
title: "Customer Information"
draft: false
type: Article
---

Maintain Customers provides a central location where you can store all of your customer data and set up attributes so that the customer information is automatically populated when you ship to or import an order from that customer.

Customer records are identified by the **Customer ID** and **Customer Name**. You can also provide a **Vendor ID** if this customer has assigned one to your company.

Customer data is stored with the customer's Address information, which is identified by the **Address ID**. You can store multiple addresses for a single Customer ID.

From Maintain > Customers, click the Edit Address button (or add a new address) to set the following attributes for an address. Required fields are indicated by a blue field heading.

![](assets/images/maintain-customers-edit-address.png)

 
## Customer Details


* Company: Name Type in the Company Name associated with this address.
* Address Information: Enter the shipping address to associate with this Address ID.
* Other information: You can provide other details such as Store Number, Contact information, EIN, and Notes.


## Address Validation


Aptean Ship provides automatic address validation for domestic addresses. To validate the customer address, click the Validate button.

![](assets/images/customers-address-validation-2.png)

 

When Aptean Ship returns a validated address, you can use it or keep the original address.

![](assets/images/customers-address-validation.png)

 

If the address cannot be validated, you have the opportunity to choose a new address or correct the final address in the Address Validation dialog (appears automatically when you validate). For ambiguous addresses, a range of addresses may appear.

![](assets/images/customers-address-validation-3.png)

 
## Location Type (and Attributes)


Select a location type from the drop-down list. Choices are: Business with or without loading dock, Residence, or Construction site.

![](assets/images/maintain-customers-4-1.png)
 

You can also optionally assign Location Attributes by making a selection from the drop-down list.

![](assets/images/maintain-customers-5.png)

>[!Tip] For Distribution Center (DC), you must also enter an identifier in the DC Code field. The DC Code has a 10 character limit. This field is used when creating a Master BOL for Consolidated Shipments.

If you are importing customer records into Aptean Ship using the Import button in Maintain > Customers, you can also import your DC Codes with the customer data. See [Import DC Codes](http://ask.shipping.apteancloud.com/akb/import-dc-codes/) for more information.
## Accounts


For each Customer Address, you can set the default carrier accounts to use. When you're shipping, this account information will populate the customer's data in the Recipient section when the billing type is Recipient.

Click the **Accounts** heading and then enter the account number by carrier.

![](assets/images/maintain-customers-8-1.png)

