---
title: "Email-Designer"
draft: false
type: Article
---


An email designer is included in Marketing. To access it, select **Email Marketing** > **Email Templates**.

This designer lets you drag content blocks to quickly create professional looking email templates. Or, you can select the HTML tab if you prefer to work with the code instead.

> [!Tip] DO NOT copy and paste content directly from applications such as Microsoft Word. If you do, these editors apply unwanted borders to images, that can’t be seen but that will appear when you send out your email! To avoid this, you can copy from Word and paste first into Notepad, then copy from Notepad and paste into your Email Template.

![](/Modules/assets/images/005-email-mgmt.png)

The Email Designer uses a combination of **Email Layouts** and **Content Blocks** to simplify the process.

## Email Layouts

When you want to design a new Template, you can save time by selecting an existing Email layout (or create a new one) that has a format similar to the design you want to include in your final Template. Aptean CRM provides several layouts  as options to choose from, so you don’t need to build templates from scratch.

Once you have selected a layout for your template, you can easily alter the template by adding or replacing images, editing text, styles, and inserting hyperlinks.

You can also add your own new custom layouts and make those available to everyone in your organization.

## Content Blocks
Content Blocks (i.e Headers, footers, social media buttons, text/column blocks, and more) make it easy to construct consistent email templates.

Drag the block you want to insert into the document design area. Select the Edit button in any block to make your changes.

For instance, apply your own branding in the Header block by adding your logo and company information. The footer contains company contact information and an unsubscribe link.

* **Insert - Customize by Merging Data**
    
    Emails can include dynamic content. For example, you can personalize templates by including the contact’s name, or merging information about the representative (such as name and phone number) sending the email. 
    
    While editing a content block, click the **Insert** button to select from the various fields in the database.

    ![](/Modules/assets/images/006-email-mgmt.png)

* **Layout**

    To customize the colors, backgrounds, borders, and images for any block, click the Layout button when you have selected the block for editing.

## Tracking Email Opens and Click Thru’s 

You can track events such as whether a person clicks a hyperlink in your email or opens it by setting up a workflow in your template. 
Here’s how:

1.	Select a Text content block and **Edit**.
2.	Switch to the INSERT tabpage.
3.	Select the type of items to insert: Hyperlink. 
4.	Select the **Workflow** button. 
5.	Choose the workflow you want to call, For example: Click Thru. 
6.	Choose the type of event you want to track, For example: Website Visited.  
7.	Enter the **Hyperlink display text**, For example: See more here!
8.	Enter the **redirect URL** for the image (the landing page you’d like to use for the image when clicked). 
9.	Click **Insert**.

    ![](/Modules/assets/images/007-email-mgmt.png)

You can also insert hyperlink to an image. To do so:
1.	Select an image and **Edit**. 
2.	Toggle on the checkbox **Include Hyperlink**.
3.	Select the **Workflow** button. 
4.	Select the workflow you want to call, For example: Click Thru. 
5.	Select the type of event you want to track, For example: Website Visited.  
6.	Enter the **redirect URL** for the image (the landing page you’d like to use for the image when clicked). 

**Include CRM Keys in URL**:

If the Include CRM Keys checkbox is selected, the Contact Id is passed through the URL, allowing you to add logic to perform tasks related to a Contact record. For example, when an event is generated as a result of a click thru, it is associated with the contact, indicating that this contact has clicked on a hyperlink.




