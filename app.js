const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

const connection = require('./db/connection');

const User = require('./models/User');
const Item = require('./models/Item');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);

connection.then(() => {
  const server = app.listen(app.settings.port, () => {
    console.log("Connected and listening")
  })
})

// Creates a new user if the user isnt already in the database
app.post('/users', async (req, res, next) => {

  const email = req.body.user.email;

  let user = await User.findOne(email);

  if (!user) {
    user = new User(email);

    user.save()
      .then(() => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).send("There was a problem completing your request!");
      });
  }
});

//Post a new item for sale
app.post('/items', async (req, res) => {
  const name = req.body.item.name.name;
  const category = req.body.item.category.category;
  const contact = req.body.item.contact.contact;
  const price = req.body.item.price.price;

  const email = req.body.email;

  let user = await User.findOne({ email });
  let newItem = new Item({ name, category, contact, price });

  if (!user) {
    return res.status(400).json({ error: "User does not exist" });
  } else {
    newItem.save()
      .then(() => {
        user.items.push(newItem._id);
        user.save()
          .then(() => {
            res.status(201).send(newItem);
          })
      })
  }
});

app.get('/items', (req, res) => {
  Item.find().exec()
    .then(result => {
      if (result.length != 0) {
        res.send(result);
      } else {
        res.status(404).send("There are no items to be displayed!");
      }
    })
    .catch(error => { res.status(500).send(error) });
});
