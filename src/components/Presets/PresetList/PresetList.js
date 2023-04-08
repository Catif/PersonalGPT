import "./PresetList.scss";
import { useState } from "react";

import PresetCard from "./PresetCard/PresetCard";
import Pagination from "./Pagination/Pagination";
import { useSelector } from "react-redux";

export default function PresetCards() {
  const limit = 12;
  const presets = useSelector((state) => state.presets);

  const [dataShow, setDataShow] = useState(presets.slice(0, limit));
  const [pagination, setPagination] = useState(0); // page 0

  const handlePagination = (type) => {
    if (type === "prev") {
      let newPage = pagination - 1;
      if (newPage >= 0) {
        setPagination(newPage);
        setDataShow(presets.slice(newPage * limit, (newPage + 1) * limit));
      }
    } else {
      let newPage = pagination + 1;
      if (newPage <= presets.length) {
        setPagination(newPage);
        setDataShow(presets.slice(newPage * limit, (newPage + 1) * limit));
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
      {presets.length > limit && (
        <Pagination
          handlePagination={handlePagination}
          pagination={pagination}
          presets={presets}
          limit={limit}
        />
      )}
    </div>
  );
}
