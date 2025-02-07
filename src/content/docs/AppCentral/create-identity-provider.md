---
title: "Create Identity Provider"
draft: false
type: Article
---
To create an Identity Provider in Aptean AppCentral, perform the following:

1.  On **Aptean AppCentral** Web UI, navigate to **User Center** > **Access Management** > **Federation**.

2.  Click **New Identity Provider**. <br> The **Create Identity Provider** window appears.

3.  In **Create Identity Provider** window, enter the required information in the below mandatory fields:
    -   **Name**: Enter an appropriate name in the text field.
    -   **SSO Connection**: By default, Open ID is selected from drop-down list to enable Single Sign-On (SSO) functionality.
    In the **Open ID Connect Connection** card:
    -   **Identity Provider**: Choose the IAM provider (example Microsoft Entra, Azure) from which user data will be imported and synced into AppCentral. 
    -   **Discovery Endpoint**: Enter the URL of the discovery document for the OpenID Connect IAM provider you want to connect with.
    -   **Client ID**: Enter the client ID of IAM provider.
    - **Client Secret**: Enter Client Secret of the IAM providers.
    
4.  After you enter the required information, click **Submit**. <br>You can monitor the progress of user import and synchronization.	

