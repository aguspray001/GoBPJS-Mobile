const mainColors = {
  green1: '#3a931a',
  green2: '#579b11',
  green3: '#a5fb1c',
  green4: '#d5e8a8',
  dark1: '#3c484a',
  dark2: '#495a75',
  dark3: '#8092AF',
  grey1: '#a5a5a5',
  white1: '#f6f6f7',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.green2,
  white: 'white',
  black: 'black',
  background: mainColors.white1,
  disable: mainColors.grey1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
};
