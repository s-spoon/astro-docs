---
title: "Set field service's general behavior"
draft: false
type: Article
---

Before you begin working with field service, specify how you want field service to behave, including how it updates financial.

## To set field service's general behavior

1. Open the **Field Service Setup Information (CSFSM)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Field Service Setup Information**.

    Or

    2. Search for **CSFSM** or **Field Service Setup Information** in the **Navigation box** and then select **Field Service Setup Information**.

    **Field Service Setup Information (CSFSM)** page appears.

2. Make the necessary changes.

3. Specify service-order information:

    1. Enter the name you want to call your serviced equipment in the **Field Service Product Label** box. This name appears on Made2Manage windows.

        The default name is machine. You can enter up to 20 characters. If you exceed 10 characters some windows may not display the full name. The name you enter here replaces the default name Machine.

    2. Select the **Default New** **BOM** **Components As Serviceable** check box, if you want components to be marked as serviceable by default when added to a bill of material.

    3. Select the **Post Expenses (At Close Of A Service Order, Post Labor & Expenses To OCDIST)** check box,if you want expenses, including labor, posted when a service order is closed.

    4. Select the **Default Commissions On Field Service Sales Order** check box if you want to create commission records for Field Service Sales Orders automatically using the commission code entered on the **Field Service Control (FSORD)** page. Even if this check box is clear, you can manually add commission records to the **Field Service** **sales order** after it is created.

    5. In the **Explode Standard BOM** box,select the number of levels deep you want the system to process a product's standard bill of material.

        Or you can increase or decrease the value by 1 using the arrow icons.

        This information appears on the **Machine History** tab of the **Machine (MACHSER)** page. 

    6. Select the **Create** **Sales Order** **In Open Status** check box to change the status of field service related sales orders to open.

       *Note:* If you leave this box empty, the system places new sales orders in Started status. You then must go in and manually change the status to open.

    7. **Sales Order Prefix or Quote Prefix:** The **Prefix** option is added for creating **Sales Order** or **Quotation** from **Service Order**. You can change the prefix in **Document Numbering Company Specific (SYSEQU)** page. This is the prefix that the system uses when it is creating a quote or sales order associated with the Field Service Order.

    8. In the **Service Order Quotation Valid (In Days)** box, type the number of days you want to set as the default length of time a for service order quotations to be valid.

        Or increment or decrement the values by 1 using the arrow icons.

4. Specify the default warranty:

    1. To select a default warranty, click the **Default Type** lookup reference.

        The **Lookup For Default Type** window appears.

    2. Select a row and click **Select**. Or, double-click to select the warranty to use.

        Click **Cancel** to exit from the **Lookup For Default Type** window.

    3. To require a deposit on a warranty contract for field service, select the **Contract Amount Is Required** check box.

    4. To require that warranties have an expiration date, select the **Expiration Date Is Required** check box.

    5. To honor a warranty past its expiration date, click the **Allow Days Past Expiration** dropdown. You can increase or decrease the number of days by 1.

5. Specify return information for field-service items:

    1. Click the **In Transit** lookup reference.

        The **Lookup For In Transit** window appears.

    2. Select a row and click **Select**.

        Or, double-click to select the account number or name of the general ledger account for the asset inventory for the goods that are in transit.

        Click **Cancel** to exit from **Lookup For In Transit** window.

    3. Click the **Intransit Location** lookup reference.

        The **Lookup For Intransit Location** window appears.

    4. Select a row and click **Select**.

        Or, double-click to select the Made2Manage destination location you want to use for items that are in transit.

        Click **Cancel** to exit from **Lookup For Intransit Location** window.

    5. Click the **Returned Goods Location** lookup reference.

        The **Lookup For Returned Goods Location** window appears.

    6. Select the required row and click **Select**.

        Or, double-click to select the Made2Manage destination location you want to use for items that have been returned from service.

        Click **Cancel** to exit from the **Lookup For Returned Goods Location** window.

6. Specify technician default mileage rate:

    1. Enter the rate/mile in the **Default Mileage Rate** box. This rate is used as default rate when entering technician expense.

7. On the toolbar,click **Save**.

The next step is to set general ledger accounts for field-service expense items. 

​