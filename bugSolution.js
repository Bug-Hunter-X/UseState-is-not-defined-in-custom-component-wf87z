```javascript
// pages/index.js
import MyComponent from './components/MyComponent';
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
import { useState } from 'react';
export default function MyComponent(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```