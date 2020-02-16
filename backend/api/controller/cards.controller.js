const cardService = require("../service/cards.service");
module.exports = {
  async find(req, res) {
    let result = await cardService.find();
    res.send(result);
  },
  async findById(req, res) {
    let id = req.params.id;
    let result = await cardService.findById(id);
    res.send(result);
  },
  async create(req, res) {
    let result = await cardService.create(req.body);
    res.send(result);
  },
  async update(req, res) {
    let id = req.body._id;
    let result = await cardService.update(req.body, id);
    res.send(result);
  },
  async delete(req, res) {
    let id = req.params.id;
    let result = await cardService.delete(id);
    res.send(result);
  }
};
