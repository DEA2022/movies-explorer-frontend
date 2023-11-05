function getCardsInfoBySize(size) {
  if (size >= 1280) {
    return { newCards: 3, initCards: 12 }
  }

  if (size >= 768 && size < 1280) {
    return { newCards: 2, initCards: 8 }
  }

  return { newCards: 2, initCards: 5 }
}

export default getCardsInfoBySize