import React from 'react';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Users, Crown } from "lucide-react";

const figures = [
  {
    name: "Raymond Westerling",
    icon: User,
    role: "Pemimpin Utama APRA",
    image: "/raymond.jpg",
    shortPoints: [
      "Mantan kapten pasukan khusus Belanda",
      "Pemimpin utama dan dalang pemberontakan APRA",
      "Dikenal dengan julukan \"Turk Westerling\" karena latar belakang keluarganya",
      "Memiliki pengalaman dalam operasi militer di Indonesia selama masa kolonial Belanda"
    ],
    description: "Westerling adalah pemimpin utama dan dalang di balik pemberontakan APRA. Ia adalah seorang mantan komandan militer Belanda yang terkenal kejam dalam menumpas pemberontakan di Sulawesi Selatan. Westerling mendirikan APRA dengan tujuan mempertahankan Negara Pasundan dan struktur federal Republik Indonesia Serikat (RIS), serta menentang rencana pembentukan Negara Kesatuan Republik Indonesia (NKRI)."
  },
  {
    name: "Sultan Hamid II",
    icon: Crown,
    role: "Tokoh Politik",
    image: "/sultan-hamid.jpg",
    shortPoints: [
      "Tokoh dari Kalimantan Barat",
      "Pendukung sistem federal",
      "Terlibat dalam perencanaan kudeta",
      "Menentang pembentukan negara kesatuan"
    ],
    description: "Sultan Hamid II, tokoh dari Kalimantan Barat, diduga terlibat dalam pemberontakan ini, meskipun keterlibatannya lebih pada aspek politik. Ia dikenal sebagai pendukung sistem federal dan menentang negara kesatuan. Sultan Hamid II juga terlibat dalam perencanaan upaya kudeta terhadap pemerintah pusat."
  },
  {
    name: "Prajurit APRA",
    icon: Users,
    role: "Pasukan APRA",
    image: "/lencana-apra.png",
    shortPoints: [
      "Bekas tentara KNIL",
      "Loyal kepada Belanda",
      "Terlibat dalam penyerangan di Bandung",
      "Berperan dalam operasi militer APRA"
    ],
    description: "Anggota APRA terdiri dari prajurit yang sebagian besar merupakan bekas tentara KNIL (Koninklijk Nederlandsch-Indisch Leger) yang loyal kepada Belanda. Mereka terlibat dalam penyerangan terhadap militer Republik Indonesia di Bandung pada tanggal 23 Januari 1950."
  }
];

export default function Tokoh() {
  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Dalang dan Tokoh APRA
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {figures.map((figure, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-all"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 relative">
                  <Image
                    src={figure.image}
                    alt={figure.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 text-white lg:hidden">
                    <figure.icon className="h-6 w-6 mb-2" />
                    <h2 className="text-2xl font-semibold">{figure.name}</h2>
                    <p className="text-amber-200">{figure.role}</p>
                  </div>
                </div>

                <div className="lg:w-2/3 p-6">
                  <div className="hidden lg:flex items-center gap-3 mb-4">
                    <figure.icon className="h-6 w-6 text-amber-700" />
                    <div>
                      <h2 className="text-2xl font-semibold text-amber-900">{figure.name}</h2>
                      <p className="text-amber-700">{figure.role}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-amber-800">Poin Penting:</h3>
                      <ul className="list-disc list-inside space-y-2 text-amber-700">
                        {figure.shortPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-amber-800 mb-4">Deskripsi:</h3>
                      <p className="text-amber-700 leading-relaxed">
                        {figure.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}