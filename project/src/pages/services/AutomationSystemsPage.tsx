import { ServicePage } from "./ServicePage"

interface ServiceRouteProps {
  onNavigate: (path: string) => void
}

export function AutomationSystemsPage({ onNavigate }: ServiceRouteProps) {
  return <ServicePage service="automation-systems" onNavigate={onNavigate} />
}
