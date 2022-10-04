import { CommonProperties } from './common'

export interface IdentifyProperties extends CommonProperties {
  traits_age?: number | string
  traits_birthday?: string
  traits_firstName?: string
  traits_gender?: string
  traits_lastName?: string
  traits_title?: string
  traits_username?: string
  traits_company_name?: string
  traits_company_id?: string
  traits_company_industry?: string
  traits_company_employeeCount?: string
  traits_company_plan?: string
}