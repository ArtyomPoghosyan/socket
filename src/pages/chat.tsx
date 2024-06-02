import { useEffect, useState } from "react"
import { socket } from "../socket"

const socketIO = socket.connect();

export const Chat:React.FC = () => {

    const [value, setValue] = useState("")
    const [serverMes, setServerMes] = useState<string[]>([])

    const handleCloseSocket = () => {
        socketIO.close()
    }

    const handleSend = () => {
        if (value) {
            socketIO.emit("message", value)
        }
    }

    useEffect(() => {
        socketIO.on("message", (data: string) => {
            console.log(data)
            setServerMes([...serverMes, data] as string[])
        })
    }, [serverMes])

    return (
        <div>
            {serverMes.map(item => <p key={Math.random()}>{item}</p>)}
            <input type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
            <button onClick={handleSend}>Send</button>
            <button onClick={handleCloseSocket}>OnClose</button>
        </div>
    )
}