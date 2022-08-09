const { init } = require('rajaongkir-node-js');
const express = require('express');
const router = express.Router();

const requestApi = init(process.env.API_KEY, 'starter');

router.get('/province', (req, res) => {
  const province = requestApi.get('/province');
  province.then((prov) => {
    const js = JSON.parse(prov);
    res.send(js);
  });
});

router.get('/city/:id', (req, res) => {
  const allCity = requestApi.get(`/city?&province=${req.params.id}`);
  allCity.then((city) => {
    const data = JSON.parse(city);
    res.send(data);
  });
});

router.post('/cost', function (req, res) {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier,
  };
  const cost = requestApi.post('cost', data);
  cost.then((cst) => {
    res.send(cst);
  });
});

module.exports = router;
