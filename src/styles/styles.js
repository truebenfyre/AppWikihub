// Cole aqui todo seu StyleSheet
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20
  },

  containerCenter: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },

  input: {
    width: '80%',
    backgroundColor: Colors.card,
    color: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },

  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginVertical: 20
  },

  gridItem: {
    flex: 3,
    margin: 10
  },

  placeholderImgSquare: {
    width: 80,
    height: 150,
    borderRadius: 10
  },

  gameTitleSmall: {
    color: 'white',
    fontSize: 12,
    marginTop: 9
  },

  logoIntro: {
    width: 150,
    height: 150,
    marginBottom: 40
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },

  profileName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },

  profileEmail: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 30
  },

  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25
  }

});

export default styles;