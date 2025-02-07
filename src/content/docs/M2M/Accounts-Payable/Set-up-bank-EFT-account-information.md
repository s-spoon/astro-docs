---  

title: "Set up bank/EFT account information"  
draft: false 
type: Article

---

Use the **Bank Names** tab of the **Accounts Payable** (**CSAP**) page to specify the bank accounts and the bank Electronic Funds Transfer (EFT) details from which you pay accounts payable invoices.

When you set up bank accounts or EFT accounts, use a separate cash account for each bank account.

**To set up the bank account information**

1.  Open the **Accounts Payable (CSAP)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Accounts Payable**.

    Or
    
    - Search for **CSAP** or **Accounts Payable** in the **Navigation box** and then select **Accounts Payable**.

    The **Accounts Payable (CSAP)** page appears.

2.  Click the **Bank Names** tab.

3.  On the grid toolbar, click **New**.

4.  In the **Bank Name** field, type the bank name.

5.  To mark the bank account as the default account that you mainly use for your transactions, select the **Default** check box.

6.  If you have already set another check-enabled bank as the default bank account, a message, *\<Bank Name> is already flagged as the Default checking account. Do you want to set this checking account as the Default checking account?* is dis- played.

7.  Click **Yes** to make the new bank account the default checking account. Click **No** to retain the existing default checking bank account.

> [!Note] 
> - You can set only one check-enabled bank account as the default checking account.

> - The bank account set as the default bank account is automatically displayed as the **Bank Name** in the **Print AP Checks (APPCHK)** page. You can select another bank account if required.

> - The bank account set as the default bank account is automatically displayed as the **Bank Name** in the **Miscellaneous AP Payments (APMISC)** page. You can select another bank account if required.

8.  If you want to add only the bank details and not do any transactions for the bank account, select the **Inactive** check box.

9.  Select the currency to use if your company is set to use more than one currency and you want to pay vendors from this account in a currency other than the system currency.

    i. Click the **Currency** lookup reference.
    
    ii. Highlight the currency and click **Select**. Or double-click the currency to use.

10. Enter the **GL Account No.** 

    i. Click the **GL Account No** lookup reference.
    
    The **Lookup For GL Account No** window appears.
    
    ii. Highlight the account number to use and click **Select**. Or double-click the GL account number to use.
    
    A warning message is displayed if the currency set up for the selected GL account is different from the currency selected in the currency selection step.
    
    iii. Click **Yes** to use the selected GL account. 
        
    Click **No** to select another GL account.
    
11. Ensure that the **Check Enabled** check box is selected.

12. In the **Check Details** area, specify the check details:

    a. In the **Next Check Number** field, enter the next check number to use.
    
    b. In the **Check Layout Filename** field, specify the check layout file: 
    
        i. Click the **Check Layout Filename** lookup reference.
        
    The **Lookup For Check Layout Filename** window appears.
        
        ii. Highlight the check layout to use and click **Select**. Or double-click the check layout to use.
        
    c. In the **Number Of Detail Lines** field, specify the number of lines to fit on a page before printing on the next page.
    
    d. In the **Number Of Detail Stubs** field, specify the number of check stubs to print.

13. Click **Save** on the **Toolbar** to save, else click **Cancel.**

    A message, *'Accounts Payable configuration has been modified. The screen will auto refresh in \<number> seconds'*. appears.

14. Close the message window.

## Set up the EFT information

1.  Open the **Accounts Payable (CSAP)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Accounts Payable**.

    Or

    - Search for **CSAP** or **Accounts Payable** in the **Navigation box** and then select ***Accounts Payable***.
    
    The **Accounts Payable (CSAP)** page appears.

2.  Click the **Bank Names** tab.

3.  On the grid toolbar, click **New**.

4.  In the **Bank Name** field, type the bank name.

5.  To mark the EFT account as the default account that you mainly use for your transactions, select the **Default** check box.

6.  If you have already set another EFT enabled bank as the default bank account, a message, *'\<Bank Name> is already flagged as the Default checking/EFT account. Do you want to set this checking/EFT account as the Default checking/EFT account?'* appears.

7.  Click **Yes** to make the new bank account the default EFT account. 

    Click **No** to retain the existing default EFT bank account.

> [!Note] 
> - You can set only one EFT enabled bank account as the default EFT account.

>- The bank account set as the default EFT account is automatically displayed as the Bank Account in the **AP Payment EFT (APEFT)** page. You can select another bank account if required.

8. If you want to add only the bank details and not do any transactions for the EFT account, select the **Inactive** check box.

9. Select the **Currency Label** to use if your company is set to use more than one currency and you want to pay vendors from this account in a currency other than the system currency.

10. Enter the **GL Account No.**

    a. Click the **GL Account No** lookup reference.

    The **Lookup For GL Account No** window appears.

    b. Highlight the account number to use and click **Select**. Or double- click the GL account number to use.

    A warning message is displayed if the currency set up for the selected GL account is different from the currency selected in the currency selection step.

    c. Click **Yes** to use the selected GL account. Click **No** to select another GL account.
    
11. Select the **EFT Enabled** check box.

12.  In the **EFT Details** area, specify the bank's EFT details.

    a. In the **Bank Account ID** field, type the bank account number from which funds are withdrawn to make payments to the vendor.

    b. In the **Routing Number** field, type the unique nine-digit number assigned to the bank to identify it when processing electronic payments.
        
    c. Click the **EFT File Template** lookup reference and in the **Lookup For EFT File Template** window, select the template used for exporting the payment details.
        
    The **Lookup For EFT File Template** window lists only the active templates.
        
    d. Specify the following values:

    - Prefix

    - Next Batch Number

    - Suffix

 > [!Note] It is not mandatory to specify values in the Prefix and Suffix fields. If no value is entered in these fields, then only the Next Batch Number value is considered.

    e. The combination of the **Prefix**, **Next Batch Number**, and **Suffix** fields gives a unique batch number. You can modify each unique batch number to a value greater than the last **Next EFT Batch Id** value generated for the bank.

    f. If any authorization is required for making the EFT payments, select the **Authorization Required** check box.
    
13. Click **Save** on the **Toolbar** to save, else click **Cancel**.

A message, '*Accounts Payable configuration have been modified. Screen will auto refresh in \<number> seconds'*. appears

14.  Close the message window.

   