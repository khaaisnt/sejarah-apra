import React from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, HandshakeIcon, Columns4, Search, Lock } from "lucide-react";

const efforts = [
  {
    title: "Mobilisasi pasukan TNI",
    icon: Shield,
    image: "/placeholder.svg",
    shortDesc: "Mobilisasi pasukan TNI untuk menghadapi pemberontak APRA.",
    fullDesc: "Pemerintah segera mengerahkan pasukan TNI untuk menghadapi dan menumpas pemberontakan APRA di Bandung."
  },
  {
    title: "Koordinasi dengan pemerintah daerah",
    icon: Users,
    image: "/placeholder.svg",
    shortDesc: "Koordinasi dengan pemerintah daerah dan aparat keamanan setempat.",
    fullDesc: "Pemerintah pusat berkoordinasi dengan pemerintah daerah dan aparat keamanan untuk memulihkan keamanan dan stabilitas di Bandung."
  },
  {
    title: "Negosiasi dan diplomasi",
    icon: HandshakeIcon,
    image: "/placeholder.svg",
    shortDesc: "Negosiasi dan upaya diplomasi untuk menghentikan pemberontakan.",
    fullDesc: "Pemerintah juga melakukan upaya diplomasi untuk menghentikan pemberontakan dan mengurangi eskalasi konflik."
  },
  {
    title: "Penangkapan anggota APRA",
    icon: Columns4,
    image: "/placeholder.svg",
    shortDesc: "Penangkapan anggota-anggota APRA yang tertangkap.",
    fullDesc: "Anggota-anggota APRA yang tertangkap dalam pertempuran ditahan oleh aparat keamanan untuk diadili."
  },
  {
    title: "Pengejaran terhadap Westerling",
    icon: Search,
    image: "/placeholder.svg",
    shortDesc: "Pengejaran terhadap Raymond Westerling dan tokoh-tokoh kunci APRA lainnya.",
    fullDesc: "Raymond Westerling dan tokoh-tokoh kunci lainnya dikejar oleh aparat, meskipun Westerling berhasil melarikan diri ke luar negeri."
  },
  {
    title: "Penguatan keamanan wilayah",
    icon: Lock,
    image: "/placeholder.svg",
    shortDesc: "Penguatan keamanan di wilayah-wilayah yang rawan pemberontakan.",
    fullDesc: "Pemerintah memperkuat keamanan di wilayah-wilayah lain yang dianggap rawan pemberontakan serupa untuk mencegah kekacauan lebih lanjut."
  }
];

export default function UpayaPemerintah() {
  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Upaya Pemerintah Mengatasi Pemberontakan APRA
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Introduction Card */}
        <Card className="mb-12 overflow-hidden border-amber-200 bg-white/80 backdrop-blur">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <Image
                src="/kudeta-apra.jpeg"
                alt="Upaya Pemerintah"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex items-center">
              <div className="prose prose-amber">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                  Langkah-Langkah Strategis
                </h2>
                <p className="text-amber-800">
                  Pemerintah Indonesia mengambil berbagai langkah strategis untuk
                  mengatasi pemberontakan APRA dan memulihkan keamanan di wilayah
                  yang terdampak. Berikut adalah upaya-upaya yang dilakukan:
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Efforts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {efforts.map((effort, index) => (
            <Card 
              key={index}
              className="border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <effort.icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">
                    {effort.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-amber-800 font-medium mb-2">
                      {effort.shortDesc}
                    </p>
                    <p className="text-amber-700">
                      {effort.fullDesc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}