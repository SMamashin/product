import React, { createElement as element, useState } from 'react';

function App() {
  const [ctx, setCount] = useState(0)
  return element('div', {className: 'container'}, [
    element('h1', {className: 'title', key: 1}, `Count: ${ctx}`,
    element('button', {className: 'py-2 px-2 border display block',
      key: 2,
      onClick: () => setCount(ctx + 1)},
      'click'))
])

}
