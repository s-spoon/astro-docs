---

title: "Calculate percent complete billing amount"
draft: false

 
---

Percent complete billing allows you to [invoice]() *An itemized list of goods shipped, stating quantities, prices, fees, shipping charges, and so on, used to inform a customer of the amount they owe for the goods furnished. the customer Someone who agrees to buy goods from you.* for a percent of the job or cost completion of the *sales order (SO) A record of information needed to authorize and process a customer's order. The sales order lists all items to be sold to the customer. Made2Manage calculates percent complete billing amount as follows:

**(Sum of actual** *material* **Physical entities you consume as you make a product. Material can be elemental, such as steel sheeting; a manufactured part, such as a screw or a plastic molding; or an assembly. and production** *labor* **Work related to the manufacturing of a product. costs / Estimated material and production labor costs) × (Extended price on release) – (Previous billing amounts) + (Credits) = Actual amount you can** *bill* **(Also called statement) A document showing a customer's credits, debits, and balance for a given period of time. the customer**

Due to rounding, the resulting extended invoice amount may not be exactly equal to the amount to bill. Therefore, a rounding adjustment line [item]().*A manufactured or purchased part, material, sub-assembly, or product.* is added to the invoice to make the total goods amount on the invoice equal the amount to bill.