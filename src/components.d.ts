/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { Voice2Text as StVoice2text } from './components/st-voice2text/st-voice2text';

interface HTMLStVoice2textElement extends StVoice2text, HTMLElement {
}
declare var HTMLStVoice2textElement: {
  prototype: HTMLStVoice2textElement;
  new (): HTMLStVoice2textElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "st-voice2text": HTMLStVoice2textElement;
  }
  interface ElementTagNameMap {
      "st-voice2text": HTMLStVoice2textElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "st-voice2text": JSXElements.StVoice2textAttributes;
      }
  }
  namespace JSXElements {
      export interface StVoice2textAttributes extends HTMLAttributes {
        
          lang?: any
      }
  }
}
