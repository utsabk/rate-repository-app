import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#FFFFFF',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    heading:24,
    subheading: 16,
  },
  fonts: {
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  paddings:{
      mid:5
  }
};

export default theme;
