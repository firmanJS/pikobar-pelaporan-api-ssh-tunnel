const { columnInfo, columnIdentity, columnAuthor } = require('../column/case/export')
const { author, histories } = require('../lookup')

const sqlCase = (params) => [
  {
    $match: {
      $and: [params],
      // $or : searching
    }
  },
  { ...author }, { ...histories },
  { $unwind: '$author_list' }, { $unwind: '$history_list' },
  {
    $project: {
      ...columnInfo,
      ...columnIdentity,
      ...columnAuthor
    }
  }
]

module.exports = {
  sqlCase,
}
