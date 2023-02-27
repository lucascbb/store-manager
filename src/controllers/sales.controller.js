const salesService = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const listSalesID = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const addSales = async (req, res) => {
  const newSales = req.body;

  const { type, message } = await salesService.createSales(newSales);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const updatedSales = async (req, res) => {
  const { id } = req.params;
  const newUpdateSales = req.body;
  
  const { type, message } = await salesService.getUpdateSales(id, newUpdateSales);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesService.getDeleteSales(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json();
};

module.exports = {
  listSales,
  listSalesID,
  addSales,
  updatedSales,
  deleteSales,
};