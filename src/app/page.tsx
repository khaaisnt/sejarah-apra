import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollText, Users } from "lucide-react";


const topics = [
  { title: "Latar Belakang", href: "/latar-belakang", image: "/kmb.jpg", icon: ScrollText },
  { title: "Tokoh APRA", href: "/tokoh", image: "/raymond.jpg", icon: ScrollText },
  { title: "Proses Terjadinya", href: "/proses", image: "/proses-terjadi.jpg", icon: ScrollText },
  { title: "Upaya Pemerintah", href: "/upaya-pemerintah", image: "/kudeta-apra.jpeg", icon: ScrollText },
  { title: "Kondisi Akhir", href: "/kondisi-akhir", image: "/kondisi-apra.jpeg", icon: ScrollText },
  { title: "Daftar Pustaka", href: "/daftar-pustaka", image: "/wikipedia.png", icon: ScrollText }
];

const teamMembers = [
  { name: "Rakha", role: "Anggota Kelompok" },
  { name: "Danish🤓", role: "Anggota Kelompok" },
  { name: "Lintang", role: "Anggota Kelompok" },
  { name: "Sihab", role: "Anggota Kelompok" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <main className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="relative mb-16 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/80 z-10" />
          <Image
            src="/hero-image.jpeg"
            alt="Historical Background"
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-4">
                Pemberontakan APRA
              </h1>
              <Separator className="w-24 mx-auto bg-amber-200" />
            </div>
          </div>
        </div>

        {/* Introduction Card */}
        <Card className="mb-16 bg-white/80 backdrop-blur border-amber-200">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-900">
              Pendahuluan: Pengertian APRA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative flex justify-center rounded-lg overflow-hidden">
                  <Image
                    src="/logo-apra.png"
                    alt="APRA Logo"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <p className="text-lg text-amber-900">
                  APRA (Angkatan Perang Ratu Adil) adalah sebuah gerakan pemberontakan yang terjadi pada tanggal 23 Januari
                  1950 di Bandung, Jawa Barat. Gerakan ini dipimpin oleh Raymond Westerling, seorang mantan kapten pasukan
                  khusus Belanda.
                </p>
                <p className="text-lg text-amber-900">
                  Tujuan utama APRA adalah untuk mempertahankan kekuasaan Belanda di Indonesia dan mencegah pembubaran
                  Negara Pasundan, salah satu negara bagian bentukan Belanda dalam Republik Indonesia Serikat (RIS).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="mb-16 bg-white/80 backdrop-blur border-amber-200">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-amber-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-amber-700" />
            </div>
            <CardTitle className="text-2xl text-amber-900">
              Tim Penyusun
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-amber-100/50 hover:bg-amber-100 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-amber-700 font-semibold">
                      {member.name[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-amber-900">{member.name}</h3>
                  <p className="text-sm text-amber-700">{member.role}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Topics Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-amber-900">Materi Utama</h2>
            <Separator className="flex-1 bg-amber-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link key={topic.href} href={topic.href} className="group">
                <Card className="hover:shadow-xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur overflow-hidden group-hover:-translate-y-1">
                  <div className="relative">
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent" />
                  </div>
                  <CardContent className="relative z-10 p-4">
                    <h3 className="text-xl font-semibold text-amber-900 group-hover:text-amber-800">
                      {topic.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}