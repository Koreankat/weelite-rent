import logo from "./logo.svg"
import mail from "./assets/mail.png"
import house from "./assets/house.png"
import key from "./assets/key.png"
import bat from "./assets/bat.png"
import pen from "./assets/pen.png"
import pin from "./assets/pin.png"
import vektor from "./assets/Vector.png"
import localisation from "./assets/localisation.png"
import arrowdown from "./assets/arrowdown.png"
import ok from "./assets/ok.png"
import { useState, useEffect } from "react"
import { FaFireExtinguisher } from "react-icons/fa"
import { BiTrash } from "react-icons/bi"
import {
  Textbox,
  Radiobox,
  Checkbox,
  Select,
  Textarea,
} from "react-inputs-validation"
import "./App.css"

function Nav() {
  return (
    <div className='w-[1240px] bg-[#0E0E52] rounded-b-2xl'>
      <h1 className=' text-white text-[48px] font-bold ml-[40px]'>LOGO</h1>
    </div>
  )
}
function Subnav() {
  return (
    <div className='w-[60%]  rounded-b-2xl mt-[92px] flex justify-between'>
      <div className='w-[119px] h-[124px] bg-white flex justify-center items-center rounded-lg cursor-pointer'>
        {" "}
        <img src={vektor} alt='mail'></img>
      </div>
      <div className='w-[119px] h-[176px] bg-[#46D0D9] flex justify-center items-center rounded-lg flex-col cursor-pointer'>
        {" "}
        <img src={house} alt='mail' className='mb-6'></img>
        <h1 className='text-white text-[20px] font-[500]'>Immeuble</h1>
      </div>
      <div className='w-[119px] h-[124px] bg-white flex justify-center items-center rounded-lg cursor-pointer'>
        {" "}
        <img src={key} alt='mail'></img>
      </div>
      <div className='w-[119px] h-[124px] bg-white flex justify-center items-center rounded-lg cursor-pointer'>
        {" "}
        <img src={pen} alt='mail'></img>
      </div>
      <div className='w-[119px] h-[124px] bg-white flex justify-center items-center rounded-lg cursor-pointer'>
        {" "}
        <img src={pin} alt='mail'></img>
      </div>
      <div className='w-[119px] h-[124px] bg-white flex justify-center items-center rounded-lg cursor-pointer'>
        {" "}
        <img src={mail} alt='mail'></img>
      </div>
    </div>
  )
}
function Form() {
  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)
  const [boxe, setBoxe] = useState(3)
  const [choice, setChoice] = useState(1)
  const [isClicked, setIsClicked] = useState(false)
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [input3, setInput3] = useState("")
  const [input4, setInput4] = useState("")
  const [input5, setInput5] = useState("")
  const [input6, setInput6] = useState("")
  const [input7, setInput7] = useState("")

  let round1 = " rounded-xl"
  let round2 = " rounded-xl"
  if (drop1 === true) {
    round1 -= " rounded-xl"
    round1 += " rounded-t-xl"
  } else {
    round1 -= " rounded-t-xl"
    round1 += " rounded-xl"
  }
  if (drop2 === true) {
    round2 -= " rounded-xl"
    round2 += " rounded-t-xl"
  } else {
    round2 -= " rounded-t-xl"
    round2 += " rounded-xl"
  }

  return (
    <div className='w-[60%] border-solid border-stone-300 border rounded-3xl overflow-hidden mt-[52px]'>
      <div className=' bg-white p-7'>
        <h1 className='text-[26px] text-[#143656] font-[500]'>Mon immeuble</h1>
      </div>
      <hr />
      <div className=' bg-[#F5F5F5] h-[200px] '>
        <div className='relative left-20 top-16 text-[20px]'>
          <h1 className='text-[#8A9BAB] font-[400] mb-2'>
            Renseignements relatifs à l'immeuble
          </h1>
          <h1 className='text-[#143656] font-[400]'>
            Nous allons completer la partie relative à l’immeuble.
          </h1>
        </div>
      </div>
      <hr />
      <div className=' bg-[#F5F5F5] h-auto '>
        <div className='relative left-[120px] top-10 text-[20px]'>
          <img
            src={localisation}
            alt='loca'
            className='absolute left-[-25px] top-1'
          ></img>
          <h1 className='text-[#143656] font-[500] mb-2'>Localisation</h1>
        </div>
        <form className=' mt-[80px] ml-[150px] mb-14 w-[40%]'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h1 className=' mb-2'>Numéro</h1>
              <input
                className={`w-[50px] h-[46px] ${
                  isClicked ? (input1.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput1(e.target.value)
                }}
              />
            </div>
            <div>
              <h1 className=' mb-2'>Voie</h1>{" "}
              <input
                className={`w-[251px] h-[46px] ${
                  isClicked ? (input2.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput2(e.target.value)
                }}
              />
              {isClicked ? (
                input2.length === 0 || input1.length === 0 ? (
                  <h1 className='absolute right-[435px] top-[840px] text-red-500'>
                    Veuillez remplir les champ*.{" "}
                  </h1>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='mb-4'>
            <h1 className=' mb-2'>Lieu-dit</h1>
            <input
              className={`w-[201px] h-[46px] ${
                isClicked ? (input3.length === 0 ? "bg-red-300" : "") : ""
              }`}
              onChange={(e) => {
                setInput3(e.target.value)
              }}
            />
            {isClicked ? (
              input3.length === 0 ? (
                <h1 className='absolute right-[585px] top-[940px] text-red-500'>
                  Veuillez remplir le champ*.{" "}
                </h1>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h1 className=' mb-2'>Code Postal</h1>
              <input
                className={`w-[65px] h-[46px] ${
                  isClicked ? (input4.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput4(e.target.value)
                }}
              />
            </div>
            <div>
              <h1 className=' mb-2'>Localité</h1>
              <input
                className={`w-[237px] h-[46px] ${
                  isClicked ? (input5.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput5(e.target.value)
                }}
              />
              {isClicked ? (
                input5.length === 0 || input4.length === 0 ? (
                  <h1 className='absolute right-[435px] top-[1030px] text-red-500'>
                    Veuillez remplir les champ*.{" "}
                  </h1>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='flex items-center  mb-4'>
            <div className='mr-10'>
              <h1 className=' mb-2'>BP</h1>
              <input
                className={`w-[65px] h-[46px] ${
                  isClicked ? (input6.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput6(e.target.value)
                }}
              />
            </div>
            <div>
              <h1 className=' mb-2'>Cedex</h1>
              <input
                className={`w-[70px] h-[46px] ${
                  isClicked ? (input7.length === 0 ? "bg-red-300" : "") : ""
                }`}
                onChange={(e) => {
                  setInput7(e.target.value)
                }}
              />
              {isClicked ? (
                input7.length === 0 || input6.length === 0 ? (
                  <h1 className='absolute right-[575px] top-[1130px] text-red-500'>
                    Veuillez remplir les champ*.{" "}
                  </h1>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
        <hr className='relative' />
        <div>
          <div className='relative left-[120px] top-10 text-[20px]'>
            <img
              src={bat}
              alt='loca'
              className='absolute left-[-25px] top-1'
            ></img>
            <h1 className='text-[#143656] font-[500] mb-2'>
              Renseignements relatifs à l’immeuble
            </h1>
          </div>
          <div className='mt-20'>
            <div
              className={`flex justify-center items-center h-[35px] w-[167px] bg-white cursor-pointer ml-[150px] custom-shadow ${round1}`}
              onClick={() => setDrop1(!drop1)}
            >
              <div className='line p-2 text-[14px]'>
                <h1 className=''>Type d'habitat</h1>
              </div>
              <img
                src={arrowdown}
                alt='arrow down
              '
                className='ml-2'
              />
            </div>
            {drop1 && (
              <div className='ml-[150px]'>
                <div
                  className='flex justify-center items-center h-[35px] w-[167px] bg-white hover:bg-[#46D0D9] text-[14px] hover:text-white  cursor-pointer custom-shadow'
                  onClick={() => setDrop1(!drop1)}
                >
                  <h1 className=''>Maison individuelle</h1>
                  <img
                    src={ok}
                    alt='arrow down
              '
                    className='ml-3'
                  />
                </div>
                <div
                  className='flex justify-center items-center h-[35px] w-[167px] bg-white text-[14px] hover:bg-[#46D0D9] hover:text-white rounded-b-xl cursor-pointer custom-shadow'
                  onClick={() => setDrop1(!drop1)}
                >
                  <h1 className=''>Immeuble collectif</h1>
                  <img
                    src={ok}
                    alt='arrow down
              '
                    className='ml-3'
                  />
                </div>
              </div>
            )}
            <div
              className={`flex justify-center items-center h-[35px] w-[167px] bg-white cursor-pointer ml-[150px] mt-5 custom-shadow ${round2} `}
              onClick={() => setDrop2(!drop2)}
            >
              <div className='line p-1 text-[14px]'>
                <h1 className=''>Régime juridique</h1>
              </div>
              <img
                src={arrowdown}
                alt='arrow down
              '
                className='ml-2'
              />
            </div>
            {drop2 && (
              <div className='ml-[150px]'>
                <div
                  className='flex justify-center items-center h-[35px] w-[167px] bg-white hover:bg-[#46D0D9] text-[14px] hover:text-white  cursor-pointer custom-shadow'
                  onClick={() => setDrop2(!drop2)}
                >
                  <h1 className=''>Mono propriété</h1>
                  <img
                    src={ok}
                    alt='arrow down
              '
                    className='ml-3'
                  />
                </div>
                <div
                  className='flex justify-center items-center h-[35px] w-[167px] bg-white text-[14px] hover:bg-[#46D0D9] hover:text-white rounded-b-xl cursor-pointer custom-shadow'
                  onClick={() => setDrop2(!drop2)}
                >
                  <h1 className=''>Copropriété</h1>
                  <img
                    src={ok}
                    alt='arrow down
              '
                    className='ml-3'
                  />
                </div>
              </div>
            )}
            <h1 className='text-[#13497B] font-[500] ml-[120px] mt-[50px]'>
              Période de construction
            </h1>
            <div className='w-4/5 flex justify-between items-center ml-[10%] text-[14px] text-[#13497B] mt-[30px] mb-[20px]'>
              <h1>Avant 1949</h1>
              <h1>De 1949 à 1974</h1>
              <h1>De 1975 à 1989</h1>
              <h1>De 1989 à 2005</h1>
              <h1>Depuis 2005</h1>
            </div>
            <div className='flex items-center relative'>
              <hr className='hr' />
              <div className='arrow-left'></div>
            </div>
            <div className='relative w-[75%] ml-[10%] flex justify-between top-[-20px]'>
              <div
                className={`w-[20px] h-[20px] bg-white rounded-md flex justify-center items-center cursor-pointer ${
                  boxe === 1 ? "bg-[#46d0d9]" : "bg-white"
                }`}
                onClick={() => setBoxe(1)}
              >
                <img src={ok} alt='ok' />
              </div>
              <div
                className={`w-[20px] h-[20px] bg-white rounded-md flex justify-center items-center cursor-pointer ${
                  boxe === 2 ? "bg-[#46d0d9]" : "bg-white"
                }`}
                onClick={() => setBoxe(2)}
              >
                <img src={ok} alt='ok' />
              </div>
              <div
                className={`w-[20px] h-[20px] bg-white rounded-md flex justify-center items-center cursor-pointer ${
                  boxe === 3 ? "bg-[#46d0d9]" : "bg-white"
                }`}
                onClick={() => setBoxe(3)}
              >
                <img src={ok} alt='ok' />
              </div>
              <div
                className={`w-[20px] h-[20px] bg-white rounded-md flex justify-center items-center cursor-pointer ${
                  boxe === 4 ? "bg-[#46d0d9]" : "bg-white"
                }`}
                onClick={() => setBoxe(4)}
              >
                <img src={ok} alt='ok' />
              </div>
              <div
                className={`w-[20px] h-[20px] bg-white rounded-md flex justify-center items-center cursor-pointer ${
                  boxe === 5 ? "bg-[#46d0d9]" : "bg-white"
                }`}
                onClick={() => setBoxe(5)}
              >
                <img src={ok} alt='ok' />
              </div>
            </div>
            <div className='flex flex-col ml-[10%] mt-[30px]'>
              <div className='flex '>
                <div
                  className={` w-[123px] h-[111px] rounded-md flex items-center justify-center mr-10 box-shadow cursor-pointer ${
                    choice === 1 ? "bg-[#46d0d9] " : "bg-white "
                  }`}
                  onClick={() => setChoice(1)}
                >
                  <FaFireExtinguisher
                    className={`w-[42px] h-[48px] ${
                      choice === 1 ? "text-white" : "text-[#46d0d9]"
                    }`}
                  />
                </div>
                <div
                  className={` w-[123px] h-[111px] rounded-md flex items-center justify-center box-shadow cursor-pointer ${
                    choice === 2 ? "bg-[#46d0d9] " : "bg-white "
                  }`}
                  onClick={() => setChoice(2)}
                >
                  <BiTrash
                    className={`w-[42px] h-[48px]  ${
                      choice === 2 ? "text-white" : "text-[#46d0d9]"
                    }`}
                  />
                </div>
              </div>
              <div className='flex mt-2'>
                <h1 className='mr-16 text-[14px] text-[#13497B]'>
                  Local Poubelles
                </h1>
                <h1 className='text-[14px] text-[#13497B]'>Extincteur</h1>
              </div>
            </div>
            <div className='mt-[30px] bg-white w-full flex justify-center items-center h-[100px]'>
              <div className='w-5/6 flex justify-between'>
                <div className='loader'>
                  <h1 className='h1 absolute mt-1 ml-3 font-[500] text-[#143656] mr-2'>
                    6
                  </h1>
                  <h3 className='h1 absolute mt-5 ml-4 text-[8px] font-[300] '>
                    étapes
                  </h3>
                </div>
                <button
                  className='w-[202px] h-[50px] bg-[#192BC2] rounded-xl text-white'
                  type='submit'
                  onClick={(e) => {
                    setIsClicked(!isClicked)
                  }}
                >
                  Suivant
                </button>
                {isClicked ? (
                  input1.length === 0 ||
                  input2.length === 0 ||
                  input3.length === 0 ||
                  input4.length === 0 ||
                  input5.length === 0 ||
                  input6.length === 0 ||
                  input7.length === 0 ? (
                    <h1 className='absolute text-red-500 right-[370px] mt-12'>
                      Fill in the form correctly*
                    </h1>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Faq() {
  return (
    <footer className='mt-[100px] w-[1240px]  bg-white h-[321px] rounded-md '>
      <hr className='mt-[100px] w-5/6 ml-[8%] h-[3px] bg-[#192BC2]' />
      <div className='w-5/6 ml-[8%] flex justify-between mt-9 items-center'>
        <h1 className=' text-[#111827] text-[30px] font-[500] '>LOGO</h1>
        <div className=' w-4/6 flex justify-between font-[500] text-[14px]'>
          <h1>Accueil</h1>
          <h1>Qui sommes-nous ?</h1>
          <h1>Comment ça marche ?</h1>
          <h1>Contact</h1>
          <h1>Mentions légales</h1>
          <h1>Confidentialité</h1>
        </div>
      </div>
      <h1 className='mt-[100px] ml-[40%] text-[#150578] text-[12px]'>
        © 2022 InfoSCI. Tous droits réservés.
      </h1>
    </footer>
  )
}
function App() {
  return (
    <div className='flex justify-center flex-col items-center'>
      {" "}
      <Nav />
      <Subnav />
      <Form />
      <Faq />
    </div>
  )
}

export default App
