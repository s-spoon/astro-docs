---

title: "Electronic Data Interchange"
draft: false
type: Article

---

Electronic Data Interchange (EDI) is the computer-to-computer exchange of business documents in a standardized electronic format. EDI module in Made2Manage (M2M) offers the following capabilities:

-   **Import Transactions**: You can import customer transactions, such as requests for quotations and purchase orders, from your Aptean EDI host’s network. This process generates corresponding M2M documents like quotations and sales orders.
-   **Export Transactions**: You can export existing M2M documents, such as purchase order acknowledgments and accounts receivable invoices, as outbound transactions.

    The Fixed File Format, a proprietary and static format developed by M2M, is utilized for integration with compatible host communications software.

    In version 8.0, this process is enhanced through a JSON payload, which facilitates the transfer of data between M2M and EDI One via the API.

    To effectively utilize the EDI module, the following infrastructure elements are required:

-   **EDI One Communications Software**: This software converts the received information into a format suitable for internal processing.
-   **Consistent Data Formats**: These formats define how information in a message is organized.

# EDI Transactions 

EDI transactions can be categorized into two types:

-   **Inbound Transactions**: Involves receiving and translating EDI files.
-   **Outbound Transactions**: Involves generating and sending EDI files.

The figure below illustrates the basic flow of M2M EDI inbound and outbound transactions.

![](assets/images/EDI-user-guide-image-1.png)

## Inbound Transactions

The following figure depicts the flow of M2M inbound transaction processing.

![](assets/images/EDI-user-guide-image-2.png)

EDI One/Aptean EDI provides a flexible computer interface for the dissemination of information between parties. It plays a crucial role in processing inbound transactions by formatting the received data into a suitable format for Made2Manage (M2M) and generating an intermediate file.

The inbound transaction processing in M2M involves several key components:

-   **Inbound Transaction Import (XIN)**: This window is used to import EDI transactions into the M2M system.
-   **EDI M2M Format Groupings (XGROUP)**: This window allows for the creation of groupings for M2M formats.

    M2M's Electronic Data Interchange Infrastructure (EDI) identifies each transaction type with a unique three-digit number and a screen ID, which corresponds to the resulting M2M document. The M2M EDI processes the following inbound transactions:

-   **830 - Planning Schedules with Release Capability (SO)**: This transaction creates or updates a Sales Order.
-   **850 - Purchase Order (PO)**: This transaction creates a new Sales Order.

The M2M EDI supports two transaction processing schemes:

-   **Interactive Processing**: This method requires manual initiation of both the import and document automation processes.
-   **Unattended Processing**: This method allows the system to automatically handle both the import and document automation processes.

### Interactive Transaction Processing (Inbound)

The interactive inbound transaction process in M2M involves the following steps:

1.  **Transaction Reception and Formatting**: EDI One receives transactions from trading partners and formats the data according to the M2M fixed file format.
2.  **File Storage**: EDI One stores the formatted file in its storage system.
3.  **Data Retrieval**: Made2Manage calls the EDI One API to retrieve the transactions from storage.
4.  **Transaction Import**: Upon receiving the API call, EDI One retrieves the requested transactions. You can use the **Inbound Transaction Import (XIN)** window to import these transactions.

    Exceptions like the following may arise during the import process:

    -   The intermediate file does not exist.
    -   The intermediate file cannot be opened.
    -   The data in the intermediate file is not properly organized.

        The M2M EDI system handles exceptions based on the exception-handling scheme you choose:

    -   **Interactive Exception Handling**: If an exception occurs, the system halts the import process.
    -   **Unattended Exception Handling**: If an exception occurs, the system also halts the import process but logs the exceptions, which can be reviewed in the EDI Statistics (XSTATS) window.
5.  **Document Creation**: In the relevant Document Automation Server window (X830DA or X850DA), generate documents from the imported transactions.
6.  **Exception Handling**: Address any logged exceptions in the relevant Exception Log (X830EX or X850EX). The system provides a link from the log to the specific document where the exception occurred, allowing you to manually correct the data.

### Unattended Transaction Processing (Inbound)

The M2M EDI unattended inbound transaction process involves the following steps:

1.  **Transaction Reception and Formatting**: EDI One receives transactions from trading partners and formats the data according to the M2M fixed file format.
2.  **File Storage**: EDI One stores the formatted file in its storage system.
3.  **Data Retrieval**: Made2Manage calls the EDI One API to retrieve the transactions from storage.
4.  **Automatic Processing**: According to an established schedule, the Made2Manage Processor Services automatically start the import process and create the document.
5.  **Exception Logging**: The M2M system logs both import and document creation exceptions in the EDI Statistics (XSTATS) window.
6.  **Exception Handling**: Address any logged exceptions in the appropriate Exception Log (X830EX or X850EX). For exceptions related to document creation, the system provides a direct link from the log to the specific document where the exception occurred, allowing you to manually correct the data.

## Outbound Transactions

The following figure depicts the flow of M2M outbound transaction processing.

![](assets/images/EDI-user-guide-image-3.png)

The outbound transaction processing in M2M involves several key components:

-   **EDI Outbound Transaction Export (XOUT)**: This window is used to export EDI transactions.
-   **EDI M2M Format Groupings (XGROUP)**: This window is used to create groupings for M2M formats.

The M2M EDI processes the following outbound transactions:

-   **810 - Accounts Receivable Invoice (ARINV)**: Creates an invoice document.
-   **855 - Purchase Order Acknowledgment (SO)**: Creates a Sales Order acknowledgment.
-   **856 - Advanced Shipping Notice (ASN)**: Provides details for miscellaneous or sales order shipments.

The M2M EDI supports two transaction processing schemes for outbound transactions:

-   **Interactive**: Requires manual initiation of the export process.
-   **Unattended**: Automatically initiates the export process.

### Interactive Transaction Processing (Outbound)

The interactive outbound transaction process in M2M involves the following steps:

1.  **Transaction Export**: Use the EDI Outbound Transaction Export (XOUT) window to export the transactions.
2.  **Exception Handling**: During export, exceptions may occur, such as:
    -   The intermediate file cannot be created.
    -   The intermediate file cannot be opened.

        The M2M EDI handles these exceptions based on the chosen exception-handling scheme:

    -   **Interactive Exception Handling**: If an exception occurs, the system stops exporting transactions.
    -   **Unattended Exception Handling**: If an exception occurs, the system stops exporting transactions but logs the exceptions in the EDI Statistics (XSTATS) window.
3.  **File Processing**: The EDI One communication software processes the transactions in the intermediate file and moves the file to your EDI One network.

### Unattended Transaction Processing (Outbound)

Unattended outbound transaction processing is specifically applicable for EDI 856 - Advanced Shipping Notice (ASN). The process involves the following steps:

1.  **Automatic Export**: M2M EDI automatically exports transactions when documents reach a particular status, as defined during the setup procedure.
2.  **Exception Logging**: The M2M system logs any exceptions related to import and document creation in the EDI Statistics (XSTATS) window.
3.  **File Storage and Transfer**: Your host communication software stores the transactions in an intermediate file and transfers the file to the EDI One or Aptean EDI host’s network.

# EDI Setup

Before processing EDI transactions, you must complete the following setup tasks:

-   Configuring your EDI system.
    -   Defining the actions the system will execute during the import and export of EDI transactions.

        To set up the M2M EDI, use the EDI Setup (XEDI) window. The setup process involves the following steps:

    -   **General Setup**: On the General tab, execute the general setup. For more information, refer to the [General Setup](#_bookmark9) section.
    -   **Inbound Transactions Setup**: On the Inbound tab, configure the settings for inbound transactions. For more information, refer to the [Setup EDI Inbound Transactions](#_bookmark10) section.
    -   **Outbound Transactions Setup**: On the Outbound tab, configure the settings for outbound transactions. For more information, refer to the [Setup EDI Outbound Transactions](#_bookmark11) section.
    -   **Sales Order EDI Labels Setup**: On the Sales Order tab, set up the Sales Order EDI labels Setup. For more information, refer to the [Set Up the SO EDI Labels](#_bookmark12) section.
    -   **Purge Temporary EDI Records**: On the Purge Temporary EDI Records tab, specify the EDI document types for which you want to delete temporary records created during import but not used in the final EDI document. For more information, refer to the [Specify the EDI](#_bookmark15) [Record Types to Purge](#_bookmark15) section.

In addition to the above setup process, there are a few more additional steps:

-   **M2M Format Mapping**: Use the EDI M2M Format Groupings (XGROUP) window to set up lists of data elements for import/export. For more information, refer to the [M2M Format](#_bookmark16) [Mapping](#_bookmark16) section.
-   **Customer-Specific Setup**: Perform specific setup steps for each customer with whom you plan to conduct EDI transactions in the Accounts (CUST) window. For more information, refer to the [Customer-Specific Setup](#_bookmark25) section.

## General Setup

To perform the general setup of the M2M EDI, follow these steps:

1.  Open the EDI Setup (XEDI) Window using one of the following methods:
    -   On the **Utilities** tab, in the **Company Setup** group, and click **Module Setup** \> **EDI Setup**.
    -   Type **XEDI** in the Navigation search bar and click **Enter**.
2.  Click the General tab. General setup includes:
    -   General Information Setup
    -   Aptean EDI One Credentials Setup
3.  In the **General Information** section, specify the following fields and options:
    -   **EDI Qualifier**: Type the EDI Qualifier provided by EDI One.
    -   **ID**: Enter the identifier provided by EDI One.
    -   **GS1 Company Prefix**: Configure the GS1 identifier, used with the RPUCC128 report.
    -   **Allow SO EDI Only For EDI**: Select this checkbox to ensure that the fields on the EDI Header and EDI Items tabs of the Sales Order (SO) window are populated solely by EDI document automation. Manual changes will not be allowed.
    -   **Check Null Ship To**: Select this checkbox to verify that the imported data includes the ship-to address key.
    -   **Ignore Inbound SAC**: Select this checkbox to bypass Special Allowance or Charge (SAC) code data input lines.
    -   **Split EDI Outbound Files**: Select this option to enable the splitting of EDI outbound files.
    -   **Decimal Implication**: Choose one of the following options:
        -   **Use M2M FFF Implied Decimals**: Use M2M implied Fixed File Format (FFF) decimal positions.
        -   **Use Fixed Length Decimals**: Use specified fixed length decimal positions.
-   **Use Actual Length Decimals**: Use decimal positions as defined in the actual imported/exported file.
    -   **Depends on Customer**: Use decimal positions defined in the Customer window.
    -   **Memo Population**: Select one of the following options:
        -   Overwrite: To overwrite existing data.
        -   Append: To add to the existing data.
4.  Click **Save** to save the settings.
5.  In the **Aptean EDI One Credentials** section, specify the following fields and options:
    -   **Tenant Id**: Enter the unique identifier assigned to your tenant.
    -   **Secret Key**: Enter the secret key provided by EDI One.
    -   **API Key**: Enter the API key assigned to your account.
6.  Click Test Authentication to verify the credentials.
7.  Click **Save** to apply the settings.

## Inbound Transactions Setup

The Inbound tab of the EDI Setup (XEDI) window contains sections for configuring different types of inbound transactions. Currently, only 830 (Planning Schedules with Release Capability) and 850 (Purchase Order) are certified for use.

The sections available in the Inbound tab are:

-   820 - Payment Order/Remittance Advice
-   830 - Planning Schedules with Release Capability
-   840 - Request For Quotation
-   850 - Purchase Order
-   860 - Purchase Order Change
-   862 - Shipping Authorization

To set up EDI inbound transactions, follow these steps:

1.  Open the **EDI Setup (XEDI)** window using one of the following methods:
    -   On the **Utilities** tab, in the **Company Setup** group, click **Module Setup** \> **EDI Setup**.
    -   Type **XEDI** in Navigation search bar, and click **Enter**.
2.  Click the **Inbound** tab. Configure the settings for each transaction type in the appropriate section:

#### 820 - Payment Order/Remittance Advice

-   **After Adding**: Select the required option:
-   **Leave In 'Started' Status**: Select this option to leave the document status as Started.
-   **Change Status To Paid**: Select this option to change the document status to Open.

#### 830 - Planning Schedules with Release Capability

-   **Cross Reference Check**: Select this checkbox to perform a cross-reference check.
-   **Modify Line Item**: Select this checkbox to modify the line items.

#### 840 - Request For Quotation

-   **On Create**: Select the required option:
  -   **Create New Documents**: Select to create new documents.
    -   **Append To 'Started' Documents**: Select to append to documents with a status of Started.
        -   **Depends on Customer**: Set according to customer settings.
  -   **After Adding**: Select the required option:
    -   **Leave In 'Started' Status**: Select this option to leave the document status as Started.
    -   **Change Status To Paid**: Select this option to change the document status to Open.
    -   **Depends On Customer**: Select the option to configure settings according to customer preferences.

#### 850 - Purchase Order

-   **On Create**: Select the required option:
    -   **Create New Documents**: Select to create new documents.
        -   **Append To 'Started' Documents**: Select to append to documents with a status of Started.
            -   **Depends on Customer**: Set according to customer settings.
    -   **After Adding**: Select the required option:
            -   **Leave In 'Started' Status**: Select this option to leave the document status as Started.
            -   **Change Status To Paid**: Select this option to change the document status to Open.
            -   **Depends On Customer**: Select the option to configure settings according to customer preferences.
        -   **Cross Reference Check**: Select this checkbox to perform a cross-reference check.

#### 860 - Purchase Order Change

-   **Cross Reference Check**: Select this checkbox to perform a cross-reference check.

#### 862 - Shipping Authorization

-   **On Create**: Select the required option:
    -   **Create New Documents**: Select to create new documents.
        -   **Append To 'Started' Documents**: Select to append to documents with a status of Started.
-   **After Adding**:Select the required option:
    -   **Leave In 'Started' Status**: Select this option to leave the document status as Started.
        -   **Change Status To Paid**: Select this option to change the document status to Open.
        -   **Cross Reference Check**: Select this checkbox to perform a cross-reference check.
3.  Click **Save** to apply and save the setup settings for the inbound transactions.

## Outbound Transactions Setup

The Inbound tab of the EDI Setup (XEDI) window contains sections for configuring different types of inbound transactions.

To configure EDI outbound transactions, follow these steps:

Open the EDI Setup (XEDI) Window using one of the following methods:

1.  On the **Utilities** tab, in the **Company Setup** group, click **Module Setup** \> **EDI Setup**.
2.  Type **XEDI** in the Navigation search bar and click **Enter**.
3.  Click the **Outbound** tab. Configure the settings for each transaction type in the appropriate section:

#### 810 - Invoice

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.
        -   **When Status Is**: Select the required option:
            -   **New, Not Confirmed**: Select this option to begin the document export when the status is New and Not Confirmed.
            -   **Unpaid**: Select this option to begin the document export when the status is unpaid.
            -   **Partially Paid**: Select this option to begin the document export when the status is partially paid.
            -   **Paid In Full**: Select this option to begin the document export when the status is paid in full.
        -   **Invoice Type**: Select any of the invoice types from the list below for export:
            -   All
            -   Credit Memo
            -   Miscellaneous
            -   Normal

Prepayment Credit Memo

-   Time & Materials

**Export All Memo Lines**: Select this checkbox to export all memo lines.

#### 846 - Inventory Advice

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.

#### 855 - Purchase Order Acknowledgment

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.
        -   **When Status Is**: Select the required option:
            -   **Started**: Select this option to begin the document export when the status is started.
            -   **Awaiting Approval**: Select this option to begin the document export when the status is awaiting approval.
            -   **Open**: Select this option to begin the document export when the status is open.
        -   **When to Export**: Select any of the methods below to determine when to export:
            -   Auto
            -   Depends on Customer
            -   Manual

                o **Export All Memo Lines**: Select this checkbox to export all memo lines.

#### 856 - Ship Notice/Manifest

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.
        -   **When Status Is**: Select the required option:
            -   **Shipped**: Select this option to begin the document export when the status is shipped.
            -   **Not Shipped**: Select this option to begin the document export when the status is not shipped.

                o **Export All Memo Lines**: Select this check box to export all memo lines.

        -   **Skip Calculated Totals On DET Segment**: Select this check box to exclude calculated totals in the DET segment.

#### 861 - Receiving Advice/Acceptance Certificate

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.

#### 862 - Shipping Schedule

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.
        -   **When Status Is**: Select the required option:
            -   **Started**: Select this option to begin the document export when the status is started.
            -   **Awaiting Approval**: Select this option to begin the document export when the status is awaiting approval.
-   **Open**: Select this option to begin the document export when the status is open.

#### 865 - Purchase Order Change Acknowledgment

-   **On Create**: Select the required option:
    -   **Overwrite**: Select this option to overwrite the existing document.
        -   **Append**: Select this option to append to the existing document.
        -   **When Status Is**: Select the required option:
            -   **Started**: Select this option to begin the document export when the status is started.
            -   **Awaiting Approval**: Select this option to begin the document export when the status is awaiting approval.
            -   **Open**: Select this option to begin the document export when the status is open.

**Note:** Only 80 characters in a memo line are exported.

4.  Click **Save** to apply and save the setup settings for outbound transactions.

## Sales Order EDI Labels Setup

Use the EDI Setup (XEDI) window to set up and customize the Sales Order (SO) EDI labels. This setup allows you to define and modify the field labels that appear in the Sales Order EDI tabs.

Follow these steps to configure the labels:

### Configuring EDI Labels in XEDI

To configure EDI labels in XEDI:

1.  Open the EDI Setup (XEDI) window using one of the following methods:
-   On the **Utilities** tab, in the **Company Setup** group, click **Module Setup** \> **EDI Setup**.
-   Type **XEDI** in the Navigation search bar and click **Enter**.
2.  Navigate to the **Sales Order** tab within the EDI Setup window.
3.  In the **Header** and **Detail** tabs, customize the labels for the sales order.
4.  Click **Save** to save the changes.

**Note:** This label customization will appear in the Sales Order EDI Header screen of the respective Sales Order.

### Viewing Customized Labels in Sales Orders

Once you have customized the EDI labels in the EDI Setup window, you can view these changes and edit further in the Sales Orders window:

1.  Navigate to Sales Orders.
2.  Go to **More Actions** and select **Sales Order EDI Header**.
3.  The customized labels will be reflected in the **Sales Order EDI Header** screen. You can customize further if needed.

## Purge Temporary EDI Records

Temporary records are generated when exceptions occur during the import of EDI documents. Over time, the number of these records may increase. It is recommended to periodically purge these records.

Use the **Purge Temporary EDI Records** tab, in the **EDI Setup (XEDI)** window to specify the type of temporary EDI records that you want to purge.

To specify the EDI record types to purge:

1.  Open the **EDI Setup (XEDI)** window using one of the following methods:
    -   On the **Utilities** tab, in the **Company Setup** group, click **Module Setup** \>**EDI Setup**.
    -   Type **XEDI** in **Navigation** bar, and click **Enter**.
2.  Click the **Purge Temporary EDI Records** tab.
3.  Select the appropriate checkboxes for the document types for which you want to purge the temporary records:
    -   820 - Payment Order / Remittance Advice
    -   830 - Planning Schedule with Release Capability
    -   840 - Request For Quotation
    -   850 - Purchase Order
    -   860 - Purchase Order Change
    -   862 - Shipping Authorization
4.  Click **Purge All** to purge the selected records.

**Note:** The **Purge All** button will be enabled only when at least one checkbox is selected.

A confirmation popup will appear with the message: **Do you want to delete the temporary EDI records for the selected EDI type?**

1.  Click **Yes** to confirm purging the records. Click **No** to cancel the operation.

**Tip:** If you click **Yes**, the records will be purged, and information about the purged data will be displayed.

## M2M Format Mapping

Using M2M format mapping, you must create at least one grouping for the intermediate file generated for each transaction type you plan to process. Groupings determine the data elements on a customer-by-customer basis or for many customers having the same element requirements during the import/export process.

Before you attempt to create a grouping, it’s important that you understand the following terms:

**Element**: A specific location in M2M is referred by table and field.

**Grouping**: A subset of elements for transaction import or export.

**Intermediate file**: A collection of transactions that EDI imports from or exports to.

Groupings describe to the parser the data elements that are to be imported in the inbound intermediate file. Therefore, by simply changing the grouping, you can change the data elements that M2M's EDI processes.

## Standard Groupings

The standard XGROUPs for the five documents available in version 8.0 can either be used as is or copied to create customized groupings:

 Inbound
-   850
-   830

 Outbound
-   810 (Invoice)
-   855 (PO Acknowledgment for inbounds)
-   856 (Ship Notice)

The standard groupings include the minimum required fields for the document set.

## Customized Grouping

You can create a customized grouping from the EDI M2M Format Groupings (XGROUP) window. To do this, copy the standard grouping, customize it, and save it as a new customized grouping.

To create a customized grouping:

1.  Open the **EDI M2M Format Groupings (XGROUP)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Master Data** \> **EDI M2M Format Groupings**.
    -   Type **EDI M2M Format Groupings (XGROUP)** in the navigation bar and click **Enter**.
2.  In the header tool bar, click **Copy**.
3.  In the **Group ID** field, type a unique transaction ID for the grouping. To ensure uniqueness and easy identification, consider assigning a group ID that combines the document number and the EDI trading partner number. If the trading partner has multiple facilities, include the facility number in the EDI group ID as well.
4.  In the **EDI Type** field, select **INBOUND** or **OUTBOUND**.
5.  In the **Transaction Type** field select a tansaction number.

    Based on the transaction numbers selected from the transaction type field, the appropriate fields will be displayed in a grid in alphabetical order.

6.  In the Select column, select or clear the check boxes to include or remove elements from the grouping.
7.  Click **Save**.

**Tip:** You can create multiple groupings for each transaction set.

## New Grouping

You can create a new grouping from a customized grouping. To create a new grouping:

1.  Open the **EDI M2M Format Groupings (XGROUP)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Master Data** \> **EDI M2M Format Groupings**.
    -   Type **EDI M2M Format Groupings (XGROUP)** in the navigation bar and click **Enter**.
2.  Navigate to the customized grouping and click **New**.

    **Note:** The **New** button will only be visible when you are on a customized grouping page. It will not be available on a standard grouping screen.

3.  In the **Group ID** field, type a unique transaction ID for the grouping. To ensure uniqueness and easy identification, consider assigning a group ID that combines the document number and the EDI trading partner number. If the trading partner has multiple facilities, include the facility number in the EDI group ID as well.
4.  In the **EDI Type** field, select **INBOUND** or **OUTBOUND**.
5.  In the **Transaction Type** field select a tansaction number.

    Based on the transaction numbers selected from the transaction type field, the appropriate fields will be displayed in a grid in alphabetical order.

6.  In the Select column, select or clear the check boxes to include or remove elements from the grouping.
7.  Click **Save**.

**Tip:** You can create multiple groupings for each transaction set.

# Customer-Specific Setup

You can set up EDI variables for each customer from whom you plan to receive inbound transactions or to whom you plan to send outbound transactions. Setting up the variables includes specifying the EDI information in the following tabs:

-   Additional Information
    -   EDI Inbound
    -   EDI Outbound

To setup EDI variables for a customer:

1.  Open the **Accounts (CUST)** window using one of the following methods:
    -   On the **Sales Management** tab. In the **Master Data** group, click **Accounts**.
    -   Enter \*\*Accounts (CUST)\*\*in **Navigation** bar, click **Enter**.
2.  Click **Browse** or **Search** and select the customer from the **Browse for Accounts** window.
3.  On the **Additional Information** tab.
4.  In the **EDI Qualifier** : **ID** field, type the customer’s EDI qualifier and associated identifier.

**Note:** The EDI Qualifier ID differs from the Made2Manage customer number and is provided by the customer. It identifies the customer for EDI purposes only.

5.  On the **EDI Inbound** tab.

-   In the **Specific** and **EDI Qualifier : ID** fields, type the customer’s transaction-specific EDI qualifier and identifier.

**Note:** These fields are optional and are used to identify the transactions received from or sent to customer departments.

-   Click the **EDI Group** lookup reference button and select the group from the **Lookup For** window.
    -   In **On Create** field, select the required option:
        -   **Create New Documents**: Select this option to generate new documents for each transaction.
        -   **Append To 'Started' Documents**: Select this option to add the transaction to existing documents that have already been started.
        -   **Depends On Customer**: Select this option if the processing method depends on specific customer settings or requirements.

**Note:** The **On Create** field is available only for **840 - Request For Quotation** and **850 - Purchase Order** transactions. The **Depends on Customer** option is available only for **840 - Request For Quotation** transaction.

-   In the **After Adding** field, select the required option:
-   **Leave In 'Started' Status**: Select this option to keep the transaction in the started status.
-   **Change Status To Open**: Select this option to change the status of the transaction to open.
-   **Depends On Customer**: Select this option if the status change depends on customer-specific settings or requirements.

**Note:** The **After Adding** field is available only for **840 - Request For Quotation** and **850 - Purchase Order** transactions. The **Depends on Customer** option is available only for **840 - Request For Quotation** transaction.

-   Select the **Allow Zero Prices** check box to permit a zero dollar unit price.

**Note:** The **Allow Zero Prices** checkbox is available only for **850 - Purchase Order** transaction.

1.  Click the **EDI Outbound** tab.

#### Outbound Transactions:

-   In the **Specific** and **EDI Qualifier : ID** fields, type the customer’s transaction-specific EDI qualifier and identifier.

    **Note:** These fields are optional and are used to identify the transactions received from or sent to customer departments.

-   Click the **EDI Group** lookup reference button and select the group from the **Lookup For** window.

#### Export Options:

-   Select either **Auto** for automatic export or **Manual** for manual export.
    -   In the **Specific** and **EDI Qualifier : ID** fields, type the customer’s transaction-specific EDI qualifier and identifier.

        **Note:** These fields are optional and are used to identify the transactions received from or sent to customer departments.

    -   Click the **EDI Group** lookup reference button and select the group from the **Lookup For** window.
    -   In the **Container Type** field, select the required option:
-   **Standard**: Select this option for a single container that holds all items together without specific grouping.
-   **Pick & Pack**: Select this option for containers that are used to pick items from inventory and pack them into specific groupings based on orders.

**Note:** The **Container Type** field is available only for **856 - Ship Notice/Manifest** transaction.

-   In the **Standard Type** field, select the required option:
-   Select **Implied** to export item data that is inferred from other data in the document.
-   Select **Explicit** to export item data that is explicitly specified in the document.

**Note:** The **Standard Type** field is available only for **856 - Ship Notice/Manifest** transaction.

# Additional EDI Features

M2M offers the following functionality for use with the Electronic Data Interchange Infrastructure (EDII):

-   Import and store customer information required for export. For more information, refer to the [Customer Address EDI Key Setup](#_bookmark27) section.
-   Store packing information for export. For more information, refer to the [EDI Shipping](#_bookmark28) [Containers Setup](#_bookmark28) section.
-   Indicate if Special Allowance or Charge (SAC) codes are applicable to items in the Item Master. For more information, refer to the [Item Master EDI Setup](#_bookmark29) section.

## Customer Address EDI Key Setup

Trading partners often use identification codes for stores, docks, and other locations that exceed M2M’s six-character address key limit. To address this, EDI will create a cross-reference for the trading partner address keys. M2M will store this cross-reference in the Customer Address (CRMADDR) window, specifically in the EDI Address Key field, and will automatically use it during import or export.

To store the trading partner’s EDI address key:

1.  Open the **Customer Address (CRMADDR)** window using one of the following methods:
    -   On the **Sales Management** tab. From the **Master Data** group, click **Customer Address**.
    -   Enter **Account Address (CRMADDR)** in **Navigation** bar, and click **Enter**.
2.  Click **Browse** and select the company address for which you want to store the EDI address key from the **Browse for Customer Address** window.
3.  In the **EDI Address Key** field, type the trading partner’s EDI address key.
4.  Click **Save**.

## EDI Shipping Containers Setup

M2M provides the capability to store packing information for Advanced Ship Notice/Manifest (856) documents. For documents requiring packing details, M2M EDI provides functionality to include this information.

M2M treats all levels of packing information as containers. Use the EDI Shipping Containers (XCNTNR) window to store information about these containers.

To setup EDI Shipping Containers:

1.  Open the **EDI Shipping Containers (XCNTNR)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Master Data** \> **EDI Shipping Containers**.
    -   Enter **EDI Shipping Containers(XCNTNR)** in **Navigation** bar, and click **Enter**.
2.  Click **New**.
3.  In the **ID** field, type a unique identifier for the container.
4.  In the **Name** field, type the container name.
5.  In the **Container** tab, specify the required container details:

    **Note:** Although it is not mandatory to specify any of the following fields, it is recommended to specify values for as many fields as possible.

-   In the **Color** field, type the color of the container.
    -   In the **Length** field, specify the length, and from the adjoining list, select the unit of measure used.
    -   In the **Width** field, specify the width, and from the adjoining list, select the unit of measure used.
    -   In the **Height** field, specify the height, and from the adjoining list, select the unit of measure used.
    -   In the **Volume** field, specify the volume, and from the adjoining list, select the unit of measure used.
    -   In the **Weight** field, specify the weight, and from the adjoining list, select the unit of measure used.
    -   In the **Description** field, type the description.
6.  In the **User Defined** tab, specify any other details if required.
78.  Click **Save**.

You can add this container in the **Containers** tab of the **Shipping (SHIP)** window.

Click **New**, then click the **Container Type Lookup** button and select the container from the Lookup for Container Type window.

On the grid toolbar, click:

-   **New** to add a new container.
-   **Copy** to duplicate a container.

For more information on adding a sub-container or an item to a container, refer to the Online Help.

## Item Master EDI Setup

Adding the Special Allowance or Charge (SAC) codes used by EDI trading partners to the Item Master is essential, in addition to the shippable line item parts. These codes include D240 – Freight and I170 – Trade Discount. To distinguish the SAC codes from actual ship items, the EDI SAC checkbox has been added to the Item Master. An invoice or shipper line item with the EDI SAC checkbox selected is exported by the 810 and 856 documents as a SAC element using the M2M format.

To specify the SAC codes:

1.  Open the **Item Master (INV)** window using one of the following methods:
    -   On the **Production Management** tab. In the **Master Data** group, click **Master Data** \> **Item Master**.
    -   Enter **Item Master(INV)** in **Navigation** bar, and click **Enter**.
2.  Click **Browse** or **Search** and select the item from the **Browse for Item Master** window.
3.  Click the **Additional Information** tab.
4.  Select the **EDI SAC** check box.
5.  Choose how you want to apply the SAC code:
    -   Select **Charge** if you want to apply the SAC code to the charge.
    -   Select **Allowance** if you want to apply the SAC code to the allowance.
    -   Select **None** if you do not want to apply the SAC code.
6.  Click **Save**.

# Processing Inbound EDI Transactions

To effectively manage inbound EDI transactions in M2M, follow these key steps:

1.  Import inbound transactions. For more information, refer to the [Import Inbound Transactions](#_bookmark31) section.
2.  Review intermediate records that failed during import. For more information, refer to the [Review Failed Import Records](#_bookmark32) section.
3.  Create documents from the imported transactions. For more information, refer to the [Create](#_bookmark33) [Documents from Imported Transactions](#_bookmark33) section.
4.  Address the exceptions logged in the appropriate exception log. For more information, refer to the [Handle Logged Exceptions](#_bookmark34) section.
5.  Review EDI Processing Statistics. For more information, refer to the [Review EDI Processing](#_bookmark35) [Statistics](#_bookmark35) section
6.  Check the EDI transaction history. For more information, refer to the [Check EDI Transaction](#_bookmark36) [History](#_bookmark36) section.

## Import Inbound Transactions

Use the **EDI Inbound Transaction Import (XIN)** window to import the transactions.

To import inbound transactions:

1.  Open the **EDI Inbound Transaction Import (XIN)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Import/Export** \> **EDI Inbound Transaction Import**.
    -   Enter **EDI Inbound Transaction Import (XIN)** in **Navigation** bar, and click **Enter**.
2.  In the **Transaction** area, select the transaction type that you want to import.
3.  Click **Import**. A message will appear indicating that the system has completed the import.
4.  Click **OK**.

**Note:** To view details of exceptions that occurred during the import, open the EDI Statistics (XSTATS) window.

## Review Failed Import Records

M2M EDI processes and validates the inbound EDI documents via API. The validation checks include the following:

-   EDI ID of the trading partner sending the file.
-   Permissions of the EDI trading partner.
-   Structure of the file.

Records that fail validation are stored in temporary files. Made2Manage provides the following screens to view the failed records:

-   **EDI 820 Transactions (X820CR)**: Displays failed EDI 820 transactions. The EDI 820 document is a Payment Order Remittance that tracks payments received from customers, including amounts, invoice numbers, payment dates, and adjustments. You can edit or add data to failed transactions in this screen.
-   **EDI 830 Transactions (X830PO)**: Displays failed EDI 830 transactions. The EDI 830 document, a Planning Schedule with Release capability, includes information on expected item quantities, delivery dates, and billing and shipping details. You can edit or add data to failed transactions in this screen.
-   **EDI 840 Transactions (X840QT)**: Displays failed EDI 840 transactions. The EDI 840 document is a Request for Quotation, which formally requests pricing and details from suppliers. It includes product descriptions, quantities, delivery dates, and special requirements. You can edit or add data to failed transactions in this screen.
-   **EDI 850 Transactions (X850PO)**: Displays failed EDI 850 transactions. The EDI 850 document is a Purchase Order that specifies items, prices, and quantities required from a supplier. You can edit or add data to failed transactions in this screen.
-   **EDI 860 Transactions (X860PO)**: Displays failed EDI 860 transactions. The EDI 860 document is a Purchase Order Change Request that communicates modifications to existing purchase orders, such as changes in quantities, delivery dates, or product specifications. You can edit or add data to failed transactions in this screen.
-   **EDI 862 Transactions (X862PO)**: Displays failed EDI 862 transactions. The EDI 862 document is a Shipping Schedule that outlines the quantities of products needed and their shipping dates. It includes item numbers, quantities, shipping dates, and any special instructions. You can edit or add data to failed transactions in this screen.

**Note:** Currently, only the EDI 830 and EDI 850 transactions are certified for use.

## Create Documents from Imported Transactions

**Note:** This section is relevant only if you use interactive transaction processing to import transactions.

After importing transactions, you can create M2M documents related to the EDI transactions. Use the appropriate Document Automation window to generate the M2M documents from the imported transactions.

To create M2M documents from imported inbound transactions:

1.  Open the appropriate Document Automation window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the required EDI group, click **EDI\<nnn\> Document Automation**.

    **Note:** \<**nnn**\> refers to document number. 

    -   Enter **EDI\<nnn\> Document Automation(X\<nnn\>DA)** in **Navigation** bar, and click **Enter**.

2.  In the grid, check the boxes in the **Select** column to choose the transactions for which you want to create documents.
3.  Click **Create \<document name\>**. A message will appear indicating that the document has been created.
4.  Click **OK**.

If an exception occurs during document creation, the process will stop, and the exceptions will be logged. Open the log file corresponding to the document created to review the details of the exceptions.

## Handle Logged Exceptions

Exceptions may occur during the import of EDI transactions. To address these exceptions, open the appropriate Automation Exception window.

To handle logged exceptions during import:

1.  Open the appropriate Document Exception window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the required EDI group, click **EDI\<nnn\> Automation Exception**.

    **Note:** \<**nnn**\> refers to document number.

    -   Enter **EDI\<nnn\> Automation Exception (X\<nnn\>EX)** in **Navigation** bar, and click **Enter**.

2.  In the grid, locate the document identified by the order number, item number, and release number that you need to correct, and double-click the row. The document form will appear along with a message explaining the exception.
3.  Make the necessary corrections and click **Save**.

    The following windows will display records that failed during import:

    -   EDI 820 Transactions (X820CR)
    -   EDI 830 Transactions (X830PO)
    -   EDI 840 Transactions (X840QT)
    -   EDI 850 Transactions (X850PO)
    -   EDI 860 Transactions (X860PO)
    -   EDI 862 Transactions (X862PO)

**Note:** Currently, only EDI 830 and EDI 850 are certified for use.

4.  If there are additional exceptions for the same document, the next exception message will be displayed.

    **Note:** Repeat the above steps for all other documents with exceptions and address all exception messages for each document.

5.  After handling all exceptions, recreate the documents for which you have imported transactions. For more information, refer to the [Create Documents from Imported](#_bookmark33) [Transactions](#_bookmark33) section.

## Review EDI Processing Statistics

Use the EDI Statistics (XSTATS) window to review Electronic Data Interchange (EDI) transaction import and export statistics.

The EDI Statistics (XSTATS) window contains Inbound and Outbound tabs.

The **Inbound** tab has the following sections:

-   820 - Payment Order/ Remittance Advice
-   830 - Planning Schedules with Release Capability (SO) - Creates or Updates SO
-   840 - Request For Quotation
-   850 - Purchase Order (PO) - Creates New Purchase Order
-   860 - Purchase Order Change
-   862 - Shipping Authorization

The **Outbound** tab has the following sections:

-   810 - Accounts Receivable Invoice (ARINV)
    -   846 - Inventory Advice(Export Statistics)
    -   855 - Purchase Order Acknowledgment (SO)
    -   856 - Advanced Ship Notice/Manifest (SHIP)
-   861- Receiving Advice/Acceptance Certificate
    -   862 - Shipping Schedule
    -   865 - Purchase Order Change Acknowledgment

**Note:** Currently, only EDI 830 and EDI 850 on the Inbound tab, and EDI 810, EDI 855, and EDI 856 on the Outbound tab are certified for use.

To check EDI import and export statistics:

1.  Open the **EDI Statistics (XSTATS)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Statistics** \> **EDI Statistics (XSTATS)**.
    -   Enter **EDI Statistics (XSTATS)** in **Navigation** bar, and click **Enter**.
2.  Click the appropriate tab:
    -   **Inbound** to view the import statistics.
    -   **Outbound** to view the export statistics.
3.  Click the section relevant to the transaction for which you want to view statistics.
4.  Click **Refresh**.

The following details are displayed:

-   **Begin Date**: The date and time the process began.
-   **End Date**: The date and time the process ended.
-   **Passed**: The number of transactions that were successfully processed.
-   **Failed**: The number of transactions that failed processing.
-   **Messages**: Details of any exceptions that occurred during processing.
5.  Review the statistics.

## Check EDI Transaction History

To review EDI transaction history, use the **EDI Transaction History (XHIST)** window. For viewing an item's release history, use the **EDI Release Item History (XITMHIST)** window.

### EDI Transaction History (XHIST) Window

The **EDI Transaction History (XHIST)** window allows you to audit EDI transactions. It displays information including the document ID, revision number, transaction date and time, and transaction reference in a grid.

To check EDI transaction history:

1.  Open the **EDI Transaction History (XHIST)** window using one of the following methods:
    -   On the **Electronic Data Interchange** tab. In the **General Information** group, click **Statistics \> EDI Transaction History**.
    -   Enter **EDI Transaction History (XHIST)** in **Navigation** bar, and click **Enter**.
2.  Review the transactions listed in the grid.

### EDI Release Item History (XITMHIST) Window

When importing an EDI 830 file, M2M verifies whether a related Sales Order (SO) item exists. If the SO item is found, M2M then checks for associated releases. If a release exists and is not yet shipped, M2M deletes the release and re-adds it based on the imported EDI 830 file. If a release has already been shipped, it remains unchanged. For partially shipped releases, M2M updates the release with the actual shipped quantity, deletes the remaining quantity, and re-adds it from the EDI 830 file. All changes, including deletions, additions, and modifications, are logged.

To view the release history of an item, use the EDI Release Item History (XITMHIST) window. This window can only be accessed if there is existing history for the SO item.
