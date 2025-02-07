---

title: "SMC³ Contract Setup"
draft: false
type: Article

---

After adding at least one SMC³ account to Aptean Ship, you're ready to add your contract details.

Select the **Contract Details** heading and click **New Contract**.

![](assets/images/aptean-ship-smc3-3.png)

## Main

On the Main page, configure the following contract details.

* **Name**
Enter a name to identify this contract. Because you can create identical contracts to compare the rates for different 3PL billings, each contract name must be unique.

* **Effective Date**
Select the starting date for this contract. If using a future date, the contract will remain disabled until that date and will not be used for rating shipments.

* **Expiration Date**
Select the ending date for this contract. The expiration date may not be earlier than the effective date.

* **Notes**
 Use this field to enter any additional notes for this contract.

* **Account**
Use the drop-down list to select the SMC³ account upon which this contract is based.

* **Carrier**
Use the drop-down list to select the carrier to which the rates returned with this contract should be applied.

* **Service**
The Service drop-down field is automatically populated with services specific to the carrier selected above. Select the service to which you want to apply the rates returned for this contract.

* **Billing**
Use the drop-down list to select the prepaid billing option for this contract. Choices are Sender and any other 3PL you set up in Maintain > 3PL.

* **Tariff**
Use the drop-down list to select the tariff upon which you want to base this contract. The tariffs contained in this list may change depending upon the account selected above. Note that until you select the account, this field will be empty.

* **Disabled**
When checked, no rates will be returned for this contract.


## Discounts


Select the **New Discount** button to enter a new discount for this contract.

Then select the discount type from the Discounts drop-down list. You can choose to apply discounts by Destination Postal Code or by Destination State. If there's no match by Zip or State, the Standard discount will apply.

![](assets/images/aptean-ship-smc3-4.png)

For Destination State discounts, select a State.

![](assets/images/aptean-ship-smc3-5.png)

 
For Destination Zip, enter the destination Zip Code range to include.

![](assets/images/aptean-ship-smc3-6.png)

### Rate Modifiers

### Rate Adjustment Factor


This is a factor that increases or decreases rates by a specific percentage. The factor is applied to the rates and the adjusted rates are used in calculating charges. Default is 1.0000 for the regular rate. (To apply a 25% discount, this number should be 0.7500) Maximum value is 9.9999

### Apply Surcharges To

Select to apply surcharges (if any are set) to Net Charges or Gross Charges.

### LTL Surcharge (%)

This surcharge allows the adjustment of the Net/Gross charge by a specific percentage. This can be used to impose a fuel surcharge. When calculating rates, SMC³ will use the LTL Surcharge setting when the shipment weight is less than 20,000 lbs. The maximum allowed value is 99.99.

### TL Surcharge (%)

This surcharge allows the adjustment of the Net/Gross charge by a specific percentage. This can be used to impose a fuel surcharge. When calculating rates, SMC³ will use the TL Surcharge setting when the shipment weight is greater than, or equal to, 20,000 lbs. The maximum allowed value is 99.99.

### California Compliance Surcharge ($)

Most carriers charge an additional fee for shipments to or from California due to increased regulations by the state. This surcharge applies a dollar amount surcharge when shipping to/from California. This surcharge is not added when shipping to/from other states.

### Min. Charge Floor

This is a contractual minimum charge that is not subject to discounting. If the calculated charge (rated or minimum) goes below the floor, this charge will be used instead. The maximum allowed value is 99999.99.

### Stop Alternation Weight (in lbs.)

Enter the weight at which to stop the rate alternation. The maximum allowed value is 999999. See [Rate Alternation](http://ask.shipping.apteancloud.com/akb/smc3-shipping/#rate-alternation) for more information.

![](assets/images/aptean-ship-smc3-7.png)

### Discount Settings

* **Apply Discounts**
When checked, Aptean Ship will apply the discounts configured on this tab, if applicable. If not checked, no discounts are applied.

* **Min. Charge Discount (%)**
This discount will be applied to the tariff's minimum charge for the origin/destination combination. The maximum allowed value is 99.99.

* **Discount (%) [L5C]**
This is the weight break discount applicable on LTL shipments weighing less than 500 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M5C]**
This is the weight break discount applicable on LTL shipments weighing 500 lbs. or more, but less than 1,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M1M]**
This is the weight break discount applicable on LTL shipments weighing 1,000 lbs. or more, but less than 2,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M2M]**
This is the weight break discount applicable on LTL shipments weighing 2,000 lbs. or more, but less than 5,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M5M]**
This is the weight break discount applicable on LTL shipments weighing 5,000 lbs. or more, but less than 10,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M10M]**This is the weight break discount applicable on LTL shipments weighing 10,000 lbs. or more, but less than 20,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M20M]**This is the weight break discount applicable on TL shipments weighing 20,000 lbs. or more, but less than 30,000 lbs. The maximum allowed value is 99.99.

* **Discount (%) [M30M]**
This is the weight break discount applicable on TL shipments weighing 30,000 lbs. or more, but less than 40,000 lbs. The maximum allowed value is 99.99.


* **Discount (%) [M40M]**This is the weight break discount applicable on TL shipments weighing 40,000 lbs. or more. The maximum allowed value is 99.99.

    ![](assets/images/aptean-ship-smc3-8.png)

### Additional Charges

Set the additional charge to apply for each accessorial when selected in the Shipment Details section of the Shipment Editor. The maximum allowed value is 999.99.

>[!Note] For Construction Site Delivery/Pickup, set the additional charge to apply when selected from the Location Information Type field in the Aptean Ship Sender or Recipient sections. The maximum allowed value is 99.99.

![](assets/images/aptean-ship-smc3-9.png)

