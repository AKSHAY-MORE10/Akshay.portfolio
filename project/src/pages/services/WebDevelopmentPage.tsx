import { ServicePage } from "./ServicePage"

interface ServiceRouteProps {
  onNavigate: (path: string) => void
}

export function WebDevelopmentPage({ onNavigate }: ServiceRouteProps) {
  return <ServicePage service="web-development" onNavigate={onNavigate} />
}
