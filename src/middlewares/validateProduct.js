module.exports = (req, res, next) => {
  const { productid } = req.params;

  if (!productid) return res.status(400).json({ message: '"productid" not passed' });

  return next();
};