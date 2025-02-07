---
title: "Order costing posting: Standard, last actual, component or Daily labor"
draft: false
type: Article
---

When you record labor it posts to an account that depends on the kind of transaction you perform.

| Source                         | Transaction/Accounts                                                                                 | Debit | Credit |
|--------------------------------|------------------------------------------------------------------------------------------------------|-------|--------|
| Lead person,  no overtime      | WIP Labor for the job's facility and product class at the employee's hourly rate                     | DR    | --     |
|                                | Accrued Payroll at the employee's hourly rate                                                        | --    | CR     |
|                                | WIP Overhead for the job's facility and product class at the work center's overhead rate             | DR    | --     |
|                                | Overhead Absorption (CSPROD) at the work center's overhead rate                                      | --    | CR     |
| Lead person,  overtime         | WIP Labor for the job's facility and product class at the employee's hourly rate x the overtime rate | DR    | --     |
|                                | Accrued Payroll at the employee's hourly rate x the overtime rate                                    | --    | CR     |
|                                | WIP Overhead for the job's facility and product class at the work center's overhead rate             | DR    | --     |
|                                | Overhead Absorption (CSPROD) at the work center's overhead rate                                      | --    | CR     |
| Non-lead person,  no overtime  | WIP Labor for the job's facility and product class at the employee's hourly rate                     | DR    | --     |
|                                | Accrued Payroll at the employee's hourly rate                                                        | --    | CR     |
| Non-lead person, overtime      | WIP Labor for the job's facility and product class at the employee's hourly rate x the overtime rate | DR    | --     |
|                                | Accrued Payroll at the employee's hourly rate x the overtime rate                                    | --    | CR     |
| No overtime charged to the job | COGS Labor for the job’s facility and product class for overtime dollars                             | DR    | --     |
|                                | Accrued Payroll for overtime dollars                                                                 | --    | CR     |