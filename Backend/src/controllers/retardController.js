const Retard = require('../models/retard');

exports.createRetard = async (req, res) => {
  try {
    const retard = new Retard(req.body);
    await retard.save();
    res.status(201).json(retard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllRetards = async (req, res) => {
  try {
    const retards = await Retard.find();
    res.status(200).json(retards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRetardById = async (req, res) => {
  try {
    const retard = await Retard.findById(req.params.id);
    if (!retard) return res.status(404).json({ error: 'Retard not found' });
    res.status(200).json(retard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRetard = async (req, res) => {
  try {
    const retard = await Retard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!retard) return res.status(404).json({ error: 'Retard not found' });
    res.status(200).json(retard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteRetard = async (req, res) => {
  try {
    const retard = await Retard.findByIdAndDelete(req.params.id);
    if (!retard) return res.status(404).json({ error: 'Retard not found' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
