import React, { useState, Suspense } from "react";

const ImportDemo = React.lazy(() => import("./ImportDemo"));

function ReactLazyDemo() {
  const [showComponent, setShowComponent] = useState(false);

  setTimeout(() => {
    setShowComponent(true);
  }, 3000);

  return (
    <div>
      <h1>React lazy</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        {showComponent && <ImportDemo />}
      </Suspense>
    </div>
  );
}

export default ReactLazyDemo;
