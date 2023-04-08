import "./PresetCard.scss";
import { Link } from "react-router-dom";

export default function PresetCard({ preset }) {
  let presetCopy = { ...preset };
  if (presetCopy.description.length > 80) {
    presetCopy.description = presetCopy.description.slice(0, 80) + "...";
  } else {
    presetCopy.description = presetCopy.description;
  }

  return (
    <Link className="Presets__list__item" to={"/presets/" + presetCopy.id}>
      <h2>{presetCopy.name}</h2>
      <p>{presetCopy.description}</p>
    </Link>
  );
}
