import React, { Dispatch, SetStateAction } from "react";
import HardProperty from "../HardProperty";
import styles from "./hard-properties-all.module.scss";

type HardPropertiseAllTypes = {
  allProperties: any;
  setCurrentPropertyId: Dispatch<SetStateAction<number>>;
  currentPropertyId: number;
  setFakeLoader: Dispatch<SetStateAction<boolean>>;
};

const HardPropertiesAll: React.FC<HardPropertiseAllTypes> = ({
  setCurrentPropertyId,
  allProperties,
  currentPropertyId,
  setFakeLoader,
}) => {
  return (
    <div className={styles.root}>
      {/* {allProperties.map((property: any) => {
        return (
          <HardProperty
            property={property}
            setCurrentPropertyId={setCurrentPropertyId}
            currentPropertyId={currentPropertyId}
            setFakeLoader={setFakeLoader}
          />
        );
      })} */}
    </div>
  );
};

export default HardPropertiesAll;
