---

title: "Cycle counting using statistical samples"
draft: false
type: Article

---

You can count a statistically based random sample of your inventory Any item, whether finished goods, components, or raw material, that is available for use and is the property of the company or the property of another company given to your company for safekeeping. You issue inventory to specific job orders; an issued inventory item is removed from inventory and its costs become part of some work in process., with a confidence level of 95%, adjusted for the sample size. The sample assumes a precision factor you select. Made2Manage selects the parts to count based on criteria you specify, and it selects a random number of those items.

Made2Manage calculates the sample using these formulas:

**n = (Z2pq) / e**2

**s = n / (1 + (n - 1) / N)**

where:

**Z** is the confidence level (area under the normal curve). Here, Z is fixed at 95%, for Z = 1.96.

**p** is the variability factor, here set at .25.

**q** is 1-p.

**e** is the precision factor you enter.

**n** is the required sample size.

**N** is the population size, or the number of items Made2Manage selected from the item A manufactured or purchased part, material, subassembly, or product.master In Made2Manage, a mode that lets you work with master (or header) records.

**s** is the final sample size.


​