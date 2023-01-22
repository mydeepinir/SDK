import { CommonProperties } from './common'
export interface GroupTraits {
  employees?: string
  industry?: string
  plan?: string
}
export interface GroupProperties extends CommonProperties {
  traits: GroupTraits
}