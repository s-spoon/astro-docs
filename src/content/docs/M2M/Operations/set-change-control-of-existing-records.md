---
title: "Set change control for existing records"
draft: false
type: Article
---

Engineering Change Management (ECM) lets you control changes you make to existing records. You can control engineering changes you make to standard items in the item master, to make-to-order and make-to-stock job orders, and to sales orders. You can also change the ECM control of a single existing item or a group of existing items.

## To set ECM control for existing records

1. Open the **Change ECM Control (ECMCHG)** page.

    1. Select **Production Management** > **Production Transactions** > **Quality** > **Engineering Change Management** > **Change ECM Control**.

    Or

    2. Search for **ECMCHG** in the **Navigation box** and then select **ECO Summary**.

    The **Change ECM Control (ECMCHG)** page appears.

2. In the **Facility** dropdown, select the facility.

3. Select the radio button next to the name of the area to control changes to its existing records.

4. Select the records you want to enable ECM controls for each document:

    - Select the **Master Record** checkbox to control changes to existing master records.

        You must select the **Master Record** checkbox to be able to control changes you make in bills of material and routings.

    - Select the **BOM** checkbox to control changes to existing bills of material.

    - Select the **Routing** checkbox to control changes to existing routings.

5. Specify the ECM controls.

    - To specify ECM controls for parts:

        1. In the **Change By** dropdown, select **Part** **Number**.

        2. Select the records to change control:

    - To control changes for product class:

        1. In the **Select Records to Change Control** dropdown, select **Product Class**.

        2. Click the **Product Class** lookup reference and select the product class in the **Lookup For Product Class** window.

    - To control changes for part range:

        1. In the **Select Records to Change Control** area, select **Range Of Part Numbers**.

        2. Click the **From** and **To** lookup references and select the starting and ending part numbers of the range.

    - To enable ECM control for a single part or a group of non-contiguous parts:

        1. In the **Select Records to Change Control** section, select **Part Number Mover**.

        2. Click **Select Part Numbers**.

            The **Copying Item Master** window appears.

        3. Select the item(s) for which you want to enable ECM Control and click **Select**.

            If you change ECM control for a product class, and a part in the product class has a revision in a different product class, ECM control does not change for any revisions of the part. An error message is displayed. To print a list of the parts to which the error refers, see the **Related Information**.

    - To specify ECM controls for job orders:

        1. In the **Change By** area, select **Job Order**.

        2. Select the records to change control:

    - To control changes for a range of job orders:

        1. In the **Select Records to Change Control** section, select **Range Of Job Orders**.

        2. Click the **From** and **To** lookup references and select the starting and ending job order numbers of the range.

    - To enable ECM control for a single job order or a group of non-contiguous job orders:

        1. In the **Select Records to Change Control** section, select **Job Order Mover**.

        2. Click **Select Job Orders**.

            The **Copying Job Order** window appears.

        3. Select the job order(s) for which you want to enable ECM Control and click **Select**.

    - To specify ECM controls for sales orders:

        1. In the **Change By** section, click **Sales Order**.

        2. Select the records to change control:

    - To control changes for a range of sales orders:

        1. In the **Select Records to Change Control** section, select **Range Of Sales Orders**.

        2. Click the **From** and **To** lookup references and select the starting and ending sales order numbers of the range.

    - To enable ECM control for a single sales order or a group of non-contiguous sales orders:

        1. In the **Select Records to Change Control** section, select **Sales Order Mover**.

        2. Click **Select Sales Orders**.

            The **Copying Sales Order** window appears.

        3. Select the sales order(s) for which you want to enable ECM Control and click **Select**.

6. On the **Toolbar**, click **Save**. The ECM control changes are saved.



​