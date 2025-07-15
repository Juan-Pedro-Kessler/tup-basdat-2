const Matricula = require('../models/matricula');

exports.crearMatricula = async (req, res) => {
  try {
    const nueva = new Matricula(req.body);
    await nueva.save();
    res.status(201).json(nueva);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear matrícula' });
  }
};

exports.obtenerMatriculas = async (req, res) => {
  const matriculas = await Matricula.find();
  res.json(matriculas);
};

exports.obtenerMatricula = async (req, res) => {
  const matricula = await Matricula.findById(req.params.id);
  matricula ? res.json(matricula) : res.status(404).json({ error: 'No encontrada' });
};

exports.actualizarMatricula = async (req, res) => {
  const actualizada = await Matricula.findByIdAndUpdate(req.params.id, req.body, { new: true });
  actualizada ? res.json(actualizada) : res.status(404).json({ error: 'No encontrada' });
};

exports.eliminarMatricula = async (req, res) => {
  const eliminada = await Matricula.findByIdAndDelete(req.params.id);
  eliminada ? res.json({ msg: 'Eliminada' }) : res.status(404).json({ error: 'No encontrada' });
};
