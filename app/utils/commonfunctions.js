export const getTypeColor = type => {
  switch (type.toLowerCase()) {
    case 'open':
      return { color: '#FFBF00' };
    case 'completed':
      return { color: '#228B22' };
    default:
      return { color: '#EE4B2B' };
  }
};
