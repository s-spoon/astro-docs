---

title: "SMC³ Shipping"
draft: false
type: Article

---

SMC³ is a freight carrier rating interface that allows you to rate shipments in real time, based on your company-specific tariffs and carrier discounts, minimum charges, deficit rating, and surcharges. Aptean Ship supports the following options for SMC³:

* Handling Fee

* C.O.D.

* Hazardous Materials

* Lift Gate Pickup/Delivery

* Inside Pickup/Delivery

* Blind

* Tarp

* Pallet Exchange

* Consolidation


### Shipping Notes

### Rate Alternation

When rating shipments with SMC³, rate alternation is performed by default. Rate alternation works on the principle that a shipment's freight charge might be less if it is rated using a rate charge for a higher weight. For example, rate alternation on a shipment with a weight of 8,000 lbs might find that it is less expensive to rate at the rate for a 10,000 lb shipment. There is still a charge for the deficit weight, in this case 2000 lbs, but it is still less expensive than rating the 8,000 lbs at the more expensive rate. To stop rate alternation at a certain point, you can enter a stop weight in the [Stop Alternation field](http://ask.shipping.apteancloud.com/akb/smc3-contracts/#stop-alternation-weight-in-lbs) on the contract's [Main](http://ask.shipping.apteancloud.com/akb/smc3-contracts/#main) section.

### Charges

SMC³ returns charges based on calculations of weight, rates determined by the tariff, origin/destination zip codes, and the customer's contract rates. A tariff minimum charge is included in the returned rate for low weight shipments. The amount of the minimum charge may vary for each origin/destination zip code combination. If the shipment Net Charge is less than the Minimum Charge, the Minimum Charge will be applied. All discounts are applied to charges (total amount returned), not rates.

