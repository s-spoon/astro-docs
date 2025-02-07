---

title: "Add vendor items to an RFQ from scratch"
draft: false
type: Article

---

You can add vendor items to an RFQ.

**To add vendor items to an RFQ**

1. Create from Sales Order or Quotes.

   - Open the **Sales Orders (SO)** page.

        1. Select **Sales Management** > **Sales Transactions** > **Sales Orders**.

             Or

        2. Search for **SO** or **Sales Orders** in the **Navigation box** and then select **Sales Orders**.

            The **Sales Orders (SO)** page appears.

   - Open the **Quotes (QUOTE)** page.

        1. Select **Sales Management** > **Sales Transactions** > **Quotes**.

              Or

        2. Search for **QUOTE** or **Quotes** in the **Navigation box** and then select **Quotes**.

            The **Quotes (QUOTE)** page appears.

2. From Sales / Quote

   - For Sales

        1. Click **New**.

        2. Click the **Customer Info** tab.

        3. Click the lookup and select a **Customer Number** from the **Lookup For Customer Number** window.

        4. Type the **Customer PO Number**.

        5. Click **Save**.

            The **Items** tab is automatically enabled.

   - For Quote

      1. Click **New**.

      2. Click the **Quote Information** tab.

      3. Click the lookup and select a **Customer Number** from the **Lookup For Customer Number** window.

      4. Click **Save**.
          
          The **Items** tab is automatically enabled.

3. Click the **Part No** lookup reference in the **Items Detail** page.

    Ensure you select the **Source (SRC)** as **Buy (B)**. By default, the first three rows is **Buy (B)** in Education. The other SRCs listed in the wizard is as follows:

      - B = Buy

      - M = Make

      - S = Stock

4. Click the **RFQ Req** check box.

5. Click **Save**.

6. Click **Customer Information** tab.

   - Click the **Status** button. The **Sales Order Change Status (SOCHNG)** window appears.

        By default, the **Status to be Changed to** is selected to **Open**.

   - Click **OK**.

     The steps are the same for **Creating a Quote**. Make sure you do not select the **PO No**.

     See [Add vendor items to an RFQ - Sales Order](add-vendor-items-to-an-rfq-from-sales-order.md) to assign vendors to **RFQ through Sales Order**