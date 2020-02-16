const { cards } = require("../model/cards.model");

module.exports = {
  async findById(id) {
    return await cards.findOne({ _id: id });
  },
  async find() {
    return await cards.find({ active: true });
  },
  async create(newCard) {
    return await cards.create(newCard);
  },
  async update(updateCard, id) {
    return await cards.update({ _id: id }, updateCard);
  },
  async delete(id) {
    return await cards.update({ _id: id }, { active: false });
  }
};
