import tas from './img/tas.png'
import makas from './img/makas.png'
import kagit from './img/kagit.png'
import { useEffect, useState } from 'react'
import './app.css'



const App = () => {

  const [kullanici_secim, setkullanici_secim] = useState(null)
  const [bilgisayar_secim, setbilgisayar_secim] = useState(null)
  const [kullanici_resim,setkullanici_resim]=useState(null)
  const[bilgisayar_resim,setbilgisayar_resim]=useState(null)

  
  
  const [sonuc, setsonuc] = useState(null)
  const item = ['tas', 'kagit', 'makas']

  const handleClick = (event) => {
    setkullanici_secim(event)
    rastgele_bilgisayar_secim()
    if(event=='tas')
    {
      setkullanici_resim(tas)
    }
    else if(event=='makas'){
      setkullanici_resim(makas)
    }
    else if(event=='kagit'){
      setkullanici_resim(kagit)
    }
    

  }

  const rastgele_bilgisayar_secim = () => {
    const rastgele_secim = item[Math.floor(Math.random() * item.length)]
    if(rastgele_secim=='tas')
    {
      setbilgisayar_resim(tas)
    }
    else if(rastgele_secim=='makas'){
      setbilgisayar_resim(makas)
    }
    else if(rastgele_secim=='kagit'){
      setbilgisayar_resim(kagit)
    }
    setbilgisayar_secim(rastgele_secim)
  }

  useEffect(() => {
    {
      var sonuc=kullanici_secim + bilgisayar_secim
      
      if(sonuc=='makaskagit')
      {
        setsonuc('KAZANDIN!')
      }
      else if(sonuc=='tasmakas')
      {
        setsonuc('KAZANDIN!')
      }
      else if(sonuc=='kagittas')
      {
        setsonuc('KAZANDIN!')
      }
      else if(sonuc=='kagitmakas')
      {
        setsonuc('KAYBETTİN!')
      }
      else if(sonuc=='makastas')
      {
        setsonuc('KAYBETTİN!')
      }
      else if(sonuc=='taskagit')
      {
        setsonuc('KAYBETTİN!')
      }
      else if(sonuc=='tastas')
      {
        setsonuc('BERABERE!')
      }

      else if(sonuc=='kagitkagit')
      {
        setsonuc('BERABERE')
      }

      else if(sonuc=='makasmakas')
      {
        setsonuc('BERABERE!')
      }

    }
  }, [bilgisayar_secim, kullanici_secim])

  return (
    <div className='deneme'>
      <h1>User Item {kullanici_secim}</h1><h2> {kullanici_secim}</h2>
      <img src={kullanici_resim}></img>
      <h1>Computer Item</h1> <h2> {bilgisayar_secim}</h2>
      <img src={bilgisayar_resim }></img>
      <button key={1} onClick={() => handleClick("tas")}>
          Tas
        </button>
        <button key={2} onClick={() => handleClick("kagit")}>
          Kagit
        </button>
        <button key={3} onClick={() => handleClick("makas")}>
         Makas
        </button>
      
      <h1>{sonuc}</h1>
    </div>
  )
}

export default App
