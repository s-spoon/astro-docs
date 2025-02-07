---
title: "Customer Management"
draft: false
type: Article
---


1.	Enterprise can start with a stand-alone CRM and later integrate with ERP. 

    For the initial import, use the **Import** feature (**Setup** > **Import**) in CRM to import batch records, such as Company/Contact/Lead, and more.

    Once ERP is ready for integration, enable Integration under the **ERP sync configuration** screen. ERP will then push over all companies/contacts.

    This may result in duplicate records, one from the initial import (with an integration key) and the other from ERP (with an integration key).

    To resolve duplicates, use the **Duplicate** feature (**Setup** > **Duplicates**) in CRM. This allows you to identify duplicate records, **Set ERP as Master**, and **Mass Merge**. 

2.	Validating a Prospect and Promoting them to a Customer.

   Sales and marketing teams use CRM to nurture leads and prospects into customers. Marketing may upload purchased prospect lists into Aptean CRM, resulting in contacts and companies that are not yet customers. These records should exist in CRM but not in ERP.

    Once validated as a customer, you can sync the company/contact to ERP. Go to **Company record** > **Options** > **ERP Validation** to send a validation request to ERP. After integration, an Integration Key will appear under the  **Company** > **Profile** tab. 
