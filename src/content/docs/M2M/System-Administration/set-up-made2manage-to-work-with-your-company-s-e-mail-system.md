---
title: "Set up Made2Manage to work with your company's email system"
draft: false
type: Article 
---

You can set up Made2Manage to work with your company's email system. Once you set up Made2Manage to work with your email system, you can set up Notifier™ messages to alert other users to events through email. You can also email reports to others.

You can configure the email settings at a tenant level for all the companies.

### To set up Made2Manage to work with the company's email system

1.  Open the **System Setup (CSSYS)** page:

    Navigate to **Utilities** > **Company Setup** > **Module Setup** > **System Setup**.  
    Alternatively search for **CSSYS** or **System Setup** in the Navigation box and select **System Setup**.

2.  On the **System Setup** (CSSYS) page, select the **Use E-Mail** checkbox and then click **Save**.

    >[!IMPORTANT] Once you have saved the configuration, an auto-refresh banner will be displayed. The screen will automatically refresh to apply the changes. Do not manually refresh.

3.  Click **More Actions**. **The Mail Server Configurations** option will appear in the right pane.
4.  Under **Actions**, click **Mail Server Configurations** to open the configurations screen.
5.  From the **Mail Server Configurations** screen, configure email settings for all companies.
6.  You can configure multiple email server configurations with the following Authentication types, but only one configuration can be active at a time:
    -   [Basic](#to-configure-the-email-server-with-basic-authentication)
    -   [Microsoft OAuth / Microsoft Graph API](#to-configure-the-email-server-with-microsoft-oauth)
    -   [Gmail Service Account](#to-set-up-made2manage-to-work-with-the-companys-email-system)

## Configure Email Server with Basic Authentication

### To configure the Email Server with Basic Authentication:

1.  In the **Mail Server Configurations** screen, click **New**.
2.  In the **Server Name** field, enter a server name.
3.  From the **Authentication Type** dropdown menu, choose **Basic**.
4.  In the **SMTP Server** field, provide the SMTP server name or IP address.

    >[!INOTE] Prior configuration of the Virtual SMTP Server is necessary before setting up Made2Manage with MS Exchange or your company's email system. Refer to the Configure Virtual SMTP Server section for detailed instructions.

5.  From the **Encryption Type** dropdown list, select an encryption.
6.  In the **Password** field, enter the password.
7.  From the **Company** dropdown menu, select the company number.
8.  From the **Port No** dropdown menu, select the port number.

    >[!INOTE]Made2Manage uses default settings. Port: 25, SSL disabled, and AUTH LOGIN authentication. NT LAN Manager (NTLM) authentication is not supported.

9.  In the **User Name** field, enter the username.
10. In the **Default User Email** field, enter the email address (fallback email address) from which the email needs to be sent.
11. From the **Status** dropdown menu, select a status (only one configuration can be active at a time).
12. In the **Report Template** field, specify the format of the email template for **Subject**, **File Name**, and **Mail Text**. All the emails will be sent in this configured format.
13. Click **Save** to save the configuration.

    >[!IM PORTANT] Once you have saved the configuration, an auto-refresh banner will be displayed. The screen will automatically refresh to apply the changes. Do not manually refresh.

14. After entering the configuration details, click **Test Authentication** to ensure that the configuration details are valid.
15. Click **Send Test Mail** to send a test email and verify the configuration.

    The **Send Test Mail** popup screen will appear.

16. The **From Email** field will be pre-filled with the configured default email.
17. In the **To Email** field, enter the recipient's email address.
18. Provide **Subject** and **Content** for the test email.
19. Click the **Send Test Mail** button to send the test email to the recipient. A test email will be sent to the user.

## Configure Email Server with Microsoft OAuth / Microsoft Graph API

### To configure the Email Server with Microsoft OAuth:

1.  In the **Mail Server Configurations** screen, click **New**.
2.  In the **Server Name** field, enter a server name.
3.  From the **Authentication Type** dropdown menu, choose **Microsoft OAuth** / **Microsoft Graph API**.
4.  In the **Tenant Id** field, enter the tenant ID to which you want to configure the email settings.
5.  In the **Client Secret** field, enter the client secret key.
6.  From the **Company** dropdown menu, select the company number.
7.  In the **Client Id** field, enter the client ID to which you want to configure the email settings.
8.  In the **Default User Email** field, enter the email address (fallback email address) from which the email needs to be sent.
9.  From the **Status** dropdown menu, select a status (only one configuration can be active at a time).
10. In the **Report Template** field, specify the format of the email template for **Subject**, **File Name**, and **Mail Text**. All the emails will be sent in this configured format.
11. Click **Save** to save the configuration.

    >[!IMPORTANT] Once you have saved the configuration, an auto-refresh banner will be displayed. The screen will automatically refresh to apply the changes. Do not manually refresh.

12. After entering the configuration details, click **Test Authentication** to ensure that the configuration details are valid.
13. Click **Send Test Mail** to send a test email and verify the configuration.

    The **Send Test Mail** popup screen will appear.

14. The **From Email** field will be pre-filled with the configured default email.
15. In the **To Email** field, enter the recipient's email address.
16. Provide **Subject** and **Content** for the test email.
17. Click the **Send Test Mail** button to send the test email to the recipient. A test email will be sent to the user.

## Configure Email Server with Gmail Service Account

### To configure the Email Server with Gmail Service Account:

1.  In the **Mail Server Configurations** screen, click **New**.
2.  In the **Server Name** field, enter a server name.
3.  From the **Authentication Type** dropdown menu, choose **GMAIL SERVICE ACCOUNT**.
4.  In the **Service Account Email**, enter the valid service account email ID.
5.  In the **Private Key** field, enter the Private key.
6.  From the **Company** dropdown menu, select the company number.
7.  In the **Default User Email** field, enter the email address (fallback email address) from which the email needs to be sent.
8.  From the **Status** dropdown menu, select a status (only one configuration can be active at a time).
9.  In the **Report Template** field, specify the format of the email template for **Subject**, **File Name**, and **Mail Text**. All the emails will be sent in this configured format.
10. Click **Save** to save the configuration.

    >[!IMPORTANT] Once you have saved the configuration, an auto-refresh banner will be displayed. The screen will automatically refresh to apply the changes. Do not manually refresh.

11. After entering the configuration details, click **Test Authentication** to ensure that the configuration details are valid.
12. Click **Send Test Mail** to send a test email and verify the configuration.

    The **Send Test Mail** popup screen will appear.

13. The **From Email** field will be pre-filled with the configured default email.
14. In the **To Email** field, enter the recipient's email address.
15. Provide **Subject** and **Content** for the test email.
16. Click the **Send Test Mail** button to send the test email to the recipient. A test email will be sent to the user.

​