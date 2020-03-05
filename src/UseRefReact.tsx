import * as React from "react";
import "./styles.css";

function setWindowRef<T>(ref: React.RefObject<T>) {
  (window as any).ref = ref;
}

function getWindowRef<T>() {
  return (window as any).ref;
}
export default function UseRefReact() {
  const [renders, setValue] = React.useState(1);
  const ref = React.useRef(null);
  // const ref = { current: null };
  setTimeout(() => {
    setWindowRef<HTMLDivElement>(ref);
  });
  return (
    <div className="UseRefReact">
      <div>UseRef with React.useRef(null)</div>
      <button onClick={e => setValue(renders + 1)}> Rerender </button>
      <div ref={ref}>Renders {renders}</div>
      <div>
        {" "}
        {getWindowRef() === ref ? "same ref object" : "ref not set yet"}{" "}
      </div>
    </div>
  );
}
