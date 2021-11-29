import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps){
  function copyRoomCodeToClipBoard(){
    navigator.clipboard.writeText(props.code)
    alert('Código copiado para área de transferência')
  }

  return(
    <button className="room-code" onClick={copyRoomCodeToClipBoard} title="Copiar código da sala">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>#{props.code}</span>
    </button>
  );
}