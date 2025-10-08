const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Get all payments (order history)
app.get('/api/payments', async (req, res) => {
  try {
    const payments = await Payment.find();
    res.send(payments);
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sweetshop', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const paymentSchema = new mongoose.Schema({
  username: String,
  name: String,
  amount: Number,
  totalItems: Number,
  paymentMethod: String,
  items: Array, // Store cart items
  date: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

app.post('/api/payment', async (req, res) => {
  const { password, username, name, amount, totalItems, paymentMethod, items } = req.body;
  console.log('Received password:', password); // Debug line
  if (password !== '1234') {
    return res.status(401).send({ success: false, message: 'Unauthorized: Incorrect password' });
  }
  try {
    const payment = new Payment({ username, name, amount, totalItems, paymentMethod, items });
    await payment.save();
    res.send({ success: true, message: 'Payment successful' });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));