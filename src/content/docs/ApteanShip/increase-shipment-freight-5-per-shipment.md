---
title: "Increase Shipment Freight $5 Per Shipment"
draft: false
type: Article
---

In this example, we set up a shipment level rule where Shipment Freight is increased by $5.00 per shipment.
1. Create a new rule by clicking **Add Freight Rule** in the Freight Rules Interface.
![](assets/images/aptean-ship-freight-rules-example-1.png)
2. Next, select **Shipment Freight Charges** as the value to be modified.
![](assets/images/aptean-ship-freight-rules-example-2.png)
3. On the next dialog, select **Increase**.
![](assets/images/aptean-ship-freight-rules-example-3.png)
4. Select "specific amount" and enter "5".![](assets/images/aptean-ship-freight-rules-example-4.png)
5. Since we want to charge this handling fee per shipment, select "None" on the next dialog. If you wanted to charge a fee for each order or each package in a shipment, you would select that here.
![](assets/images/aptean-ship-freight-rules-example-5.png)
6. For "When do you want to apply this rule" dialog, select "Always". If you wanted to apply this rule only under specific conditions, you would [define conditions](http://ask.shipping.apteancloud.com/akb/freight-rules-conditions/) on this dialog.

![](assets/images/aptean-ship-freight-rules-example-6.png)

7. Next, verify the rule you just created. In this example, there are no conditions so "under any conditions" displays under the rule. Check "If this rule applies, do not process any additional rules" if you want Aptean Ship to stop processing rules once the rule has been applied.
![](assets/images/aptean-ship-freight-rules-example-7.png)


