export default function createInputEvent() {
  if (typeof window.InputEvent === 'function') {
    return new window.InputEvent('input', {
      bubbles: true,
      composed: true,
    });
  }

  const event = document.createEvent('Event');
  event.initEvent('input', true, true);

  return event;
}
