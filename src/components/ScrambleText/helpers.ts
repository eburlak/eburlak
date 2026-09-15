const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\[]{}#$%&*+=-_';

export function getScrambledText(text: string, revealedCount: number) {
  return text
    .split('')
    .map((character, index) => {
      if (index < revealedCount || character === ' ') {
        return character;
      }
      return glyphs[Math.floor(Math.random() * glyphs.length)];
    })
    .join('');
}
