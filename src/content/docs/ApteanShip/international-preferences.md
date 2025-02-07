---
title: "International Preferences"
draft: false
type: Article
---

International Preferences allow you to configure ACE AESDirect and other International shipment settings. Select Setup > Preferences, and scroll down to the International section on the main Preferences page to access these settings.

The Automated Commercial Environment (ACE) AESDirect is the primary filing tool for submitting your Electronic Export Information (EEI) to the Automated Export System (AES). When a filer submits their EEI, AES will process the information and, if accepted, respond with an Internal Transaction Number (ITN).

Aptean Ship includes the ability to electronically submit a shipment to AESDirect. If
you configure Aptean Ship to use the POP3 connection, it will also check your email for responses from AESDirect, retrieve ITN numbers, and notify you of AESDirect responses. POP lets you download messages from your email web server onto your computer so you can access your mail with an email client like Microsoft Outlook Express.

Please note that International Preferences will need to be configured for each Aptean Ship Location if you have more than one Location.

## Settings


### Automatically add freight amount to the commercial invoice


Check this option if you want Aptean Ship to automatically add the freight charge to
the commercial invoice (set up in Printing > Manage Documents). This setting is saved for each Aptean Ship user.

![](assets/images/starship-shipping-software-international-prefs-2.png)

### AESDirect Email Response Settings


Aptean Ship can retrieve the ITN from the AES response email and populate the ITN.

The email address you enter here will be used instead of the default one you provided to AES. The emails from AES contain the ITN number and indicate if the shipment has been accepted, replaced, rejected, or deleted.

If possible, Aptean Ship will delete the AES emails after accessing them, so you may also provide a secondary email address if you want to maintain a copy of AES emails. If you are using multiple locations, you should enter a unique email address for each location.

If you are using GoogleMail (GMail), please see the specific instructions below for configuring POP settings on the GMail side.
### POP3 Account Access


POP3 access allows Aptean Ship to search the provided email account for an ITN# response email from AES. Aptean Ship can recognize the format of an email that is sent from AES by looking for the shipment reference or ITN number. It can then import the ITN information to your shipment. Aptean Ship will only use POP3 Account Access for the primary Email Address account provided under the AESDirect Email Response settings.

To allow Aptean Ship POP3 access, check the Enable POP3 Access setting. Then, enter your POP3 account information in the fields provided. Check the Use SSL Encryption setting to encrypt email between the email server and client.

Once you have entered your POP3 information, click the Test button to confirm that
the settings are correct.

>[!Note] You must have POP3 download enabled for the email web server (such as GMail) and have also configured the POP settings for your local email client (i.e. Outlook, etc.) before testing the AESDirect connection.

If your settings are correct, the test returns a successful result:

![](assets/images/starship-shipping-software-international-aes-success.png)

### No POP3 Access


If you do not enable the POP3 settings in Aptean Ship, the ITN# will not be retrieved
from your email account. An email will be sent to the email account you provide on
this dialog. Locate the ITN information, and then copy and paste it into your Aptean Ship
shipment.
## Special Instructions for Gmail


Follow these instructions to configure POP settings in Gmail.
1. Access your account settings.

![](assets/images/interpref1.png)

2. Select the **Forwarding and POP/IMAP** menu item.

![](assets/images/interpref2.png)

3. Configure the POP Download section based on your usage. You must enable POP in order for Aptean Ship to be able to access your email and retrieve AES data.The setting, "When messages are accessed with POP" relates to what happens to the web server copy of the email after it is downloaded to your local computer. The default setting is Keep Google Mail's copy in the Inbox. Unless you change it to one of the other options (delete or archive), the emails will remain in your Inbox.

![](assets/images/interpref3.png)

   >[!Tip] **Test Unsuccessful with Gmail?**<br>If the result is unsuccessful when you click the Test button, you may need to configure an additional sign in setting in your Google settings. See [Google Mail Setup](google-mail-setup.md) for instructions on how to do this.

