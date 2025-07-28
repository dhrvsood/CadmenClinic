import React from "react";
import classNames from "classnames";
import Link from "next/link";

import {
    Stack as Stack__,
} from "@plasmicapp/react-web";
import projectcss from "@/components/plasmic/blank_website/plasmic.module.css";
import sty from "@/components/plasmic/cadmenclinic_migration/PlasmicBotoxSeo.module.css";
import AffordableBotoxCard from "@/components/AffordableBotoxCard";   

const CadmenTreatmentCardsSection = ({
    overrides = {}, 
    title,
    description,
    regularUnit,
    specialUnit,
    cards,
    wide=false
}) => (
    <Stack__
    as={"section"}
    data-plasmic-name={"affordableBotoxSection"}
    data-plasmic-override={overrides.affordableBotoxSection}
    hasGap={true}
    className={classNames(projectcss.all, sty.affordableBotoxSection)}
    >
    <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___1JzFp)}
    >
        <div
        className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fLnGd
        )}
        >
        <React.Fragment>
            <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#080909" }}
            >
                {title.prefix}
            </span>
            <br></br>
            <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#9a7f71", fontStyle: "italic" }}
            >
                {title.emphasis}
            </span>
        </React.Fragment>
        </div>
        <div
        className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tfw7
        )}
        >
        <React.Fragment>
            <span
            className={"plasmic_default__all plasmic_default__span"}
            style={{ color: "#535556" }}
            >{description}
            </span>
        </React.Fragment>
        </div>
    </Stack__>
    <Stack__
        as="div"
        hasGap={true}
        className={classNames(
            projectcss.all,
            sty.freeBox__hib93,
            !wide && sty["freeBox__hib93--narrow"]
        )}
    >

        {cards.map((card, idx) => (
            <AffordableBotoxCard
                key={idx}
                name={card.name}
                perUnit={`$${card.regularPrice}`}
                pillUnit={`/ ${regularUnit}`}
                price={`$${card.specialPrice}`}
                unitWording={`/ ${specialUnit}`}
                className={classNames(
                "__wab_instance",
                sty.affordableBotoxCard__v1OXt
                )}
                items={card.points.map(point => ({
                    title: point.title,
                    description: point.description ,
                }))}
            />
        ))}
    </Stack__>

    <Link href='/book-now'  className='mt-[10px] w-full md:w-auto'>
        <button className='button w-full md:w-auto'>Book Now</button>
    </Link>
    </Stack__>
);

export default CadmenTreatmentCardsSection;