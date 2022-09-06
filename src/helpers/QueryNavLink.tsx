import { NavLinkProps, useLocation, NavLink } from 'react-router-dom'

export function QueryNavLink({ to, ...props }: NavLinkProps) {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}
