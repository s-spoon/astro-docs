---  

title: "Show Voucher Error"  
draft: false 
type: Article

---

This page allows you to access and review the error details associated with a
voucher.

Follow these steps to view the error details:

  1. Select an existing voucher in **Invoice Matching Search** screen and click **Show Error** contextual icon.

      Or launch one specific voucher in **Voucher** screen, and then click **Show Error** contextual icon.

      Or from the left pane, click on Invoice and then select Voucher Error.

  2. To search for a specific voucher, use the search feature and select the voucher number from the search results.

  3. Once the screen is displayed, select the error type or all types you wish to investigate and click on the Search button. This will retrieve the matching results related to the specified error type.

      All Voucher Errors need to either resolved or overridden by an approval, otherwise, the voucher with errors cannot be updated to Complete status.

## Error Types

Following are the different type of voucher errors:

  * **IVStatNoAcctgMatch** : Indicates that there is no distributed charge information available.

  * **IVStatLineQtyZero** : Indicates that the quantity invoiced is zero.

  * **IVFreightNotAllow** : Indicates that both the Freight Code and Freight Amount are not allowed.

  * **IVStatDCOverLimit** : Indicates that the total cost exceeds the DC Approve Limit.

  * **IVItemOnPO** : Indicates that an item on a Direct Charge Invoice is still on an open Purchase Order.

  * **IVStatVarAmtErr** , **IVStatVarPctErr** : These errors refer to the tolerance check for items based on their item type, either by amount or percentage.

  * **IVStatVarSCErr** : Indicates an amount comparison error on a Service Contract Voucher.

  * **IVStatVarQtyErr** : Indicates a quantity comparison error on a normal Purchase Order.

  * **IVControlTotalErr** : Indicates a mismatch between the gross total and control total.

  * **IVStatChangeNoDetails** : Indicates that there are no detail lines available for the given transaction.

