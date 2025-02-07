---
title: "Add a machine"
draft: false

---

There are two ways that you can add a machine.

-   To add a machine from scratch, use the **Machine Location** tab of the **Machine**

    (**MACHSER**) page.

-   If you are in a make-to-stock environment and add more than one part at a time, use the **Assign** (**ASSIGN**) page to create machine records from an existing job order.

    You can enter non-standard machine in the **Machine (MACHSER)** page.

To add a machine from scratch

1.  Open the **Machine (MACHSER)** page.

    1. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Machine**.

        Or

    1.  Search for **MACHSER** or **Machine** in the **Navigation box** and then select Machine.
    <br>The **Machine (MACHSER)** page appears.

1.  Click **New** on the **Toolbar**.
2.  Specify machine information:

    - In the **Fac** field, **Default** is displayed.

    - **Machine Id**: The **Machine Id** field is enabled, that is, this is a unique id to identify a machine. This number is used in activity document from number field for identification.

    - Type the **Machine** part number and revision number (**Revision**).

        Or click the **Machine** lookup reference and double-click the part to use.

        The **Lookup For Machine** window appears.

    - Highlight a row and click **Select**. Or double-click the row to use.

        Click **Cancel** to exit from **Lookup For Machine** window.

    - If you want to make an entry for a non-standard items in the **MACHSER** page, select **NS** in the **Revision** field.

    - Type the serial number (**Serial No**) for the machine.

    - Click the **Job Number** Lookup reference or type the **Job Number** to select the value.

    - Type the **Lot/SN Quantity** and the **Job Quantity** in the respective fields.

1.  If the machine is not in stock, type the customer and location information, and, if needed, the status code.
2.  Type **Notes** for this machine.
3.  Click **Save**.

    If the machine part has a standard Bill of Material (BOM), its list of components, up to the level specified on the **Service Order Information** tab of the **Field Service Setup Information (CSFSM)** page, will then be added to the machine history listing during the save process.