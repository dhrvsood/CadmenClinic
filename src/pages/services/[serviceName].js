// pages/services/[serviceName].js
import { useRouter } from 'next/router';
import { servicesData as newServices } from '@/doc/services';
import { servicesData as oldServices } from '@/doc/old_services'

import CadmenServicePage from '@/components/plasmic/cadmenclinic_migration/CadmenServicePage';
import OldServicePage from '@/components/OldServicePage'; 
import Page404 from '@/pages/404';

export default function ServiceRouterPage() {
  const { query } = useRouter();
  const { serviceName } = query;

  if (!serviceName) return <p>Loading...</p>;

  const newService = newServices[serviceName];
  const oldService = oldServices[serviceName];

  if (!newService && !oldService) {
    return <Page404 />
  }

  if (newService?.isMigrated) {
    return <CadmenServicePage key={newService.slug} args={{ serviceData: newService }} />;
  }

  if (oldService) {
    return <OldServicePage serviceData={oldService} />;
  }
}


// import { useRouter } from "next/router";
// import CadmenPRPLander from "@/components/plasmic/cadmenclinic_migration/CadmenPRPLander";
// import { servicesData } from "@/doc/services";

// export default function HairServicePage() {
//   const router = useRouter();
//   const { serviceName } = router.query;

//   if (!serviceName || !servicesData[serviceName]) {
//     return <p>Invalid service</p>;
//   }

//   const serviceData = servicesData[serviceName];

//   return <CadmenPRPLander args={{ serviceData }} />;
// }
