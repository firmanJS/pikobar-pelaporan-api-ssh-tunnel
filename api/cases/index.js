const Case = require('../../models/Case')
const { errorResponse } = require('../../utils/exceptions')
const { sqlCondition, sqlCase } = require('../../helpers/aggregate')
const { excellOutput } = require('../../helpers/maping/export_wait')
const { caseOutput } = require('../../helpers/maping/export_case')

const exportWaitAndRejectCase = async (req, res) => {
  try {
    const code = req.query.city
    const result = await Case.aggregate(sqlCondition(code))
    const data = result.map((r) => excellOutput(r))
    if (data.length > 0) {
      res.xls('data.xlsx', data)
    } else {
      res.json({ data: 'not available' })
    }
  } catch (error) {
    errorResponse(res, error, 402)
  }
}

const exportCase = async (req, res) => {
  try {
    const param = {
      author_district_code: req.query.city,
      delete_status: {
        $ne: 'deleted'
      },
      status: req.query.status,
      verified_status: 'verified',
      is_west_java: {
        $ne: false
      },
      last_history: {
        $exists: true,
        $ne: null
      }
    }
    const result = await Case.aggregate(sqlCase(param))
    const data = result.map((r) => caseOutput(r))
    res.xls('data.xlsx', data)
  } catch (error) {
    errorResponse(res, error, 402)
  }
}

module.exports = {
  exportWaitAndRejectCase, exportCase
}
