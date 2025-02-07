---
title: "Email Validation"
draft: false
type: Article
---



Emails are verified as they are entered into Aptean CRM. Different levels of validation may be performed. When emails are added or updated with the user interface, the application checks for valid syntax.

Additional email validation is done in the background via an Aptean CRM workflow run by a task. This validation is much more thorough, making sure the email address actually exists. This is done with a number of tests that include checking for disposable email addresses, mailbox existence, and domain existence.

Emails are validated in the background in chunks, starting with those that have not been processed or have the oldest validation date. This is a continuous process that cleans the database of invalid email addresses. The goal is to deactivate emails before an attempt is made to send to them.

Under **Marketing** > **Email Marketing** > **Contact/Company Invalid Email List**, you can view the list of addresses that were found to be invalid.

## Email Service Options
By default, hosted Aptean CRM customers use Amazon’s Simple Email Service (SES) leverage keys owned by Aptean. Customers can override this with their own SMTP service or their own Amazon SES keys in the configuration of their environment.

On Premise Aptean CRM customers must use either their own SMTP service or their own Amazon SES keys.

Amazon SES keys can be purchased and obtained at: https://aws.amazon.com/ses/pricing/

## Email Bounce Back Processing
Accounts using Amazon Email Services may process notifications regarding Bounce Backs and Complaints returned by the service (this is not available for SMTP services).

A CRM task routinely reviews emails that have been returned. When an email bounces or a complaint is received, the email address is deactivated and updated with a failed reason. Future emails to the address will no longer be processed. 

The invalid email addresses can be viewed under **Email Marketing** > **Contact Invalid Email List**. 

Invalid Email addresses are made inactive and updated with a code to indicate why it was invalid. Activities created to track the sending of emails are also closed with a result code that indicates that the email failed to be delivered, along with a related event that includes further details of why it failed. Examples of events for email failures include a nonexistent email address and a full mailbox.

In addition to deactivating emails, notifications sent back from the Amazon service are stored in Aptean CRM. These are saved so that the success rate may be monitored for emails sent over a period of time. A new list page is available to view notifications in **Setup** > **Email Processing** > **Notifications**. 

Under **Administration** > **Group Configuration** > **Email Notification Settings**, you can define the maximum failure rate. When the thresholds are met, a configurable warning email is sent to the administrator of the system. 

