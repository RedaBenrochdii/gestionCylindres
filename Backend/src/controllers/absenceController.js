const Absence = require('../models/absence');

exports.createAbsence = async (req, res) => {
  try {
    const absence = new Absence(req.body);
    await absence.save();
    res.status(201).json(absence);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllAbsences = async (req, res) => {
  try {
    const absences = await Absence.find();
    res.status(200).json(absences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAbsenceById = async (req, res) => {
  try {
    const absence = await Absence.findById(req.params.id);
    if (!absence) return res.status(404).json({ error: 'Absence not found' });
    res.status(200).json(absence);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAbsence = async (req, res) => {
  try {
    const absence = await Absence.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!absence) return res.status(404).json({ error: 'Absence not found' });
    res.status(200).json(absence);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteAbsence = async (req, res) => {
  try {
    const absence = await Absence.findByIdAndDelete(req.params.id);
    if (!absence) return res.status(404).json({ error: 'Absence not found' });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
