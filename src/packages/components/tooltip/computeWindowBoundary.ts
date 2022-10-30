/**
 * Calculates and define the boundary limits where the elemenent cannot go outside.
 *
 * @param {number} offset - The distance or margin between the reference and the floating element.
 * @param {any} floatingElement - The React component to use as the trigger or reference for the tooltip.
 * @returns {object}
 *
 * window.innerHeight/Width: returns the interior height of the window in pixels,
 * including the height of the horizontal/vertical scroll bar, if present.
 *
 * @ Element.clientWidth/Height: it's the inner width/height of an element in pixels.
 * It includes padding but excludes borders, margins, and vertical scrollbars (if present).
 */

export const computeWindowBoundary = (offset: number, floatingElement: any): object => {
  return {
    left: offset,
    top: offset,
    right: document.body.clientWidth - (floatingElement.clientWidth + offset),
    bottom: window.innerHeight - (floatingElement.clientHeight + offset),
  }
}
