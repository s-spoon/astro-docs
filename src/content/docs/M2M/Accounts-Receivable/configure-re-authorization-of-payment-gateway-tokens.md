---
title: "Configure re-authorization of payment gateway tokens"
draft: false
type: Article
---

Sometimes, although the Sales Orders (SOs) have been pre-authorized, they may have not been shipped or invoiced before the payment gateway authorization token expires. The **ReAuthor- izeCreditCardTokens** processor service process has been added in Made2Manage to enable the automatic re-authorization of expired payment gateway tokens. This ensures that a non-expired token is available when the SO ships and is invoiced.

You can configure the interval at which this re-authorization takes place in the **M2M Processor Ser- vice Configuration (PROC)** page.



While executing the re-authorization of the payment gateway tokens, if a failure occurs, the system logs the errors in the log file specified in the **Payment Gateway Setup (CCSETUP)** page.

To configure the re-authorization of credit card tokens

1.  Open the **M2M Processor Service Configuration (PROC)** page.

    Select Utilities > Maintenance > M2M Processor Service Configuration.

Or

1.  *Search for* **PROC** *in the* **Navigation box** *and then select* **M2M Processor Ser- vice Configuration**.

    **M2M Processor Service Configuration (PROC)** *page appears.*

    The **Processor Services** section displays a grid that contains the different pro- cesses based on the data in the ProcessorServices.Config file.

2.  In the grid, select the **ReAuthorizeCreditCardTokens** process.
3.  In the **Options** section, configure the running options. For more information about this, see Configure PROC page.
4.  On the **Toolbar**, click **Save** to save your changes.