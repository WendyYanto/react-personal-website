/* global URLSearchParams */
/* eslint no-undef: "error" */
import { useLocation } from 'react-router-dom'

export function useQuery () {
  return new URLSearchParams(useLocation().search)
}
