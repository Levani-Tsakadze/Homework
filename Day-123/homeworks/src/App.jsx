import React from "react";
import FetchData from "./FetchData";
import AutoIncrementCounter from "./AutoIncrementCounter";
import InputTracker from "./InputTracker";
import WindowResize from "./WindowResize";
import ClickAlert from "./ClickAlert";
import DataFetchWithCleanup from "./DataFetchWithCleanup";
import Timer from "./Timer";
import Counter from "./Counter";
import TitleUpdater from "./TitleUpdater";
import ToggleParagraph from "./ToggleParagraph";

function App() {
  return (
    <div>
      <h1>React Hooks Exercises</h1>

      <section>
        <h2>1. Fetch Data and Log to Console</h2>
        <FetchData />
      </section>

      <section>
        <h2>2. Auto-Increment Counter</h2>
        <AutoIncrementCounter />
      </section>

      <section>
        <h2>3. Input Tracker</h2>
        <InputTracker />
      </section>

      <section>
        <h2>4. Window Resize Event</h2>
        <WindowResize />
      </section>

      <section>
        <h2>5. Button Click Alert</h2>
        <ClickAlert />
      </section>

      <section>
        <h2>6. Data Fetch with Cleanup</h2>
        <DataFetchWithCleanup />
      </section>

      <section>
        <h2>7. Timer with Start/Stop</h2>
        <Timer />
      </section>

      <section>
        <h2>8. Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>9. Title Updater</h2>
        <TitleUpdater />
      </section>

      <section>
        <h2>10. Toggle Paragraph</h2>
        <ToggleParagraph />
      </section>
    </div>
  );
}

export default App;
