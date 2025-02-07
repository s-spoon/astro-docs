---

title: "Understanding how Made2Manage determines estimated and actual costs"
draft: false
type: Article

---

This table helps you understand how Made2Manage calculates estimated costs for a job and actual costs for a job.

| Cost Element | Estimated Cost Calculation Method | Actual Cost Calculation Method |
|-----|-----|--|
| Materials | Item master (quantity of material for all item types is on the detailed bill of material) | For make items: job orders  For stock items: item master (quantity is actual quantity issued) For buy items: purchase orders and receipts (quantity is actual quantity) |
| Labor     | Job routing: (Estimated production hours + setup) × labor rate    | Labor reporting: (Actual setup + production hours) × labor rate      |
| Overhead  | Item master Job routing: (Estimated production hours + setup) × overhead rate   | Overhead: (Actual setup + production hours) × standard overhead rate     |

Estimated and actual cost calculations also depend on your company's costing setup. When your company sets up Made2Manage, it specifies how the system calculates costs for inventory, estimates, and orders. 

​