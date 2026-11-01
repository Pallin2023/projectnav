
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash() {

  useEffect(() => {

    const tiempo = setTimeout(() => {
      router.replace('/(drawer)/inicio');
    }, 10000);

    return () => clearTimeout(tiempo);

  }, []);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        TECNOLOGÍA ZERO
      </Text>

      <Text style={styles.texto}>
        Cargando aplicación...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0868D8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  texto: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 20
  }
});
