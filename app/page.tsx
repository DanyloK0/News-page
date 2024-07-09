import Header from "@/components/Header";
import { Avatar } from "@mui/material";
import Image from "next/image";
import img1 from "./../images/img1.jpeg";
import img2 from "./../images/img2.png";
import img3 from "./../images/img3.jpeg";
import img4 from "./../images/img4.png";
import rep1 from "./../images/rep1.jpeg";
import rep2 from "./../images/rep2.png";
import rep3 from "./../images/rep3.jpeg";

const articleData = [
  {
    id: 1,
    category: "Migranti",
    title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
    img: "./../images/rep1.jpeg",
    name: "Alessandro Puglia",
    date: "29 Giugno 2022",
  },
  {
    id: 2,
    category: "Allarmi",
    title:
      "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
    img: "./../images/rep2.png",
    name: "Ugo Lombi",
    date: "14 Luglio 2022",
  },
  {
    id: 3,
    category: "Esperimenti",
    title:
      "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
    img: "./../images/rep3.png",
    name: "Diletta Grella",
    date: "14 Luglio 2022",
  },
  {
    id: 4,
    category: "Ucraina",
    title: "Nelle città italiane tutti in piazza per e con Kiev",
    img: "./../images/rep4.png",
    name: "Anna Spena",
    date: "14 Luglio 2022",
  },
  {
    id: 5,
    category: "Progetto arca",
    title: "“Qui Odessa”, fotografie, progetti e solidarietà",
    img: "./../images/rep2.png",
    name: "Redazione",
    date: "13 Luglio 2022",
  },
  {
    id: 6,
    category: "Adolescenti",
    title:
      "Storie fra ragazzi permeate di violenza. A Napoli 12enne sfregiata da 17enne",
    img: "./../images/rep3.png",
    name: "Luca Cereda",
    date: "13 Luglio 2022",
  },
  {
    id: 7,
    category: "Economia civile",
    title:
      "“Co-agitiamo”, Tiggiano una cooperativa di comunità contro lo spopolamento",
    img: "./../images/rep4.png",
    name: "Emiliano Moccia",
    date: "13 Luglio 2022",
  },
  {
    id: 8,
    category: "Sport",
    title: "Troppi abusi nello sport minorile, il governo interviene",
    img: "./../images/rep3.png",
    name: "Diletta Grella",
    date: "7 Luglio 2022",
  },
  {
    id: 9,
    category: "Economia civile",
    title: "Donne e nuove generazioni: con loro riparte l’Italia",
    img: "./../images/rep4.png",
    name: "Anna Spena",
    date: "7 Luglio 2022",
  },
];
export default function Home() {
  return (
    <main className="grid size-full items-center justify-between">
      <Header />
      <div className="w-full bg-gray-100 mt-48">
        <div className="text-4xl font-bold text-black p-8">Tutti i temi</div>
      </div>
      <div className="w-full p-8 bg-cover content-end space-y-4  bg-[url('./../images/img1.jpeg')] h-[506px]">
        <div className="text-xs text-black w-fit bg-white px-4 rounded">
          {articleData[0].category.toLocaleUpperCase()}
        </div>
        <h2 className="text-4xl font-bold">{articleData[0].title}</h2>
        <div>
          <Avatar alt={articleData[0].name} src={articleData[0].img} />
          <div>
            <p className="text-sm font-normal text-white py-2">
              Di {articleData[0].name}
            </p>
            <p className="text-xs font-light text-white">
              {articleData[0].date}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-flow-col h-[806px]">
        <div className="w-full row-span-3 col-span-2 content-end space-y-4 p-8 bg-cover bg-[url('./../images/img2.png')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[1].category.toLocaleUpperCase()}
          </div>
          <h2 className="text-3xl font-bold">{articleData[1].title}</h2>
          <div>
            <Avatar alt={articleData[1].name} src={articleData[1].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[1].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[1].date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 p-8 bg-cover content-end space-y-4 bg-[url('./../images/img3.jpeg')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[2].category.toLocaleUpperCase()}
          </div>
          <h3 className="text-xl font-bold">{articleData[2].title}</h3>
          <div>
            <Avatar alt={articleData[2].name} src={articleData[2].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[2].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[2].date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1  row-span-1 p-8 bg-cover content-end space-y-4 bg-[url('./../images/img4.png')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[3].category.toLocaleUpperCase()}
          </div>
          <h3 className="text-xl font-bold">{articleData[3].title}</h3>
          <div>
            <Avatar alt={articleData[3].name} src={articleData[3].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[3].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[3].date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-amber-50 grid grid-cols-6 justify-between">
        <h2 className="text-4xl font-bold text-black p-8 col col-span-5">
          Il tuo supporto è fondamentale
        </h2>
        <h3 className="font-bold text-black p-8 mt-2">Dai il tuo contributo</h3>
      </div>
      <div className="grid grid-cols-3 h-[430px]">
        <div className="col-span-1 row-span-1 p-8 bg-cover content-end space-y-4 bg-[#E63036]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[4].category.toLocaleUpperCase()}
          </div>
          <h3 className="text-xl font-bold">{articleData[4].title}</h3>
          <div>
            <Avatar alt={articleData[4].name} src={articleData[4].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[4].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[4].date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 p-8 bg-cover content-end space-y-4 bg-[url('./../images/img6.jpeg')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[5].category.toLocaleUpperCase()}
          </div>
          <h3 className="text-xl font-bold">{articleData[5].title}</h3>
          <div>
            <Avatar alt={articleData[5].name} src={articleData[5].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[5].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[5].date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 p-8 bg-cover content-end space-y-4 bg-opacity-30 bg-[url('./../images/img7.jpeg')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[6].category.toLocaleUpperCase()}
          </div>
          <h3 className="text-xl font-bold">{articleData[6].title}</h3>
          <div>
            <Avatar alt={articleData[6].name} src={articleData[6].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[6].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[6].date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 h-[430px]">
        <div className="col-span-1 p-8 bg-cover content-center space-y-4 bg-[url('./../images/img8.jpeg')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[7].category.toLocaleUpperCase()}
          </div>
          <h2 className="text-xl font-bold">{articleData[7].title}</h2>
          <div>
            <Avatar alt={articleData[7].name} src={articleData[7].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[7].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[7].date}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-8 bg-cover content-center space-y-4 bg-[url('./../images/img9.jpeg')]">
          <div className="text-xs text-black w-fit bg-white px-4 rounded">
            {articleData[8].category.toLocaleUpperCase()}
          </div>
          <h2 className="text-3xl font-bold">{articleData[8].title}</h2>
          <div>
            <Avatar alt={articleData[8].name} src={articleData[8].img} />
            <div>
              <p className="text-sm font-normal text-white py-2">
                Di {articleData[8].name}
              </p>
              <p className="text-xs font-light text-white">
                {articleData[8].date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-8 pl-16 bg-[url('./../images/img10.png')]">
        <h2 className="text-4xl font-bold text-white">
          Essere troppo seri non è cosa molto seria
        </h2>
        <p>( Detto Africano )</p>
      </div>
    </main>
  );
}
