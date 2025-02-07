---  
 
title: "Understanding the Copy Functionality from Standard Request and Work Order in Detail"  
draft: false 
type: KB Article
 
---

**Q1. What are the differences between the "import from work order" function when used
during the creation process (before the work order is created) and when a work order
already exists?**

**Solution**:  
The behavior of the Import from Work Order functionality can vary depending on whether a work
order has already been created or not. During the creation process, it is possible to copy Header
data if the work order has not been created yet. However, this is not possible if a work order
already exists. It is important to note that this feature is designed to prevent duplicate entries and
ensure consistency across all records.  
As such, header data cannot be copied when a work order has already been created. In such
cases, users must manually enter the required information into the designated fields.

**Q2. What information is copied and not copied when a new work order is created, and a
copy action is executed using a standard or regular work order associated with different
equipment?**

**Solution**:  
1. When a new work order, WO123, is created with specific equipment (for example, Eqp123),
and a copy action is performed using a standard work order SR001 linked to equipment
EQP124, the resulting work order will contain the following details:
    1. **From the equipment tied to the new work order, Eqp123**
        * Copied: Equipment ID, description, class, criticality.
        * Not copied: Account, custom information, ISO, and Mechanical Integrity information.

    2. **From the standard request SR001**
        * Copied: Project, shop, inspection, area, department.
        * Not copied: Account, Equipment ID, description, class, criticality.

2. Similarly, when a copy action is executed using a regular work order WO001 associated with
equipment EQP124, the resulting work order will have the following information:
    1. **From the equipment tied to the new work order, Eqp123**
        * Copied from Eqp123: Equipment ID, description, class, criticality.
        * Not copied: account, custom information, ISO, and Mechanical Integrity information.

    2. **From the equipment tied to the regular work order WO001, EQP124**
        * Copied: Project, shop, inspection, area, department.
        * Not copied: Account, Equipment ID, description, class, criticality.

3. In a scenario where an operation from a standard request SR01, associated with equipment EQP125, is applied to a new work order, WO125, linked to a different equipment, EQP126, the area and department information are copied from EQP126.

