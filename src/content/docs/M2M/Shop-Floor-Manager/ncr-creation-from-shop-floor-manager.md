---
title: "NCR Creation from Shop Floor Manager"
draft: false
type: Article 
---

In the SFM Setup for each company, you can enable the NCR function within the SFM Work Center Console when clocking off or completing a job. The checkbox to create the NCR will be enabled if you enter a scrap quantity. Based on the default setting, it will automatically be selected to create the NCR for that specific job/labor entry upon the process of clock-off or job completion. There is flexibility to uncheck this option and not create an NCR as needed during the clock-off or completion of the operation.

# Enable NCR for auto creation

To create an NCR automatically, you need to enable and configure non-conformance in the **Company Setup** tab on the Setup screen.

## To configure the creation of an NCR:

1.  Navigate to SFM **Setup** > **Company Setup**.
2.  In the **Work Center Console** section, select the **Enable Non-Conformance** checkbox to allow users to create NCRs.
3.  If you want to create an NCR by default, you can select the **Create NCR By Default** checkbox.

    >[!Note]
    > By default, the **Enable Non-Conformance** checkbox will be cleared, and the **Create NCR By Default** checkbox will be disabled. To enable the **Create NCR By Default** checkbox for selection, you have to select the **Enable Non-Conformance** checkbox first.

1.  Click **Save**. The configuration will be saved.
    >[!Note]
    >If you disable the Enable Non-Conformance checkbox, the Create NCR By Default will also be automatically disabled.

# Auto creation of NCR from Job Completions

You can create an NCR if you selected the **Enable Non-Conformance** checkbox the company setup page.

## To create an NCR:

1.  Navigate to the **Work Center Console**.
2.  Click **Clock In**, and then click **JO Completions**.
3.  In the **JO Queue**, select the JO in which you want to create the NCR.
4.  In the **Quantity Scrap** field, enter the quantity you want to scrap.
5.  Click the **Create NCR** checkbox if not set to be selected automatically.

    >[!Note]
    >By default, the Create NCR checkbox will be disabled. It will be enabled only if the Quantity Scrap is greater than zero.

6.  Click the **Qty Complete** button.

    >[!Note]
    >The NCR will be automatically created for the particular JO.
    
    >[!Note]
    >The Issue Description for the created NCR will be updated with the scrap quantity entered during JO completion.
# Auto creation of NCR from Job Order Clock Off

You can create an NCR if the **Enable Non-Conformance** checkbox is selected on the company setup page.

## To create an NCR during job order clock off with scrap quantity:

1.  Navigate to the **Work Center Console**.
2.  Ensure you have clocked in and clocked onto a job order following the normal SFM process.
3.  Click the **Clock off JO** option.
4.  In the **Clock Off JO** section, enter the employee number.
5.  The job currently clocked for the entered user will be displayed.
6.  In the Quantity Scrap field, enter the quantity you want to scrap.

    >[!Note]
    >Only the employee at the lead level can create the NCR, so the Quantity Scrap option will be enabled only if the Lead checkbox is selected.

1.  Once you enter the scrap quantity, the **Create NCR** checkbox will be automatically selec- ted.

    >[!Note]
    > The **Create NCR** checkbox will be automatically selected if both the **Enable Non-Conformance** checkbox and the **Create NCR By Default** checkbox are selected in the setup screen.

1.  Click the **Complete Clock Off** button.

>[!Note]
>-   The NCR will be created with the NCR Number, the username of the user selected by the Processor Service to execute Bar Code Posting, and the timestamp when it is created. <li> Bar Code Posting execution must run before you see the quantity clocked off of the job order and the NCR created.