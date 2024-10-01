export const bubble = () => {
  let animation = "";

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      let random = Math.floor(Math.random() * 100);
      if (random < 50) {
        random += 50;
      }
      animation += `${random}% `;
    }
    if (i === 0) {
      animation += "/ ";
    }
  }
  return animation;
};
