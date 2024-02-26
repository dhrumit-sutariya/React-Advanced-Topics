import React, { useState, Suspense } from "react";

function AvoidingFallbacks() {
  const [tab, setTab] = useState("Comments");

  function handleTabSelect(tab) {
    setTab(tab);
  }

  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        {tab === "photos" ? <h1>Photos</h1> : <h1>Comments</h1>}
      </Suspense>
    </div>
  );
}

export default AvoidingFallbacks;
