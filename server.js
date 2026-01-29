import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Заглушка для поиска участка
app.get('/api/cadastre/search', (req,res)=>{
  const number = req.query.number || '';
  res.json({
    parcel: {
      id: number,
      geometry: {
        coordinates: [[[77.07,43.24],[77.08,43.24],[77.08,43.25],[77.07,43.25],[77.07,43.24]]]
      }
    }
  });
});

// Заглушка для получения цены
app.get('/api/cadastre/price', (req,res)=>{
  const number = req.query.number || '';
  const price = Math.floor(Math.random()*5000000)+1000000;
  res.json({price});
});

// Заглушка для клика по координатам
app.get('/api/cadastre/point', (req,res)=>{
  const {lat,lng} = req.query;
  res.json({
    parcel: {
      id: `CAD-${Math.floor(lat*1000)}-${Math.floor(lng*1000)}`,
      geometry: { coordinates: [[[lng,lat],[lng+0.001,lat],[lng+0.001,lat+0.001],[lng,lat+0.001],[lng,lat]]] }
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Backend запущен на ${PORT}`));
