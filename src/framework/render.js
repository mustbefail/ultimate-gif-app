/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';
let Component, Target;

export default function renderApp(
  componentFunction = null,
  targetComponent = null,
) {
  if (componentFunction) Component = componentFunction;
  if (targetComponent) Target = targetComponent;

  Target.innerHTML = '';
  Target.appendChild(<Component />);
}
