import * as React from 'react';
import { useRef, useEffect, Children } from 'react';
import Bricks from 'bricks.js';

export default function MasonryLayout({ children }) {
  const sizes = [
    { columns: 1, imageWidth: 200, gutter: 5 },
    { mq: '768px', columns: 3, gutter: 5 },
    { mq: '1024px', columns: 4, gutter: 5 },
  ];
  const container = useRef(null);

  useEffect(() => {
    const bricks = Bricks({
      container: container.current,
      packed: 'packed',
      sizes,
      position: true,
    });

    bricks.resize(true);

    if (Children.count(children) > 0) {
      bricks.pack();
    }
  }, [children]);

  return (
    <div className={`d-flex justify-content-center`}>
      <div ref={container} data-testid="MasonryLayoutContainer">
        {children}
      </div>
    </div>
  );
}
