---

title: "Assign shipper serial numbers to shipper items"
draft: false
type: Article

---

You can assign shipper serial numbers to the items you ship.

This task is not part of the optional, full-featured lot control module. It is simply a quick way to assign shipper serial numbers to items you ship.

**To assign shipper serial numbers to shipper items**

1. Open the **Assign Serial Numbers (SERL)** from **Shipping page**.

    - Select **Production Management** > **Production Transactions** > **Shipping**.

        Or

    - Search for **SHIP** in the **Navigation box** and then select **Shipping.**

       The **Shipping (SHIP)** page appears.

    2. On the **Toolbar**, click **Browse**.

        The **Browse For Shipping** window appears.

    3. Select a record and click **Select**. Or double-click the shipper.

    4. Click the **Items** tab.

    5. Select the required item in the grid.

    6. Click ellipsis in the **Action** column.

    7. Select **Grid Accessories > Grid Actions**> **Shipped Serial Numbers**.

    **Directly open Assign Serial Numbers (SERL) page**

    1. Select **Production Management** > **Production Transactions** > **Shipping** > **Assign Serial Numbers**.

        Or

        Search for **SERL** in the **Navigation box** and then select **Assign Serial Numbers.**

        The **Assign Serial Numbers (SERL)** page appears.

    2. On the **Toolbar**, click **Browse**.

        The **Browse For Assign Serial Numbers** window appears.

    3. Select a record and click **Select**. Or double-click the shipper item.

2. On the grid toolbar, click **New**.

    The **Create New SN** window appears.

    - The **Shipper**, **Item Number**, **Facility**, **Part Number**, **Revision**, **Description**, and **Ship Quantity** fields are read-only.

    - If you have setup rules for the automatic generation of the shipper serial numbers and have enforced the rules and have selected the **Default To Auto Generate Form** check box in the **Auto Generate Shipment Serial Number Setup (SSNAGS)** page, the values setup appear as non-editable values in the **Assign Serial Numbers (SERL)** page.

    - If you have setup rules for the automatic generation of the shipper serial numbers and have selected the **Default To Auto Generate Form** check box but have not enforced the rules in the **Auto Generate Shipment Serial Number Setup (SSNAGS)** page, the values setup appear as editable values in the **Assign Serial Numbers (SERL)** page.

3. Generate the shipper serial numbers.

    **If you do not want to auto-generate the shipper serial numbers, perform the following steps:**

    1. In the **Serial Number** field, type the starting shipper serial number.

    2. Specify any of the following values if required and if they are editable:

    - Prefix portion of SN

    - Suffix portion of SN

    - Date Code Format

        If you specify a date code format, select the **Century** check box to set the year in the date to a four-digit year (yyyy). Clear the **Century** check box to set the year to a two-digit year (yy).

    3. In the **Quantity** field, type the quantity of the item that you plan to ship with that shipper serial number.

    - The quantity entered must be lesser than or equal to the shipper quantity.

    4. Click **Save**.

    **To auto generate the shipper serial numbers, perform the following steps:**

    1. Select the **Enable Auto Generate SN** check box.

        The **Auto Generate SN Values** area is displayed.

    2. Specify any of the following values if required and if they are editable:

    - Prefix portion of SN

    - Suffix portion of SN

    - Date Code Format

        If you specify a date code format, select the **Century** check box to set the year in the date to a four-digit year (yyyy). Clear the **Century** check box to set the year to a two-digit year (yy).

    3. In the **Auto Generated Number Begins At** field, modify the starting shipper serial number, if required.

    4. In the **SN Number Increment** field, specify the number by which the shipper serial number must be incremented, if required.

    5. In the **Quantity of SN to Generate** field, specify the quantity of parts for which you want to generate the shipper serial numbers.

        The quantity entered is updated in the main shipper serial number quantity field.

        - The quantity entered must be lesser than or equal to the shipper quantity.

    6. In the **Default Quantity/SN To Generate** field, specify the number of parts for which you want to assign the same shipper serial number.

    7. Click **Auto Generate SN**.

        The auto generated shipper serial numbers are displayed.

4. Click **Save** on the **Toolbar**. Or, click **Cancel** to discard the changes.

    If the total quantity does not equal the quantity to be shipped, a dialog box is displayed prompting if you want to proceed with the saving. Click **Yes** to confirm. Click **No** to discard the changes.

5. Close the **Assign Serial Numbers (SERL)** page.

​