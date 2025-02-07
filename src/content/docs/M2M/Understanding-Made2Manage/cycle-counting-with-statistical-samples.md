---

title: "Cycle counting with statistical samples"
draft: false
type: Article

---

You can conduct a statistically based random sample of your inventory, which includes finished goods, components, and raw material. These items may be owned by your company or entrusted to you another company.  When you issue inventory to specific job orders, the issued item is removed from inventory and its costs become part of work in process. The sample is determined with a confidence level of 95%, adjusted for the selected sample size. Made2Manage selects the parts to count based on criteria you specify, and randomly chooses a number of those items.

Made2Manage calculates the sample using these formulas:

**n = (Z2pq) / e**2

**s = n / (1 + (n - 1) / N)**

where:

**Z** is the confidence level (area under the normal curve). Here, Z is fixed at 95%, for Z = 1.96.

**p** is the variability factor, here set at .25.

**q** is 1-p.

**e** is the precision factor you enter.

**n** is the required sample size.

**N** is the population size, or the number of items selected from the item master in Made2Manage. 

**s** is the final sample size.



​