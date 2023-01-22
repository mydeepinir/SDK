import { CommonProperties } from './common'
export interface IdentifyTraits {
  age?: number | string
  birthday?: string
  firstName?: string
  gender?: string
  lastName?: string
  title?: string
  username?: string
  company_name?: string
  company_id?: string
  company_industry?: string
  company_employeeCount?: string
  company_plan?: string
}
export interface IdentifyProperties extends CommonProperties {
  traits: IdentifyTraits
}