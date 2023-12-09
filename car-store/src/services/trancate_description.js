export const truncateAltDescription = (altDescription) => {
  const sentences = altDescription.split('.');

  return sentences[0].trim();
};