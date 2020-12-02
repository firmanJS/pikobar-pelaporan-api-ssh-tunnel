const moment = require('moment')
const { STATUS_PASIEN, KRITERIA } = require('../utils/constants/label_id')
const { CRITERIA } = require('../utils/constants/label_en')

const convertDate = (dates) => moment(dates).format('YYYY/MM/DD')

const patientStatus = (params) => {
  let finalResult
  if (params === '1') {
    finalResult = STATUS_PASIEN.SELESAI
  } else if (params === '2') {
    finalResult = STATUS_PASIEN.MENINGGAL
  } else if (params === '3') {
    finalResult = STATUS_PASIEN.DISCARDED
  } else if (params === '4') {
    finalResult = STATUS_PASIEN.SAKIT
  } else if (params === '5') {
    finalResult = STATUS_PASIEN.KARANTINA
  } else {
    finalResult = STATUS_PASIEN.NEGATIF
  }

  return finalResult
}

const criteriaConvert = (status) => {
  let criteria
  if (status === CRITERIA.CONF) {
    criteria = KRITERIA.CONF
  } else if (status === CRITERIA.PROB) {
    criteria = KRITERIA.PROB
  } else if (status === CRITERIA.SUS) {
    criteria = KRITERIA.SUS
  } else if (status === CRITERIA.CLOSE) {
    criteria = KRITERIA.CLOSE
  } else {
    criteria = ''
  }

  return criteria
}

const checkExistColumn = (param) => (param || '')

module.exports = {
  convertDate, patientStatus, criteriaConvert, checkExistColumn
}
