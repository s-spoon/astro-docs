---

title: "KB Articles"

draft: false

cshID:

type: KB Article

---


## Issue: New Framework Generating Unfamiliar Errors

**Problem**:  
The new framework in Made2Manage 8.0 is generating errors that support staff are unfamiliar with, requiring additional help to diagnose.

**Resolution**:

-   Begin by reviewing the error logs and comparing them with available documentation to understand the nature of the errors.
-   Reach out to support if needed and be prepared to provide any relevant logs or error details.
-   If you are unable to resolve the issue, escalate the problem as necessary, following the internal escalation procedures.

## Issue: Changes to User Information Storage in M2M 8.0

**Problem**:  
In the previous version of Made2Manage, user-specific information (such as sort order and last record) was stored in a single text field in the **utuser** table (fmsettings). In M2M 8.0, this information is now stored as individual records by username in the **UTSETTINGS** table in the **M2MSYSTEM** database.

**Resolution**:

-   To review user-specific information, navigate to the **UTSETTINGS** table in the M2MSYSTEM database.
-   The data is now organized differently, so you will need to look up individual user records rather than relying on a single field.

## Issue: Escalating Cloud Issues

**Problem**:  
At times, cloud-related issues may need to be escalated for resolution.

**Resolution**:

-   Always begin the escalation process by using the **Case Processing Template** to ensure that all necessary steps have been followed.
-   The template should include the **Detail Template for Ticket Processing**, which ensures that due diligence has been done.
-   If further assistance is needed from the Tech Hub, create an **R** (Request for Support) ticket as per internal procedures.

## Issue: Changes to User Information Display in 8.0

**Problem**:  
User information in M2M 8.0 is now organized differently, and accessing certain settings may be confusing for users.

**Resolution**:

-   To view user settings and options in M2M 8.0, click on the **user icon** in the upper right corner of the browser.
-   You'll see a drop-down with the following option: **Company**. Use this to switch between companies.

## Issue: Accessing Local Files in 8.0

**Problem**:  
Made2Manage 8.0 includes new configuration for accessing local files, such as engineering CAD images, but some users may have trouble accessing them due to security restrictions.

**Resolution**:

-   To access local files, use the **Service Configuration** in M2M 8.0 to download and configure the Made2Manage file share.
-   Instructions for setup are included in the zip file, and you should right-click the download, go to **Properties**, and unblock the file if necessary.
-   Please note that Aptean internal security may prevent access to these files outside Aptean offices.

## Issue: Accessing Support Resources for M2M 8.0

**Problem**:  
Users need to know how to access support resources for M2M 8.0.

**Resolution**:

-   To access M2M 8.0 support, visit the login page for the support tenant using the following details:
    -   **Login**: ADMIN
    -   **Password**: Aptean@123
    -   **Tenant name**: Support
    -   **URL**: [Insert URL here]

## Issue: Business Logic Customizations in 8.0

**Problem**:  
There is no option to customize business logic in the near future in M2M 8.0, though basic customizations are still possible.

**Resolution**:

-   As of January 23, 2023, business logic customizations are not available. However, basic personalization/customization options are still possible, including:
    -   Changing captions
    -   Reordering tabs
    -   Making fields mandatory
    -   Adding new fields or basic forms.
-   For more advanced customizations, refer to the official documentation or support resources.

## Customer Contact Does Not Exist While Creating Sales Order from FSORD

**Problem**

You may encounter an error message stating that the customer contact does not exist when trying to create a sales order (SO) from an FSORD.

**Resolution**

1.  **Check the Customer**  
    Verify that you are using the correct customer in your transaction.
2.  **Review Customer Addresses**  
    Check how many addresses are associated with that customer.
3.  **Assign Contacts**  
    Ensure that all addresses for the customer are assigned at least one contact.
    -   If any address lacks an assigned contact, assign one to resolve the issue.

## Un-pairing a Device in PingID

**Problem**

Customers may need to un-pair a device for security reasons or to change devices.

**Resolution**

1.  **Transitioning from PingID**  
    Note: PingID has been transitioned out. An Aptean IT ticket is required for this service, as Support does not have access to manage this.
2.  **Create an IT Ticket**
    -   From the Service Desk, select "Create a Request."
    -   Choose "Cloud Ops" from the options.

## APPCHK Producing Checks in the Wrong Order

**Problem**

Customers have reported that when APPCHK is set to run ordered by vendor name or vendor number, the check results are displayed out of order, causing discrepancies with M2M check numbers.

**Resolution**

**Gather Data**
-   Determine the current version the customer is using.
-   Identify the layout from which the custom/desired layout was copied and when (including the version, if known).
-   If the source layout was a custom layout, billable/customization services may be needed.

## Overview

This document outlines the key steps in the installation of Aptean BI for hosted Made2Manage customers.

## Installation Process

**Problem**

The installation steps for Aptean BI can only be completed after successful pre-installation checks.

**Resolution**

**Confirm Successful Pre-Installation Checks**  
    Ensure all pre-installation requirements are met before proceeding with the installation.

## ASSIGN Permissions Not Visible in Transfer

**Problem**

You may find that the ASSIGN permission is not visible in the Transfer window, even after enabling it.

**Resolution**

**Enable Lot Control**
-   Lot control must be enabled for the company to make ASSIGN visible in the Transfer window.
-   Launch CSPROD and navigate to the **Materials** tab.
-   Locate the option in the middle right to enable lot control.

**Note:** Once lot control is enabled, it cannot be turned off.

## "Broadcast To All Users" Checkbox on Setup Screens

**Problem**

You may want to uncheck the "Broadcast To All Users" checkbox on setup screens like COMP, CURR, and CSPROD.

**Resolution**

1.  **Checkbox Behavior**
    -   By design, this checkbox is always enabled.
    -   It is intended to broadcast changes to all users. If you make a change on the COMP screen and do not want it broadcasted, consider the implications before proceeding.

## Custom Check Layout Printing Issues

**Problem**

Using a custom check layout copied from APCHK_LM, M2M assigns the check numbers correctly by vendor name. However, when printing, the checks print out of order, and information for one check may appear on a different check.

**Resolution**

1.  **Verify Check Layout**
    -   In M2M, check the layout in question.
    -   Go to **CSAP/Bank Names** and locate the account/layout that the customer is using.
2.  **Check SQL Management Studio**
    -   Open SQL Management Studio and navigate to the relevant database to investigate further for any inconsistencies.

## Dependent Forecast Not Consumed by Upper Level JO JODBOM Demand

**Problem**

You may encounter an issue where the dependent forecast is not being consumed by the upper level JO JODBOM demand, even when **ForecastDepDemands=Yes** is set in the Syncserv.ini file.

**Resolution**

1.  **Check SYNCSERV.ini Configuration**
    -   Ensure that in the **[PLAN]** section of the **SYNCSERV.ini** file, the setting **ForecastDepDemands=Yes** is correctly configured.
2.  **Verify BOM Components**
    -   Confirm that the dependent part is included as a component in at least one standard Bill of Materials (BOM). It must not be categorized as level 0; it should be at least level 1 to be considered for dependent demand.

## Required Collation Settings for SQL Server to Run Made2Manage

**Problem**

To ensure proper functioning of Made2Manage, specific collation settings must be configured on the SQL Server.

**Resolution**

1.  **Required Collation Setting**
    -   The necessary collation setting for SQL Server and all its databases used by Made2Manage is:  
        **SQL collation: Dictionary order, case insensitive, accent sensitive.**

## Required Collation Settings for SQL Server to Run Made2Manage

**Problem**

To ensure proper functioning of Made2Manage, specific collation settings must be configured on the SQL Server.

**Resolution**

1.  **Required Collation Setting**
    -   The necessary collation setting for SQL Server and all its databases used by Made2Manage is:  
        **SQL collation: Dictionary order, case insensitive, accent sensitive.**

## Article ID: 40656

**Overview**

Most of the information in this article is obsolete. For the most current information, please refer to the following resources on Advanced Reporting (AR).

## Error When Applying New Budget Base Value

**Problem**

After saving a new budget and selecting a base value other than "Default" (e.g., Last Year's budget), you may encounter the following error:  
**"Item N, base value: Previous year budgeting information from this account does not exist."**

**How to Duplicate the Issue**

1.  Navigate to the **BUDG** form and perform the necessary actions to recreate the error.

**Resolution**

1.  **Bypass the Error Message**
    -   Go to the **BUDG** form and click on **NEW**.
    -   Do not save at this stage; this will allow the system to use your selection of the budget (e.g., Last Year's actual).
    -   Then, select **Apply to All Accounts** and click **Apply**.
    
        This should apply your chosen base value without encountering the error.

## Users New to Connect Unsure Where to Find Company Profile

**Problem**

New users may have difficulty locating the Company Profile in Aptean Connect.

**Resolution**

1.  **Sign In**
    -   Sign into Aptean Connect using your company administrator account.
2.  **Locate Company Profile**
    -   Once signed in, from any page, click on the "person" icon in the upper right corner of your browser.

## Understanding How the UTEOP Run Report Works

**Problem**

Users may have questions about how the Run Report function operates within UTEOP.

**Resolution**

1.  **Report Functionality**
    -   The Run Report feature does not respect the **Include** checkbox (whether selected or not). Only the **Execute** option affects the report's behavior.
2.  **Running the Report**
    -   When you run the report, you will be prompted to choose whether to run it for **All Distribution** or just the **Current** distribution. Make your selection accordingly.

## Understanding the "Use Standard BOMs and Routings" Checkbox in Quote

**Problem**

Users may need clarification on the function of the "Use Standard BOMs and Routings" checkbox when creating a quote.

**Resolution**

1.  **Checkbox Functionality**
    -   If checked, this checkbox indicates that detailed BOMs and routings will be pulled from the standards.
    -   If unchecked, it means that BOMs and routings have been modified for this item and will be copied to sales orders and jobs.
    -   This checkbox appears only for **Make** or **Make-to-Order** items.

## Adding a New FOB Point

**Problem**

Users may need assistance in adding a new FOB point in either the Classic or DotNet versions.

**Resolution**

1.  **For Classic Version**
    -   Click on **EDIT** in the Shipper screen.
    -   Right-click on the **FOB Point** dropdown to access the **Pop Up Table Maintenance** screen.
2.  **For DotNet Version**
    -   Click on the link symbol to the left of the **FOB Point** dropdown to proceed with adding a new FOB point.

## How to Change a Journal Entry Description

**Problem**

Users may need to update the description of a journal entry.

**Resolution**

1.  **If the Journal Entry is Not Posted**
    -   Update the correct description directly from the **GLJEITEM** table.
2.  **If the Journal Entry is Posted**
    -   Update the description in the **GLTRAN** table as well.
    -   Use an SQL update command to fix the incorrect description.

## Configuring APS for Saturday Holidays

**Problem**

Users need to configure the APS system when Saturday is a holiday throughout the year.

**Resolution**

1.  **Check the Base Calendar**
    -   The APS system initially looks for the **Base Calendar**.
    -   By default, Saturdays and Sundays are marked as non-operative (Screen: PSBASCAL).
2.  **Set Saturday as a Holiday**
    -   If Saturday is a holiday and Sunday is not, ensure the **Operative** box is unchecked for Saturday.

## How to Delete an EFT Batch

**Problem**

Customers may need to delete an EFT batch if they decide to pay the vendor through check instead.

**Resolution**

1.  **Deletion Restrictions**
    -   A batch cannot be deleted if it has been exported.
2.  **Steps to Delete an Unexported Batch**
    -   If authentication is enabled, check if the batch is awaiting approval:
        -   If yes, go to **APEFTAUT** and approve the batch.
        -   If no, proceed to step 2.
    -   Go to **APEFT** and change the status of the batch to **S** (Suspended).

## Data Transfer Error in New Install

**Problem**

When running the Data Transfer from Demand Forecasting to Made2Manage, an error occurs:  
**"Data-transfer-from-Demand-Forecasting-to-m2m-did-NOT-complete-successfully-error-code-4008."**

**Resolution**

1.  **Check TRX Path**
    -   Navigate to **Utilities \> Company Setup \> Module Setup \> M2M Demand Forecasting \> Integration Control File Editor** and ensure the TRX path is accurate.
2.  **Supply/Demand Extract**
    -   Verify that the **Supply/Demand Extract By Rollup** settings are correctly configured.

## Temporarily Hide On-Hand Quantity from Certain Locations

**Problem**

Users may need to hide on-hand quantities for a specific inventory location under quarantine restrictions.

**Resolution**

1.  **Create a Workaround**
    -   To make the quarantine location not visible in Made2Manage as having available or on-hand quantity, follow the necessary steps to restrict access to this location temporarily.

## How to Void Tags

**Problem**

Users may want to void tags that are no longer needed.

**Resolution**

1.  **Access the PHYINV Screen**
    -   Go to the **PHYINV** screen and click the bell icon.
2.  **Select Options in PHYCS Screen**
    -   The **PHYCS** screen will appear. Choose the appropriate option, such as **Unused** to void tags.
3.  **Select Eligible Tags**
    -   Choose from the list of eligible tags and provide the range in the next screen (e.g., **PHYSRT**).

## Internal Resources: Aptean Power BI for M2M Support

**Note**

**INTERNAL ONLY**: This information is not to be shared with customers.

## Overview

This section contains internal resources for Aptean Power BI related to Made2Manage support.

**Power BI Training Information**

-   For training resources, visit:  
    [Power BI Training Info](https://apteanonline-my.sharepoint.com/personal/jbaldwin_aptean_com/_layouts/15/onedrive.aspx?FolderCTID=0x0120003792FE857FEF9C4BA0EDC63D651A096A&id=%2Fpersonal%2Fjbaldwin%5Faptean%5Fcom%2FDocuments%2FDocuments%2Fv7%2E5)

## How to Rebuild JODBOM from a Backup

**Problem**

Instructions for internal users on rebuilding the JODBOM from a backup.

**Resolution**

-   Refer to the Engineering Change Management (ECM) documentation from version 7.5 for detailed steps.

## Customer Requests Update to Activation/License Terms

**Problem**

When a customer requests an update to their activation or license terms, a specific process should be followed.

**Resolution**

1.  **Create a Case**
    -   If the customer initiates the request by phone, the support analyst should create a case.
2.  **First Response**
    -   The analyst must complete the first response by SLA, whether through a post or email, advising the customer that their request will be communicated to fulfillment.
3.  **Follow-Up**
    -   The analyst should ensure that the communication is logged and followed up as necessary.

## Cannot Open Consolidated Company After 7.51 SP7 Upgrade

**Problem**

After upgrading Made2Manage (M2M) from Service Pack 6 (SP6) to Service Pack 7 (SP7), users may encounter an error when attempting to open a consolidated company.

**Resolution**

1.  **Understand the Issue**
    -   This problem arises due to a database schema change between 7.51 SP6 and SP7.
    -   In SP6, two columns, **'Created_Date'** and **'Modified_Date'**, were added to all M2M tables.
    -   In SP7, these columns were removed from some of the tables.
2.  **Next Steps**
    -   Review the affected tables and ensure that the database schema aligns with the requirements of SP7.
    -   Consult with the database administrator or technical support for assistance in resolving the schema discrepancies.

## Case Owner Needs Assistance to Work to Resolution

**Problem**

Case owners may require assistance to resolve customer issues effectively.

**Resolution**

1.  **Work the Case Before Escalating**
    -   Ensure that you have completed any required first response for the case.
2.  **Update Case Details**
    -   Make sure to update the case record to reflect the customer's current product version.

## What is a Customization Request?

**Problem**

Customization requests involve transferring a case to the Services team for further action.

**Resolution**

1.  **Transfer Process**
    -   Before transferring, confirm that the customer understands the request is billable. Use email or posts to communicate this clearly.
2.  **Customer Confirmation**
    -   Once you have received confirmation from the customer regarding the billable nature of the request, proceed to change the case record type to reflect this.

## Overview: Aptean Print Service Integration

**Problem**

Starting from version 7.51 SP13, the Aptean Print Service is integrated for Aptean Hosted customers. This integration is contingent upon specific factors.

**Conditions for Print Service Invocation**

1.  **Activation Code**
    -   The customer's activation code must have **Aptean Hosting** enabled.
2.  **Configuration File**
    -   Ensure that the configuration file located at **M2M\\M2MData\\Common\\M2Mcommon.ini** is correctly set up.

## New Features in 7.51 SP13: Aptean Print Service Screens

**Problem**

Version 7.51 SP13 introduces two new screens related to the Aptean Print Service.

**New Screens**

1.  **UTILHOST**
2.  **CSCPSETUP**

**Resolution**

-   These screens must be enabled in **PERMWIZ/Screens** with default permissions.
-   Note that the Tech Hub must generate the codes entered in **CSCPSETUP**. Use this form to configure the necessary settings.

## Customer Issue Beyond Scope of M2M Support

**Problem**

Customers may face issues that are outside the scope of Made2Manage (M2M) support and do not qualify as customizations.

**Resolution**

1.  **Scope of Support**
    -   Clearly communicate to the customer that their issue is beyond the capabilities of M2M support.
2.  **Tech Consulting Note**
    -   Inform the customer that the tech consulting team does not utilize Salesforce, unlike the support and customization teams.

## Customers Unable to Reset Passwords

**Problem**

Customers may experience issues resetting their passwords, receiving emails with reset links that state they are already expired.

**Resolution**

1.  **Initiate Password Reset**
    -   Instruct the customer to click on the **"Forgot Your Password?"** link from **Connect.aptean.com**.
2.  **Check Email Receipt**
    -   If the customer does not receive an email to reset their password, proceed to the next step.
3.  **Navigate to Contact's Community Account**
    -   Access the Contact's Community account to verify their email address and account status.
    -   Ensure that the email address associated with the account is correct and check for any potential issues.

## How to Escalate an Aptean Pay Issue Related to the Aptean Pay Portal

**Problem**

Aptean Pay issues can be categorized into two types that require different handling.

**Resolution**

1.  **Integration Issues**
    -   If the issue is related to integration with M2M/ERP, it should be resolved by the M2M support team, similar to any regular customer ticket.
2.  **WePay Portal Issues**
    -   If the issue arises from the WePay portal, it needs to be escalated to the Aptean Pay Support team.

## How to Get Tenant ID and Secret Key for Aptean Pay Stage Site

**Problem**

To test Aptean Pay issues, credentials are required for the Aptean Pay Stage site.

**Resolution**

1.  **Access Credentials**
    -   Obtain the Tenant ID and Secret Key for testing via the site:  
        [Aptean Pay Stage Site](https://stg.merchant.apteanpay.com/all-payments).

## Internal: Advanced Reporting Activation Codes

**Description**

This section contains internal activation codes for Advanced Reporting (ARW).

## Release Date Document for All M2M Versions

**Problem**

Users may inquire about the availability of a release date document for all Made2Manage (M2M) versions.

**Resolution**

-   Confirm whether such a document exists and provide details or point to the appropriate resource.

## Internal: Made2Manage - Aptean Business Intelligence Installation Guide

**Problem**

For internal reference, the Made2Manage - Aptean Business Intelligence Installation Guide is attached.

## Internal: Unique Asset Names for Some M2M Optional Modules

**Problem**

Certain optional modules in Made2Manage (M2M) have unique asset names.

**Note**

-   This information is for **INTERNAL ONLY** reference.

## Internal: Sporadic ARINV Double Postings

**Problem**

Sporadic double postings in ARINV may occur from different M2M user logins.

**Resolution**

1.  **Controlled Invoice Posting Process**
    -   Use a more controlled invoice posting process:
        -   Leave invoices at the **New** status rather than confirming them immediately.
        -   Ring the bell as a group of invoices at once by **ONE user only**.
2.  **Custom Invoice Programs**
    -   Check if users have a customized invoice program running in **CMDS\\PROC**, as this may contribute to the issue.

## Internal: Referring a Ticket for Technical Consulting

**Problem**

Procedure for referring a ticket to the Technical Consulting team.

## Consolidating/Documenting Support Procedures

**Problem**

Efforts to consolidate and document support procedures.

**Note**

-   For ease of reference, see the attached template .txt file.

## Internal: Troubleshooting E&A Related Issues

**Problem**

Issues may arise with E&A, such as no emails being sent or random attachments not appearing.

**Resolution**

1.  **Notifier Settings**
    -   Under **USER \> Notifier tab \> Event Client**, do not check this option unless the user is indeed an E&A user and has a valid email set up under the **E-mail & CRM Synchronization** tab.
2.  **Event Client User Limitations**
    -   Only a few users should have Event Client access due to the constraints of **CR DEV-1907**.

## Internal: BI Data Flow Master Records Classified as UNKNOWN

**Problem**

During the BI data flow process, some master records may be classified as UNKNOWN due to deletions.

**Explanation**

For example, in M2M, you can obsolete a part when there are no open activities. After that, the obsolete part can be deleted from the item master, leading to records being classified as UNKNOWN.

## SQL Admin Permissions for Company Creation During Data Archiving

**Problem**

SQL Admin permissions are required for creating companies when archiving data (e.g., Consolidated Company).

**Resolution**

-   The Aptean-M2M Cloud team will publish **DAW** to the desktop of any customer Admin user with **dbowner** permissions.
-   As part of standard cloud security protocols, higher permissions cannot be granted to customer end users.

## Ensuring Tech Hub Team is Alerted for New Requests

**Problem**

To ensure the Tech Hub team is alerted for new requests related to hosted/M2M SaaS customer issues.

**Resolution**

1.  **Access the Customer Case**
    -   From the customer's case, click on the **Development** tab.
2.  **Create a New Request**
    -   Select **"New"** under the **REA** section. Most details will default from the case, including product and severity.
3.  **Note on Severity Definitions**
    -   Be aware that Tech Hub severity is defined differently from product case severity.

## Margin Analyzer Login Fails with Error Message

**Problem**

Users may experience login failures in the Margin Analyzer with the error message: *"Attempt to access company global settings using an invalid company id: XX."*

**Resolution**

1.  **SQL Server Navigation**
    -   On your SQL server, navigate to:

syspath\\loading\\m2mdbutility

(Note: *syspath* is usually *m2m\\m2mdata*).

1.  **Launch M2MDButility**
    -   Open **M2MDButility**.
    -   Select the first option: **M2M DB Connections**.
    -   Use the default selections and ensure not to check the box to **Reconfigure System Connection**.

## Changing Instructions for RMA Received with Quantity Under Inspection

**Problem**

Users need to modify the instructions of an RMA that has been received and has quantity under inspection.

**Resolution**

1.  **Access RINS**
    -   Open **RINS** and select the receiver in question.
2.  **Check Inspection Tab**
    -   Look for any line items added under the **Inspection** tab.
    -   If there is a line item, delete it.
3.  **Zero Out the Receiver**
    -   Go to the receiver and set the quantity to zero.
4.  **Update RMA Instructions**
    -   Go to the RMA and change the instructions accordingly.

## Overview: Data Flow Through the Work Center Console of Shop Floor Manager

**Description**

This section describes how data flows through the Work Center Console of the Shop Floor Manager (SFM).

**Resolution**

-   Refer to the attached document for detailed information about the data flow through the Work Center Console.

## How Customers Can Upload Data to Support via FTP

**Problem**

Customers need to know how to upload data to Support using FTP.

**Resolution**

1.  **Using M2MExpert FTP Site**
    -   The most efficient method to send data to Made2Manage Support is via the FTP site.
2.  **Instructions for Uploading**
    -   Follow the provided instructions to upload data successfully.

## Quantity Committed Showing 0 for a Purchase to Stock Part

**Problem**

Users may see that the quantity committed shows as 0 for a Purchase to Stock part.

**Resolution**

1.  **Adjust Floor Stock Setting**
    -   Uncheck the **Floor Stock** checkbox, and the Quantity Committed will then be displayed.

## Remotely Connected Users Unable to Login to the .NET Client

**Problem**

Remotely connected users may face issues logging into the .NET client, where the login screen does not display the toolbar and only allows cancellation.

**Resolution**

1.  **Remote Desktop Connection Issue**
    -   This error typically occurs when users are connected to a PC remotely using Remote Desktop.
2.  **Home Folder Configuration**
    -   Check the Windows Active Directory settings; if you define a home folder for a user, that location is where M2M will attempt to log in.

## Internal: SaaS Login and SQL Management Studio Access

**Problem**

Effective March 2022, support analysts will have SaaS logins with dbowner permissions.

**Resolution**

1.  **Accessing SQL Management Studio**
    -   To access SQL Management Studio, analysts should use the customer URL.
    -   If the support notes do not have the URL, you can replace the customer name in the URL.

## SaaS Customer Requests for New Cloud User Accounts

**Problem**

Customers may request new Cloud user accounts.

**Resolution**

1.  **Server Connection Limits**
    -   Server connection (SaaS account) limits are set by IT based on M2M concurrent users in the activation/license agreement.
2.  **Adding New Accounts**
    -   **UNTIL FURTHER NOTICE, PLEASE JUST ADD NEW ACCOUNTS UPON REQUEST.**
    -   Dave P. and the Sales/Product teams are working on how to manage SKUs and identify allowed users.

## Unclear Purpose of SFMSETUP Settings

**Problem**

There may be confusion regarding the SFMSETUP settings: "Allow Auto clock-out for prior day" and "Hours Minimum between Last Clock-in and Next Clock-In to Indicate Missed Clock-Out from Prior Day."

**Explanation**

-   This checkbox allows clocking out from the previous day based on the hour value specified.
-   If an employee did not clock out from the prior day, attempting to clock out will trigger the relevant settings.

## Shipper Shipped but No Inventory Movement or Posting

**Problem**

When a shipper is shipped, no inventory movement or posting may occur.

**Resolution**

1.  **Run Shipfix**
    -   Execute **shipfix** so that the shipper can be invoiced.
2.  **Adjust On-Hand Inventory**
    -   Perform an on-hand adjustment from **INVTR** and enter journal entries for the posting.
3.  **Scrap Inventory**
    -   Conduct an **INVTR Scrap** to allow the user to enter comments about the shipper and include the GL number for the posting.

## Email Not Sent Due to SMTP Server Requirements

**Problem**

Users may encounter an error stating: *"The SMTP server requires a secure connection or the client was not authenticated. The server response was: 5.7.57 Client not a..."*

**Resolution**

1.  **Initial Testing**
    -   Consider executing the relevant PowerShell script to troubleshoot and resolve the email issue.

**Sales Order Items Start at a Number Higher Than 001**

**Problem**

Creating a sales order from a quote results in sales order items starting at a number higher than 001 (e.g., quote has items 001, 002, 003; SO results in items 004, 005, 006).

**Cause**

-   The issue is data-related, specifically with items in the **SORELS** and **SOITEM** tables that have no sales order number (FSONO).

**Resolution**

1.  **Run Integrity Scripts for SO**
    -   Ensure integrity scripts for sales orders are executed to correct the issue, especially for sub-jobs created without a parent level.

## Upgrading Advanced Reporting from Version 6 to 8

**Problem**

The upgrade process from Advanced Reporting version 6 to version 8 is not straightforward.

**Resolution**

1.  **Conversion Process**
    -   You must first run a conversion from version 6 to version 7.
    -   Follow the instructions provided in this link: [Upgrade Instructions](https://forum.compusoftdevelopment.com/showthr).
2.  **Final Upgrade to Version 8**
    -   Once on version 7, you can easily upgrade to version 8.

## UPS Created Shipper Not Appearing in UPSMAST Table in M2M

**Problem**

A shipper created in M2M is not updating in the UPSMAST table.

**Resolution**

1.  **Check UPSMAST Table**
    -   If the UPSMAST table is empty, it indicates that UPSAM processes are not running.
2.  **Verify UPSAM Process**
    -   Ensure that the UPSAM process is running, or check if the computer hosting it is operational.

## Explanation: "Exclude From Scheduling" and "Exclude From MRP" Flags in Item Master Extension

**Description**

These flags determine how items are treated in scheduling and MRP processes.

**Resolution**

1.  **Exclude From Scheduling**
    -   If your company uses the Advanced Scheduling option in Planning and Scheduling, this setting allows you to exclude specific parts from the Advanced Scheduling schedules.
    -   Choosing this setting tells Advanced Scheduling to ignore all standard routing operations related to the excluded parts.
2.  **Exclude From MRP**
    -   This flag indicates that the specified item should not be included in Material Requirements Planning calculations, thus preventing it from affecting MRP output.

## Lower Left Scale in PSSINGLG Screen*

**Problem**

Users may need clarification on the purpose of the lower left scale in the PSSINGLG screen.

**Explanation**

-   The lower left area represents the actual number of simultaneous operations scheduled at the specified work center.

## Understanding jomast.FDFNSHDATE Field

**Problem**

The jomast.FDFNSHDATE field is used as the scheduled finish date for jobs.

**Explanation**

-   This field is generated by the scheduling system and will be updated only if planning and scheduling are actively in use.
-   It corresponds to the Schedule Finish field in the Modify Job Schedule screen.

## Question: Column Name for Floor Stock in INMASTX Table

**Problem**

Users may need to identify the column that represents Floor Stock in the INMASTX table.

**Resolution**

The field name for Floor Stock in the INMASTX table is **FBULKISSUE**.

## Vendor Price Hike Notification Before Placing a PO

**Scenario**

A vendor informs that the price of part “A” will increase from \$100 to \$104 starting 1/1/2021.

**Resolution**

1.  **Create a New PO**
    -   Users can create a purchase order (PO) with the new price of \$104.
2.  **Receiving Process**
    -   During the receiving process, the last actual cost will automatically update for the part number.
3.  **Cost Roll**
    -   Perform a cost roll to update buy parts with the last actual cost, then roll to update inventory, ensuring that the inventory cost reflects the latest pricing.

## Request: PDF of Training Material from Connect

**Problem**

Users may want a PDF version of training material viewed on Connect.

**Resolution**

1.  **Accessing Training**
    -   Log into Connect and navigate to the **Training** section.
2.  **Filter and Find Topic**
    -   Set the appropriate filters as desired, locate your topic, and click on the arrow to the right to launch the training material.

## Question: Table Storing PROC Screen Information

**Problem**

Users may need to know where PROC screen information is stored.

**Resolution**

All information from the PROC screen is stored in a file located on the M2M server at:

    **C:\\Program Files (x86)\\Aptean\\Made2Manage Server\\processorservices.config**

## Version 8 M2M New Features and Resources

**Problem**  
You need information about the new features and resources introduced in Version 8 M2M.

**Resolution**  
Version 8 M2M introduces several new features and improvements. Some of the key updates include:

**Architecture**

-   **Cloud-Based Solution**: The system has transitioned to a cloud-based architecture, offering better scalability and performance.
-   **Web UI on Sencha ABP**: The user interface is now powered by Sencha ABP, providing a more modern and responsive web experience.

For more details on these features, check back for additional updates in the coming months.

**Upgrading from Classic Version**

If you're upgrading from the classic version of M2M, more information will be available soon to guide you through the process. Please stay tuned for further updates.

## Issue: Zetafax No Longer Asks Where to Send Fax After Upgrade to Version 8.0

**Problem**  
After upgrading to Zetafax Version 8.0, the system no longer prompts you to choose where to send faxes.

**Resolution**  
To resolve this issue, confirm that you are using the correct version of the Zetafax service file (ZFDEAMON.EXE). Ensure that you are using the Version 8.0 file, not the older Version 7.5 file.

If you are using Citrix, make sure to update the Zetafax client directly on the server.

## Issue: Do I Need Visual FoxPro (VFP) 8.0 or Greater to Customize Reports in Made2Manage Versions 5.5 or Greater?

**Problem**  
You need clarification on whether Visual FoxPro (VFP) 8.0 or higher is required to customize reports in Made2Manage versions 5.5 or higher.

**Resolution**  
No, you do not need VFP 8.0 or greater to perform report customizations in Made2Manage versions 5.5 or higher. For backward compatibility with the Made2Manage system, VFP 6.0 or newer is required to enable report customization functionality.

## Installing Aptean Print Agent

**Problem**  
You are unsure how to install the Aptean Print Agent in Version 8.0 of Made2Manage (M2M).

**Resolution**  
To install the Aptean Print Agent in M2M Version 8.0:

1.  Search for the **Service Configuration Screen** within the M2M interface.
2.  Navigate to the **Printers** tab.
3.  Click the **Download** button to download the Printer Agent.

## Orders in Shipping Queue (SCIFS) Showing Quantity Available, but Not Yet Passed Inspection (RINS)

**Problem**  
A customer sees quantities available to ship in the shipping queue (SCIFS), but the items have not yet passed inspection (RINS). This issue needs to be addressed.

**Resolution**  
With the implementation of **CR DEV-148770**, a new option is available on the **Setup Shipping Queue Filter**.

1.  Enable the new checkbox that filters items which have not yet been received/inspected.
2.  Once this box is checked, only items that have passed inspection will be counted in the quantity available to ship.

## Column Order in Browse Screen: User-Specific vs. Group-Wide in Version 8.0

**Problem**  
In Version 7.51, users could move columns in the browse screen to their desired locations, and the column order was saved for each user. In Version 8.0, this functionality is not user-specific, and the column order does not persist when using drag-and-drop.

**Resolution**  
In Version 8.0, to adjust the browse column order for your group, you need to use **DICT** (Dictionary) for the desired group and table.

-   Note: Any changes made to the column order will apply to **all users in the group**.

## Customer Experiencing Slow Performance and Abnormally High CPU Usage

**Problem**  
The customer is experiencing slow system performance and notices abnormally high CPU usage, potentially due to a conflicting browser extension.

**Resolution**  
To address this issue, remove the **Dashlane** password manager browser extension, which is known to cause high CPU usage and slow performance.

-   For more information on the issue, you can refer to [this article](https://isdown.app/integrations/dashlane/incidents/161496-extension-causing-a-high-cpu-usage-and-slow-performance).

## Customer's Reports Displaying Barcodes, Even Though No Shop Floor Application is in Use

**Problem**  
The customer’s reports are showing barcodes, but they want these barcodes suppressed from the reports, as they are not using any shop floor application.

**Resolution**  
To suppress the barcodes from reports, follow these steps:

1.  Navigate to the **Production Module Setup**.
    -   You can access this by entering **CSPROD** (the former mnemonic) in the navigation prompt, or by typing "production" in the search field.
    -   Alternatively, go to the **Utilities \> Company Setup \> Module Setup** menu.
2.  Configure the settings to suppress barcode information from the reports.

## Emailing Reports/Events & Actions: Email Password Requirement

**Problem**  
The customer needs to email reports, events, or actions but requires an email password for this process.

**Resolution**  
To enter the email password:

1.  Click on your user icon (your initials) in the upper-right corner of the screen.
2.  From the dropdown, select **Settings**.
3.  In the settings menu, choose **Change Password**.
4.  Here, you will find the option to enter your email password.

## User Preferences (Sort Order, Last Viewed Record, 'Exclude Computed Columns') in Version 8.0

**Problem**  
In previous versions of Made2Manage (M2M), user preferences such as sort order, last viewed records, and 'exclude computed columns' were stored in the **m2mwini.ini** file or in the **UTUSER** table in **M2MSystem**. You now need to know where these preferences are stored in **Version 8.0** and how M2M support can assist.

**Resolution**  
In M2M Version 8.0, user preferences such as column arrangements, sort preferences, and other settings are automatically saved for each user. This is done through the application’s internal system, so there is no need for manual file edits. The following are automatically saved for each user:

-   **Column arrangements** (the order of columns)
-   **Sort preferences**
-   **Last viewed records** (e.g., Sales Orders, Item Master, Invoices, etc.)
-   **Other user-specific settings**, such as "Exclude computed columns" preferences

These preferences are saved for quick retrieval and are not stored in the **m2mwini.ini** or **UTUSER** table. Instead, they are handled automatically in the backend for a smoother user experience.

For any issues or additional help, M2M support can assist in troubleshooting any preference-related problems.

## Date/Time Stamp of Reports vs. Report Content Transaction Times

**Problem**  
You want to know the difference between the **date/time stamp of the report itself** (displayed in the upper-right corner of the report) and the **transaction times** in the report content. Additionally, you need clarification on how time zones are handled in Version 8.0.

**Resolution**  
In Version 8.0, since the environment is multi-tenant, the report engine cannot display different time zones for each customer. As a result, the **date/time stamp** in the upper-right corner of the report will always reflect **UTC** (Coordinated Universal Time).

-   The **report content transaction times** will reflect the relevant transaction times (e.g., when the transaction occurred in the system), but these times will not adjust to specific user time zones.

If you need to align transaction times with your local time zone, you may need to adjust this manually in report settings or consult M2M support for further customization.

## User Unable to Log In to M2M

**Problem**  
A user is unable to log in to the M2M Web Application and receives an error message.

**Resolution**  
Follow the steps below to resolve the issue:

1.  Log out from the M2M Web Application.
2.  In your **browser**, click the **three dots** (ellipses) in the top-right corner to open the browser menu.
3.  Select **Settings** from the dropdown.
4.  Scroll down and click **Advanced**.
5.  From the advanced settings menu, select **Privacy and Security**.
6.  Clear your browser’s **cache and cookies**.
7.  Try logging in again.

If the issue persists, contact M2M support for further assistance.

##Registering Assembly in GAC for Windows Server 2012 and Above

**Problem**  
In Windows Server 2012 and above, users are unable to register assemblies (e.g., ReportHelper.dll) in the **Global Assembly Cache (GAC)** using traditional methods.

**Resolution**  
In Windows Server 2012 and above, users cannot directly register assemblies like ReportHelper.dll into the GAC using older methods. Here are two alternatives to register the assembly:

1.  **Using the GACUTIL Tool**:
    -   Open **Command Prompt** as **Administrator**.
    -   Use the following command to register the assembly in the GAC:

bash

``gacutil /i "C:\\Path\\To\\ReportHelper.dll"``

-   Ensure you replace the path with the actual path to your ReportHelper.dll.
1.  **Using the Syspath Entry**:
    -   Navigate to the **M2MWin.ini** file located in C:\\Windows.
    -   Locate the **Syspath** entry in the file, which should point to the appropriate directory where ReportHelper.dll is located.
    -   After ensuring the correct path is set, try the registration process again.

## Workaround for Made2Manage Issues After Restarting Windows 10 Workstation (7.5 Test Environment)

**Problem**  
After restarting the Windows 10 workstation used for the 7.5 test environment, Made2Manage does not start as expected.

**Resolution**  
To resolve this issue, set the startup type of the Made2Manage service from **Automatic** to **Automatic (Delayed Start)**. This can be done by:

1.  Press **Windows + R** to open the **Run** dialog.
2.  Type services.msc and press **Enter**.
3.  Find the **Made2Manage service** in the list.
4.  Right-click on it and select **Properties**.
5.  In the **Startup type** dropdown, select **Automatic (Delayed Start)**.
6.  Click **OK** to apply the changes.
7.  Restart the workstation to test the fix.

## Windows Event Viewer Log Shows Application Popup Errors After Upgrading to 7.5, No Errors in M2M

**Problem**  
After upgrading to Made2Manage Version 7.5, the **Windows Event Viewer** log displays several **Application Popup** errors, but no errors are present in the M2M application itself.

**Resolution**  
To resolve this issue, the **fnbrsorder** and **fnlkporder** values in the **UTFIELD** table in the **M2MSystem** database need to be updated. Follow these steps:

1.  Open **SQL Server Management Studio**.
2.  Connect to the **M2MSystem** database.
3.  Update the values in the **fnbrsorder** and **fnlkporder** fields using the following SQL query:

``sql``

``UPDATE UTFIELD``

``SET fnbrsorder = [new value], fnlkporder = [new value]``

``WHERE [conditions];``

Make sure to replace [new value] with the correct values for your system.

1.  After updating the values, restart the **.NET services** to apply the changes.

## Achieving Windows Authentication When M2M Login Is Not the Same as Windows Login or Exceeds 10 Characters

**Problem**  
You have **Made2Manage (M2M)** logins that are not the same as the **Windows login**, or the M2M login exceeds 10 characters, which can prevent automatic Windows authentication.

**Resolution**  
To achieve Windows authentication when the M2M login is not the same as the Windows login (or is truncated to 10 characters):

1.  Open the **CSSYS** module.
2.  Ensure that the **Auto Login** option is enabled.
3.  In the **USER** table, map the existing M2M login to the corresponding **Windows user** by entering the correct **Windows user name** in the **Windows User** field. This maps the user to the correct Windows credentials.

By linking the M2M login to the Windows user, you can achieve seamless Windows authentication, even if the M2M login is different or longer than the Windows login.

## DecimalAttribute Error After Upgrade When Selecting Customized Windows or "About" (SCRMNT)

**Problem**  
After upgrading, when selecting **Customized Windows** or **About**, the system throws a **DecimalAttribute** error. This issue is related to customizations (specifically, the **SCRMNT** customization) that modify decimal precision on the **Item Master** tab.

**Resolution**  
It’s important to always test any upgrades, including **Service Packs (SPs)** and **Hotfixes (HPs)**, on a **test environment** before applying them to the production environment. This is especially critical when customizations (like **SCRMNT**) are active in your environment.

If the customization added a tab to the **Item Master** to change decimal precision, ensure the customization is compatible with the new version or fix any issues that arise during testing.

## Popup Fields Blank After Upgrade on Windows (CSPOPUP)

**Problem**  
After upgrading, some popup fields in Windows are showing as blank. For example, the **pay type** field on **EMPL** or **CSPROD** backflush triggers/settings is displaying blank values, even though the data exists in the database.

**Resolution**  
The issue can be resolved by running a **SQL query** on the affected database. Here’s how:

1.  Open **SQL Server Management Studio**.
2.  Run the following query on the affected databases:

``sql``

``\-- Example query to resolve popup field issues``

``UPDATE [affected_table]``

``SET [column] = [correct_value]``

``WHERE [conditions];``

1.  The exclusions and corrections are based on a **7.03 SP1** database. Make sure the query applies correctly to your version.
2.  After running the query, test to ensure the popup fields display correctly.

## Installation of M2M App Server from Media Terminates with 1603 Windows Installer Error

**Problem**  
When attempting to install the **M2M App Server** from the media installation set, the installation terminates abruptly and throws a **1603 Windows Installer error**.

**Resolution**  
To resolve this issue, ensure that the installation steps are completed successfully. The **Syspath Install** and **STOS** installation must complete without errors. Here are some steps you can take:

1.  **Check prerequisites**: Make sure all prerequisites for the App Server installation are met.
2.  **Run as Administrator**: Run the installer with **Administrator** privileges to avoid permission issues.
3.  **Clean the system**: Before attempting another installation, remove any remnants of the previous installation by cleaning the **Program Files** and **temp** folders.
4.  **Verify Disk Space**: Ensure that there is enough space on the disk where the installation is taking place.
5.  **Review Windows Installer Logs**: If the installation still fails, check the **Windows Installer logs** for more detailed error information that can help in troubleshooting.

## AR Launch or Uninstall Throws Windows Error 216 While Loading the Java VM

**Problem**  
When launching or uninstalling **AR** (Accounts Receivable), a **Windows Error 216** occurs while loading the **Java VM**.

**Resolution**  
Ensure that you are downloading and installing the correct version of the **Java Runtime Environment** based on the client’s architecture:

1.  **Verify Architecture**:
    -   If your client is running **64-bit Windows**, make sure to install the **64-bit** version of Java.
    -   If the client is **32-bit**, install the **32-bit** version of Java.
2.  **Install Correct Java Version**: You cannot run a **64-bit install** on a **32-bit client**. Download the correct Java version from the official site and reinstall.

## Missing Select Windows in Explorer (EXPLOR)

**Problem**  
When using **EXPLOR**, a user can access the **INV** window and press **Explorer**, but they cannot select **INV** from the browse within **Explorer** due to missing functionality.

**Resolution**  
To resolve this issue, enforce security settings in **SCRMNT**:

1.  Navigate to the **SCRMNT** module.
2.  Find the **offending window record**.
3.  Press the **Enforced checkbox** to enforce security on that window.
4.  Grant **all users** the necessary permissions to the affected window to allow selection in **Explorer**.

## CheckUtilSQL and CreateBC Execution Throws "Windows Cannot Access the Specified Device" Error

**Problem**  
Running **CheckUtilSQL** or **CreateBC** throws the error: **"Windows cannot access the specified device"**. This may occur after Windows updates.

**Resolution**  
Ensure that the **domain SQL administrator account** is being used to run the utilities and that it has full rights to the program folder, **Syspath**, and the **M2MWin.ini** file:

1.  Verify that the **SQL administrator account** has full rights to access the folder and files used by Made2Manage.
2.  Check **SQL permissions** for the domain account to ensure they are configured correctly.
3.  If you have **enhanced security** enabled in **Internet Explorer**, disable it temporarily to avoid interference with the utilities.
4.  Ensure that there are no restrictions or firewall settings blocking access to the necessary resources.

## Considerations When Changing a Windows Domain on the Server Hosting SQL Server or M2M Services

**Problem**  
When changing the **Windows domain** on the server hosting the **SQL server** running Made2Manage (M2M) and/or M2M services, it can impact the functionality and security of the system.

**Resolution**  
The domain is critical to the proper functioning of M2M. When changing the domain, consider the following key points:

1.  **SQL Server Authentication**: Ensure that the SQL server is properly authenticated with the new domain.
2.  **M2M Service Account**: The service account used by M2M must have appropriate permissions in the new domain.
3.  **Network Configuration**: Verify that all network configurations are correct and the server is properly connected to the new domain.
4.  **Group Policies**: Check if there are any domain-specific group policies that could affect M2M functionality.
5.  **Access Permissions**: Ensure that all users and services can still access required resources (like SQL databases, shared drives, etc.) under the new domain.
6.  **Testing**: Test the new domain setup in a non-production environment before implementing it in the live system.

## Custom Windows Not Displaying in TRANSFER Even Though SCRMNT Flags Them for TRANSFER

**Problem**  
Custom windows that were set up in **SCRMNT** to be launched from the **TRANSFER** window are no longer showing up as expected.

**Resolution**  
This issue can occur when custom executables or windows are added to the product, but the **TRANSFER** window is not recognizing them. Here’s how to resolve it:

1.  Verify that the **TRANSFER** window is properly flagged in **SCRMNT**.
2.  Ensure that the **custom executable** or window is correctly configured in **SCRMNT** to launch from the **TRANSFER** window.
3.  If this is happening in **Version 7.51**, check whether any recent updates or changes to the **SCRMNT** configuration have impacted the behavior of the **TRANSFER** window.
4.  Recheck the executable setup and confirm that it is correctly linked to the **TRANSFER** process.

## Windows Login of a Regular User: Local Admin Permissions and UAC Settings

**Problem**  
Some organizations require that **users are not administrators**, and **User Account Control (UAC)** is turned on. This raises the question of whether a regular user must have **local admin** rights to run M2M.

**Resolution**  
To ensure proper M2M functionality, follow these steps:

1.  **Local Admin Rights**: Ensure that the user has local admin rights or is a **power user**. This is often necessary for the system to function smoothly, especially for M2M services that require elevated permissions.
2.  **UAC Settings**: If **UAC** is enabled, it may interfere with M2M. You can set **UAC** to **"Never Notify"** (this requires administrative privileges):
    -   Open the **Control Panel**.
    -   Go to **User Accounts**.
    -   Click on **Change User Account Control settings**.
    -   Drag the slider down to **Never Notify** and click **OK**.
3.  **Alternative Solution**: If making these changes is not possible, consider upgrading to **Version 7.02**, which may offer better support for stricter user permission requirements.

## .NET Clients Throw Sporadic Critical Memory Errors on Select Windows

**Problem**  
When using **.NET clients**, critical memory errors occur sporadically on specific windows.

**Resolution**  
This issue can often be fixed by editing the **Microsoft registry**. Follow these steps:

1.  Locate the registry key as documented in **KB** articles.
2.  Make the necessary registry changes on both the **client and server**.
3.  Gather supporting information, such as:
    -   A **screenshot** of the error message.
    -   The **registry setting documentation**.
4.  Attach these documents to a **support ticket** for further assistance from M2M support.

## INV and PAVAIL Windows Exclude In-Transit Activity in Committed and In-Process Calculations

**Problem**  
The **INV** and **PAVAIL** windows exclude in-transit activity when calculating committed and in-process quantities. This means that **ISO** and **IDO** in-transit quantities are not accounted for.

**Resolution**  
Currently, there is no built-in way to view **ISO/IDO in-transit quantities** within the **INV** and **PAVAIL** windows. To work around this issue:

1.  **Create a Custom Select Statement**: You can create a custom **SQL select statement** to query **ISO** and **IDO** documents and export the results to an **Excel spreadsheet**.
2.  **Personalize the INV Window**: Another option is to **personalize** the **INV window** to include in-transit quantities as needed, though this may require custom development.
3.  **Alternative Workaround**: Use **custom reporting tools** to capture more detailed data on in-transit inventory and integrate it with your M2M system.

## INV Status Field and Browse Windows Showing Blank Rather Than Active or Obsolete Codes

**Problem**  
The **INV Status** field and browse windows are showing blank instead of displaying **Active** or **Obsolete** verbiage and codes. This behavior occurs intermittently and without clear cause.

**Resolution**  
To resolve this issue, a **SQL solution** is required. Here’s how you can proceed:

1.  Open **SQL Studio**.
2.  Check the **INVSTS table** to ensure the correct status codes and verbiage are present.
3.  If you need assistance with the SQL commands, please create a **support ticket** for guidance.

## Error When Launching "What If" Session: Check for PSClient Executable Path in M2MWin.ini

**Problem**  
When attempting to launch the **What If** session, an error appears asking to check the **PSClient.exe** path in the **Synch** section of the **M2MWin.ini** file.

**Resolution**  
To unblock the **PSClient.exe** file, follow these steps:

1.  Navigate to the path where the **M2M client** is installed. The default installation path is:

``java``

``C:\\Program Files (x86)\\Made2Manage\\``

1.  Verify that **PSClient.exe** exists at this location. If not, reinstall the client software or restore the file from a backup.

## M2M PDF Writer Not Available in Windows Printers and Faxes at Login

**Problem**  
The error **"M2M PDF Writer is not available in Windows Printers and Faxes"** is thrown at login, preventing the PDF writer from being used.

**Resolution**  
To resolve this issue, ensure that the users who need to use the **M2M PDF Writer** have the correct permissions:

1.  Go to **Control Panel \> Devices and Printers**.
2.  Right-click on  **M2M PDF Writer** and select **Printer Properties**.
3.  In the **Security tab**, ensure that the correct users or groups are granted **Full Control** or the necessary permissions.
4.  If the printer still does not appear, reinstall the **M2M PDF Writer** driver.

## Making Windows Visible in Permissions Window for User Management (PERM)

**Problem**  
Certain **windows/forms** within Made2Manage are not appearing in the **Permissions (PERM)** window for user management.

**Resolution**  
To make windows visible in the **PERM** window for user management:

1.  Access the **PERM** module.
2.  Review the list of windows and verify that all necessary windows are included.
3.  If a window is missing, you may need to adjust user or role permissions or consult with M2M support to troubleshoot the issue.
4.  For full **.NET product** functionality, check user access settings to ensure windows are properly displayed.

## Critical Error: "Root Element is Missing" in Many Windows (Framework)

**Problem**  
Several windows in Made2Manage throw a **critical error** stating **"Root element is missing"**. This can occur suddenly and without clear cause.

**Resolution**  
To resolve this issue, replace the **made2manage.exe.config** file with a known good version:

1.  Locate a **backup** of the same version of the **made2manage.exe.config** file (including any **Service Packs (SP)** or **Hotfixes (HF)**).
2.  Copy the **made2manage.exe.config** file from the backup to the system path where the application is installed.
3.  If a backup is unavailable, create a **support ticket** with your version details, including any installed SPs or HFs, so M2M support can provide a replacement configuration file.

## More Than One M2M .NET Service Appears in Windows Services After Upgrade

**Problem**  
After completing an upgrade, more than one M2M .NET service appears in **Windows Services**. Specifically, both the **v7.0 service** and **v7.03 service** are listed, which can cause confusion.

**Resolution**  
This behavior occurs because version 7.0 does not include a version number in the service name, while versions 7.01–7.03 will include the version number. To resolve this:

1.  Identify which services are running by checking the service names:
    -   **Made2Manage.Net Services Host** (Version 7.0)
    -   **Made2Manage.Net 7.03 Services Host** (Version 7.03)
2.  Ensure that the service for the **older version (7.0)** is properly disabled or removed to avoid conflicts.
3.  If you need to remove the older service, you can do so through the **Services** management window in Windows.

## New Feature Windows Not Showing in Transfer Window or Existing Windows Not Allowing New Functionality (PERMWIZ)

**Problem**  
New feature windows are not appearing in the **TRANSFER window**, or existing windows are not allowing new functionality as expected.

**Resolution**  
To ensure that new feature windows and existing windows work as expected, follow these steps:

1.  Launch the **PERMWIZ** tool.
2.  Press **Next** until you reach the relevant step where you can review and adjust window permissions.
3.  Check the user permissions for the **new feature windows** and ensure that they are properly granted.
4.  If the windows are still not showing or functionality is missing, recheck the permissions setup and confirm that the correct window is selected.

## Planning and Scheduling Message Queue (MSMQ) Install Throws Windows Features Error

**Problem**  
The installation of the **Planning and Scheduling Message Queue (MSMQ)** throws a **Windows Features error** with the message: **"An error has occurred, not all features were successfully changed"**.

**Resolution**  
To eliminate this error, follow these steps:

1.  Open **Windows Features** by navigating to **Control Panel \> Programs \> Turn Windows features on or off**.
2.  Ensure that **MSMQ** is enabled and properly configured.
3.  If the error persists, restart the server and try the installation again.
4.  You may also need to check **Windows Event Logs** for more detailed error messages if MSMQ is still not installing correctly.

## Discrepancy in On-Hand Quantity Between Item Master (INV) and Inventory in P&S Window

**Problem**  
The **on-hand quantity** in the **Item Master (INV)** differs from the **inventory quantity** displayed in the **Planning & Scheduling (P&S)** window.

**Resolution**  
This behavior is controlled by a setting in the **P&S SynchServ.ini** file. By default, the setting **AllowNegativeOnHand** is set to **No**. When set to **No**, planning considers negative on-hand quantities as reporting errors.

1.  Check the **P&S SynchServ.ini** file located on your server.
2.  Look for the entry:

``makefile``

``AllowNegativeOnHand=No``

1.  If this is set to **No**, and you are expecting negative on-hand quantities to be allowed, change the value to **Yes**.
2.  Save the file and restart the **Planning & Scheduling** services.

## RBE 1585 Update Conflict in Cursor Thrown by Opening or Closing Classic Windows (SQL)

**Problem**  
When opening or closing **classic windows** on the **SQL platform**, an **RBE 1585 update conflict** in the cursor is thrown. This issue may occur randomly and affects many windows, but does not seem to impact the **.NET** platform.

**Resolution**  
To resolve this issue:

1.  Check the properties of the **SQL Server instance**.
2.  Return the **"No Count"** setting to its default (unflagged) state. This can be done in **SQL Server Management Studio (SSMS)** by executing the following command:

``sql``

``EXEC sp_configure 'show advanced options', 1;``

``RECONFIGURE;``

``EXEC sp_configure 'no count', 0;``

RECONFIGURE;

1.  After applying this change, restart the **SQL Server** instance.
2.  Test the classic windows to confirm the issue is resolved.

## Red Box Error 1705: File Access is Denied Even When Windows Permissions Are Correct

**Problem**  
You are encountering **Red Box Error 1705**, indicating **file access is denied**, despite having the correct Windows permissions.

**Resolution**  
To resolve this issue, follow these steps:

1.  **Reindex the Util database** by running **m2mindexall**. This can often resolve file access issues.
2.  After reindexing, ask all users to **log out of the system** to ensure no files are being accessed during the process.
3.  Once users are logged out, proceed with the reindex and check if the issue is resolved.

## Regsvr32 Throws "Module Path Failed to Load" Error on DLL Registration (Windows)

**Problem**  
When attempting to register a DLL file using **regsvr32**, you receive the error **"Module path failed to load"**.

**Resolution**  
To fix this issue, follow these steps:

1.  **Triple-check the path** you typed to ensure there are no typos or incorrect paths.
2.  Open **My Computer** and navigate to the **DLL file location** manually to confirm the path is correct.
3.  If the path is correct but the error persists, ensure that:
    -   The **DLL file** exists in the location you’re trying to register.
    -   You have **administrative privileges** when running regsvr32.
    -   The **DLL** is compatible with your version of Windows (32-bit vs. 64-bit).

## Searching on Windows 7 Machines Throws "1429 Error: Data Source Name Not Found and No Default Driver Specified"

**Problem**  
When performing searches on **Windows 7** machines (e.g., in shipping, REPD, browsing records, etc.), you encounter the **1429 error: Data source name not found and no default driver specified**.

**Resolution**  
There are two possible approaches to resolve this issue:

1.  **Connection String Workaround**: You can modify the **connection string** to reference the correct data source. However, this is a temporary workaround.
2.  **Upgrade the system**: For a more permanent solution, we recommend upgrading to a newer version of **Windows**. Windows 7 is no longer supported, and upgrading will help avoid future compatibility issues, provide enhanced security, and resolve many connection-related errors.

## P&S Server Install Hangs After Installation on Windows Server OS

**Problem**  
After installing the **Planning & Scheduling (P&S)** server on a **Windows Server OS**, the server installation process hangs or stops progressing.

**Resolution**  
To fix this issue:

1.  **Install the P&S Server on a dedicated machine** or **Virtual Machine** (recommended).
2.  Ensure the machine meets the following hardware requirements:
    -   At least **4 CPUs**.
    -   **8 GB of RAM**.
3.  Make sure there is sufficient disk space and that the server has no background processes that may be affecting the installation.
4.  After ensuring these specifications, retry the installation.

## Switching Between Open Windows in Dot Net (Framework)

**Problem**  
In **classic Made2Manage**, you can easily switch between active and inactive windows by selecting another window from the **window menu** on the desktop. In **dot net**, this navigation method is not available.

**Resolution**  
To switch between open windows in **dot net**:

1.  Press the **Window** button from the **home ribbon options**.
2.  Choose your desired window from the available options in the menu.

This will allow you to switch between active and inactive windows in the dot net environment.

## System Slowness

**Problem**  
Users are experiencing system slowness in the application.

**Resolution**  
To address system slowness, please:

1.  Review the **system resources** (CPU, RAM, Disk Usage) on the server and client machines.
2.  Ensure that the system meets the recommended hardware specifications for running **Made2Manage** effectively.
3.  Review and optimize the network performance, especially if running the system over a shared network or VPN.
4.  Check for any **background processes** that may be consuming system resources and slowing down the application.

## Engineering Change Management (ECM) Screens Not Appearing in Transfer Window

**Problem**  
ECM screens like **ECOAPP** and **ECOEM** do not appear in the **transfer window** or when navigating through the path **Production Management \> Quality \> Engineering Change Management**.

**Resolution**  
If entries marked as **obsolete** are not displaying correctly, you can update them by running the following SQL commands to refresh and correct their status:

``sql``

``BEGIN TRAN``

``\-- Add your SQL update statements here``

``COMMIT``

This should resolve issues related to obsolete entries not showing as expected in the ECM screens.

## Windows 10 Compatibility for Use with M2M Clients

**Problem**  
You want to know if **Made2Manage (M2M)** clients are compatible with **Windows 10** operating systems.

**Resolution**  
M2M version **7.5** clients are compatible with **Windows 10**. For any specific compatibility issues or further details, please refer to the **M2M documentation** or **support materials** that mention Windows 10 compatibility.

## Workstations on Windows 10 Cannot Run UpdateHotFix.exe

**Problem**  
On workstations running **Windows 10**, users may encounter an error stating they do not have the necessary permissions to run **UpdateHotFix.exe**.

**Resolution**  
To allow **UpdateHotFix.exe** to run on **Windows 10** workstations, follow these steps:

1.  Navigate to **X:\\M2MData\\HotFix** (where X is the drive letter for your M2MData folder).
2.  Right-click on **UpdateHotFix.exe** and select **Properties**.
3.  Go to the **Security** tab and modify the permissions to **allow full control** for the relevant user accounts.
4.  Apply the changes and run the application again.

## M2M Versions up to 7.0x or SFM 1.33 GA Compatibility with Windows 8

**Problem**  
You want to know if **Made2Manage (M2M)** versions up to **7.0x** or **SFM 1.33 GA** are compatible with **Windows 8**.

**Resolution**  
Currently, there are no **M2M/SFM** configurations that are certified to work on **Windows 8**. However, **M2M version 7.5** is scheduled to be **certified and supported** with the **Windows 8** operating system.

## Windows Do Not Show to Grant Permissions in the User Window (PERM)

**Problem**  
When trying to grant permissions from the **USER** window by selecting **permissions**, the **windows** that should be displayed are not showing, preventing changes to permissions.

**Resolution**  
To ensure the window displays in **PERM**, execute the following **Visual FoxPro (VFP)** commands for the affected window mnemonics:

1.  Open the **VFP command window**.
2.  Run the appropriate commands to refresh the permissions for the affected window.

This will make the windows appear in **PERM**, allowing you to grant or modify permissions as needed.

## Made2Manage Unable to Run Due to Permissions Change in the Vista Kernel

**Problem**  
Made2Manage cannot run on machines with newer kernels (Vista, Windows 7, Server 2008 R2, etc.), possibly due to issues with **mapped drives** and **permissions** introduced in the **Vista kernel**.

**Resolution**  
For **Windows Vista** and newer kernels (including **Windows 7**), follow these steps:

1.  **Mapped drives** might be causing the issue. Confirm if the drive that holds the **Made2Manage** data is mapped correctly and is accessible.
2.  **Check permissions** to ensure that the **user** has **read/write access** to the required drives or folders.
3.  If necessary, try re-mapping the drives and updating **login credentials** if any network permissions have changed.

## Which Windows Can Add an Activity to the To-Do List (TODO)?

**Problem**  
You want to know which windows allow users to add activities to the **To-Do List** (TODO).

**Resolution**  
The following windows allow users to add activities to the **To-Do List**:

1.  **Sales Order (SO)**
2.  **Accounts (CUST)**
3.  **Customer Service Inquiry (CRMCSR)**
4.  **Quote (QUOTE)**
5.  **Opportunity Management**

## 6.01 Planning & Scheduling Client Won't Run on Some Windows 10 Machines

**Problem**  
The **6.01 Planning & Scheduling (P&S)** client fails to run on some **Windows 10** machines, especially after upgrading from **Windows 7**.

**Resolution**  
It seems that **P&S 6.01** will continue to work correctly on machines that were upgraded from **Windows 7** to **Windows 10**, but if **P&S 6.01** was installed **directly on Windows 10**, the client may fail to run.

To resolve this:

1.  If upgrading from **Windows 7**, try reinstalling **P&S 6.01** after upgrading to **Windows 10**.
2.  If installed on a fresh **Windows 10** system, consider upgrading the P&S client or using a compatible version of Made2Manage that supports **Windows 10**.
