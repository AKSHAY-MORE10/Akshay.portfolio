import { ServicePage } from "./ServicePage"

interface ServiceRouteProps {
  onNavigate: (path: string) => void
}

export function AiIntegrationsPage({ onNavigate }: ServiceRouteProps) {
  return <ServicePage service="ai-integrations" onNavigate={onNavigate} />
}
