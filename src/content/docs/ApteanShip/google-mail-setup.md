---
title: "Google Mail Setup"
draft: false
type: Article
---

When using the Google Mail outgoing SMTP server for eNotify or POP3 download for AESDirect, you need to configure an additional sign in setting in your Google settings. You can choose one of two methods: Less Secure App Access or App Passwords.
### Less Secure App Access


1. Log in to your Google Mail account and click **Settings**.

    ![](assets/images/gmail1.png)
2. Select **Accounts and Import**.
![](assets/images/gmail2.png)
3. Select **Other Google Account settings**.
![](assets/images/gmail3.png)
4. Click the **Security** menu item.
![](assets/images/shipping-software-starship-google-1.png)
5. Scroll down and enable "Less secure app access". This setting is required to enable SMTP, POP or IMAP access.
![](assets/images/gmail5.png)


    >[!Important] This security setting is not available to accounts with 2-step verification enabled. You can disable 2-step verification on the Security page, under "Signing in to Google".
### App Password


These steps set your sign in method to use an App Password. For more information about when to use this sign in method, see [Sign in with App Passwords](https://support.google.com/accounts/answer/185833?hl=en) in Google Account Help.
1. Sign in to your [Google Account](https://myaccount.google.com/). You can do this by clicking on your Google profile picture and then clicking the "Manage your Google Account" button.
![](assets/images/shipping-software-starship-google-2.png)
2. Click **Security** on the side menu.
![](assets/images/shipping-software-starship-google-1.png)
3. In the **Signing in to Google** section, select **App Passwords**. You may need to sign in.

    <br> **More Information** <br>**Google Help**: If you don’t have this option, it might be because: a) 2-Step Verification is not set up for your account; b) 2-Step Verification is only set up for security keys; c) Your account is through work, school, or other organization; d) You turned on Advanced Protection.
4. In the **Select app** field, select Other and type "Aptean Ship", for example. In the **Select device** field, select "Windows Computer," or "Other" (and type in a name).
5. Click **Generate**.
6. A dialog displays instructions for entering the App password. Google Help gives the following tip: "Most of the time, you’ll only have to enter an App Password once per app or device, so don’t worry about memorizing it."


