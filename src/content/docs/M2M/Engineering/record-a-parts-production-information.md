---
title: "Record a part's production information"
draft: false

---

Made2Manage stores information about each standard part or assembly in an item master. Bills of material, routings, and production schedules use the item master's production information. The third step in adding an item master is to record production information.

**Note:** Before you do this, you must record the part's basic information and design and revision information.



## To Record a Part's Production Information in the Master Tab

*Enter the item's source*

1.  From the **Source** drop-down list, select the item's source.
2.  If the item is a stock item that you buy, select the **Purchase** check box.

*Enter other details*

1.  To backflush this item from inventory, select the **Backflush** check box.

    **Note:** MDI parts cannot be backflushed.

1.  From the **ABC Code** list, select the code for the item's cost. Select **Edit** in the drop-down list to add custom values to the list.

*Enter* *buy item details*

1.  If it is floor stock, select the **Floor Stock** check box.
2.  Specify the number of days lead time you need to order and receive the item in the **Lead Time (Days)** field.
3.  Specify the number of days required to allow for receiving, unloading, storing and inspection of purchased goods in the **Dock to Stock LT (Days)** field.

*Enter sell item details*

1.  In the **Additional Info** tab, specify the price in the **Selling Price**

    field.

2.  In the **Price Schedule Type** drop-down list, select the price schedule type:

    » If the part does not use a price schedule, select **None**.

    » If the part uses a single price schedule for all customers, click **Fixed**.

    » If the part uses different price schedules for different customers, click **Variable**.

3.  If the **Price Schedule** box is not disabled, click the lookup reference and select the default price schedule from the **Lookup For Price Schedule** window.

*Select the person responsible for purchasing the item or overseeing its assembly*

-   In the **Master** tab, from the **Planner** drop-down list, select the person responsible for purchasing the item or overseeing its assembly.

*Finish entering production details*

1.  If the item is a buy item that requires inspection, select the **Inspection Required** check box.
2.  Click the **Location** lookup reference and select the item's location from the **Lookup For Location** window.
3.  Click the **Bin** lookup reference button and select the item's bin from the **Lookup For Bin** window. If the correct bin does not appear, type the bin number in the **Bin** field.
4.  If the **Backflush** check box is selected, two fields **Backflush Loc** and **Backflush Bin** are displayed. Click the **Backflush Loc** and **Backflush Bin** lookup reference buttons and select the required row from the **Lookup For Backflush Loc** and **Lookup For Backflsuh Bin** windows respectively.
5.  From the **Source Facility** drop-down list in the top panel outside the tabbed area, select the item's source facility.
    1.  In **Additional Info** tab, in the **Inter-Facility Trans Cost** field, specify an estimate of the inter-facility transport cost.
    2.  In the **Time (days)** field, specify an estimate time to transport items from one facility to another facility.

        **Note:** Both the **Inter-Facility Transport Cost** and **Time (days)** fields are enabled only if the company has multiple facilities.

    3.  In the **Planning** tab, specify the percentage left after scrap in the **Yield Factor(%)** field.

        **Note:** Only Planning and Scheduling uses this yield factor.

    4.  In **Additional Info** tab, specify the weight per inventory unit in the **Weight** field.
    1.  If the item requires a lot or serial number:
        1.  Select the **Require Lot/Sn** check box in **Master**

            tab.

        2.  If the item requires an expiration date, select the

            **Require Expiration Date** check box.

        3.  From the **Extent of Control** list, select the level of control the item requires.

*Enter Standard Allowance and Charges (SAC) details*

1.  In **Additional Info** tab, select the **EDI SAC** check box if SAC is applicable to the item.
2.  Select the required option from the **SAC Type** list:

    » **Charge**: If charge is applicable to the item.

    » **Allowance**: If allowance is applicable to the item.

    » **None**: If neither charge or allowance is applicable to the item.

    **Note:** Items for which EDI SAC is enabled are exported as SAC elements.

*Save*

-   Click **Save** on the **Toolbar** to save the information.

The next step is to [record the item's cost information.](record-a-parts-cost-information.md)