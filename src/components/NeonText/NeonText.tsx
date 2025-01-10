import { CSSProperties } from 'react';

const FONT_SIZE = {
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
};

type FontSize = keyof typeof FONT_SIZE;

const ALIGN_MAP = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

type Align = keyof typeof ALIGN_MAP;

interface NeonTextProps {
  characters: {
    text: string;
    color: string;
  }[];
  fontSize: FontSize;
  textAlign: Align;
}

const isValidHexColor = (color: string) => {
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
  return hexColorRegex.test(color);
};

export const NeonText = ({ characters, fontSize, textAlign }: NeonTextProps) => {
  const ariaText = characters.reduce((concat, item) => concat + item.text, '');
  return (
    <div className={`flex relative neon flex-wrap ${ALIGN_MAP[textAlign]}`} aria-label={ariaText}>
      {characters.map((item, index) =>
        item.text !== ' ' ? (
          <div
            key={`${item.text}-${index}`}
            className={`neon-letter relative cursor-pointer flex justify-center items-center ${FONT_SIZE[fontSize]}`}
            style={
              {
                '--color': `${isValidHexColor(item.color) ? item.color : '#fff'}`,
              } as CSSProperties
            }
            data-text={item.text}>
            <span className={`font-bold text-transparent transition-all ${FONT_SIZE[fontSize]}`}>{item.text}</span>
          </div>
        ) : (
          <div key={index} className="w-6"></div>
        ),
      )}
    </div>
  );
};
