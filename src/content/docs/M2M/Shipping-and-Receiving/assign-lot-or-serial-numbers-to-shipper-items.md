---
title: "Assign shipper serial numbers to shipper items"
draft: false
type: Article
---

You can assign shipper serial numbers to items you ship.

This task is not part of the optional, full-featured lot control module. It is simply a quick way to assign shipper serial numbers to items you ship.

## To assign shipper serial numbers to shipper items

1. Open the **Assign Serial Numbers (SERL)** page.

    **From Shipping page**

   1. Select **Production Management** > **Production Transactions** > **Shipping**.

        Or

        Search for **SHIP** in the **Navigation box** and then select **Shipping.**

        **Shipping (SHIP)** page appears.

   2. On the **Toolbar**, click **Browse**.

        The **Browse For Shipping** window appears.

   3. Select a record and click **Select**. Or double-click the shipper.

   4. Click the **Items** tab.

   5. Select the required item in the grid.

   6. Click ellipsis in the **Action** column.

   7. Select **Grid Accessories > Grid Actions** > **Shipped Serial Numbers**.

        **Directly open Assign Serial Numbers (SERL) page**

         1. Select **Production Management** > **Production Transactions** > **Shipping** > **Assign Serial Numbers**.

            Or

            Search for **SERL** in the **Navigation box** and then select **Assign Serial Numbers.**

            **Assign Serial Numbers (SERL)** page appears.

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


### To auto generate the shipper serial numbers, perform the following steps:

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

        - The quantity entered is updated in the main shipper serial number quantity field.

      - The quantity entered must be lesser than or equal to the shipper quantity.

   6. In the **Default Quantity/SN To Generate** field, specify the number of parts for which you want to assign the same shipper serial number.

   7. Click **Auto Generate SN**.

        The auto generated shipper serial numbers are displayed.

1. Click **Save** on the **Toolbar**. Or, click **Cancel** to discard the changes.

    If the total quantity does not equal the quantity to be shipped, a dialog box is displayed prompting if you want to proceed with the saving. Click **Yes** to confirm. Click **No** to discard the changes.

2. Close the **Assign Serial Numbers (SERL)** page.

​

Postings for shipping

When you *record* A complete unit of related data items stored in named fields in a database table. A record contains all the information for a single item, such as a single sales order. shipment of an *item* A manufactured or purchased part, material, subassembly, or product., that *transaction* 1. A debit or credit posted to a particular general ledger account. 2. As a result of accounting events in accounts receivable, accounts payable, or payroll, at least one debit and at least one credit, where total debits equal total credits. posts to a different *account* (Also called general ledger account) 1. An accounting record that classifies and summarizes the increases and decreases of each asset, liability, and shareholder equity item. 2. The means for tracking users and keeping their actions separate in Made2Manage. Auser logs into an account using his or her username and password. depending on the type of item. This sample ledger shows how shipping posts for standard or *weighted average costing* 1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items. 2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete. methods.

| Date   | Transaction/Accounts            | Debit  | Credit |
|--------|---------------------------------|--------|--------|
| Jan. 3 | **Make to order**               |        |        |
|        | Product class COGS              | 76     |        |
|        | Product class WIP Matl/Lbr/Ovhd |        | 76     |
| Jan. 4 | **Make to stock**               |        |        |
|        | Product class COGS material     | 34     |        |
|        | Product class inventory         |        | 34     |
| Jan. 5 | **Buy to order**                |        |        |
|        | Product class COGS material     | 56     |        |
|        | Buy/resell account              |        | 56     |