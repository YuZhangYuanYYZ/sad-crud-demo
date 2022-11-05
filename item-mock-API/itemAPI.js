import { Store } from './items.js';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() == 'options') res.sendStatus(200); //让options尝试请求快速结束
  else next();
});

const store = new Store();
app.get('/items', function (req, res) {
  const items = store.get();
  res.send(items);
});

app.get('/items/:id', function (req, res) {
  const id = Number(req.params.id);
  const items = store.get();
  const item = items.filter((item) => {
    if (item.id === id) {
      return item;
    }
  });
  res.send(item);
});

app.delete('/items/:id', (req, res) => {
  console.log(req, req.params, 'req  delete item');
  const id = Number(req.params.id);
  store.delete(id);
  res.status(200).send();
});

app.put('/items/:id', (req, res) => {
  const id = Number(req.params.id);
  const newDescription = req.body.description;
  const newName = req.body.name;
  let items = store.get();
  items = items.map((item) => {
    if (item.id === id) {
      const newItem = {
        ...item,
        name: newName,
        description: newDescription,
      };
      return newItem;
    }
    return item;
  });
  const resItem = items.find((item) => item.id === id);
  if (resItem === []) {
    res.status(404).send('出错了！');
  } else {
    res.send(resItem);
  }
});

app.post('/items', (req, res) => {
  const items = store.get();
  const id = items[items.length - 1].id + 1;
  const description = req.body.description;
  const name = req.body.name;
  let newItem = {
    name: name,
    description: description,
    id: id,
  };
  store.post(newItem);
  res.send(newItem);
});

app.listen(3100, () => {
  console.log('server  start at port 3100');
});
