import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";
import styles from "./hard-skill-property.module.scss";

type HardPropertyTypes = {
  property: any;
  setCurrentPropertyId: Dispatch<SetStateAction<number>>;
  currentPropertyId: number;
  setFakeLoader: Dispatch<SetStateAction<boolean>>;
};

const HardProperty: React.FC<HardPropertyTypes> = ({
  property,
  setCurrentPropertyId,
  currentPropertyId,
  setFakeLoader,
}) => {
  return (
    <div
      className={clsx(
        styles.root,
        property.id === currentPropertyId && styles.root__active
      )}
      onClick={() => {
        setCurrentPropertyId(property.id);
        setFakeLoader(true);
      }}
    >
      {property.title}
    </div>
  );
};

export default HardProperty;
