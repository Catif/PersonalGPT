import "./Home.scss";

import Main from "./Main/Main";
import FAQ from "./FAQ/FAQ";

export default function Home() {
  return (
    <div className="Home container">
      <Main />
      <FAQ />
    </div>
  );
}
