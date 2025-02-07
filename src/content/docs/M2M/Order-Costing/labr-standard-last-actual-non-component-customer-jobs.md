---
title: "LABR (Standard, last actual, non-component or Customer jobs)"
draft: false
type: Article
---

Select the kind of transaction for which to view postings. 

Back

| Source                       | Transaction/Accounts                                                                             | Debit | Credit |
|------------------------------|--------------------------------------------------------------------------------------------------|-------|--------|
| Lead person, no overtime     | WIP Labor for the job’s facility and product class at the employee's hourly rate                 | DR    | --     |
|                              | Accrued Payroll at the employee's hourly rate                                                    | --    | CR     |
|                              | WIP Overhead for the job’s facility and product class at the work center’s overhead              | DR    | --     |
|                              | Overhead Absorption (CSPROD) at the work center's overhead rate                                  | --    | CR     |
| Lead person, overtime        | WIP Labor for the job’s facility and product class at the employee's hourly rate x overtime rate | DR    | --     |
|                              | Accrued Payroll at the employee's hourly rate x overtime rate                                    | --    | CR     |
|                              | WIP Overhead for the job’s facility and product class at the work center's overhead rate         | DR    | --     |
|                              | Overhead Absorption (CSPROD) at the work center's overhead rate                                  | --    | CR     |
| Non-lead person, no overtime | WIP Labor for the job’s facility and product class at the employee's hourly rate                 | DR    | --     |
|                              | Accrued Payroll at the employee's hourly rate                                                    | --    | CR     |
| Non-lead person, overtime    | WIP Labor for the job's facility and product class at the employee's hourly rate x overtime rate | DR    | --     |
|                              | Accrued Payroll at the employee's hourly rate x overtime rate                                    | --    | CR     |
| No overtime posted to job    | COGS Labor for the job's facility and product class for overtime dollars                         | DR    | --     |
|                              | Accrued Payroll for overtime dollars                                                             | --    | CR     |