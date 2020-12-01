const excellOutput = (this_) => ({
  'Status Verifikasi': this_.verified_status,
  'Kode Kasus': this_.id,
  Nik: this_.nik,
  'No Telepon': this_.phone_number,
  'Tempat Lahir': this_.place_of_birth,
  'Tanggal Lahir': this_.birth_date,
  'Usia Tahun': Math.floor(this_.age),
  'Usia Bulan': Math.ceil((this_.age - Math.floor(this_.age)) * 12),
  'Jenis Kelamin': this_.gender,
  'Kota/Kab': this_.address_district_name,
  Kecamatan: this_.address_subdistrict_name,
  'Kel/Desa': this_.address_village_name,
  'Alamat Lengkap (RT/RW)': this_.address_street,
  Pekerjaan: this_.occupation,
  'Alamat Kantor': this_.office_address,
  Kewarganegaraan: this_.nationality,
  Kriteria: this_.status,
  'Status Pasien Terakhir': this_.final_result,
  'Dirawat di Rumah Sakit ?': this_.there_are_symptoms ? 'Ya' : 'Tidak',
  'Nama Rumah Sakit': this_.verified_status,
  'Tanggal Gejala': this_.first_symptom_date,
  // eslint-disable-next-line no-use-before-define
  ...sectionAuthor(this_)
})

const sectionAuthor = (this_) => ({
  Gejala: this_.diagnosis.toString(),
  'Kondisi Penyerta': this_.diseases.toString(),
  Author: this_.author,
  'Tanggal Input': this_.createdAt,
  'Tanggal Update': this_.updatedAt
})
module.exports = {
  excellOutput
}
