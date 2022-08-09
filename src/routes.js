const { init } = require('rajaongkir-node-js');
const express = require('express');
const router = express.Router();

const request = init(process.env.API_KEY, 'starter');

router.get('/provinsi', (req, res) => {
  const province = request.get('/province');
  province.then((prov) => {
    const js = JSON.parse(prov);
    res.send(js);
  });
});

router.get('/kota/:id', (req, res) => {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);
  allCityInProvince.then((city) => {
    const citi = JSON.parse(city);
    res.send(citi);
  });
});

router.post('/ongkir', (req, res) => {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier, // can request other courier
  };
  const cost = request.post('cost', data);
  cost.then((cst) => {
    res.send(cst);
  });
});

module.exports = router;
