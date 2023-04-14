import { useNavigate } from "react-router-dom";
import "./Settings.scss";

export default function Settings() {
  const Navigate = useNavigate();

  const goBack = () => {
    Navigate(-1);
  };

  return (
    <div className="Settings container">
      <i className="settingsIcon fa-solid fa-xmark" onClick={goBack}></i>
      <h1>Settings</h1>

      <form className="form" action="" method="POST">
        <div className="form-group">
          <label htmlFor="apiKey">API Key</label>
          <input type="text" name="apiKey" id="apiKey" />
        </div>
        <div className="form-group-button">
          <button type="submit" className="submit">
            Save
          </button>
          <button type="button" onClick={goBack}>
            Cancel
          </button>
        </div>
      </form>
      <hr />
      <form class="form" action="">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" disabled />
        </div>
        <div className="form-group">
          <label htmlFor="old-password">Ancien mot de passe</label>
          <input type="text" name="old-password" id="old-password" />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Nouveau mot de passe</label>
          <input type="text" name="new-password" id="new-password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-new-password">
            Confirmation nouveau mot de passe
          </label>
          <input
            type="text"
            name="confirm-new-password"
            id="confirm-new-password"
          />
        </div>
        <div className="form-group-button">
          <button type="submit" className="submit">
            Change password
          </button>
          <button type="button" onClick={goBack}>
            Cancel
          </button>
        </div>
      </form>

      <hr />
      <div className="form">
        <div className="form-group-button">
          <button type="button" className="danger">
            CLEAR HISTORY
          </button>
          <button type="button" className="danger">
            DELETE ALL PRESETS
          </button>
          <button type="button" className="danger">
            DELETE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}
