---

title: "Overview of materials management"
draft: false
type: Article

---

Materials management focuses on parts and assemblies, encompassing the maintenance of identifying information, tracking quantities, managing job orders; and planning material needs.

In standard scheduling, Made2Manage accommodates operation yield factors through the unit quantity specified on the job's detailed bill of material. The value you enter in the Unit Quantity field to accommodate the percent of yield gain or loss you expect from an operation or workstation, allowing Made2Manage to recalculate the item's extended quantity. This updated value is used throughout the system, including material requirements planning, the purchasing queue, and job order pick lists and to accurately represent your material needs.

If you use the Advanced Planning or Infinite Planning option for Planning and Scheduling, you can maintain operation yield percentage via the Yield field in the routing or sales order detailed routing. For more information, see Planning and Scheduling documentation.

Standard cost roll-ups do not account for increased costs associated with applying a yield factor. Standard costs are computed by multiplying the bill of material quantity by the job quantity, without considering the adjusted extended quantity from the job order’s detailed bill of material. Consequently, actual job costs will vary from standard job costs and these variances posted to the normal variance accounts.

Made2Manage stores identifying information for each standard part in the item master. If you operate multiple facilities, you can link each part to a source facility (indicating origin) and a resident facility (indicating current location). Bills of material, routings, production schedules, and other application areas in Made2Manage utilize item master information.

Made2Manage tracks  the location of parts within each facility, whether in inventory location, bins, inspection locations, or on the shop floor with a job.
Much of materials management involves managing job orders, which fulfill customer demand for end products and service parts (independent demand) and generate demand for component parts (dependent demand). You can add job orders (for make parts) or purchase orders (for buy parts) to meet the dependent demand.

If you have multiple facilities, you can share inventory and production resources through inter-facility supply and inter-facility demand orders. allowing you to source parts from another facility's inventory or manufacture component parts at a different location from the parent part.


Material Requirements Planning (MRP) is an optional feature that helps you efficiently meet your jobs' material needs. Additionally, you may select to use two other optional materials management features: the bar code system and lot control.


​