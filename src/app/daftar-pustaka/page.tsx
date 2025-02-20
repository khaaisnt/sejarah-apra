import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BookOpen } from "lucide-react"

const references = [
  {
    title: "Angkatan Perang Ratu Adil",
    source: "Wikipedia",
    url: "https://id.m.wikipedia.org/wiki/Angkatan_Perang_Ratu_Adil"
  },
  {
    title: "Kudeta APRA",
    source: "Wikipedia",
    url: "https://id.wikipedia.org/wiki/Kudeta_APRA"
  },
  {
    title: "Pemberontakan APRA: Latar Belakang, Sejarah, dan Akhir Pemberontakan",
    source: "Detik.com",
    url: "https://www.detik.com/edu/detikpedia/d-6315094/pemberontakan-apra-latar-belakang-sejarah-dan-akhir-pemberontakan"
  }
]

export default function DaftarPustaka() {
  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Daftar Pustaka
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-amber-200 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-amber-700" />
              </div>
              <h2 className="text-2xl font-semibold text-amber-900">
                Sumber Referensi
              </h2>
            </div>
            <p className="text-amber-800">
              Berikut adalah daftar sumber yang digunakan dalam penyusunan materi tentang Pemberontakan APRA:
            </p>
          </CardContent>
        </Card>

        {/* References List */}
        <div className="space-y-4">
          {references.map((ref, index) => (
            <Card 
              key={index}
              className="border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="bg-amber-100 px-3 py-1 rounded-lg text-amber-700 font-medium">
                    {index + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-medium text-amber-900">{ref.title}</h3>
                    <p className="text-amber-700">
                      Sumber: {ref.source}
                    </p>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 hover:underline block break-all"
                    >
                      {ref.url}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}