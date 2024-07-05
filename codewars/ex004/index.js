function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split('')
      .map(char => {
        const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        return position >= 1 && position <= 26 ? position : '';
      })
      .filter(position => position !== '')
      .join(' ');
  }