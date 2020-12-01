const Case = require('../../models/Case')
const { errorResponse } = require('../../utils/exceptions')
const { sqlCondition } = require('../../helpers/aggregate/waiting')
const { excellOutput } = require('../../helpers/maping/export_wait')

const exportWaitAndRejectCase = async (req, res) => {
  try {
    const code = req.query.city
    const result = await Case.aggregate(sqlCondition(code))
    const data = result.map((r) => excellOutput(r))
    res.xls('data.xlsx', data);
  } catch (error) {
    errorResponse(res, error, 402)
  }
}

module.exports = {
  exportWaitAndRejectCase
}
