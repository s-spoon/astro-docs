---  

title: "Export an EFT batch"  
draft: false 
type: Article

---

When an EFT batch is in the **Ready to Export** state, you can export it and generate the EFT payment file that you can send to your bank for payment processing.

Use the **EFT Payment Export (APEFTEXP)** page to generate an EFT payment file and post AP payments. This page lists the EFT payment batches that are in the **Ready to Export** status.

**To export an EFT batch file**

1.  Open the **EFT Payment Export (APEFTEXP)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **EFT Payment Export**.

    Or

    - Search for **APEFTEXP** in the **Navigation box** and then select **EFT Payment Export.**

    The **EFT Payment Export (APEFTEXP)** page appears.

2.  The EFT batch IDs that are in the **Ready to Export** state are listed in the EFT batches grid.

3.  In the EFT batches grid,

    - Select the check box in the **Select** column for the EFT payment batches that you want to export and create the payment file for.

    - Select the **Select** check box to select all the listed EFT batches.

    - Clear the **Select** check box to clear all the selections made.

4.  On the **Toolbar**, click **Generate EFT File and Post Payments**. A message, *Ready to Post?* is displayed.

5.  Click **Yes** to proceed with posting the records.

    The postings are generated, and the invoice status is appropriately updated to **Paid in Full** or **Partially Paid**. The batch ID status is set to **Exported** for the relevant EFT batches. The corresponding batch line status is set to **Exported** in the **AP Payment EFT (APEFT)** page for each vendor belonging to the selected EFT batch IDs. The EFT payment file is generated in the format specified in the template file given in the **EFT File Template** field of the **Bank Names** tab of the **Accounts Payable (CSAP)** page and placed it in the location specified in the **Default EFT File Location** field for the respective bank.