let Controller = require("egg").Controller;
module.exports = class Base extends Controller {
  async url() {
    let dbData = await this.ctx.model.Base.findOne({ "_id": "5e18227d1929581990e3ac94" });
    this.ctx.body = dbData;
  }
  async base() {
    this.ctx.body = "请输入正确的地址!!!";
    this.ctx.status = 200;
  }
}