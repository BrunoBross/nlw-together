import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
import logoImg from '../assets/images/logo.svg'

type HeaderProps = {
  roomId: string,
  admin: string,
  goHome(): void,
  handleEndRoom(): void,
}

export function Header({
  roomId,
  admin,
  goHome,
  handleEndRoom
}: HeaderProps){
  return(
    <header>
        <div className="content">
          <a href="https://www.rocketseat.com.br/"><img src={logoImg} alt="Letmeask" /></a>
          <div>
            <RoomCode code={roomId}/>
            {admin && (
              <Button isOutlined id="isAdmin">Admin</Button>
            )}
            <Button isOutlined onClick={goHome}>Voltar ao Inicio</Button>
            {admin && (
              <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
            )}
          </div>
        </div>
    </header>
  );
}