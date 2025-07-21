// HAIR RESTORATION
import prp_hair_restoration from "./services/prp_hair_restoration";
import exosomes from "./services/exosomes";
import mesotherapy from "./services/mesotherapy";

// SKIN TREATMENTS
import botox from "./services/botox";
import chemical_peels from "./services/chemical-peels";
import lip_fillers from "./services/lip-filler";
import dermal_fillers from "./services/dermal-fillers";
import sculptra from "./services/sculptra";

// WELLNESS
import farsk_iv_drip from "./services/farsk_iv_drip";

export const servicesData = {
    "prp-hair-restoration": prp_hair_restoration,
    "exosomes": exosomes,
    "mesotherapy": mesotherapy,

    "botox": botox,
    "chemical-peels": chemical_peels, 
    "lip-fillers": lip_fillers,
    "dermal-fillers": dermal_fillers,
    "sculptra": sculptra,
    
    "farsk-iv-drip": farsk_iv_drip
}