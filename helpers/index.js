const moment = require('moment')
const {
  STATUS_PASIEN, KRITERIA, JAWABAN, FISIK, PENGHASILAN,
  DIAGNOSIS, DISEASES, CRITERIA
} = require('../utils/constants/label_id')

const convertDate = (dates) => moment(dates).format('YYYY/MM/DD')

const patientStatus = (params) => {
  let finalResult
  switch (params) {
    case '1':
      finalResult = STATUS_PASIEN.SELESAI
      break
    case '2':
      finalResult = STATUS_PASIEN.MENINGGAL
      break
    case '3':
      finalResult = STATUS_PASIEN.DISCARDED
      break
    case '4':
      finalResult = STATUS_PASIEN.SAKIT
      break
    case '5':
      finalResult = STATUS_PASIEN.KARANTINA
      break
    default:
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

const locationPatient = (location, locationName) => {
  const result = {}

  if (location === 'RS') {
    result.bool = JAWABAN.YA
    result.location_name = locationName
  } else {
    result.bool = JAWABAN.TIDAK
    result.location_name = ''
  }
  return result
}

const convertYesOrNO = (param) => {
  let result
  if (param === 1) {
    result = JAWABAN.YA
  } else if (param === 2) {
    result = JAWABAN.TIDAK
  } else if (param === 3) {
    result = JAWABAN.TIDAK_TAHU
  } else {
    result = ''
  }

  return result
}

const yesOrNoBool = (param) => {
  let result
  if (param) {
    result = JAWABAN.YA
  } else {
    result = JAWABAN.TIDAK
  }

  return result
}

const convertPysichal = (param) => {
  let result
  switch (param) {
    case 0: result = FISIK.SEDENTER; break;
    case 1: result = FISIK.KURANG; break;
    case 2: result = FISIK.LEBIH; break;
    default: result = '';
  }

  return result
}

const convertIncome = (param) => {
  let result
  switch (param) {
    case 0: result = PENGHASILAN.TIDAK; break;
    case 1: result = PENGHASILAN.KECIL; break;
    case 2: result = PENGHASILAN.SATU_TIGA; break;
    case 3: result = PENGHASILAN.TIGA_LIMA; break;
    case 4: result = PENGHASILAN.BESAR_LIMA; break;
    default: result = '';
  }

  return result
}

const checkDiagnosis = (data) => ({
  Demam: yesOrNoBool(data.includes(DIAGNOSIS.FEVER)),
  Batuk: yesOrNoBool(data.includes(DIAGNOSIS.COUGH)),
  Pilek: yesOrNoBool(data.includes(DIAGNOSIS.FLU)),
  'Sakit Tenggorokan': yesOrNoBool(data.includes(DIAGNOSIS.SORE_THROAT)),
  'Sakit Kepala': yesOrNoBool(data.includes(DIAGNOSIS.HEADACHE)),
  'Sesak Napas': yesOrNoBool(data.includes(DIAGNOSIS.BLOWN)),
  Menggigil: yesOrNoBool(data.includes(DIAGNOSIS.SHIVER)),
  'Lemah (malaise)': yesOrNoBool(data.includes(DIAGNOSIS.WEAK)),
  'Nyeri Otot': yesOrNoBool(data.includes(DIAGNOSIS.MUSCLE_ACHE)),
  'Mual atau Muntah': yesOrNoBool(data.includes(DIAGNOSIS.NAUSEA)),
  'Nyeri Abdomen': yesOrNoBool(data.includes(DIAGNOSIS.ABDOMENT_PAIN)),
  Diare: yesOrNoBool(data.includes(DIAGNOSIS.DIARRHEA))
})

const checkDiseases = (data) => ({
  Hamil: yesOrNoBool(data.includes(DISEASES.PREGNANT)),
  Diabetes: yesOrNoBool(data.includes(DISEASES.DIABETES)),
  'Penyakit Jantung': yesOrNoBool(data.includes(DISEASES.HEART_DISEASE)),
  Hipertensi: yesOrNoBool(data.includes(DISEASES.HYPERTENSION)),
  Keganasan: yesOrNoBool(data.includes(DISEASES.MALIGNANCY)),
  'Gangguan Imunologi': yesOrNoBool(data.includes(DISEASES.IMMUNOLOGICAL_DISORDERS)),
  'Gagal Ginjal Kronis': yesOrNoBool(data.includes(DISEASES.CHRONIC_KIDNEY_FAILURE)),
  'Gagal Hati Kronis': yesOrNoBool(data.includes(DISEASES.CHRONIC_HEART_FAILURE)),
  PPOK: yesOrNoBool(data.includes(DISEASES.PPOK))
})

const checkExistColumn = (param) => (param || '')

module.exports = {
  convertDate,
  patientStatus,
  criteriaConvert,
  checkExistColumn,
  locationPatient,
  convertYesOrNO,
  yesOrNoBool,
  convertPysichal,
  convertIncome,
  checkDiagnosis,
  checkDiseases
}
