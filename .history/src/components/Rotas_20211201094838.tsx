export function Rotas(){
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />

      <Route path="/admin/rooms/:id" component={AdminRoom}/>
    </Switch>
  );
}