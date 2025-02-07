import { createTools, type Tailwindest } from "tailwindest";

type ApteanColors = 'light' | 'dark' | 'yellow-light' | 'yellow-dark' | 'coral' | 'turquoise' | 'navy';
type TailwindCustom = Tailwindest<{
  color: `aptean-${ApteanColors}`
}>;
type Tailwind = Required<TailwindCustom>;

const twc = createTools<TailwindCustom>();
const tw = String.raw.bind(String);

export { twc, tw, type Tailwind };
