import { ServicePage } from "./ServicePage"

interface ServiceRouteProps {
  onNavigate: (path: string) => void
}

export function AiMachineLearningPage({ onNavigate }: ServiceRouteProps) {
  return <ServicePage service="ai-machine-learning" onNavigate={onNavigate} />
}
