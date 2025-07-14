import { useRouter } from "next/router";
import CadmenPRPLander from "@/components/plasmic/cadmenclinic_migration/CadmenPRPLander";
import { servicesData } from "@/doc/services";

export default function HairServicePage() {
  const router = useRouter();
  const { serviceName } = router.query;

  if (!serviceName || !servicesData[serviceName]) {
    return <p>Invalid service</p>;
  }

  const serviceData = servicesData[serviceName];

  return <CadmenPRPLander args={{ serviceData }} />;
}
