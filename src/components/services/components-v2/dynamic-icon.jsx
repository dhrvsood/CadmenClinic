import { useMemo } from "react";
import dynamic from "next/dynamic";
import sty from './dynamic-icon.module.css'

export default function DynamicIcon({ iconName }) {
  if(!iconName) {
    iconName = 'TimeSvg3'
  }
  // Create the dynamic component only when iconName changes
  const IconComponent = useMemo(
    () =>
      dynamic(() =>
        import(`@/components/plasmic/image_lab_2024/icons/PlasmicIcon__${iconName}`)
      ),
    [iconName]
  );

  return (
      <IconComponent className={sty.dynamicIcon} role="img" />
  );
}
