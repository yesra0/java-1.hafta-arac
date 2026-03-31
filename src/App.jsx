import './App.css'; // CSS dosyamızı bağlıyoruz

function App() {
  // Ödevdeki Nesne
  const araba = {
    marka: "Porsche",
    model: "911 S",
    yil: 1964,
    motorGucu: "711 HP"
  };

  // Ödevdeki Destructuring (Parçalama)
  const { marka, model, yil, motorGucu } = araba;

  return (
    <div className="container">
      <div className="araba-kart">
        <h2> Araç Detayları</h2>
        <hr />
        <p>
          Marka ve Model: <strong>{marka} {model}</strong>
        </p>
        <p>
          Üretim Yılı: <strong>{yil}</strong>
        </p>
        <p>
          Performans: <span className="vurgu">{motorGucu}</span>
        </p>
        
        {/* Template Literals örneği */}
        <div className="ozet-metin">
          {`Bu ${marka}, ${yil} yılında üretilmiş en iyi versiyondur.`}
        </div>
      </div>
    </div>
  );
}

export default App;