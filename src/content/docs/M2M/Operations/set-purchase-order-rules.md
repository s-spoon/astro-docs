---
title: "Set purchase order rules"
draft: false
type: Article
---

You can set purchasing rules for the purchasing process in your company.

## To set purchasing rules

1. Open the **Production (CSPROD)** page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **Production**.

    Or

    2. Search for **CSPROD** or **Production** in the **Navigation box** and then select **Production**.

    **Production (CSPROD)** page appears.

2. Prepare to set purchasing rules:

    1. Click the **Purchasing** tab.

    2. Make the necessary changes.

3. To set company wide settings:

    1. In the **Sub-Contract Purchase Order Part Description** area, select which part descriptions to use when you enter sub-contract purchase orders:

        - To use the part description from the item master memo field, click **Item Master**.

        - To use the part description from the job order's operation description field, click **JO Operation**.

    2. To have purchase orders automatically open when created from the planned purchase queue, select the **Auto Open Purchase Orders Via PLNPOQ** check box.

    3. To have your fixed lot cost taxed too, select the **Tax On Fixed/Lot Cost** check box.

4. To select the type of lead time for purchase orders at the facility level:

    You have to set this for each facility if you are using multisite/multi-facility. Otherwise the **Facility** field is disabled.

    1. By default, **Facility** is displayed in the **Facility** area.

    2. Enter the number of days to allow for processing a purchase order in the **Purchase Order Processing Lead Time(days)** box.

        Or,you can increase or decrease the value by 1 using the arrow icons.

    3. In the **Dock To Stock Lead Time(days)** box,enter the number of days to allow for receiving, unloading, storing and inspection of purchased goods.

        Or, you can increase or decrease the value by 1 using the arrow icons.

    4.  In the **Purchasing Buffer(days)** box,enter the number of days to allow for any unexpected circumstances.

        Or, you can increase or decrease the value by 1 using the arrow icons.

5. On the **Toolbar**, click **Save**.