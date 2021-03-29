const { checkExistColumn, checkDiagnosis, checkDiseases } = require('../index')
const { sectionIdentity, sectionInfo, sectionClinic } = require('./export_case_section')

const caseOutput = (this_) => ({
  'Kode Kasus': checkExistColumn(this_.id),
  ...sectionIdentity(this_),
  ...sectionInfo(this_),
  ...checkDiagnosis(this_.diagnosis),
  'Gejala Lainnya': checkExistColumn(this_.diagnosis_other),
  ...checkDiseases(this_.diseases),
  ...sectionClinic(this_)
})

module.exports = {
  caseOutput
}
