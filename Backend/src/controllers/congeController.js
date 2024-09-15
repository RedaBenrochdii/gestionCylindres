const Conge = require('../models/conge');

exports.createConge = async (req, res) => {
  try {
    const conge = new Conge(req.body);
    await conge.save();
    res.status(201).json(conge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllConges = async (req, res) => {
  try {
    const conges = await Conge.find();
    res.status(200).json(conges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCongeById = async (req, res) => {
  try {
    const conge = await Conge.findById(req.params.id);
    if (!conge) return res.status(404).json({ error: 'Conge not found' });
    res.status(200).json(conge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConge = async (req, res) => {
  try {
    const conge = await Conge.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!conge) return res.status(404).json({ error: 'Conge not found' });
    res.status(200).json(conge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteConge = async (req, res) => {
  try {
    const conge = await Conge.findByIdAndDelete(req.params.id);
    if (!conge) return res.status(404).json({ error: 'Conge not found' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
