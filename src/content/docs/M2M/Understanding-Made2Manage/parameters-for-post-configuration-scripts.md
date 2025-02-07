---

title: "Parameters for post-configuration scripts"
draft: false
type: Article

---

You must pass a post-configuration script an array containing the following elements:
-	SmartPart number.
-	**S** if the product was sent to a sales order (SO) A record needed to authorize and process a customer's order that lists all items for sale. **Q** if the product  was sent to a quotation, which is an estimate of the price and terms of sale for prospective buyers.
-	The sales order number or quotation number in character form, such as S12345.
-	**Y** if the product generated an item master entry, a null if no item master entry was created.
-	The product ID.
-	The product instance ID.
-	The quantity of this product ordered or quoted. A post-configuration script does not return any values.

​