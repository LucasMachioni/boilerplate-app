import { NavigationContainer } from "@react-navigation/native";
import { InicialStackRoutes } from "./stack.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <InicialStackRoutes />
    </NavigationContainer>
  );
}
