---
title: "Setup notification settings for your company's vendors or customers"
draft: false
type: Article 
---

In Made2Manage, events are triggered by the actions taken and notifications are sent to the recipients specified in the **Events & Actions (EANOTI)** page. Notifications can be sent by email, fax, or SMS. You can configure the notifications that can be sent for each vendor or customer in the **External Notifications** tab of the **NotifierMessage** window. Use the **Global Notification** check box of the **System Setup (CSSYS)** page to enable or disable setting up the vendor's or customer's global notification settings.

To set up your company's vendor or customer notification settings

1. Open the System Setup (CSSYS) page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **System Setup**.

    Or

    2. Search for **CSSYS** or **System Setup** in the **Navigation box** and then select **System Setup**.

    **System Setup (CSSYS)** page appears.

2. Set up the global notification settings:

    - Select the **Global Notification** check box, to ensure that the notifications can be configured for the external vendors or customers.

        >[!INOTE]When this check box is selected, the external vendors or customers are listed in the **External Notifications** tab of the **NotifierMessage** window. Select the appropriate check boxes to indicate the type of notifications that can be sent to each vendor or customer.

    - Clear the **Global Notification** check box, to disable configuring the global notifications for the external vendors or customers.

        >[!INOTE]No vendors or customers are listed for selection in the **External Notifications** tab of the **NotifierMessage** window when you clear the **Global Notification** check box.

3. Configure the SMS settings to send notifications by SMS:

    1. Select the **Enable SMS** check box.

        The configuration options for SMS appear.

    2. In the **SMS Provider** list, select the SMS provider.

        >[!INOTE]Made2Manage supports Twilio and Clickatell.

    3. Specify the credentials that you have registered with the SMS provider:

        - In the **User ID** field, type the user ID with which you have signed up with the SMS provider.

        - In the **Password** field, type the corresponding password.

        - In the **From** **Number** field, type the number provided by the SMS provider.

4. On the **Toolbar**, click **Save** to save the settings.

    The message, *System configuration have been modified. Screen will auto refresh in \<number\> seconds.* Do not Refresh*.* appears.

5. Close the message window.

6. Refresh Made2Manage.