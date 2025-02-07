---  

title: "Change bank/EFT account information"  
draft: false 
type: Article

---

You can change the General Ledger (GL). You can also change the Electronic Funds Transfer (EFT) payment details of a bank. Use the **Bank Names** tab of the **Accounts Payable (CSAP)** page for this.

**To change the bank account information**

1. Open the **Accounts Payable (CSAP)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Accounts Payable**.

    Or

    - Search for **CSAP** or **Accounts Payable** in the **Navigation box** and then select **Accounts Payable**.
    
    The **Accounts Payable (CSAP)** page appears.

2.  Click the **Bank Names** tab.

3.  Under the **Bank Id** column, double-click the bank ID number hyperlink

    The **Bank Detail** page appears.

4.  In the **Bank Name** field, change the bank's name as required.

    The new bank name is used for checks that are printed after the changes are saved. When you void an old check, the bank name used when the check was created is used. When you generate reports, the bank name that existed when the transaction was done is displayed.

5.  Select the **Default** check box, to mark the bank account as the default account that you mainly use for your transactions.

6.  If you have already set another check enabled bank as the default bank account, a message, ‘*\<Bank Name> is already flagged as the Default checking account/EFT accounts. Do you want to set this checking/EFT account as the Default checking/EFT account?’* appears.

7.  Click **Yes** to make the new bank account the default checking account.

8.  Click **No** to retain the existing default checking bank account.

>[!Note]
> -   You can set only one check enabled bank account as the default checking account.

> -   The bank account set as the default bank account is automatically displayed as the **Bank Name** in the **Print AP Checks (APPCHK)** page. You can select another bank account if required.

> -   The bank account set as the default bank account is automatically displayed as the **Bank Name** in the **Miscellaneous AP Payments (APMISC)** page. You can select another bank account if required.

8. Select the **Inactive** check box, if you want to add only the bank details and not do any transactions for the bank account.

    You can only make a bank account inactive if no active or pending transactions exist for the account.

9. Change the currency if required.

    a. Click the **Currency** lookup reference.
    
    The **Lookup For Currency** window appears.

    b. Select the row that contains the required currency and click **Select**. Or double-click the row that contains the required currency.
    
10. Change the GL Account Number if required.
    
    a. Click the **GL Account No** lookup reference.

    The **Lookup For GL Account No** window appears.
    
    b. Select the row that has the account number and click **Select**. Or double-click the row that contains the account number.
    
    A warning message is displayed if the currency set up for the selected GL account is different from the currency selected in the currency selection step.
    
    c. Click **Yes** to use the selected GL account. 
    
       Click **No** to select another GL account.

11.  In the **Check Details** section, make the required changes.

        a. In the **Next Check Number** field, enter the next check number to use.
    
        b. In the **Check Layout Filename** field, specify the check layout file: 
    
            i. Click the **Check Layout Filename** Lookup Reference.
            
            The **Lookup For Check Layout Filename** window appears.
     
            ii. Select the row that contains the required check layout and click **Select**. Or double-click the row that has the required check layout.
        c. In the **Number Of Detail Lines** field, specify the number of lines to fit on a page before printing on the next page.
        
        d. In the **Number Of Detail Stubs** field, specify the number of check stubs to print.

12. On the **Toolbar**, click **Save** to save your changes.

13. Close the message window.

## Change the EFT information

1.  Open the **Accounts Payable (CSAP)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Accounts Payable**.

    Or

    - Search for **CSAP** *or* **Accounts Payable** *in the* **Navigation box** *and then select* **Accounts Payable**. 
    
    The **Accounts Payable (CSAP)** page appears.

2.  Click the **Bank Names** tab.

3.  Under the **Bank Id** column, double-click the bank ID number hyperlink.

    The **Bank Detail** page appears.

4.  In the **Bank Name** field, type the bank's name.

5.  Select the **Default** check box, to mark the EFT account as the default account that you mainly use for your transactions.

6.  If you have already set another EFT-enabled bank as the default bank account, a message, ‘*\<Bank Name> is already flagged as the Default checking/EFT account. Do you want to set this checking/EFT account as the Default checking/EFT account?’* appears.

7.  Click **Yes** to make the new bank account the default EFT account. Click **No** to retain the existing default EFT bank account.

> [!Note] 
> -   You can set only one EFT enabled bank account as the default EFT account.

> -   The bank account set as the default EFT account is automatically displayed as the Bank Account in the **AP Payment EFT (APEFT)** page. You can select another bank account if needed.

8.  Select the **Inactive** check box, if you only want to add the bank details and not do any transactions for the EFT account.

    You can only make an EFT account inactive if no active or pending transactions exist for the account.

9.  Change the currency if needed:

    a. Click the **Currency** Lookup Reference.

    The **Lookup For Currency** window appears.

    b. Select the row that has the currency and click **Select**. Or double-click the row that has the required currency.

10.  Change the GL Account Number if needed.

        a. Click the **GL Account No** Lookup Reference.
        
        The **Lookup For GL Account No** window appears.

        b. Select the row that contains the required account number and click **Select**. Or double-click the row that has the required account number.
        
        A warning message is displayed if the currency set up for the selected GL account is different from the currency selected in the currency selection step.

        c.  Click **Yes** to use the selected GL account.
            
        Click **No** to select another GLaccount. 

11.  In the **EFT Details** section, specify the bank's EFT details.

    a. In the **Bank Account ID** field, type the bank account number from which funds are withdrawn to make payments to the vendor.

    b. In the **Routing Number** field, type the unique nine-digit number assigned to the bank to identify it when processing electronic payments.

    c. Click the **EFT File Template** Lookup Reference.
    
    The **Lookup For EFT File Template** window appears.

    d. Select the row that contains the required template used for exporting the payment details and click **Select**. Or double-click the row that contains the required template.

> [!Note] 
The Lookup For EFT File Template window lists only the active templates.
> Specify the following values:

> - Next EFT Batch ID

>- Prefix

>- Next Batch Number

>- Suffix

> [!Note] 

> -   It is not mandatory to specify values in the **Prefix** and **Suffix** fields. If no value is entered in these fields, then only the **Next Batch Number** value is considered.

> -   The combination of the **Prefix**, **Next Batch Number**, and **Suffix** fields gives a unique batch number. You can modify each unique batch number to a value greater than the last **Next EFT Batch Id** value generated for the bank.

12. Select the **Authorization Required** check box if any authorization is needed for making the EFT payments.

13. On the **Toolbar**, click **Save** to save your changes.

14.  Close the message window.


