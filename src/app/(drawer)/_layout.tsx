
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="inicio"
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio'
        }}
      />

      <Drawer.Screen
        name="explore"
        options={{
          drawerLabel: 'Nosotros',
          title: 'Nosotros'
        }}
      />
    </Drawer>
  );
}
