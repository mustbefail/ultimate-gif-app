let Component, Target;

export default function renderApp(componentFunction, targetComponentId) {
  if (componentFunction) Component = componentFunction;
  if (targetComponentId) Target = targetComponentId;

  document.getElementById(Target).innerHTML = `${Component()}`;
}
