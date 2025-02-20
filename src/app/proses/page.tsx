import React from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Target, MapPin, Swords, XCircle, Plane } from "lucide-react";

const timelineEvents = [
  {
    title: "Persiapan dan perekrutan anggota APRA",
    icon: Clock,
    image: "/placeholder.svg",
    shortDesc: "Persiapan dan perekrutan anggota APRA oleh Raymond Westerling.",
    fullDesc: "Raymond Westerling, mantan komandan militer Belanda, mulai membentuk APRA (Angkatan Perang Ratu Adil) dengan merekrut anggota yang sebagian besar adalah mantan prajurit KNIL (Koninklijk Nederlandsch-Indisch Leger) yang setia pada Belanda. Westerling mempersiapkan pemberontakan ini sebagai upaya mempertahankan Negara Pasundan dan sistem federal Republik Indonesia Serikat (RIS), serta untuk menentang pembentukan Negara Kesatuan Republik Indonesia (NKRI)."
  },
  {
    title: "Penyerangan ke Bandung",
    icon: Target,
    image: "/placeholder.svg",
    shortDesc: "Penyerangan ke Bandung pada tanggal 23 Januari 1950.",
    fullDesc: "Pada tanggal 23 Januari 1950, APRA melancarkan serangan ke Bandung. Westerling memimpin pasukan APRA menyerang kota ini karena Bandung adalah pusat pemerintahan Negara Pasundan, yang di bawah kendali RIS. Serangan ini direncanakan sebagai langkah awal untuk merebut kekuasaan di Negara Pasundan dan memaksa pemerintah Indonesia menerima struktur federal."
  },
  {
    title: "Penguasaan Titik Strategis",
    icon: MapPin,
    image: "/placeholder.svg",
    shortDesc: "Penguasaan beberapa titik strategis di kota Bandung.",
    fullDesc: "Pada hari yang sama, pasukan APRA berhasil menguasai beberapa lokasi strategis di Bandung, termasuk markas militer dan gedung-gedung penting. Mereka juga menyerang pasukan TNI (Tentara Nasional Indonesia) yang sedang bertugas di wilayah tersebut, dengan harapan bisa mengambil alih kontrol atas kota dan mendukung rencana pembentukan negara federal."
  },
  {
    title: "Konfrontasi dengan TNI",
    icon: Swords,
    image: "/placeholder.svg",
    shortDesc: "Konfrontasi dengan pasukan TNI dan pemerintah Indonesia.",
    fullDesc: "Setelah menguasai beberapa titik di Bandung, APRA menghadapi perlawanan keras dari pasukan TNI yang segera bertindak untuk menanggapi serangan tersebut. Terjadi konfrontasi antara kedua pihak, dan pertempuran pun berlangsung sengit. TNI berhasil mempertahankan posisinya, yang membuat rencana APRA untuk menguasai kota dan memicu pemberontakan lebih besar gagal."
  },
  {
    title: "Kegagalan APRA",
    icon: XCircle,
    image: "/placeholder.svg",
    shortDesc: "Kegagalan APRA dalam mencapai tujuan utama mereka.",
    fullDesc: "Serangan yang dilakukan APRA tidak mampu menggulingkan pemerintah Indonesia atau mengubah tatanan negara federal menjadi permanen. Upaya mereka untuk merebut kekuasaan di Bandung juga tidak mendapatkan dukungan yang cukup dari pihak lain, dan tindakan TNI berhasil membendung pemberontakan ini. APRA akhirnya gagal mencapai tujuan utama mereka, yaitu mempertahankan Negara Pasundan dan sistem federal RIS."
  },
  {
    title: "Penarikan Mundur dan Pelarian",
    icon: Plane,
    image: "/placeholder.svg",
    shortDesc: "Penarikan mundur pasukan APRA dan pelarian Westerling.",
    fullDesc: "Setelah menyadari bahwa pemberontakan ini tidak akan berhasil, Westerling memerintahkan pasukan APRA untuk mundur dari Bandung. Westerling sendiri kemudian melarikan diri untuk menghindari penangkapan. Dia kabur dari Indonesia dan akhirnya menetap di Belanda. Pemberontakan ini dengan cepat ditumpas oleh pemerintah Indonesia, dan upaya Westerling serta APRA berakhir dengan kegagalan."
  }
];

export default function Proses() {
  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Proses Terjadinya Pemberontakan APRA
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Icon */}
                <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-600 border-4 border-amber-100" />
                
                <Card className="ml-16 border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-all">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <event.icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <CardTitle className="text-xl text-amber-900">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-amber-800 font-medium mb-4">
                          {event.shortDesc}
                        </p>
                        <p className="text-amber-700 leading-relaxed">
                          {event.fullDesc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}