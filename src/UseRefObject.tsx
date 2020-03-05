import * as React from "react";
import "./styles.css";

function setWindowObjectRef<T>(ref: React.RefObject<T>) {
  (window as any).objectRef = ref;
}

function getWindowRef<T>() {
  return (window as any).objectRef;
}
export default function UseRefObject() {
  const [renders, setValue] = React.useState(1);
  const ref = { current: null };

  setTimeout(() => {
    setWindowObjectRef<HTMLDivElement>(ref);
  });
  return (
    <div className="UseRefObject">
      <div>UseRef with {`{ current: null }`}</div>
      <button onClick={e => setValue(renders + 1)}> Rerender </button>
      <div ref={ref}>Renders {renders}</div>
      <div>
        {" "}
        {getWindowRef() === ref ? "same ref object" : "ref object changed"}{" "}
      </div>
    </div>
  );
}
