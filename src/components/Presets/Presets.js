import { Link, useNavigate } from "react-router-dom";

import "./Presets.scss";

import Button from "../assets/Button/Button";
import PresetList from "./PresetList/PresetList";
import { useSelector } from "react-redux";

export default function Presets() {
  const Navigate = useNavigate();
  const presets = useSelector((state) => state.presets);

  // const [data, setData] = useState([]);

  return (
    <div className="Presets container">
      <Link className="settingsIcon" to="/settings">
        <i class="fa-solid fa-gear"></i>
      </Link>
      <h1>
        Presets{" "}
        {presets.length > 0 ? (
          <Button
            label="Create new preset"
            onClick={() => Navigate("/presets/create")}
          />
        ) : null}
      </h1>

      {presets.length > 0 ? (
        <PresetList />
      ) : (
        <Button
          label="Create your first preset"
          onClick={() => Navigate("/presets/create")}
        />
      )}
    </div>
  );
}
