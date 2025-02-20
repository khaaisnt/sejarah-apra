import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, UserX, Users, Building, Crown, Flag } from "lucide-react"

const outcomes = [
  {
    title: "Pemberontakan APRA berhasil ditumpas",
    icon: Shield,
    desc: "Pemerintah Indonesia berhasil menumpas pemberontakan ini dengan bantuan TNI."
  },
  {
    title: "Raymond Westerling melarikan diri",
    icon: UserX,
    desc: "Westerling melarikan diri ke Singapura dan kemudian ke Belanda untuk menghindari penangkapan."
  },
  {
    title: "Penangkapan anggota APRA",
    icon: Users,
    desc: "Banyak anggota APRA ditangkap oleh aparat keamanan dan diadili atas keterlibatan mereka dalam pemberontakan."
  },
  {
    title: "Pembubaran Negara Pasundan",
    icon: Building,
    desc: "Negara Pasundan, yang menjadi basis APRA, dibubarkan dan wilayahnya bergabung dengan Republik Indonesia."
  },
  {
    title: "Penguatan kedaulatan Indonesia",
    icon: Crown,
    desc: "Kedaulatan Indonesia semakin kuat, dan pemerintah pusat berhasil mengonsolidasikan kekuasaannya."
  },
  {
    title: "Peningkatan kesadaran nasional",
    icon: Flag,
    desc: "Pemberontakan ini meningkatkan kesadaran akan pentingnya persatuan nasional dan kewaspadaan terhadap ancaman separatisme di masa depan."
  }
]

export default function KondisiAkhir() {
  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Kondisi Akhir Pemberontakan APRA
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Introduction Card */}
        <Card className="mb-12 overflow-hidden border-amber-200 bg-white/80 backdrop-blur">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <Image
                src="/kondisi-apra.jpeg"
                alt="Kondisi Akhir APRA"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex items-center">
              <div className="prose prose-amber">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                  Hasil Akhir Pemberontakan
                </h2>
                <p className="text-amber-800">
                  Pemberontakan APRA berakhir dengan kemenangan pemerintah Indonesia.
                  Berikut adalah kondisi-kondisi yang terjadi setelah pemberontakan
                  berhasil ditumpas:
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <Card 
              key={index}
              className="border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <outcome.icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">
                    {outcome.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">{outcome.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}