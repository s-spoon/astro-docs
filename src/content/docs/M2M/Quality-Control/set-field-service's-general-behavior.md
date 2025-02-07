---
title: "Set field service's general behavior"
draft: false
type: Article 
---

Before you begin working with field service, specify how you want field service to behave, including how it updates financial.

## To set field service's general behavior

1.  Open the **Field Service Setup Information (CSFSM)** page.

    1. Select Customer Relationship Management > Master Data > Field Service > Field Service Setup Information.

        Or

    1.  Search for **CSFSM** or **Field Service Setup Information** in the **Navigation box** and then select **Field Service Setup Information**. <br> The **Field Service Setup Information (CSFSM)** page appears.

2.  Make the necessary changes.
3.  Specify service-order information:
    1.  Type the name you want to call your serviced equipment in the **Field Service Product Label** box. This name appears on Made2Manage windows.

        The default name is machine. You can enter up to 20 characters. If you exceed 10 characters some windows may not display the full name. The name you enter here replaces the default name Machine.

    1.  If you want components to be marked as serviceable by default when added to a bill of material, select the **Default New** **BOM** **Components As Serviceable** check box.
    2.  If you want expenses, including labor, posted when a service order is closed, select the **Post Expenses (At Close Of A Service Order, Post Labor & Expenses To OCDIST)** check box.
    3.  Select the **Default Commissions On Field Service Sales Order** check box if you want to create commission records for Field Service Sales Orders automatically using the commission code entered on the **Field Service Control (FSORD)** page. Even if this check box is clear, you can manually add commission records to the **Field Service** **sales order** after it is created.
    4.  Select the number of levels deep you want the system to process a product's standard bill of material in the **Explode Standard BOM** box.

        Or click the arrow at the beginning of the **Explode Standard BOM** field. You can increase or decrease the value by 1.


    1.  To have the system change the status of field service related sales orders to open, select the **Create** **Sales Order** **In Open Status** check box.

        If you leave this box empty, the system places new sales orders in Started status. You then must go in and manually change the status to open.

    1.  **Sales Order Prefix or Quote Prefix:** The **Prefix** option is added for creating **Sales Order** or **Quotation** from **Service Order**. You can change the prefix in **Document Numbering Company Specific (SYSEQU)** page. This is the prefix that the system uses when it is creating a quote or sales order associated with the Field Service Order.
    2.  Type the number of days you want to set as the default length of time a for service order quotations to be valid in the **Service Order Quotation Valid (In Days)** box.

        Or click the arrows at the end of the field to increment or decrement the values by 1.

2.  Specify the default warranty:
    1.  To select a default warranty, click the **Default Type** lookup reference.

        The **Lookup For Default Type** window appears.

    1.  Highlight a row and click **Select**. Or, double-click to select the warranty to use.

        Click **Cancel** to exit from the **Lookup For Default Type** window.

    2.  To require a deposit on a warranty contract for field service, select the **Contract Amount Is Required** check box.
    3.  To require that warranties have an expiration date, select the **Expiration Date Is Required** check box.
    4.  To honor a warranty past its expiration date, click the **Allow Days Past Expiration** arrow. You can increase or decrease the number of days by 1.
2.  Specify return information for field-service items:
    1.  Click the **In Transit** lookup reference.

        The **Lookup For In Transit** window appears.

    1.  Highlight a row and click **Select**.

        Or, double-click to select the account number or name of the general ledger account for the asset inventory for the goods that are in transit.

        Click **Cancel** to exit from **Lookup For In Transit** window.

    1.  Click the **Intransit Location** lookup reference.

        <br> The **Lookup For Intransit Location** window appears.

    1.  Highlight a row and click **Select**.

        Or, double-click to select the Made2Manage destination location you want to use for items that are in transit.

        Click **Cancel** to exit from **Lookup For Intransit Location** window.

    2.  Click the **Returned Goods Location** lookup reference.

        <br> The **Lookup For Returned Goods Location** window appears.

    3.  Highlight a row and click **Select**.

        Or, double-click to select the Made2Manage destination location you want to use for items that have been returned from service.

        Click **Cancel** to exit from the **Lookup For Returned Goods Location** window.

2.  Specify technician default mileage rate:
    1.  Type the rate/mile in the **Default Mileage Rate** box. This rate is used as default rate when enter technician expense.
3.  Click **Save** on the **Toolbar**.

    The next step is to set general ledger accounts for field-service expense items. 