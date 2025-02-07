---
title: "Set filter options for confirming one or multiple shippers"
draft: false
type: Article
---

Before you confirm one or multiple shippers using the shipping queue, use the **Setup Shipping Queue Filter (SCIFSET)** page to select the filters that will appear on the **Shipments to Confirm** tab of the **Shipping Queue (SCIFS)** page.

## To set filter options for confirming one or multiple shippers

1. Open the **Setup Shipping Queue Filter (SCIFSET)** page.

   1. Select **Production Management** > **Production Transactions** > **Shipping** > **Setup Shipping Queue Filter**.

        Or

   2. Search for **SCIFSET** or **Setup Shipping Queue Filter** in the **Navigation box** and then select **Standard Routings**.

        **Setup Shipping Queue Filter (SCIFSET)** page appears.

2. Make the necessary changes.

3. Specify the filters you want to display on the **Shipments To Confirm** tab of the **Shipping Queue (SCIFS)** window:

    For detailed information on filters see "Understanding the shipping queue".

      - To filter by **sales order** **number**, select the **Sales Order Number** check box.

      - To filter by **shipping** **number**, select the **Shipper Number** check box.

      - To filter by a **range of** **customer** **numbers**, select the **Customer Range** check box.

      - To filter by the **ship-to company**, select the **Ship To Company** check box.

      - To filter by the **ship-to city**, select the **Ship To City** check box.

      - To filter by the **shipping** **method**, select the **Ship Via** check box.

      - To block shipper confirmation if your customer’s account balance exceeds their credit limit:

      - Select the **Block Shipper Confirmation If Acct Bal. Exceeds Credit Limit** check box.

      - Click the **Highlight color** lookup reference , select a **Highlight color**, and click **OK**.

    When you open the **SCIFS** page, customers whose balance exceeds their credit limit are highlighted with the color you selected and you cannot select their shippers for confirmation.

      - To block shipper confirmation if the customer is on credit hold:

      - Select the **Block Shipper Confirmation If Customer Is On Credit Hold** check box.

      - Click the **Highlight color** lookup reference, select a **Highlight color** and click **OK**.

    When you open the **SCIFS** window, customers who are on credit hold are highlighted with the color you selected and you cannot select their shippers for confirmation.

      - To use the current date as the ship date when confirming shippers on the **SCIFS** window:

        - Select the **Default Ship Date To Current Date When Confirming** check box.

             You can change the ship date if necessary on the **SCIFS** page.

4. Click **Save** on the **Toolbar** to keep the filter options.

    Made2Manage displays a warning message indicating that other users will not see the changes on the **SCIFS** window until they close and then reopen the page.

    The next step is to set filter options for confirming one or multiple shippers.

​