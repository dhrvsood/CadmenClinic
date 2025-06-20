import { useRouter } from "next/router";
import CadmenPRPLander from "@/components/plasmic/cadmenclinic_migration/CadmenPRPLander";
import { hairServices } from "@/doc/hair-services";

export default function HairServicePage() {
  const router = useRouter();
  const { hairServiceName } = router.query;

  if (!hairServiceName || !hairServices[hairServiceName]) {
    return <p>Invalid service</p>;
  }

  const serviceData = hairServices[hairServiceName];

  return <CadmenPRPLander args={{ serviceData }} />;
}
