const { GoogleSpreadsheet } = require('google-spreadsheet')

export const postForm = async (data) => {
    // inisialisasi file Google Sheets berdasar Sheets_ID
    const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SHEETS_ID)
    try {
        // autentikasi dengan ServiceAccount
        await doc.useServiceAccountAuth({
            client_email: process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'),
        })
        // load file Google Sheets, lihat header
        await doc.loadInfo()
        // pilih worksheets 'Sheet 1'
        const sheet = doc.sheetsByIndex[0]
        // tambah baris dengan data {email, pesan}
        await sheet.addRow(data)
    } catch (err) {
        console.error('Error :', err)
    }
}