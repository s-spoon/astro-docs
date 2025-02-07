---
title: "Import DC Codes"
draft: false
type: Article
---

When importing customer data, you can configure the Import Customers target objects as described here to also import the DC Codes.

In Maintain > Customers, select File > Import Customers and go through the [import procedure](import-data.md) as you normally would. When you reach the Target Object dialog, set the Location Attributes target object to a Fixed Value and select "Distribution Center" as the value.

Next, map the DC Code field to the field that is populated with the DC Code. To do this, set the Source field to "Input Column" and then select the Column Name.

![](assets/images/maintain-customers-6-1.png)

 

In our example of the final Customer Import screen, you can see that the DC Code has correctly populated the customer record.

![](assets/images/maintain-customers-7.png)
 

