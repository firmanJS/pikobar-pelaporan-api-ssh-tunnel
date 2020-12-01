const columnInfo = {
  _id: 1,
  id: '$id_case',
  name: '$name',
  nik: '$nik',
  phone_number: '$phone_number',
  name_parents: '$name_parents',
  place_of_birth: '$place_of_birth',
  birth_date: '$birth_date',
  age: '$age',
  month: '$month',
  gender: '$gender',
  address_district_name: '$address_district_name',
  address_subdistrict_name: '$address_subdistrict_name',
  address_village_name: '$address_village_name',
  address_street: '$address_street',
  rt: '$rt',
  rw: '$rw',
  occupation: '$occupation',
}

const columnIdentity = {
  office_address: '$office_address',
  verified_status: '$verified_status',
  nationality: '$nationality',
  nationality_name: '$nationality_name',
  status: '$status',
  final_result: '$final_result',
  there_are_symptoms: '$there_are_symptoms',
  last_date_status_patient: '$last_date_status_patient',
  current_location_type: '$history_list.current_location_type',
  current_location_address: '$history_list.current_location_address',
  first_symptom_date: '$history_list.first_symptom_date',
  diagnosis: '$history_list.diagnosis',
  diseases: '$history_list.diseases',
}

const columnAuthor = {
  createdAt: '$createdAt',
  updatedAt: '$updatedAt',
  author: '$author_list.fullname',
}

module.exports = {
  columnIdentity, columnInfo, columnAuthor,
}
