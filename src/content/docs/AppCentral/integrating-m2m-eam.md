---
title: "Integrate M2M with Aptean EAM"
draft: false
type: Article
---

M2M and EAM applications support one-way data integration and are available only with the Professional license bundle. The following table shows the integration data points supported from M2M to the EAM application.

|**M2M**|  **EAM**| 
|-|-|
|Vendor Master|Vendor Master|
|Purchase Order Change-Open|Purchase Order|
|Receiver Status|Purchase Receipt|

The following table shows the integration data points supported from EAM to M2M application.
|**EAM**|  **M2M**| 
|-|-|
|Purchase Order|Requisition|

### Integrate M2M and EAM applications

1. Navigate to **Subscription Center** > **Integrations**. <br> The **Application Integration** screen appears.

2. In the **Integration** screen, click expand icon next to Made2Manage (M2M). Choose the company to integrate in M2M. <br>For example, click expand icon next to **Company: 01** and **Facility:01** and choose Aptean EAM.

3. To integrate the application, click **Connect**. <br> The **Connect Application** window appears, displaying the selected Source Company by default.

    1. Choose the **Tenant** from the drop-down list.   
    2. Click **Connect**.


### Connecting and Configuring Aptean Print Service

#### Access Aptean Print Service

Aptean Print is a default service available in the Integration screen for Aptean EAM. 

1. Install and configure the Print Agent, by following the same steps as for any other application.
    -   After connecting M2M and EAM, navigate to **All Apps** > **Aptean Print** to install and configure the Print Agent. <br>This allows you to utilize the Aptean Print service for printing requirements.

After completing the M2M-EAM integration setup, you can now facilitate data transfer from M2M to EAM applications. Select from the topics below to view the steps for integrating the supported data transfer.

- [Integrate Vendor Data](integrate-vendor-data.md)
- [Integrate Purchase Category](integrate-purchase-category.md)
- [Integrate Purchase Order to Requisition](integrate-purchase-order-requisition.md)






 
