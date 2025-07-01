import React from "react";
import projectcss from ".//plasmic/blank_website/plasmic.module.css"; // plasmic-import: fpxTiFS69ULcX4wDGEfw3c/projectcss
import { classNames, PlasmicImg as PlasmicImg__ } from "@plasmicapp/react-web"; // adjust import if needed
import sty from ".//plasmic/cadmenclinic_migration/CadmenPRPLander.module.css"; // plasmic-import: 9rME71zJbGo1/css


const SmallInfoCard = ({ icon, title, emphasis, subtitle }) => {
  return (
    <div className={classNames(projectcss.all, sty.freeBox__aBZlq)}>
      <div className={classNames(projectcss.all, sty.freeBox__zjMdy)}>
        <div className={classNames(projectcss.all, sty.freeBox__txJhU)}>
          <PlasmicImg__
            alt=""
            className={classNames(sty.img___4BU6T)}
            displayHeight="32px"
            displayMaxHeight="none"
            displayMaxWidth="100%"
            displayMinHeight="0"
            displayMinWidth="0"
            displayWidth="32px"
            loading="lazy"
            src={{
              src: icon,
              fullWidth: 32,
              fullHeight: 32,
              aspectRatio: 1,
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__rYcX)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__tyIsz
            )}
          >
            <React.Fragment>
              <span
                className="plasmic_default__all plasmic_default__span"
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                {emphasis}
              </span>
              <React.Fragment>{title}</React.Fragment>
            </React.Fragment>
          </h4>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__t7NH5)}>
        <p
          className={classNames(
            projectcss.all,
            projectcss.p,
            projectcss.__wab_text,
            sty.p__rFmv
          )}
        >
          <React.Fragment>
            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
          </React.Fragment>
        </p>
      </div>
    </div>
  );
};

export default SmallInfoCard;
