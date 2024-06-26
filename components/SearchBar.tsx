"use client"

import Image from "next/image";
import SearchManufacturer  from "./SearchManufacturer"
import React, { useState } from "react"
import {useRouter} from "next/navigation"


const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    const SearchButton = ({otherClasses}: { otherClasses: string}) => (
      <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" alt="magnifying" width={40} height={40} className="object-contain" />
      </button>
    )
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if(model === "" && manufacturer === ""){
          return alert("Please fill in the search bar")
        }

        updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())

    }

    const updateSearchParams = (manufacturer: string, model: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model){
        searchParams.set("model", model)
      }else{
        searchParams.delete("model")
      }
      if(manufacturer){
        searchParams.set("manufacturer", manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }

      const newPathName = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathName, {scroll: false})
    }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        
        <div className="searchbar__item">
          <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] height-[20px] ml-4"
          alt="car model"
          />
          <input type="text" name="model" value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          >
          </input>
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar