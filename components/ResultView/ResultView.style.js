import { Dimensions } from 'react-native';

const style = {
  background: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    bottom: 8,
  },
  savedView: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    top: 8,
    right: 8,
  },
};

export default style;
