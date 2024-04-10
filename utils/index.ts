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

const sonatahybrid = "https://images.dealer.com/ddc/vehicles/2023/Hyundai/Sonata%20Hybrid/Sedan/perspective/front-left/2023_24.png"
const palissade = "https://images.dealer.com/ddc/vehicles/2020/Hyundai/Palisade/SUV/perspective/front-left/0020_24.png";
const kona = "https://hyundaioem.b-cdn.net/files/2023/07/1EW5D5G1KBB092_WEB_Front_Angle_R2P_1000x667.png"
const elantra = "https://i.pinimg.com/originals/7b/f5/c5/7bf5c5281607b48e5df8900fdb43b4b3.png"
const sonata = "https://i.pinimg.com/originals/78/4a/74/784a7482ce413112da50d143c8e1e1e5.png"
const santacruz = "https://img.sm360.ca/ir/w600h340c/images/newcar/ca/2023/hyundai/santa-cruz/ultimate/pickup/exteriorColors/2023_hyundai_santa-cruz_ultimate-design-de-nuit_032_saw.png"
const santafe = "https://di-uploads-development.dealerinspire.com/hyundaiofpalatine/uploads/2021/06/2020-Hyundai-Santa-Fe-SE.png"
const trax = "https://www.pngkey.com/png/full/950-9500264_lease-from-chevrolet-trax-2017-silver.png"
const trailblazer = "https://chevrolet.com.ph/wp-content/uploads/2022/09/SummitWhite.png"
const malibu = "https://www.pngkey.com/png/full/78-782474_2016-chevy-malibu-png.png"
const spark = "https://di-uploads-pod5.dealerinspire.com/mccluskeychevy/uploads/2016/05/2016-Chevrolet-Spark.png"
const bolteuv = "https://www.chevrolet.ca/content/dam/chevrolet/na/canada/english/index/hybrid-and-electric/2023-bolt-euv/jellies/v2/2023-bolteuv-1fg48-2lz-gsj-trimselector.png?imwidth=960"
const boltev = "https://images.carprices.com/pricebooks_data/usa/colorized/2022/Chevrolet/View2/Bolt_EV/1LT/1FB48_G7X.png"
const equinox = "https://crdms.images.consumerreports.org/c_lfill,w_480,q_auto,f_auto/prod/cars/cr/car-versions/14854-2020-chevrolet-equinox-lt"
const silverado = "https://purepng.com/public/uploads/large/purepng.com-chevrolet-silverado-colorado-black-carcarvehicletransportchevroletchevy-961524650954kotq0.png"
const tahoe = "https://di-uploads-pod2.dealerinspire.com/carlblackchevynashville/uploads/2018/11/2019-chevy-tahoe-from-carl-black-nashville.png"
const suburban = "https://www.pngitem.com/pimgs/b/571-5711131_2018-chevrolet-suburban-chevrolet-suburban-2018-png-transparent.png"
const corvette = "https://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG60.png"
const colorado = "https://www.pngkey.com/png/full/350-3509553_silver-2019-chevrolet-colorado-2018-chevy-colorado-black.png"
const zr2 = "https://images.carprices.com/pricebooks_data/usa/colorized/2023/Chevrolet/View2/Colorado/ZR2/14H43_GBA.png"
const camaro = "https://i.pinimg.com/originals/69/03/e3/6903e3af13e344c22909bcdce1768077.png"
const blazer = "https://di-uploads-pod34.dealerinspire.com/chevyofturnersville/uploads/2023/12/2024-trax.png"
const levantetrofeo = "https://www.maserati.com/content/dam/maserati/international/model-page/levante/carousel-models/LV%20Trofeo_Front.png"
const modenav8 = "https://www.maserati.com/content/dam/maserati/international/model-page/levante/carousel-models/LV%20Modena%20S_Front.png"
const levantegt = "https://vehicle-images.dealerinspire.com/stock-images/chrome/8c9e690927aedb050ecc52270d9353cf.png"
const levantemodena = "https://vehicle-images.dealerinspire.com/stock-images/chrome/8c9e690927aedb050ecc52270d9353cf.png"
const quattroportegt = "https://assets-clean.local-car-finder.com/images/14928/14928_st1280_089.png"
const quattroportemodena = "https://www.maserati.com/content/dam/maserati/international/model-page/quattroporte/carousel-models/QP%20MODENA_Front.png"
const quattroportetrofeo = "https://www.maserati.com/content/dam/maserati/international/model-page/quattroporte/carousel-models/QP%20Trofeo_Front.png"
const mc20 = "https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my23/mc20-cielo/picker/MC20-cielo-picker.png?$1400x2000$&fmt=png-alpha&fit=constrain"
const ghiblitrofeo = "https://www.maserati.com/content/dam/maserati/international/model-page/ghibli/carousel-models/GH%20Trofeo_Front.png"
const ghiblimodena = "https://www.maserati.com/content/dam/maserati/international/model-page/ghibli/carousel-models/GH%20Modena%20430%20S_Front.png"
const ghibligt = "https://www.maserati.com/content/dam/maserati/international/model-page/ghibli/carousel-models/GH%20GT%20Hybrid_Front.png"
const xc90 = "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/22535adc-1130-4adf-95a5-350d0cdb39d7/7145c0e6-5ecd-4cd5-b349-d709636ecec7.png"
const s60 = "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/9fa97d3c-bc45-4d61-9f05-e63a02d75034/7b036057-fd18-4c30-a73a-b7913dfa7261.png"
const promaster = "https://www.cars.com/i/large/in/v2/stock_photos/a0cbd81a-7d56-41a0-9098-ef3503c24c2b/1c255540-6fd8-4f3f-91ca-14a0bde98e58.png"
const ramclassic = "https://medias.fcacanada.ca/jellies/renditions/2023/800x510/CC23_DS6L41_2TJ_PRV_APA_XXX_XXX_AMQ.2194ac80d635977347198694e7562160.png"
const ram1500trx = "https://vehicle-images.dealerinspire.com/stock-images/chrome/4f20537f3527aa1caa6afa570646b51e.png"
const ram1500 = "https://www.pngall.com/wp-content/uploads/2016/03/Dodge-Ram-2016-PNG.png"

export const getImageUrl = (make: string, model: string, type:string) => {
    const name = make.toLowerCase() + model.toLowerCase();

    if(name.includes("chevroletspark")){
        return spark
    }
    if(name.includes("maseratilevante trofeo")){
        return levantetrofeo
    }
    if(name.includes("ram1500 classic")){
        return ramclassic
    }
    if(name.includes("ram1500 trx")){
        return ram1500trx
    }
    if(name.includes("ram1500")){
        return ram1500
    }
    if(name.includes("rampromaster city")){
        return promaster
    }

    if(name.includes("volvoxc90")){
        return xc90
    }
    if(name.includes("volvos60")){
        return s60
    }
    if(name.includes("maseratighibli trofeo")){
        return ghiblitrofeo
    }
    if(name.includes("maseratighibli gt")){
        return ghibligt
    }
    if(name.includes("maseratighibli modena")){
        return ghiblimodena
    }
    if(name.includes("maseratiquattroporte trofeo")){
        return quattroportetrofeo
    }
    if(name.includes("maseratiquattroporte modena")){
        return quattroportemodena
    }
    if(name.includes("maseratiquattroporte gt")){
        return quattroportegt
    }
    if(name.includes("maseratilevante modena")){
        return levantemodena
    }
    if(name.includes("maseratimc20")){
        return mc20
    }
    if(name.includes("maseratilevante gt")){
        return levantegt
    }
    if(name.includes("maseratilevante modena v8")){
        return modenav8
    }
    if(name.includes("chevroletblazer")){
        return blazer
    }
    if(name.includes("chevroletcamaro")){
        return camaro
    }
    if(name.includes("chevroletcolorado zr2")){
        return zr2
    }
    if(name.includes("chevroletcolorado")){
        return colorado
    }
    if(name.includes("chevroletcorvette")){
        return corvette
    }
    if(name.includes("chevrolettahoe")){
        return tahoe
    }
    if(name.includes("chevroletsuburban")){
        return suburban
    }
    if(name.includes("chevroletsilverado")){
        return silverado
    }
    if(name.includes("chevroletequinox")){
        return equinox
    }
    if(name.includes("chevroletbolt ev")){
        return boltev
    }
    if(name.includes("chevroletbolt euv")){
        return bolteuv
    }
    if(name == "hyundaisonata"){
        return sonata
    }
    if(name.includes("hyundaielantra")){
        return elantra
    }
    if(name.includes("hyundaisanta cruz")){
        return santacruz
    }
    if(name.includes("hyundaisanta fe")){
        return santafe
    }
    if(name.includes("chevrolettrax")){
        return trax
    }
    if(name.includes("chevrolettrailblazer")){
        return trailblazer
    }
    if(name.includes("chevroletmalibu")){
        return malibu
    }
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
    if(name.includes("hyundaitucson")){
        return "https://shazzycar.com/wp-content/uploads/2017/03/tucson.png"
    }
    if(name.includes("hyundaiioniq 5")){
        return "https://www.northscottsdalehyundai.com/blogs/4379/wp-content/uploads/2021/06/2022-ioniq-5-mineral-teal_o-1024x576.png"
    }
    if(name.includes("hyundaikona") && !name.includes("hyundaikona n")){
        return "https://s7g10.scene7.com/is/image/hyundaiautoever/Hyundai_OS_DE-J9W5D5G1XHHBZ5_UT1_Frame_0002?wid=1280&hei=720&fmt=png-alpha&fit=wrap,1"
    }
    if(name.includes("hyundaikona n")){
        return "https://images.dealer.com/ddc/vehicles/2023/Hyundai/Kona%20N/SUV/perspective/front-left/2023_24.png"
    }
    if(name.includes("hyundaiveloster n")){
        return "https://images.dealer.com/ddc/vehicles/2020/Hyundai/Veloster%20N/Hatchback/perspective/front-left/2020_24.png"
    }
    if(name.includes("hyundaipalisade")){
        return palissade;
    }
    if(name.includes("hyundaisonata hybrid")){
        return sonatahybrid;
    }
    else{
        console.log(name)
        return "https://pngimg.com/d/audi_PNG1769.png"
    }
}

