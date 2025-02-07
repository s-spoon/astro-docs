---

title: "Understanding materials management"
draft: false
type: Article

---

Materials management focuses on parts and assemblies. It involves maintaining their identifying information; keeping track of their quantities, whereabouts, and availability; working with job orders; and planning for material needs.

In standard scheduling, Made2Manage can accommodate operation yield factors via the unit quantity specified on the job's detailed bill of material. Based on the value you enter in the **Unit Quantity** field to accommodate the percent of yield gain or loss you expect from an operation or workstation, Made2Manage recalculates the item's extended quantity. This new value is then used throughout the system, including material requirements planning, the purchasing queue, job order pick lists and so on to accurately represent your material needs.

If you use the Advanced Planning or Infinite Planning option for Planning and Scheduling, you can maintain operation yield percentage by using the **Yield** field of the routing or sales order detailed routing. For more information, see **Planning and Scheduling** documentation.

Standard cost roll-ups do not reflect the increased costs associated with increases caused by application of a yield factor. Standard costs are calculated by multiplying the bill of material quantity by the job quantity. A calculation that does not include the adjusted extended quantity from the job order detailed bill of material. As a result of this, actual job costs will vary from standard job costs and these variances will be posted to the normal variance accounts.


Made2Manage stores identifying information about each standard part in the item master. If you have more than one facility, you can link each part to a source facility that tells you where it came from, and to a resident facility that tells you its current location. Bills of material, routings, production schedules, and other application areas throughout Made2Manage use item master information.

Made2Manage keeps track of the whereabouts of the parts you have at each facility. They may be at an inventory location, possibly in a bin there, at an inspection location, or on the shop floor with a job.

Much of materials management involves working with job orders. Job orders meet customer demand for end products and service parts (independent demand). These same job orders create demand for component parts (dependent demand), and you can add job orders (for make parts) or purchase orders (for buy parts) to meet the dependent demand.

If you have multiple facilities, you can share inventory and production resources using inter-facility supply and inter-facility demand orders. Using inter-facility supply and inter-facility demand orders, you can get parts from another facility's inventory stores or manufacture component parts at a facility separate from the parent part.


Material Requirements Planning (MRP) is an optional feature that helps you efficiently meet your jobs' material needs. You may select to use two other optional materials management features: the bar code system and lot control.

​