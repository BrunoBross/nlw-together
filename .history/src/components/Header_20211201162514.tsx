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

  return(
    <header>
        <div className="content">
          <a href="https://www.rocketseat.com.br/"><img src={logoImg} alt="Letmeask" /></a>
          <div>
            <RoomCode code={roomId}/>
            {admin && (
                <Button isOutlined id="isAdmin">Admin</Button>
              )}
          </div>
          
          <div>
            
            <Button isOutlined onClick={goHome}>Voltar ao Inicio</Button>
            {admin && !endedAt&& (
              <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
            )}
          </div>
        </div>
    </header>
  );
}