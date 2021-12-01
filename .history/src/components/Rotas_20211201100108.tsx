import { Route, Switch } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { AdminRoom } from "../pages/AdminRoom";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";
import { Room } from "../pages/Room";

export function Rotas(){
  const {user, signInWithGoogle} = useAuth();

  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route
        path="/admin/rooms/:id"
        render={true ?
          AdminRoom :
          Room
      }/>
    </Switch>
  );
}