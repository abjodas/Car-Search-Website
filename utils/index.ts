import { filterProps } from "@/types";

export async function fetchCars(filters: filterProps) {
    const {manufacturer, year, fuel, model, limit} = filters;
    const headers = {
		'X-RapidAPI-Key': 'fd21a96ec1msh73fea74e0d60f33p12855ejsn9649d5769805',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
    {
        headers: headers,
    }
    );

    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg:number, year:number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}
interface imageUrlProps {
    make: string;
    model: string;
    type: string;
}
export const getImageUrl = (make: string, model: string, type:string) => {
    const name = make.toLowerCase() + model.toLowerCase();

    if(name == "cadillacxt4 fwd" || name== "cadillacxt4 awd" || name == "cadillacxt4 v"){
        return "https://di-sitebuilder-assets.s3.amazonaws.com/GMimages/gmMLP/cadillac/XT4/2024/Colors/Stellar+Black+Metallic.png"
    }
    if(name == "cadillacct4 fwd" || name== "cadillacct4 awd" || name == "cadillacct4 v"){
        return "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023CAC270002_01_1280_GAZ.png"
    }
    if(name == "cadillacxt5 fwd" || name== "cadillacxt5 awd" || name == "cadillacxt5 v"){
        return "https://di-sitebuilder-assets.s3.amazonaws.com/GMimages/gmMLP/cadillac/XT5/2024/Colors/Midnight+Sky+Metallic.png"
    }
    if(name == "cadillacxt6 fwd" || name== "cadillacxt6 awd" || name == "cadillacxt6 v"){
        return "https://di-sitebuilder-assets.s3.amazonaws.com/GMimages/gmMLP/cadillac/XT6/2023/color-Argent-Silver-Metallic.png"
    }
    if(name== "audir8 coupe" || name == "audir8 coupe rwd"){
        return "https://i.pinimg.com/originals/9a/eb/34/9aeb34414cf5a43cc58f0fe505c911f8.png"
    }
    if(name.includes("audir8 spyder")){
        return "https://www.pngkey.com/png/full/907-9079600_audi-r8-spyder-2017-black.png"
    }
    if(name.includes("auditt")){
        return "https://images.dealer.com/ddc/vehicles/2020/Audi/TT/Convertible/perspective/front-left/2020_24.png"
    }
    if(name.includes("audia5 coupe")){
        return "https://images.dealer.com/ddc/vehicles/2022/Audi/A5/Coupe/perspective/front-left/2022_76.png"
    }
    if(name.includes("audia5 cabriolet")){
        return "https://images.dealer.com/ddc/vehicles/2022/Audi/A5/Convertible/perspective/front-left/2022_24.png"
    }
    if(name.includes("audirs 5")){
        return "https://images.dealer.com/ddc/vehicles/2022/Audi/RS%205/Coupe/perspective/front-left/2022_24.png"
    }
    if(name.includes("audis5")){
        return "https://images.dealer.com/ddc/vehicles/2022/Audi/S5/Coupe/perspective/front-left/2022_24.png"
    }
    if(name.includes("aston martinvantage v8")){
        return "https://i.pinimg.com/originals/f5/60/60/f560606df1586d97fb568d3052ef0715.png"
    }
    if(name.includes("aston martindb11 v8")){
        return "https://purepng.com/public/uploads/large/purepng.com-aston-martin-db11-blue-carcarvehicletransportaston-martin-961524651055uu6fr.png"
    }
    if(name.includes("aston martindbs")){
        return "https://www.pngkey.com/png/full/537-5373122_aston-martin-dbs-superleggera-aston-martin-dbs-2019.png"
    }
    if(name.includes("aston martindb11 v12")){
        return "https://www.pngitem.com/pimgs/m/607-6070867_aston-martin-db11-v12-coupe-hd-png-download.png"
    }
    if(name.includes("aston martindbx v8")){
        return "https://www.motortrend.com/uploads/sites/5/2020/08/2021-Aston-Martin-DBX.png"
    }
    if(name.includes("alfa romeostelvio")){
        return "https://di-uploads-pod27.dealerinspire.com/genesisalfaromeo/uploads/2021/01/2020-Alfa-Romeo-Stelvio-MLP-Hero.png"
    }
    if(name.includes("alfa romeogiulia")){
        return "https://pngimg.com/d/alfa_romeo_PNG58.png"
    }
    if(name.includes("volkswagenatlas")){
        return "https://vehicle-images.dealerinspire.com/stock-images/chrome/7c3ad414d8d640475db2b5e343c68148.png"
    }
    if(name.includes("volkswagentaos")){
        return "https://s3.amazonaws.com/cka-dash/016-0621-CVO836/model1.png"
    }
    if(name.includes("volkswagenpassat")){
        return "https://i.pinimg.com/originals/5f/cc/fa/5fccfac04b16562e72515dc9a287fb40.png"
    }
    if(name.includes("volkswagentiguan")){
        return "https://pngimg.com/d/volkswagen_PNG1820.png"
    }
    if(name.includes("bentleybentayga")){
        return "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_500/v1/svp/dep/21bentleybentayga/bentley_21bentayga_angularfront_beluga"
    }
    if(name.includes("bentleycontinental gt speed convertible")){
        return "https://www.motortrend.com/uploads/bg-index/2020-bentley-continental-convertible.png?fit=around%7C875:492.1875"
    }
    if(name.includes("bentleycontinental gt speed")){
        return "https://purepng.com/public/uploads/large/purepng.com-blue-bentley-continental-gt-speed-carcarvehicletransportbentley-961524668129cjdkg.png"
    }
    if(name.includes("bentleycontinental gt v8 convertible")){
        return "https://i.pinimg.com/originals/1c/43/73/1c4373ad6b76c2e8094f0e476ff49887.png"
    }
    if(name.includes("bentleycontinental gt")){
        return "https://www.armotors.ae/wp-content/uploads/2017/05/PNGPIX-COM-Black-Bentley-Continental-GT-V8-Car-PNG-Image.png"
    }
    if(name.includes("bentleyflying spur") && !name.includes("bentleyflying spur hybrid")){
        return "https://i.pinimg.com/originals/08/a3/cc/08a3cc28e1005bb90e62a2d805252341.png"
    }
    if(name.includes("bentleyflying spur hybrid")){
        return "https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2024/bentley/flying-spur-hybride/s/sedan/exteriorColors/2023_bentley_wpi_flying-spur-hybride_s_berline_032_blk.png"
    }
    if(name.includes("buickencore") && !name.includes("buickencore gx")){
        return "https://images.dealer.com/ddc/vehicles/2021/Buick/Encore%20GX/SUV/perspective/front-left/2021_24.png"
    }
    if(name.includes("buickencore gx")){
        return "https://di-uploads-pod3.dealerinspire.com/championauto/uploads/2021/11/2022-buick-encore-gx-hero.png"
    }
    if(name.includes("buickenvision")){
        return "https://di-uploads-pod3.dealerinspire.com/championauto/uploads/2021/11/2022-buick-envision-hero.png"
    }
    if(name.includes("buickenclave")){
        return "https://images.dealer.com/ddc/vehicles/2023/Buick/Enclave/SUV/perspective/front-left/2023_76.png"
    }
    if(name.includes("bmwm8 competition coupe")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/M8_Competition_Coupe/4.4L/228F_300.png"
    }
    if(name.includes("bmwm8 competition convertible")){
        return "https://images.dealer.com/ddc/vehicles/2020/BMW/M8/Convertible/perspective/front-left/2020_76.png"
    }
    if(name.includes("bmwx2 xdrive28i")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/X2/xDrive28i/22XY_300.png"
    }
    if(name.includes("bmwx2 m35i")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/X2/M35i/22XZ_300.png"
    }
    if(name.includes("bmwm5")){
        return "https://media.adtorqueedge.com/new-cars/bmw-nz/m5-competition/variant/m5-comp.png"
    }
    if(name.includes("bmwm8 competition gran coupe")){
        return "https://media.adtorqueedge.com/new-cars/bmw-my/m8-gran-coupe/variant/m8-competition.png"
    }
    if(name.includes("bmwm850i xdrive coupe")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/8_Series_Coupe/M850i_xDrive/228C_300.png"
    }
    if(name.includes("bmwm850i xdrive convertible")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/8_Series_Convertible/M850i_xDrive/228G_300.png"
    }
    if(name.includes("bmwm850i xdrive gran coupe")){
        return "https://images.carprices.com/pricebooks_data/usa/colorized/2022/BMW/View2/8_Series_Gran_Coupe/M850i_xDrive/228J_300.png"
    }
    if(name.includes("bmwalpina")){
        return "https://www.cars.com/i/xlarge/in/v2/stock_photos/eeb95808-cdc7-4628-9dc7-155bf3f35b56/f1f3bc47-c97c-446a-b92d-bca2af803cb3.png"
    }
    if(name.includes("bmwm4")){
        return "https://autocanadaprod-com.cdn-convertus.com/uploads/sites/86/2021/02/BMW-M4-Competition-Coupe_v2.png"
    }
    if(name.includes("volvos60 b5")){
        return "https://vehicle-images.dealerinspire.com/stock-images/chrome/aa2bd81ff18dd5738115a24906e48f67.png"
    }
    else{
        console.log(name)
        return "https://pngimg.com/d/audi_PNG1769.png"
    }
}

