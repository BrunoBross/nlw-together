import { Button } from "./Button";
import { RoomCode } from "./RoomCode";
import logoImg from '../assets/images/logo.svg'

type HeaderProps = {
  roomId: string,
  admin: boolean,
  goHome(): void,
  handleEndRoom(): void,
  endedAt: string,
}

export function Header({
  roomId,
  admin,
  goHome,
  handleEndRoom,
  endedAt
}: HeaderProps){

  function myFunction(){
    let x = document.querySelector("#myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return(
    <header>
        <div className="content topnav" id="myTopnav">
          <a href="https://www.rocketseat.com.br/"><img src={logoImg} alt="Letmeask" /></a>
          <RoomCode code={roomId}/>
          {admin && (
            <Button isOutlined id="isAdmin">Admin</Button>
          )}
          <Button isOutlined onClick={goHome}>Voltar ao Inicio</Button>
          {admin && !endedAt&& (
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          )}
          <a href="" className="icon" onClick={() => myFunction()}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
    </header>
  );
}