import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000) // Atualiza a cada segundo

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

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
          {timeLeft > 0 ? (
            <>
              Tempo estimado: <strong>{formatTime(timeLeft)}</strong>
            </>
          ) : (
            <strong>Aguarde...</strong>
          )}
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
