'use client';

import { useState, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

export default function StyledJsxRegistry({ children }) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  // ✅ Add smooth scrolling behavior globally (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
