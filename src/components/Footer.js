/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect, useState } from '../framework';

export default function Footer() {
  return (
    <footer className={`footer mt-auto text-center pt-5`}>
      <span className={`text-light`}>Powered by GIPHY</span>
    </footer>
  );
}
