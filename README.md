This code project implements a counter in React with intentional mistakes 
related to useMemo and useCallback hooks. Fixing these mistakes will provide
valuable practice for properly memoizing values and callbacks to optimize component performance.

Mistake 1: squaredCount should depend on [count]
Fix: The dependency array is currently empty [].
Update it to [count], this will cause squaredCount to recompute only when count changes.

Mistake 2: cubedCount should use useMemo
Fix: Declaring cubedCount without useMemo causes it to recompute on every render.
Wrap it in a useMemo.

Mistake 3: useEffect should depend on [squaredCount]
Fix: The dependency array is currently [count].
Update it to [squaredCount] so the effect runs when squaredCount changes.

Mistake 4: squaredCount should not be rendered conditionally
Fix: Conditionally rendering cubedCount negates the benefit of useMemo.
Remove the condition and just render it unconditionally.

Mistake 5: Missing key prop on the div element
Fix: The div wrapping the JSX needs a unique key prop.
Add key={count} so React can optimize rendering.

Mistake 6: useMemo and usecallback should be imported from React
Fix: useMemo and usecallback are used but not imported.
Import it with import { useMemo, useCallback } from 'react'.

Mistake 7: Arithmetic operations could overflow
Fix: Large numbers may cause overflow issues.
Use Math.pow instead of manual multiplication.

Mistake 8: increment function could be memoized
Fix: increment function recreates the callback each render.
Wrap in useCallback to memoize it.

Mistake 9: Components should be named properly
Fix: App component should be PascalCase.
Rename it to AppComponent.

Mistake 10: App component is not optimized with React.memo
Fix: Wrap AppComponent in React.memo to optimize performance.
This will memoize the component unless count changes.
