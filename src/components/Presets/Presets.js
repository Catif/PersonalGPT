import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Presets.scss";

import Button from "../assets/Button/Button";
import PresetList from "./PresetList/PresetList";

export default function Presets() {
  const Navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Preset 1",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 2,
      name: "Preset 2",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 3,
      name: "Preset 3",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 4,
      name: "Preset 4",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 5,
      name: "Preset 5",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 6,
      name: "Preset 6",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 7,
      name: "Preset 7",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 8,
      name: "Preset 8",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 9,
      name: "Preset 9",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 10,
      name: "Preset 10",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 11,
      name: "Preset 11",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 12,
      name: "Preset 12",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 13,
      name: "Preset 13",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
    {
      id: 14,
      name: "Preset 14",
      description:
        "This is a preset with a long description that will be cut off after a certain amount of characters",
    },
  ]);
  // const [data, setData] = useState([]);

  return (
    <div className="Presets container">
      <Link className="settingsIcon" to="/settings">
        <i class="fa-solid fa-gear"></i>
      </Link>
      <h1>
        Presets{" "}
        {data.length > 0 ? (
          <Button
            label="Create new preset"
            onClick={() => Navigate("/presets/create")}
          />
        ) : null}
      </h1>

      {data.length > 0 ? (
        <PresetList data={data} />
      ) : (
        <Button
          label="Create your first preset"
          onClick={() => Navigate("/presets/create")}
        />
      )}
    </div>
  );
}
