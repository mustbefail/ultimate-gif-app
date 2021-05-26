/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import { getRandomElement } from '../../utils';
export default function Gif({ gifProp }) {
  if (!gifProp) return;

  const { images, title } = gifProp;
  const { url, height, width } = images.fixed_width;
  const backgrounds = ['#eb4d4b', '#6ab04c', '#f0932b', '#f9ca24'];
  const gifContainerStyles = {
    height,
    width,
    backgroundColor: getRandomElement(backgrounds),
  };
  return (
    <div style={gifContainerStyles} className={'m-2 d-inline-flex'}>
      <img src={url} alt={title} />
    </div>
  );
}
