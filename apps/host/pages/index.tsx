import React, { Suspense } from "react"
import Counter from "remote/counter"

export function Index() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={"loading..."}>
        <Counter />
      </Suspense>
    </div>
  );
}

export default Index;

