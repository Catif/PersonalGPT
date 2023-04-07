import "./PresetCard.scss";
import { Link } from "react-router-dom";

export default function PresetCard({ preset }) {
  if (preset.description.length > 80) {
    preset.description = preset.description.slice(0, 80) + "...";
  } else {
    preset.description = preset.description;
  }

  return (
    <Link className="Presets__list__item" to={"/presets/" + preset.id}>
      <h2>{preset.name}</h2>
      <p>{preset.description}</p>
    </Link>
  );
}
