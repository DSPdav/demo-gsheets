import { useState } from 'react'
import { postForm } from '../api/postForm'

export default function Home() {
  //inisialisasi state email dan pesan
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() //cegah refresh halaman saat submit form

    //Kirim {email, pesan} ke Google Sheets
    postForm( {email, pesan} )

    //update nilai email dan pesan ke state awal
    setEmail('')
    setPesan('')
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <h1 className="text-4xl font-bold">Kirim Pesanmu!</h1>
      <form className="m-8 grid space-y-2 w-1/3" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="p-2 border border-gray-500"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="pesan">Pesan</label>
        <textarea
          name="pesan"
          className="h-60 p-2 border border-gray-500"
          value={pesan}
          onChange={e => setPesan(e.target.value)}
        />
        <button className="py-2 bg-blue-700 hover:bg-blue-500 text-white" type="submit">KIRIM</button>
      </form>

    </div>
  )
}
