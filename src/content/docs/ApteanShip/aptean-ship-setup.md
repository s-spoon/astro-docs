---
title: "Aptean Ship Setup"
draft: false
type: Article
---

To ship your Amazon Orders, connect your Amazon company to Aptean Ship by providing the credentials from [Amazon MWS Setup](amazon-mws-setup.md). You can add one or multiple accounts to ship against; however, you cannot use the same Seller ID for more than one company in an Aptean Ship Location. (The same Seller ID may be used in a different Aptean Ship Location.)

## Add the Amazon Store to Aptean Ship

1. In Aptean Ship Web, go to **Setup > Source Interfaces > eCommerce**.
2. Under Companies, click the **New Company** button.

   ![shipping-software-3dcart-addco](assets/images/starship-shipping-software-3dcart-addco.png)

   >[!Note]: If you want to add the Amazon interface to an existing company, select the company and click the **Edit Company** button.

3. Enter the name of your company in the **Company Name** field and click the **Add Account** button.

   ![starship-shipping-software-3dcart0](assets/images/starship-shipping-software-3dcart0.png)

4. From the **eCommerce Name** field, select “Amazon” from the drop-down list.

   ![mazon_companysetup_2](assets/images/amazon_companysetup_2.png)

5. Enter your **Seller ID** and the **MWS Auth Token** in the fields provided. You can copy and paste this information from the last page of the Amazon MWS setup.

   ![amazon_companysetup_3](assets/images/amazon_companysetup_3.png)

6. After entering the account information, check the **I want to use Amazon Shipping with this Seller ID** checkbox if you want to enable Amazon Shipping for this company. Then, check the **Enabled** checkbox to make this an active account and click **Submit**.

   ![amazon_companysetup_4-1](assets/images/amazon_companysetup_4-1.png)

   >[!Info]: Seasonal Sellers: You can uncheck the **Enable** box to disable the company during the time when you are not shipping with Amazon so that Aptean Ship uses fewer resources on your PC.
