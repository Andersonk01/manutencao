import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 60000) // Atualiza a cada minuto

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="icon">🛠️</div>
        <h1>Sistema em Manutenção</h1>
        <p>
          Estamos realizando uma manutenção programada para melhorar nossos
          serviços.
        </p>
        <p className="time-left">
          Tempo estimado: <strong>{timeLeft} minutos</strong>
        </p>
        <div className="additional-info">
          <p>Agradecemos sua compreensão!</p>
          <p>Voltaremos em breve.</p>
        </div>
      </div>
    </div>
  )
}

export default App
