---
title: "Quotation"
draft: false
type: Article
---


## Types of Quotes

**None**: Disables the ability to request quotes through CRM.  
**Doc**: CRM sends specifications and design documents to ERP for quoting. After review, ERP sends the quote and related documents back to CRM.

**External**: For complex quoting processes, CRM provides a login/link to the ERP quote system. The CRM user enters the quote requirements in ERP, and any updates are made through the ERP quote module.  

**Master List**: ERP sends a product master list to CRM, which includes product names, UOM, and attributes. The CRM user selects products and quantities, then sends the quote details to ERP for processing.

### Create a Quotation in CRM

You can create quotation in CRM by:

- Creating from **Company**

- Creating from **Opportunity**

Once integrated, historical quotes are sent from ERP to the CRM display, similar to invoices and orders.

### Convert a Quote into a Sales Order

Here’s a use case for turning a quote into a sales order with the Doc integration type:
1.	Create a Quotation from **Company** or **Opportunity**.
2.	Attach specifications or design documents to the quotation. 
3.	Go to **Options** > **Price Quote**. A request is sent to ERP, and viewed from **Claim Store**. The quote status is updated from **New** to **Pending**. 
4.	ERP returns the quote total and the status is updated to **Completed**. 
5.	Go to **Options** > **Create Order**. <br> A create order request is sent to ERP. 
6.	Once the order is created, ERP sends back a link, which is displayed as the linked order in the quotation. 







