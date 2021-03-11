const Expenses = require('../model/expenses.model')
const Space =require('../model/space.model')



exports.createExpenses =async (req,res) =>{
  try {
    const { name, price, space, type } = req.body;
    const {spaceId} = req.params
    const newExpense = await Expenses.create({
      name,
      price,
      space: spaceId,
      type
    });
    const updateSpace = await Space.findByIdAndUpdate(
      spaceId, 
      {$addToSet:{expenses: newExpense._id}},
      {new:true}
      )
    res.status(200).json({ message: "Creada con exito", newExpense });
  } catch (e) {
  console.error(e)
  }
}
exports.getExpenses = async (req, res) =>{
  try {
    const { spaceId } = req.params;

    const recibos = await Expenses.find({$and: [{space: { $in: spaceId }}, {type:'Recibos'} ]});
    const otros = await Expenses.find({$and: [{space: { $in: spaceId }}, {type:'Otros'} ]});

    // const taskByUser = await Task.find({
    //   $and: [{ space: { $in: spaceId } }, { asignedTo: req.session.userId }],
    // });
    res.status(200).json({ recibos, otros });

  } catch (e) {
  console.error(e)
  }
}