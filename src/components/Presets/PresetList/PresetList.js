import "./PresetList.scss";
import { useState } from "react";

import PresetCard from "./PresetCard/PresetCard";
import Pagination from "./Pagination/Pagination";

export default function PresetCards({ data }) {
  const limit = 12;
  const dataProps = [...data];
  const [dataShow, setDataShow] = useState(dataProps.slice(0, limit));
  const [pagination, setPagination] = useState(0); // page 0

  const handlePagination = (type) => {
    if (type === "prev") {
      let newPage = pagination - 1;
      if (newPage >= 0) {
        setPagination(newPage);
        setDataShow(dataProps.slice(newPage * limit, (newPage + 1) * limit));
      }
    } else {
      let newPage = pagination + 1;
      if (newPage <= dataProps.length) {
        setPagination(newPage);
        setDataShow(dataProps.slice(newPage * limit, (newPage + 1) * limit));
      }
    }
  };

  return (
    <div className="Presets__list">
      <div className="Presets__list__items">
        {dataShow.map((preset) => (
          <PresetCard preset={preset} key={preset.id} />
        ))}
      </div>
      {dataProps.length > limit && (
        <Pagination
          handlePagination={handlePagination}
          pagination={pagination}
          dataProps={dataProps}
          limit={limit}
        />
      )}
    </div>
  );
}
