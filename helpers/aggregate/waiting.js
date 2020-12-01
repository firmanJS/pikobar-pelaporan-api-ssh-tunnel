const { author, histories } = require('../lookup')
const { columnInfo, columnIdentity, columnAuthor } = require('../column/case')

const sqlCondition = (code) => [
  {
    $match: {
      $and: [{
        address_district_code: code,
        delete_status: { $ne: 'deleted' },
        verified_status: { $in: ['pending', 'declined'] }
      }]
    }
  },
  { ...author }, { ...histories },
  { $unwind: '$author_list' },
  { $unwind: '$history_list' },
  {
    $project: {
      ...columnInfo,
      ...columnIdentity,
      ...columnAuthor
    }
  }
]

module.exports = {
  sqlCondition
}
