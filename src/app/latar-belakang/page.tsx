import React from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollText } from "lucide-react";

export default function LatarBelakang() {
  const backgroundPoints = [
    {
      title: "Ketidakpuasan terhadap hasil Konferensi Meja Bundar (KMB)",
      shortDesc: "Ketidakpuasan terhadap hasil Konferensi Meja Bundar (KMB) yang menghasilkan pengakuan kedaulatan Indonesia.",
      fullDesc: "Setelah Konferensi Meja Bundar, Belanda secara resmi mengakui kedaulatan Indonesia pada 27 Desember 1949. Meskipun begitu, beberapa kelompok, terutama yang pro-Belanda, tidak puas dengan hasil konferensi tersebut. Mereka menganggap pengakuan kedaulatan sebagai langkah yang terlalu cepat dan merugikan kepentingan Belanda, terutama dalam hal ekonomi dan politik. Ketidakpuasan ini juga muncul karena KMB memberikan Indonesia bentuk negara federal, tetapi kekuatan nasionalis menginginkan negara kesatuan, yang membuat beberapa pihak merasa proses desentralisasi (federalisme) tersebut tidak akan bertahan lama."
    },
    {
      title: "Keinginan Mempertahankan Kekuasaan Belanda",
      shortDesc: "Keinginan untuk mempertahankan kekuasaan Belanda di Indonesia, terutama di wilayah Jawa Barat.",
      fullDesc: "Wilayah Jawa Barat, khususnya, memiliki sejarah perlawanan terhadap Republik Indonesia, terutama dengan berdirinya Negara Pasundan sebagai bagian dari upaya Belanda menciptakan negara-negara boneka di Indonesia. Belanda berharap dapat mempertahankan pengaruhnya di wilayah ini melalui Negara Pasundan dan sistem federal Republik Indonesia Serikat (RIS), yang didukung oleh sebagian elit lokal yang merasa memiliki keuntungan dengan adanya dukungan Belanda."
    },
    {
      title: "Upaya Mencegah Pembubaran Negara Pasundan",
      shortDesc: "Upaya untuk mencegah pembubaran Negara Pasundan dan mempertahankan struktur federal Republik Indonesia Serikat (RIS).",
      fullDesc: "Negara Pasundan adalah salah satu negara bagian dalam RIS yang dibentuk Belanda. Negara Pasundan menjadi alat Belanda untuk menekan kekuatan Republik Indonesia yang berbasis di Yogyakarta (sebelumnya di Jakarta). Dengan sistem federal RIS, Belanda berharap dapat membatasi kekuasaan Republik Indonesia dan mempertahankan pengaruhnya melalui negara-negara bagian seperti Negara Pasundan. Namun, dorongan kuat dari pemerintah pusat untuk mempersatukan negara-negara bagian ke dalam Negara Kesatuan Republik Indonesia (NKRI) mengancam struktur federal ini, sehingga beberapa pihak yang pro-Belanda berusaha mempertahankan Negara Pasundan dan sistem federal RIS."
    },
    {
      title: "Kekhawatiran Hilangnya Pengaruh Belanda",
      shortDesc: "Kekhawatiran akan hilangnya pengaruh dan kepentingan Belanda di Indonesia pasca-kemerdekaan.",
      fullDesc: "Pasca-KMB, meskipun Belanda telah mengakui kedaulatan Indonesia, masih ada kekhawatiran di kalangan pemerintah dan kelompok bisnis Belanda mengenai hilangnya kendali atas sumber daya dan kepentingan ekonomi di Indonesia, terutama dalam sektor perkebunan, pertambangan, dan perdagangan. Belanda juga khawatir bahwa nasionalisasi ekonomi oleh pemerintah Indonesia akan menghapus hak-hak perusahaan Belanda dan mengurangi pengaruh politik mereka. Kekhawatiran ini mendorong beberapa upaya untuk tetap mempertahankan struktur federal yang memungkinkan Belanda terus mengendalikan beberapa bagian Indonesia secara tidak langsung, terutama di wilayah-wilayah di luar Jawa Tengah dan Yogyakarta yang lebih pro-Republik."
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50/50 py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">
            Latar Belakang Pemberontakan APRA
          </h1>
          <Separator className="w-32 mx-auto bg-amber-300" />
        </div>

        {/* Main Image and Introduction */}
        <Card className="mb-12 overflow-hidden border-amber-200 bg-white/80 backdrop-blur">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6">
              <Image
                src="/kmb.jpg"
                alt="Latar Belakang APRA"
                width={500}
                height={300}
                className="rounded-lg shadow-md w-full max-h-[330px] object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex items-center">
              <div className="prose prose-amber">
                <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                  Sekilas Tentang APRA
                </h2>
                <p className="text-amber-800">
                  APRA (Angkatan Perang Ratu Adil) muncul sebagai gerakan perlawanan
                  terhadap perubahan politik di Indonesia pasca kemerdekaan. Berikut adalah
                  faktor-faktor utama yang melatarbelakangi kemunculan gerakan ini.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Points */}
        <div className="grid gap-6">
          {backgroundPoints.map((point, index) => (
            <Card 
              key={index} 
              className="border-amber-200 bg-white/80 backdrop-blur hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl text-amber-900 flex items-center gap-2">
                  <ScrollText className="h-5 w-5" />
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-800 mb-4 font-medium">
                  {point.shortDesc}
                </p>
                <Separator className="my-4 bg-amber-200" />
                <p className="text-amber-700 leading-relaxed">
                  {point.fullDesc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}