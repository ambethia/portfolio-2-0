import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import Orders from './Orders'
import Cartitems from './Cartitems'
import Womens from './Womens/Womens'
import WomensBeauty from './Womens/WomensAccessories/WomensBeauty'
// import data from '/data/json'
// Womens Collections
import WomensCollections from './Womens/WomensCollections/WomensCollections'
// WomensAccessories
import TechAccessories from './Womens/WomensAccessories/TechAccessories'
import WomensAccessories from './Womens/WomensAccessories/WomensAccessories'
import WomensBagsWallets from './Womens/WomensAccessories/WomensBagsWallets'
import WomensBelts from './Womens/WomensAccessories/WomensBelts'
import WomensHairAccessories from './Womens/WomensAccessories/WomensHairAccessories'
import WomensHats from './Womens/WomensAccessories/WomensHats'
import WomensJeweleryWatches from './Womens/WomensAccessories/WomensJeweleryWatches'
import WomensPinsPatches from './Womens/WomensAccessories/WomensPinsPatches'
import WomensScarves from './Womens/WomensAccessories/WomensScarves'
import WomensSocksTights from './Womens/WomensAccessories/WomensSocksTights'
import WomensSunglassReaders from './Womens/WomensAccessories/WomensSunglassReaders'
// End of WomensAccessories
// Womens Bottoms
import WomensBottoms from './Womens/WomensBottoms/WomensBottoms'
import WomensJeans from './Womens/WomensBottoms/WomensJeans'
import WomensLeggings from './Womens/WomensBottoms/WomensLeggings'
import WomensOverallsCoveralls from './Womens/WomensBottoms/WomensOverallsCoveralls'
import WomensPants from './Womens/WomensBottoms/WomensPants'
import WomensShorts from './Womens/WomensBottoms/WomensShorts'
import WomensSkirts from './Womens/WomensBottoms/WomensSkirts'
// End of WomensBottoms
// Womens Brands
import WomensAllBrands from './Womens/WomensBrands/WomensAllBrands'
import BrandsWomensAdidas from './Womens/WomensBrands/BrandsWomensAdidas'
import BrandsWomensCalvinKlein from './Womens/WomensBrands/BrandsWomensCalvinKlein'
import BrandsWomensStussy from './Womens/WomensBrands/BrandsWomensStussy'
import BrandsWomensTommyJeans from './Womens/WomensBrands/BrandsWomensTommyJeans'
import BrandsWomensChampion from './Womens/WomensBrands/BrandsWomensChampion'
import BrandsWomensFILA from './Womens/WomensBrands/BrandsWomensFILA'
// End of WomensBrands
// Womens Dresses Rompers
import WomensCasual from './Womens/WomensDressesRompers/WomensCasual'
import WomensDressesRompers from './Womens/WomensDressesRompers/WomensDressesRompers'
import WomensGoingOut from './Womens/WomensDressesRompers/WomensGoingOut'
import WomensMidiMaxi from './Womens/WomensDressesRompers/WomensMidiMaxi'
import WomensMini from './Womens/WomensDressesRompers/WomensMini'
import WomensPartyCelebration from './Womens/WomensDressesRompers/WomensPartyCelebration'
import WomensRompersJumpsuits from './Womens/WomensDressesRompers/WomensRompersJumpsuits'
// End of Womens Dresses Rompers
// Womens Jackets
import WomensBombers from './Womens/WomensJackets/WomensBombers'
import WomensCoatsParkas from './Womens/WomensJackets/WomensCoatsParkas'
import WomensDenim from './Womens/WomensJackets/WomensDenim'
import WomensJackets from './Womens/WomensJackets/WomensJackets'
import WomensLeatherSuede from './Womens/WomensJackets/WomensLeatherSuede'
import WomensLightweight from './Womens/WomensJackets/WomensLightweight'
// End of Womens Jackets
// WomensNew
import WomensNew from './Womens/WomensNew/WomensNew'
import WomensNewAccessories from './Womens/WomensNew/WomensNewAccessories'
import WomensNewBeauty from './Womens/WomensNew/WomensNewBeauty'
import WomensNewBottoms from './Womens/WomensNew/WomensNewBottoms'
import WomensNewDressesRompers from './Womens/WomensNew/WomensNewDressesRompers'
import WomensNewIntimatesLounge from './Womens/WomensNew/WomensNewIntimatesLounge'
import WomensNewShoes from './Womens/WomensNew/WomensNewShoes'
import WomensNewSwim from './Womens/WomensNew/WomensNewSwim'
import WomensNewTopsJackets from './Womens/WomensNew/WomensNewTopsJackets'
import WomensNewVintage from './Womens/WomensNew/WomensNewVintage'
// End of WomensNew
// WomensSale
import WomensSale from './Womens/WomensSale/WomensSale'
import WomensSaleAccessories from './Womens/WomensSale/WomensSaleAccessories'
import WomensSaleBagsWallets from './Womens/WomensSale/WomensSaleBagsWallets'
import WomensSaleBeauty from './Womens/WomensSale/WomensSaleBeauty'
import WomensSaleCoatsJackets from './Womens/WomensSale/WomensSaleCoatsJackets'
import WomensSaleDressesRompers from './Womens/WomensSale/WomensSaleDressesRompers'
import WomensSaleGraphicTees from './Womens/WomensSale/WomensSaleGraphicTees'
import WomensSaleIntimates from './Womens/WomensSale/WomensSaleIntimates'
import WomensSaleJeansPantsLeggings from './Womens/WomensSale/WomensSaleJeansPantsLeggings'
import WomensSaleJustAdded from './Womens/WomensSale/WomensSaleJustAdded'
import WomensSaleLoungeActivewear from './Womens/WomensSale/WomensSaleLoungeActivewear'
import WomensSaleShoes from './Womens/WomensSale/WomensSaleShoes'
import WomensSaleShortsSkirts from './Womens/WomensSale/WomensSaleShortsSkirts'
import WomensSaleSweatersSweatshirts from './Womens/WomensSale/WomensSaleSweatersSweatshirts'
import WomensSaleSwim from './Womens/WomensSale/WomensSaleSwim'
import WomensSaleTopsTees from './Womens/WomensSale/WomensSaleTopsTees'
// End of WomensSale
// WomensShoes
import WomensShoes from './Womens/WomensShoes/WomensShoes'
import WomensBootsBooties from './Womens/WomensShoes/WomensBootsBooties'
import WomensFlats from './Womens/WomensShoes/WomensFlats'
import WomensHeelsWedges from './Womens/WomensShoes/WomensHeelsWedges'
import WomensOxfordsLoafers from './Womens/WomensShoes/WomensOxfordsLoafers'
import WomensSandals from './Womens/WomensShoes/WomensSandals'
import WomensSlippers from './Womens/WomensShoes/WomensSlippers'
import WomensSneakers from './Womens/WomensShoes/WomensSneakers'
// End of WomensShoes
// WomensSwim
import WomensSwim from './Womens/WomensSwim/WomensSwim'
import WomensBeachTowels from './Womens/WomensSwim/WomensBeachTowels'
import WomensBikiniBottoms from './Womens/WomensSwim/WomensBikiniBottoms'
import WomensBikiniTops from './Womens/WomensSwim/WomensBikiniTops'
import WomensMixMatch from './Womens/WomensSwim/WomensMixMatch'
import WomensOnePieces from './Womens/WomensSwim/WomensOnePieces'
// End of WomensSwim
// Womens Tops
import WomensTops from './Womens/WomensTops/WomensTops'
import WomensBasicTees from './Womens/WomensTops/WomensBasicTees'
import WomensBodySuits from './Womens/WomensTops/WomensBodySuits'
import WomensGoingOutTops from './Womens/WomensTops/WomensGoingOutTops'
import WomensGraphicTees from './Womens/WomensTops/WomensGraphicTees'
import WomensShirtsBlouses from './Womens/WomensTops/WomensShirtsBlouses'
import WomensSweatersCardigans from './Womens/WomensTops/WomensSweatersCardigans'
import WomensSweatShirtsPullovers from './Womens/WomensTops/WomensSweatShirtsPullovers'
import WomensTanks from './Womens/WomensTops/WomensTanks'
// End of Womens Tops
// Womens Vintage
import WomensVintage from './Womens/WomensVintage/WomensVintage'
import WomensVintageBottoms from './Womens/WomensVintage/WomensVintageBottoms'
import WomensVintageDressesRompers from './Womens/WomensVintage/WomensVintageDressesRompers'
import WomensVintageTopsJackets from './Womens/WomensVintage/WomensVintageTopsJackets'
// End of WomensVintage
import Mens from './Mens/Mens'
// Mens Accessories
import MensAccessories from './Mens/MensAccessories/MensAccessories'
import MensBagsWallets from './Mens/MensAccessories/MensBagsWallets'
import MensBandanas from './Mens/MensAccessories/MensBandanas'
import MensBelts from './Mens/MensAccessories/MensBelts'
import MensHatsBeanies from './Mens/MensAccessories/MensHatsBeanies'
import MensPinsPatches from './Mens/MensAccessories/MensPinsPatches'
import MensSunglassesReaders from './Mens/MensAccessories/MensSunglassesReaders'
import MensWatchesJewelery from './Mens/MensAccessories/MensWatchesJewelery'
// End of Mens Accessories
// Mens Bottoms
import MensBottoms from './Mens/MensBottoms/MensBottoms'
import MensAthletic from './Mens/MensBottoms/MensAthletic'
import MensJeans from './Mens/MensBottoms/MensJeans'
import MensOverallsCoveralls from './Mens/MensBottoms/MensOverallsCoveralls'
import MensPants from './Mens/MensBottoms/MensPants'
import MensShorts from './Mens/MensBottoms/MensShorts'
// End of MensBottoms
// Mens Brands
import MensAllBrands from './Mens/MensBrands/MensAllBrands'
import MensAdidas from './Mens/MensBrands/MensAdidas'
import MensAlphaIndustries from './Mens/MensBrands/MensAlphaIndustries'
import MensBDG from './Mens/MensBrands/MensBDG'
import MensBrands from './Mens/MensBrands/MensBrands'
import MensCalvinKlein from './Mens/MensBrands/MensCalvinKlein'
import MensPatagonia from './Mens/MensBrands/MensPatagonia'
import MensReebok from './Mens/MensBrands/MensReebok'
import MensFILA from './Mens/MensBrands/MensFILA'
import MensStussy from './Mens/MensBrands/MensStussy'
// End of Mens Brands
// MensGraphicTees
import MensArtDesign from './Mens/MensGraphicTees/MensArtDesign'
import MensGraphicBrandLogos from './Mens/MensGraphicTees/MensGraphicBrandLogos'
import MensGraphicMusic from './Mens/MensGraphicTees/MensGraphicMusic'
import MensGraphicTees from './Mens/MensGraphicTees/MensGraphicTees'
import MensPopCulture from './Mens/MensGraphicTees/MensPopCulture'
import MensSportAthletic from './Mens/MensGraphicTees/MensSportAthletic'
// End of MensGraphicTees
// MensGrooming
import MensBeardShave from './Mens/MensGrooming/MensBeardShave'
import MensCologone from './Mens/MensGrooming/MensCologone'
import MensGrooming from './Mens/MensGrooming/MensGrooming'
import MensHair from './Mens/MensGrooming/MensHair'
import MensSkin from './Mens/MensGrooming/MensSkin'
// End of MensGrooming
// Mens Jackets
import MensBomber from './Mens/MensJackets/MensBomber'
import MensJackets from './Mens/MensJackets/MensJackets'
import MensCoats from './Mens/MensJackets/MensCoats'
import MensDenimTrucker from './Mens/MensJackets/MensDenimTrucker'
import MensLeatherSuede from './Mens/MensJackets/MensLeatherSuede'
import MensWindbreaker from './Mens/MensJackets/MensWindbreaker'
// End of Mens Jackets
// MensNew
import MensNew from './Mens/MensNew/MensNew'
import MensNewAccessories from './Mens/MensNew/MensNewAccessories'
import MensNewBottoms from './Mens/MensNew/MensNewBottoms'
import MensNewGraphics from './Mens/MensNew/MensNewGraphics'
import MensNewGrooming from './Mens/MensNew/MensNewGrooming'
import MensNewJacketsCoats from './Mens/MensNew/MensNewJacketsCoats'
import MensNewShoes from './Mens/MensNew/MensNewShoes'
import MensNewTops from './Mens/MensNew/MensNewTops'
// End of MensNew
// MensSale
import MensSale from './Mens/MensSale/MensSale'
import MensSaleAccessories from './Mens/MensSale/MensSaleAccessories'
import MensSaleCoatsJackets from './Mens/MensSale/MensSaleCoatsJackets'
import MensSaleGraphicTees from './Mens/MensSale/MensSaleGraphicTees'
import MensSaleHatsBeanies from './Mens/MensSale/MensSaleHatsBeanies'
import MensSaleJeans from './Sale/MensSale/MensSaleJeans'
import MensSaleHats from './Sale/MensSale/MensSaleHats'
import MensSaleJustAdded from './Mens/MensSale/MensSaleJustAdded'
import MensSaleShirts from './Mens/MensSale/MensSaleShirts'
import MensSaleShoes from './Mens/MensSale/MensSaleShoes'
import MensSaleSweatersSweatshirts from './Mens/MensSale/MensSaleSweatersSweatshirts'
import MensSaleTeesTanks from './Mens/MensSale/MensSaleTeesTanks'
// End of MensSale
// Mens Shoes
import MensBoots from './Mens/MensShoes/MensBoots'
import MensDressShoes from './Mens/MensShoes/MensDressShoes'
import MensShoes from './Mens/MensShoes/MensShoes'
import MensSlippersSandals from './Mens/MensShoes/MensSlippersSandals'
import MensSneakers from './Mens/MensShoes/MensSneakers'
// End of Mens Shoes
// Mens Socks Underwear
import MensSocks from './Mens/MensSocksUnderwear/MensSocks'
import MensSocksUnderwear from './Mens/MensSocksUnderwear/MensSocksUnderwear'
import MensUnderwear from './Mens/MensSocksUnderwear/MensUnderwear'
// End of Mens Socks Underwear
// Mens Tops
// import MensGraphicTees from './Mens/MensTops/MensGraphicTees'
import MensHoodies from './Mens/MensTops/MensHoodies'
import MensShirts from './Mens/MensTops/MensShirts'
import MensSweaters from './Mens/MensTops/MensSweaters'
import MensTees from './Mens/MensTops/MensTees'
import MensTops from './Mens/MensTops/MensTops'
// End of Mens Tops
import Sale from './Sale/Sale'
// Apartment Sale
import ApartmentSaleBath from './Sale/ApartmentSale/ApartmentSaleBath'
import ApartmentSale from './Sale/ApartmentSale/ApartmentSale'
import ApartmentSaleBedding from './Sale/ApartmentSale/ApartmentSaleBedding'
import ApartmentSaleBooks from './Sale/ApartmentSale/ApartmentSaleBooks'
import ApartmentSaleFurniture from './Sale/ApartmentSale/ApartmentSaleFurniture'
import ApartmentSaleJustAdded from './Sale/ApartmentSale/ApartmentSaleJustAdded'
import ApartmentSaleKitchen from './Sale/ApartmentSale/ApartmentSaleKitchen'
import ApartmentSaleMusicTech from './Sale/ApartmentSale/ApartmentSaleMusicTech'
import ApartmentSaleParty from './Sale/ApartmentSale/ApartmentSaleParty'
import ApartmentSalePillows from './Sale/ApartmentSale/ApartmentSalePillows'
import ApartmentSaleRoomDecor from './Sale/ApartmentSale/ApartmentSaleRoomDecor'
import ApartmentSaleRugs from './sale/ApartmentSale/ApartmentSaleRugs'
// End of Apartment Sale
// Beauty Sale
import BeautySale from './Sale/BeautySale/BeautySale'
// End of Beauty Sale
// Intimates Sale
import IntimatesSaleBras from './Sale/IntimatesSale/IntimatesSaleBras'
import IntimatesSale from './Sale/IntimatesSale/IntimatesSale'
import IntimatesSaleLounge from './Sale/IntimatesSale/IntimatesSaleLounge'
import IntimatesSaleSocks from './Sale/IntimatesSale/IntimatesSaleSocks'
import IntimatesSaleSwim from './Sale/IntimatesSale/IntimatesSaleSwim'
// End of Intimates Sale
// Mens Sale
import MensSaleCoats from './Sale/MensSale/MensSaleCoats'
import MensSaleSweaters from './Sale/MensSale/MensSaleSweaters'
import MensSaleTees from './Sale/MensSale/MensSaleTees'
// End of Mens Sale
// Music Tech Sale
import MusicTechSale from './Sale/MusicTechSale/MusicTechSale'
import MusicTechSalePhoto from './Sale/MusicTechSale/MusicTechSalePhoto'
import MusicTechSaleVinyl from './Sale/MusicTechSale/MusicTechSaleVinyl'
// End of Music Tech Sale
// Womens Sale
import WomensSaleBags from './Sale/WomensSale/WomensSaleBags'
import WomensSaleCoats from './Sale/WomensSale/WomensSaleCoats'
import WomensSaleDresses from './Sale/WomensSale/WomensSaleDresses'
import WomensSaleJeansPants from './Sale/WomensSale/WomensSaleJeansPants'
import WomensSaleLounge from './Sale/WomensSale/WomensSaleLounge'
import WomensSaleShorts from './Sale/WomensSale/WomensSaleShorts'
import WomensSaleSweaters from './Sale/WomensSale/WomensSaleSweaters'
import WomensSaleTops from './Sale/WomensSale/WomensSaleTops'
// End of Womens Sale
// Apartment
// ApartmentArtDecor
import ArtDecor from './Apartment/ApartmentArtDecor/ArtDecor'
import Accessories from './Apartment/ApartmentArtDecor/Accessories'
import Candles from './Apartment/ApartmentArtDecor/Candles'
import Frames from './Apartment/ApartmentArtDecor/Frames'
import Mirrors from './Apartment/ApartmentArtDecor/Mirrors'
import PillowsThrows from './Apartment/ApartmentArtDecor/PillowsThrows'
import PlantersTerrariums from './Apartment/ApartmentArtDecor/PlantersTerrariums'
import Rugs from './Apartment/ApartmentArtDecor/Rugs'
import Tapestries from './Apartment/ApartmentArtDecor/Tapestries'
import Wallart from './Apartment/ApartmentArtDecor/Wallart'
import Window from './Apartment/ApartmentArtDecor/Window'
// End of ApartmentArtDecor
// ApartmentBath
import ApartmentBath from './Apartment/ApartmentBath/ApartmentBath'
import BathAccessories from './Apartment/ApartmentBath/BathAccessories'
import BathMats from './Apartment/ApartmentBath/BathMats'
import Laundry from './Apartment/ApartmentBath/Laundry'
import ShowerCurtains from './Apartment/ApartmentBath/ShowerCurtains'
import Towels from './Apartment/ApartmentBath/Towels'
// End of ApartmentBath
// Apartment Bedding
import ApartmentBedding from './Apartment/ApartmentBedding/ApartmentBedding'
import BeddingBasics from './Apartment/ApartmentBedding/BeddingBasics'
import ComfortersQuiltsBlankets from './Apartment/ApartmentBedding/ComfortersQuiltsBlankets'
import DuvetCovers from './Apartment/ApartmentBedding/DuvetCovers'
import Pillowcases from './Apartment/ApartmentBedding/Pillowcases'
// import PillowsThrows from './Apartment/ApartmentBedding/PillowsThrows'
import Sheets from './Apartment/ApartmentBedding/Sheets'
import SnoozeSets from './Apartment/ApartmentBedding/SnoozeSets'
// import Tapestries from './Apartment/ApartmentBedding/Tapestries'
// End of ApartmentBedding
// Apartment Books Stationery
import ApartmentBooksStationery from './Apartment/ApartmentBooksStationery/ApartmentBooksStationery'
import Books from './Apartment/ApartmentBooksStationery/Books'
import ColoringActivites from './Apartment/ApartmentBooksStationery/ColoringActivites'
import DeskAccessories from './Apartment/ApartmentBooksStationery/DeskAccessories'
import GreetingCards from './Apartment/ApartmentBooksStationery/GreetingCards'
import JournalsNotebooks from './Apartment/ApartmentBooksStationery/JournalsNotebooks'
import PhotoAlbums from './Apartment/ApartmentBooksStationery/PhotoAlbums'
// End of Apartment Books Stationery
// ApartmentCollections
import ApartmentCollections from './Apartment/ApartmentCollections/ApartmentCollections'
import BackOnCampus from './Apartment/ApartmentCollections/BackOnCampus'
import OneOfAKind from './Apartment/ApartmentCollections/OneOfAKind'
import TheBeddingShop from './Apartment/ApartmentCollections/TheBeddingShop'
import ThePrintShop from './Apartment/ApartmentCollections/ThePrintShop'
// End of ApartmentCollections
// Apartment Furniture
import BedsHeadboards from './Apartment/ApartmentFurniture/BedsHeadboards'
import ApartmentFurniture from './Apartment/ApartmentFurniture/ApartmentFurniture'
import Chairs from './Apartment/ApartmentFurniture/Chairs'
import DressesWardrobes from './Apartment/ApartmentFurniture/DressesWardrobes'
import Sofas from './Apartment/ApartmentFurniture/Sofas'
import StorageShelving from './Apartment/ApartmentFurniture/StorageShelving'
import Tables from './Apartment/ApartmentFurniture/Tables'
// End of Apartment Furniture
// Apartment Kitchen Bar
import ApartmentKitchenBar from './Apartment/ApartmentKitchenBar/ApartmentKitchenBar'
import Appliances from './Apartment/ApartmentKitchenBar/Appliances'
import BarwareSupplies from './Apartment/ApartmentKitchenBar/BarwareSupplies'
// import Cookbooks from './Apartment/ApartmentKitchenBar/Cookbooks'
import Cookwear from './Apartment/ApartmentKitchenBar/Cookwear'
import Dinnerware from './Apartment/ApartmentKitchenBar/Dinnerware'
import Drinkware from './Apartment/ApartmentKitchenBar/Drinkware'
import StorageAccessories from './Apartment/ApartmentKitchenBar/StorageAccessories'
//  End of Apartment Kitchen Bar
// Apartment Lighting
import ApartmentLighting from './Apartment/ApartmentLighting/ApartmentLighting'
import BulbsCordKits from './Apartment/ApartmentLighting/BulbsCordKits'
import FloorLamps from './Apartment/ApartmentLighting/FloorLamps'
import NoveltyStringLighting from './Apartment/ApartmentLighting/NoveltyStringLighting'
import PendantsSconces from './Apartment/ApartmentLighting/PendantsSconces'
import TableDeskLamps from './Apartment/ApartmentLighting/TableDeskLamps'
// End of Apartment Lighting
// ApartmentNew
import ApartmentNew from './Apartment/ApartmentNew/ApartmentNew'
import ApartmentNewBooks from './Apartment/ApartmentNew/ApartmentNewBooks'
import ApartmentNewFurniture from './Apartment/ApartmentNew/ApartmentNewFurniture'
import ApartmentNewKitchenBar from './Apartment/ApartmentNew/ApartmentNewKitchenBar'
import ApartmentNewPartyFun from './Apartment/ApartmentNew/ApartmentNewPartyFun'
import ApartmentNewTextiles from './Apartment/ApartmentNew/ApartmentNewTextiles'
// End of Apartment New
// Apartment Party Fun
import ApartmentParty from './Apartment/ApartmentPartyFun/ApartmentParty'
import Favors from './Apartment/ApartmentPartyFun/Favors'
import Games from './Apartment/ApartmentPartyFun/Games'
import Novelty from './Apartment/ApartmentPartyFun/Novelty'
import PartySuppliesDecoration from './Apartment/ApartmentPartyFun/PartySuppliesDecoration'
import PoolFloats from './Apartment/ApartmentPartyFun/PoolFloats'
// End Of Apartment Party Fun
// Apartment Sale
// import ApartmentSale from './Apartment/ApartmentSale/ApartmentSale'
// import ApartmentSaleBath from './Apartment/ApartmentSale/ApartmentSaleBath'
// import ApartmentSaleBedding from './Apartment/ApartmentSale/ApartmentSaleBedding'
// import ApartmentSaleBooks from './Apartment/ApartmentSale/ApartmentSaleBooks'
// import ApartmentSaleFurniture from './Apartment/ApartmentSale/ApartmentSaleFurniture'
// import ApartmentSaleJustAdded from './Apartment/ApartmentSale/ApartmentSaleJustAdded'
import ApartmentSaleKitchenBar from './Apartment/ApartmentSale/ApartmentSaleKitchenBar'
// import ApartmentSaleMusicTech from './Apartment/ApartmentSale/ApartmentSaleMusicTech'
import ApartmentSalePartyFun from './Apartment/ApartmentSale/ApartmentSalePartyFun'
import ApartmentSalePillowsTapestries from './Apartment/ApartmentSale/ApartmentSalePillowsTapestries'
// import ApartmentSaleRoomDecor from './Apartment/ApartmentSale/ApartmentSaleRoomDecor'
import ApartmentSaleRugCurtains from './Apartment/ApartmentSale/ApartmentSaleRugCurtains'
// End of Apartment Sale
// ApartmentStorage
import ApartmentStorage from './Apartment/ApartmentStorage/ApartmentStorage'
import BasketsBinsBoxes from './Apartment/ApartmentStorage/BasketsBinsBoxes'
import Bathroom from './Apartment/ApartmentStorage/Bathroom'
import Closet from './Apartment/ApartmentStorage/Closet'
import Desk from './Apartment/ApartmentStorage/Desk'
import HooksKnobs from './Apartment/ApartmentStorage/HooksKnobs'
import Jewelery from './Apartment/ApartmentStorage/Jewelery'
import Kitchen from './Apartment/ApartmentStorage/Kitchen'
import Shelving from './Apartment/ApartmentStorage/Shelving'
// End of ApartmentStorage
// End Of Apartment
import Layout from './Layout'
import Apartment from './Apartment/Apartment'
import Gifts from './Gifts'
import MusicTech from './MusicTech/MusicTech'
import Beauty from './Beauty/Beauty'
import Intimates from './Intimates/Intimates'
import Blog from './Blog'
import love from './love'
// Shoe productsPage
import AdidasShoesone from './Mens/ProductPages/AdidasShoesone'
import AdidasShoestwo from './Mens/ProductPages/AdidasShoestwo'
import AdidasShoesthree from './Mens/ProductPages/AdidasShoesthree'
import AdidasShoesfour from './Mens/ProductPages/AdidasShoesfour'
import AdidasShoesfive from './Mens/ProductPages/AdidasShoesfive'
import AdidasShoessix from './Mens/ProductPages/AdidasShoessix'
import AdidasShoesseven from './Mens/ProductPages/AdidasShoesseven'
import AdidasShoeseight from './Mens/ProductPages/AdidasShoeseight'
import AdidasShoesnine from './Mens/ProductPages/AdidasShoesnine'
import AdidasShoesten from './Mens/ProductPages/AdidasShoesten'
import AdidasShoeseleven from './Mens/ProductPages/AdidasShoeseleven'
import AdidasShoestwelve from './Mens/ProductPages/AdidasShoestwelve'
import AdidasShoesthirteen from './Mens/ProductPages/AdidasShoesthirteen'
import AdidasShoesfourteen from './Mens/ProductPages/AdidasShoesfourteen'
import AdidasShoesfifteen from './Mens/ProductPages/AdidasShoesfifteen'
import AdidasShoessixteen from './Mens/ProductPages/AdidasShoessixteen'
import AdidasShoesseventeen from './Mens/ProductPages/AdidasShoesseventeen'
import AdidasShoeseighteen from './Mens/ProductPages/AdidasShoeseighteen'
import AdidasShoesnineteen from './Mens/ProductPages/AdidasShoesnineteen'
import AdidasShoestwenty from './Mens/ProductPages/AdidasShoestwenty'

// End of Shoe productsPage
// Mens New Arrivals PP
import MensNewArrivalone from './Mens/ProductPages/MensNewArrivalone'
import MensNewArrivaltwo from './Mens/ProductPages/MensNewArrivaltwo'
import MensNewArrivalthree from './Mens/ProductPages/MensNewArrivalthree'
import MensNewArrivalfour from './Mens/ProductPages/MensNewArrivalfour'
import MensNewArrivalfive from './Mens/ProductPages/MensNewArrivalfive'
import MensNewArrivalsix from './Mens/ProductPages/MensNewArrivalsix'
import MensNewArrivalseven from './Mens/ProductPages/MensNewArrivalseven'
import MensNewArrivaleight from './Mens/ProductPages/MensNewArrivaleight'
import MensNewArrivalnine from './Mens/ProductPages/MensNewArrivalnine'
import MensNewArrivalten from './Mens/ProductPages/MensNewArrivalten'
import MensNewArrivaleleven from './Mens/ProductPages/MensNewArrivaleleven'
import MensNewArrivaltwelve from './Mens/ProductPages/MensNewArrivaltwelve'
import MensNewArrivalthirteen from './Mens/ProductPages/MensNewArrivalthirteen'
import MensNewArrivalfourteen from './Mens/ProductPages/MensNewArrivalfourteen'
import MensNewArrivalfifteen from './Mens/ProductPages/MensNewArrivalfifteen'
import MensNewArrivalsixteen from './Mens/ProductPages/MensNewArrivalsixteen'
import MensNewArrivalseventeen from './Mens/ProductPages/MensNewArrivalseventeen'
import MensNewArrivaleighteen from './Mens/ProductPages/MensNewArrivaleighteen'
import MensNewArrivalnineteen from './Mens/ProductPages/MensNewArrivalnineteen'
import MensNewArrivaltwenty from './Mens/ProductPages/MensNewArrivaltwenty'
// End of Mens New Arrivals PP
// Mens Graphic Tees PP
import MensGraphicTeesone from './Mens/ProductPages/MensGraphicTeesone'
import MensGraphicTeestwo from './Mens/ProductPages/MensGraphicTeestwo'
import MensGraphicTeesthree from './Mens/ProductPages/MensGraphicTeesthree'
import MensGraphicTeesfour from './Mens/ProductPages/MensGraphicTeesfour'
import MensGraphicTeesfive from './Mens/ProductPages/MensGraphicTeesfive'
import MensGraphicTeessix from './Mens/ProductPages/MensGraphicTeessix'
import MensGraphicTeesseven from './Mens/ProductPages/MensGraphicTeesseven'
import MensGraphicTeeseight from './Mens/ProductPages/MensGraphicTeeseight'
import MensGraphicTeesnine from './Mens/ProductPages/MensGraphicTeesnine'
import MensGraphicTeesten from './Mens/ProductPages/MensGraphicTeesten'
import MensGraphicTeeseleven from './Mens/ProductPages/MensGraphicTeeseleven'
import MensGraphicTeestwelve from './Mens/ProductPages/MensGraphicTeestwelve'
import MensGraphicTeesthirteen from './Mens/ProductPages/MensGraphicTeesthirteen'
import MensGraphicTeesfourteen from './Mens/ProductPages/MensGraphicTeesfourteen'
import MensGraphicTeesfifteen from './Mens/ProductPages/MensGraphicTeesfifteen'
import MensGraphicTeessixteen from './Mens/ProductPages/MensGraphicTeessixteen'
import MensGraphicTeesseventeen from './Mens/ProductPages/MensGraphicTeesseventeen'
import MensGraphicTeeseighteen from './Mens/ProductPages/MensGraphicTeeseighteen'
import MensGraphicTeesnineteen from './Mens/ProductPages/MensGraphicTeesnineteen'
import MensGraphicTeestwenty from './Mens/ProductPages/MensGraphicTeestwenty'
// End of Mens Graphic Tees PP
// Mens Tops PP
import MensTopsone from './Mens/ProductPages/MensTopsone'
import MensTopstwo from './Mens/ProductPages/MensTopstwo'
import MensTopsthree from './Mens/ProductPages/MensTopsthree'
import MensTopsfour from './Mens/ProductPages/MensTopsfour'
import MensTopsfive from './Mens/ProductPages/MensTopsfive'
import MensTopssix from './Mens/ProductPages/MensTopssix'
import MensTopsseven from './Mens/ProductPages/MensTopsseven'
import MensTopseight from './Mens/ProductPages/MensTopseight'
import MensTopsnine from './Mens/ProductPages/MensTopsnine'
import MensTopsten from './Mens/ProductPages/MensTopsten'
import MensTopseleven from './Mens/ProductPages/MensTopseleven'
import MensTopstwelve from './Mens/ProductPages/MensTopstwelve'
import MensTopsthirteen from './Mens/ProductPages/MensTopsthirteen'
import MensTopsfourteen from './Mens/ProductPages/MensTopsfourteen'
import MensTopsfifteen from './Mens/ProductPages/MensTopsfifteen'
import MensTopssixteen from './Mens/ProductPages/MensTopssixteen'
import MensTopsseventeen from './Mens/ProductPages/MensTopsseventeen'
import MensTopseighteen from './Mens/ProductPages/MensTopseighteen'
import MensTopsnineteen from './Mens/ProductPages/MensTopsnineteen'
import MensTopstwenty from './Mens/ProductPages/MensTopstwenty'
// End of Mens Tops PP
// import exclusiveswimsuits from './exclusiveswimsuits'
// import womensbodysuits from './womensbodysuits'
// import womensproductpage from './womensproductpage'
// import mensproductpage from './mensproductpage'

class App extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      location: '',
      bio: '',
      avatar: '',
      blog: []
    }
  }

  componentDidMount () {
    const URLGithub = 'https://api.github.com/users/chriskramer2020'
    window.fetch(URLGithub).then(res => res.json()).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        bio: data.bio,
        avatar: data.avatar_url,
        blog: data.blog
      })
    })
  }

  render () {
    return <Router history={browserHistory}>
      {/* <Route component={data} /> */}
      <Route component={Layout}>
        <Route path='/' component={Home} />
        <Route path='/Mens' component={Mens} />
        <Route path='/Womens' component={Womens} />
        <Route path='/Sale' component={Sale} />
        <Route path='/Apartment' component={Apartment} />
        <Route path='/Gifts' component={Gifts} />
        <Route path='/MusicTech' component={MusicTech} />
        <Route path='/Beauty' component={Beauty} />
        <Route path='/WomensBeauty' component={WomensBeauty} />
        <Route path='/Intimates' component={Intimates} />
        <Route path='/Blog' component={Blog} />
        <Route path='/BeautySale' component={BeautySale} />
        <Route path='/Orders' component={Orders} />
        <Route path='/Cartitems' component={Cartitems} />
        <Route path='/love' component={love} />
        <Route path='/WomensCollections' component={WomensCollections} />
        {/* Womens/WomensAccessories */}
        <Route path='/TechAccessories' component={TechAccessories} />
        <Route path='/WomensAccessories' component={WomensAccessories} />
        <Route path='/WomensBagsWallets' component={WomensBagsWallets} />
        <Route path='/WomensBelts' component={WomensBelts} />
        <Route path='/WomensHairAccessories' component={WomensHairAccessories} />
        <Route path='/WomensHats' component={WomensHats} />
        <Route path='/WomensJeweleryWatches' component={WomensJeweleryWatches} />
        <Route path='/WomensPinsPatches' component={WomensPinsPatches} />
        <Route path='/WomensScarves' component={WomensScarves} />
        <Route path='/WomensSocksTights' component={WomensSocksTights} />
        <Route path='/WomensSunglassReaders' component={WomensSunglassReaders} />
        {/* End of Womens Accessories */}
        {/* Womens Bottoms */}
        <Route path='/WomensBottoms' component={WomensBottoms} />
        <Route path='/WomensJeans' component={WomensJeans} />
        <Route path='/WomensLeggings' component={WomensLeggings} />
        <Route path='/WomensOverallsCoveralls' component={WomensOverallsCoveralls} />
        <Route path='/WomensPants' component={WomensPants} />
        <Route path='/WomensShorts' component={WomensShorts} />
        <Route path='/WomensSkirts' component={WomensSkirts} />
        {/* End of Womens Bottoms */}
        {/* Womens Brands */}
        <Route path='/BrandsWomensAdidas' component={BrandsWomensAdidas} />
        <Route path='/BrandsWomensCalvinKlein' component={BrandsWomensCalvinKlein} />
        <Route path='/BrandsWomensChampion' component={BrandsWomensChampion} />
        <Route path='/BrandsWomensFILA' component={BrandsWomensFILA} />
        <Route path='/BrandsWomensStussy' component={BrandsWomensStussy} />
        <Route path='/BrandsWomensTommyJeans' component={BrandsWomensTommyJeans} />
        <Route path='/WomensAllBrands' component={WomensAllBrands} />
        {/* End of Womens Brands */}
        {/* Womens Dresses Rompers */}
        <Route path='/WomensCasual' component={WomensCasual} />
        <Route path='/WomensDressesRompers' component={WomensDressesRompers} />
        <Route path='/WomensGoingOut' component={WomensGoingOut} />
        <Route path='/WomensMidiMaxi' component={WomensMidiMaxi} />
        <Route path='/WomensMini' component={WomensMini} />
        <Route path='/WomensPartyCelebration' component={WomensPartyCelebration} />
        <Route path='/WomensRompersJumpsuits' component={WomensRompersJumpsuits} />
        {/* End of Womens Dresses Rompers */}
        {/* WomensJackets */}
        <Route path='/WomensBombers' component={WomensBombers} />
        <Route path='/WomensCoatsParkas' component={WomensCoatsParkas} />
        <Route path='/WomensDenim' component={WomensDenim} />
        <Route path='/WomensJackets' component={WomensJackets} />
        <Route path='/WomensLeatherSuede' component={WomensLeatherSuede} />
        <Route path='/WomensLightweight' component={WomensLightweight} />
        {/* End of Womens Jackets */}
        {/* Womens New */}
        <Route path='/WomensNew' component={WomensNew} />
        <Route path='/WomensNewAccessories' component={WomensNewAccessories} />
        <Route path='/WomensNewBeauty' component={WomensNewBeauty} />
        <Route path='/WomensNewDressesRompers' component={WomensNewDressesRompers} />
        <Route path='/WomensNewIntimatesLounge' component={WomensNewIntimatesLounge} />
        <Route path='/WomensNewShoes' component={WomensNewShoes} />
        <Route path='/WomensNewSwim' component={WomensNewSwim} />
        <Route path='/WomensNewVintage' component={WomensNewVintage} />
        <Route path='/WomensNewBottoms' component={WomensNewBottoms} />
        <Route path='/WomensNewTopsJackets' component={WomensNewTopsJackets} />
        {/* End of Womens New */}
        {/* Womens Sale */}
        <Route path='/WomensSale' component={WomensSale} />
        <Route path='/WomensSaleAccessories' component={WomensSaleAccessories} />
        <Route path='/WomensSaleBagsWallets' component={WomensSaleBagsWallets} />
        <Route path='/WomensSaleBeauty' component={WomensSaleBeauty} />
        <Route path='/WomensSaleCoatsJackets' component={WomensSaleCoatsJackets} />
        <Route path='/WomensSaleDressesRompers' component={WomensSaleDressesRompers} />
        <Route path='/WomensSaleGraphicTees' component={WomensSaleGraphicTees} />
        <Route path='/WomensSaleIntimates' component={WomensSaleIntimates} />
        <Route path='/WomensSaleJeansPantsLeggings' component={WomensSaleJeansPantsLeggings} />
        <Route path='/WomensSaleJustAdded' component={WomensSaleJustAdded} />
        <Route path='/WomensSaleLoungeActivewear' component={WomensSaleLoungeActivewear} />
        <Route path='/WomensSaleShoes' component={WomensSaleShoes} />
        <Route path='/WomensSaleShortsSkirts' component={WomensSaleShortsSkirts} />
        <Route path='/WomensSaleSweatersSweatshirts' component={WomensSaleSweatersSweatshirts} />
        <Route path='/WomensSaleSwim' component={WomensSaleSwim} />
        <Route path='/WomensSaleTopsTees' component={WomensSaleTopsTees} />
        {/* End of Womens Sale */}
        {/* Womens Shoes */}
        <Route path='/WomensBootsBooties' component={WomensBootsBooties} />
        <Route path='/WomensBootsBooties' component={WomensBootsBooties} />
        <Route path='/WomensFlats' component={WomensFlats} />
        <Route path='/WomensHeelsWedges' component={WomensHeelsWedges} />
        <Route path='/WomensOxfordsLoafers' component={WomensOxfordsLoafers} />
        <Route path='/WomensSandals' component={WomensSandals} />
        <Route path='/WomensShoes' component={WomensShoes} />
        <Route path='/WomensSlippers' component={WomensSlippers} />
        <Route path='/WomensSneakers' component={WomensSneakers} />
        {/* End of Womens Shoes */}
        {/* WomensSwim */}
        <Route path='/WomensBeachTowels' component={WomensBeachTowels} />
        <Route path='/WomensBikiniBottoms' component={WomensBikiniBottoms} />
        <Route path='/WomensBikiniTops' component={WomensBikiniTops} />
        <Route path='/WomensMixMatch' component={WomensMixMatch} />
        <Route path='/WomensOnePieces' component={WomensOnePieces} />
        <Route path='/WomensSwim' component={WomensSwim} />
        {/* End of WomensSwim */}
        {/* Womens Tops */}
        <Route path='/WomensBasicTees' component={WomensBasicTees} />
        <Route path='/WomensBodySuits' component={WomensBodySuits} />
        <Route path='/WomensGoingOutTops' component={WomensGoingOutTops} />
        <Route path='/WomensGraphicTees' component={WomensGraphicTees} />
        <Route path='/WomensShirtsBlouses' component={WomensShirtsBlouses} />
        <Route path='/WomensSweatersCardigans' component={WomensSweatersCardigans} />
        <Route path='/WomensSweatShirtsPullovers' component={WomensSweatShirtsPullovers} />
        <Route path='/WomensTanks' component={WomensTanks} />
        <Route path='/WomensTops' component={WomensTops} />
        {/* End of Womens Tops */}
        {/* Womens Vintage */}
        <Route path='/WomensVintage' component={WomensVintage} />
        <Route path='/WomensVintageBottoms' component={WomensVintageBottoms} />
        <Route path='/WomensVintageDressesRompers' component={WomensVintageDressesRompers} />
        <Route path='/WomensVintageTopsJackets' component={WomensVintageTopsJackets} />
        {/* End of Womens Vintage */}
        {/* Mens Accessories */}
        <Route path='/MensAccessories' component={MensAccessories} />
        <Route path='/MensBagsWallets' component={MensBagsWallets} />
        <Route path='/MensBandanas' component={MensBandanas} />
        <Route path='/MensBelts' component={MensBelts} />
        <Route path='/MensHatsBeanies' component={MensHatsBeanies} />
        <Route path='/MensPinsPatches' component={MensPinsPatches} />
        <Route path='/MensSunglassesReaders' component={MensSunglassesReaders} />
        <Route path='/MensWatchesJewelery' component={MensWatchesJewelery} />
        {/* End of Mens Accessories */}
        {/* MensBottoms */}
        <Route path='/MensAthletic' component={MensAthletic} />
        <Route path='/MensBottoms' component={MensBottoms} />
        <Route path='/MensJeans' component={MensJeans} />
        <Route path='/MensOverallsCoveralls' component={MensOverallsCoveralls} />
        <Route path='/MensPants' component={MensPants} />
        <Route path='/MensShorts' component={MensShorts} />
        {/* End of Mens Bottoms */}
        {/* MensBrands */}
        <Route path='/MensAllBrands' component={MensAllBrands} />
        <Route path='/MensAdidas' component={MensAdidas} />
        <Route path='/MensAlphaIndustries' component={MensAlphaIndustries} />
        <Route path='/MensBDG' component={MensBDG} />
        <Route path='/MensBrands' component={MensBrands} />
        <Route path='/MensCalvinKlein' component={MensCalvinKlein} />
        <Route path='/MensReebok' component={MensReebok} />
        <Route path='/MensPatagonia' component={MensPatagonia} />
        <Route path='/MensStussy' component={MensStussy} />
        <Route path='/MensFILA' component={MensFILA} />
        {/* End of Mens Brands */}
        {/* Mens Graphic Tees */}
        <Route path='/MensArtDesign' component={MensArtDesign} />
        <Route path='/MensGraphicBrandLogos' component={MensGraphicBrandLogos} />
        <Route path='/MensGraphicMusic' component={MensGraphicMusic} />
        <Route path='/MensGraphicTees' component={MensGraphicTees} />
        <Route path='/MensPopCulture' component={MensPopCulture} />
        <Route path='/MensSportAthletic' component={MensSportAthletic} />
        {/* End of Mens Graphic Tees */}
        {/* Mens Grooming */}
        <Route path='/MensBeardShave' component={MensBeardShave} />
        <Route path='/MensCologone' component={MensCologone} />
        <Route path='/MensGrooming' component={MensGrooming} />
        <Route path='/MensHair' component={MensHair} />
        <Route path='/MensSkin' component={MensSkin} />
        {/* End of MensGrooming */}
        {/* Mens Jackets */}
        <Route path='/MensCoats' component={MensCoats} />
        <Route path='/MensJackets' component={MensJackets} />
        <Route path='/MensBomber' component={MensBomber} />
        <Route path='/MensDenimTrucker' component={MensDenimTrucker} />
        <Route path='/MensLeatherSuede' component={MensLeatherSuede} />
        <Route path='/MensWindbreaker' component={MensWindbreaker} />
        {/* End of Mens Jackets */}
        {/* Mens New */}
        <Route path='/MensNew' component={MensNew} />
        <Route path='/MensNewAccessories' component={MensNewAccessories} />
        <Route path='/MensNewBottoms' component={MensNewBottoms} />
        <Route path='/MensNewGraphics' component={MensNewGraphics} />
        <Route path='/MensNewShoes' component={MensNewShoes} />
        <Route path='/MensNewTops' component={MensNewTops} />
        <Route path='/MensNewGrooming' component={MensNewGrooming} />
        <Route path='/MensNewJacketsCoats' component={MensNewJacketsCoats} />
        {/* End of Mens New */}
        {/* Mens Sale */}
        <Route path='/MensSale' component={MensSale} />
        <Route path='/MensSaleAccessories' component={MensSaleAccessories} />
        <Route path='/MensSaleCoatsJackets' component={MensSaleCoatsJackets} />
        <Route path='/MensSaleGraphicTees' component={MensSaleGraphicTees} />
        <Route path='/MensSaleHatsBeanies' component={MensSaleHatsBeanies} />
        <Route path='/MensSaleHats' component={MensSaleHats} />
        <Route path='/MensSaleJustAdded' component={MensSaleJustAdded} />
        <Route path='/MensSaleShirts' component={MensSaleShirts} />
        <Route path='/MensSaleShoes' component={MensSaleShoes} />
        <Route path='/MensSaleSweatersSweatshirts' component={MensSaleSweatersSweatshirts} />
        <Route path='/MensSaleTeesTanks' component={MensSaleTeesTanks} />
        {/* End of Mens Sale */}
        {/* Mens Shoes */}
        <Route path='/MensShoes' component={MensShoes} />
        <Route path='/MensBoots' component={MensBoots} />
        <Route path='/MensDressShoes' component={MensDressShoes} />
        <Route path='/MensSlippersSandals' component={MensSlippersSandals} />
        <Route path='/MensSneakers' component={MensSneakers} />
        {/* End of Mens Shoes */}
        {/* Mens Socks Underwear */}
        <Route path='/MensSocks' component={MensSocks} />
        <Route path='/MensSocksUnderwear' component={MensSocksUnderwear} />
        <Route path='/MensUnderwear' component={MensUnderwear} />
        {/* End of Mens Socks Underwear */}
        {/* Mens Tops */}
        <Route path='/MensGraphicTees' component={MensGraphicTees} />
        <Route path='/MensHoodies' component={MensHoodies} />
        <Route path='/MensShirts' component={MensShirts} />
        <Route path='/MensSweaters' component={MensSweaters} />
        <Route path='/MensTees' component={MensTees} />
        <Route path='/MensTops' component={MensTops} />
        {/* End of Mens Tops */}
        {/* Apartment Sale */}
        <Route path='/ApartmentSaleBath' component={ApartmentSaleBath} />
        <Route path='/ApartmentSale' component={ApartmentSale} />
        <Route path='/ApartmentSaleBedding' component={ApartmentSaleBedding} />
        <Route path='/ApartmentSaleBooks' component={ApartmentSaleBooks} />
        <Route path='/ApartmentSaleFurniture' component={ApartmentSaleFurniture} />
        <Route path='/ApartmentSaleJustAdded' component={ApartmentSaleJustAdded} />
        <Route path='/ApartmentSaleKitchen' component={ApartmentSaleKitchen} />
        <Route path='/ApartmentSaleMusicTech' component={ApartmentSaleMusicTech} />
        <Route path='/ApartmentSaleParty' component={ApartmentSaleParty} />
        <Route path='/ApartmentSalePillows' component={ApartmentSalePillows} />
        <Route path='/ApartmentSaleRoomDecor' component={ApartmentSaleRoomDecor} />
        <Route path='/ApartmentSaleRugs' component={ApartmentSaleRugs} />
        {/* End of Apartment Sale */}
        {/* IntimatesSale */}
        <Route path='/IntimatesSaleBras' component={IntimatesSaleBras} />
        <Route path='/IntimatesSale' component={IntimatesSale} />
        <Route path='/IntimatesSaleLounge' component={IntimatesSaleLounge} />
        <Route path='/IntimatesSaleSocks' component={IntimatesSaleSocks} />
        <Route path='/IntimatesSaleSwim' component={IntimatesSaleSwim} />
        {/* End of IntimatesSale */}
        {/* Mens Sale */}
        <Route path='/MensSaleAccessories' component={MensSaleAccessories} />
        <Route path='/MensSaleCoats' component={MensSaleCoats} />
        <Route path='/MensSaleGraphicTees' component={MensSaleGraphicTees} />
        <Route path='/MensSaleJeans' component={MensSaleJeans} />
        {/* <Route path='/MensSaleHats' component={MensSaleHats} /> */}
        <Route path='/MensSaleJustAdded' component={MensSaleJustAdded} />
        <Route path='/MensSaleShirts' component={MensSaleShirts} />
        <Route path='/MensSaleShoes' component={MensSaleShoes} />
        <Route path='/MensSaleSweaters' component={MensSaleSweaters} />
        <Route path='/MensSaleTees' component={MensSaleTees} />
        <Route path='/MensSaleShirts' component={MensSaleShirts} />
        <Route path='/MensSaleShirts' component={MensSaleShirts} />
        {/* End of Mens Sale */}
        {/* MusicTechSale */}
        <Route path='/MusicTechSale' component={MusicTechSale} />
        <Route path='/MusicTechSalePhoto' component={MusicTechSalePhoto} />
        <Route path='/MusicTechSaleVinyl' component={MusicTechSaleVinyl} />
        {/* End of MusicTechSale */}
        {/* Womens Sale */}
        <Route path='/WomensSale' component={WomensSale} />
        <Route path='/WomensSaleAccessories' component={WomensSaleAccessories} />
        <Route path='/WomensSaleBags' component={WomensSaleBags} />
        <Route path='/WomensSaleBeauty' component={WomensSaleBeauty} />
        <Route path='/WomensSaleCoats' component={WomensSaleCoats} />
        <Route path='/WomensSaleDresses' component={WomensSaleDresses} />
        <Route path='/WomensSaleGraphicTees' component={WomensSaleGraphicTees} />
        <Route path='/WomensSaleIntimates' component={WomensSaleIntimates} />
        <Route path='/WomensSaleJeansPants' component={WomensSaleJeansPants} />
        <Route path='/WomensSaleJustAdded' component={WomensSaleJustAdded} />
        <Route path='/WomensSaleLounge' component={WomensSaleLounge} />
        <Route path='/WomensSaleShoes' component={WomensSaleShoes} />
        <Route path='/WomensSaleShorts' component={WomensSaleShorts} />
        <Route path='/WomensSaleSweaters' component={WomensSaleSweaters} />
        <Route path='/WomensSaleSwim' component={WomensSaleSwim} />
        <Route path='/WomensSaleTops' component={WomensSaleTops} />
        {/* End of Womens Sale */}
        {/* Apartment ARTDECOR */}
        <Route path='/ArtDecor' component={ArtDecor} />
        <Route path='/Accessories' component={Accessories} />
        <Route path='/ArtDecor' component={ArtDecor} />
        <Route path='/Candles' component={Candles} />
        <Route path='/Frames' component={Frames} />
        <Route path='/Mirrors' component={Mirrors} />
        <Route path='/PillowsThrows' component={PillowsThrows} />
        <Route path='/PlantersTerrariums' component={PlantersTerrariums} />
        <Route path='/Rugs' component={Rugs} />
        <Route path='/WallArt' component={Wallart} />
        <Route path='/Window' component={Window} />
        {/* End of APARTMENT ART DECOR */}
        {/* Apartment Bath */}
        <Route path='/ApartmentBath' component={ApartmentBath} />
        <Route path='/BathAccessories' component={BathAccessories} />
        <Route path='/BathMats' component={BathMats} />
        <Route path='/Laundry' component={Laundry} />
        <Route path='/ShowerCurtains' component={ShowerCurtains} />
        <Route path='/Towels' component={Towels} />
        {/* End of ApartmentBath */}
        {/* ApartmentBedding */}
        <Route path='/ApartmentBedding' component={ApartmentBedding} />
        <Route path='/BeddingBasics' component={BeddingBasics} />
        <Route path='/ComfortersQuiltsBlankets' component={ComfortersQuiltsBlankets} />
        <Route path='/DuvetCovers' component={DuvetCovers} />
        <Route path='/Pillowcases' component={Pillowcases} />
        <Route path='/PillowsThrows' component={PillowsThrows} />
        <Route path='/Sheets' component={Sheets} />
        <Route path='/SnoozeSets' component={SnoozeSets} />
        <Route path='/Tapestries' component={Tapestries} />
        {/* End of ApartmentBedding */}
        {/* ApartmentBooksStationery */}
        <Route path='/ApartmentBooksStationery' component={ApartmentBooksStationery} />
        <Route path='/Books' component={Books} />
        <Route path='/ColoringActivites' component={ColoringActivites} />
        <Route path='/DeskAccessories' component={DeskAccessories} />
        <Route path='/GreetingCards' component={GreetingCards} />
        <Route path='/JournalsNotebooks' component={JournalsNotebooks} />
        <Route path='/PhotoAlbums' component={PhotoAlbums} />
        {/* ENDOF ApartmentBooksStationery */}
        {/* Apartment Collections */}
        <Route path='/ApartmentCollections' component={ApartmentCollections} />
        <Route path='/TheBeddingShop' component={TheBeddingShop} />
        <Route path='/BackOnCampus' component={BackOnCampus} />
        <Route path='/ThePrintShop' component={ThePrintShop} />
        <Route path='/OneOfAKind' component={OneOfAKind} />
        {/* End of Apartment Collections */}
        {/* ApartmentFurniture */}
        <Route path='/BedsHeadboards' component={BedsHeadboards} />
        <Route path='/ApartmentFurniture' component={ApartmentFurniture} />
        <Route path='/Chairs' component={Chairs} />
        <Route path='/DressesWardrobes' component={DressesWardrobes} />
        <Route path='/Sofas' component={Sofas} />
        <Route path='/StorageShelving' component={StorageShelving} />
        <Route path='/Tables' component={Tables} />
        {/* End of ApartmentFurniture */}
        {/* ApartmentKitchenBar */}
        <Route path='/ApartmentKitchenBar' component={ApartmentKitchenBar} />
        <Route path='/Appliances' component={Appliances} />
        <Route path='/BarwareSupplies' component={BarwareSupplies} />
        {/* <Route path='/Cookbooks' component={Cookbooks} /> */}
        <Route path='/Cookwear' component={Cookwear} />
        <Route path='/Dinnerware' component={Dinnerware} />
        <Route path='/Drinkware' component={Drinkware} />
        <Route path='/StorageAccessories' component={StorageAccessories} />
        {/* End of ApartmentKitchenBar */}
        {/* Apartment Lighting */}
        <Route path='/BulbsCordKits' component={BulbsCordKits} />
        <Route path='/FloorLamps' component={FloorLamps} />
        <Route path='/NoveltyStringLighting' component={NoveltyStringLighting} />
        <Route path='/ApartmentLighting' component={ApartmentLighting} />
        <Route path='/PendantsSconces' component={PendantsSconces} />
        <Route path='/TableDeskLamps' component={TableDeskLamps} />
        {/* End of ApartmentLighting */}
        {/* ApartmentNew */}
        <Route path='/ApartmentNewFurniture' component={ApartmentNewFurniture} />
        <Route path='/ApartmentNewTextiles' component={ApartmentNewTextiles} />
        <Route path='/ApartmentNew' component={ApartmentNew} />
        <Route path='/ApartmentNewBooks' component={ApartmentNewBooks} />
        <Route path='/ApartmentNewTextiles' component={ApartmentNewTextiles} />
        <Route path='/ApartmentNewPartyFun' component={ApartmentNewPartyFun} />
        <Route path='/ApartmentNewKitchenBar' component={ApartmentNewKitchenBar} />
        {/* End of ApartmentNew */}
        {/* ApartmentPartyFun */}
        <Route path='/ApartmentParty' component={ApartmentParty} />
        <Route path='/Favors' component={Favors} />
        <Route path='/Games' component={Games} />
        <Route path='/Novelty' component={Novelty} />
        <Route path='/PartySuppliesDecoration' component={PartySuppliesDecoration} />
        <Route path='/PoolFloats' component={PoolFloats} />
        {/* End of ApartmentPartyFun */}
        {/* ApartmentSale */}
        <Route path='/ApartmentSale' component={ApartmentSale} />
        <Route path='/ApartmentSaleBath' component={ApartmentSaleBath} />
        <Route path='/ApartmentSaleBedding' component={ApartmentSaleBedding} />
        <Route path='/ApartmentSaleBooks' component={ApartmentSaleBooks} />
        <Route path='/ApartmentSaleFurniture' component={ApartmentSaleFurniture} />
        <Route path='/ApartmentSaleJustAdded' component={ApartmentSaleJustAdded} />
        <Route path='/ApartmentSaleKitchenBar' component={ApartmentSaleKitchenBar} />
        <Route path='/ApartmentSaleMusicTech' component={ApartmentSaleMusicTech} />
        <Route path='/ApartmentSalePartyFun' component={ApartmentSalePartyFun} />
        <Route path='/ApartmentSalePillowsTapestries' component={ApartmentSalePillowsTapestries} />
        <Route path='/ApartmentSaleRoomDecor' component={ApartmentSaleRoomDecor} />
        <Route path='/ApartmentSaleRugCurtains' component={ApartmentSaleRugCurtains} />
        {/* End OF Apartment SAle */}
        {/* Apartment Storage */}
        <Route path='/ApartmentStorage' component={ApartmentStorage} />
        <Route path='/BasketsBinsBoxes' component={BasketsBinsBoxes} />
        <Route path='/Bathroom' component={Bathroom} />
        <Route path='/Closet' component={Closet} />
        <Route path='/Desk' component={Desk} />
        <Route path='/HooksKnobs' component={HooksKnobs} />
        <Route path='/Jewelery' component={Jewelery} />
        <Route path='/Kitchen' component={Kitchen} />
        <Route path='/Shelving' component={Shelving} />
        {/* End of Apartment Storage */}
        {/* End of Apartment */}
        {/* ProductPages */}
        <Route path='/AdidasShoesone' component={AdidasShoesone} />
        <Route path='/AdidasShoestwo' component={AdidasShoestwo} />
        <Route path='/AdidasShoesthree' component={AdidasShoesthree} />
        <Route path='/AdidasShoesfour' component={AdidasShoesfour} />
        <Route path='/AdidasShoesfive' component={AdidasShoesfive} />
        <Route path='/AdidasShoessix' component={AdidasShoessix} />
        <Route path='/AdidasShoesseven' component={AdidasShoesseven} />
        <Route path='/AdidasShoeseight' component={AdidasShoeseight} />
        <Route path='/AdidasShoesnine' component={AdidasShoesnine} />
        <Route path='/AdidasShoesten' component={AdidasShoesten} />
        <Route path='/AdidasShoeseleven' component={AdidasShoeseleven} />
        <Route path='/AdidasShoestwelve' component={AdidasShoestwelve} />
        <Route path='/AdidasShoesthirteen' component={AdidasShoesthirteen} />
        <Route path='/AdidasShoesfourteen' component={AdidasShoesfourteen} />
        <Route path='/AdidasShoesfifteen' component={AdidasShoesfifteen} />
        <Route path='/AdidasShoessixteen' component={AdidasShoessixteen} />
        <Route path='/AdidasShoesseventeen' component={AdidasShoesseventeen} />
        <Route path='/AdidasShoeseighteen' component={AdidasShoeseighteen} />
        <Route path='/AdidasShoesnineteen' component={AdidasShoesnineteen} />
        <Route path='/AdidasShoestwenty' component={AdidasShoestwenty} />
        {/* End of ProductPages */}
        {/* Mens New Arrivals ProductPages */}
        <Route path='/MensNewArrivalone' component={MensNewArrivalone} />
        <Route path='/MensNewArrivaltwo' component={MensNewArrivaltwo} />
        <Route path='/MensNewArrivalthree' component={MensNewArrivalthree} />
        <Route path='/MensNewArrivalfour' component={MensNewArrivalfour} />
        <Route path='/MensNewArrivalfive' component={MensNewArrivalfive} />
        <Route path='/MensNewArrivalsix' component={MensNewArrivalsix} />
        <Route path='/MensNewArrivalseven' component={MensNewArrivalseven} />
        <Route path='/MensNewArrivaleight' component={MensNewArrivaleight} />
        <Route path='/MensNewArrivalnine' component={MensNewArrivalnine} />
        <Route path='/MensNewArrivalten' component={MensNewArrivalten} />
        <Route path='/MensNewArrivaleleven' component={MensNewArrivaleleven} />
        <Route path='/MensNewArrivaltwelve' component={MensNewArrivaltwelve} />
        <Route path='/MensNewArrivalthirteen' component={MensNewArrivalthirteen} />
        <Route path='/MensNewArrivalfourteen' component={MensNewArrivalfourteen} />
        <Route path='/MensNewArrivalfifteen' component={MensNewArrivalfifteen} />
        <Route path='/MensNewArrivalsixteen' component={MensNewArrivalsixteen} />
        <Route path='/MensNewArrivalseventeen' component={MensNewArrivalseventeen} />
        <Route path='/MensNewArrivaleighteen' component={MensNewArrivaleighteen} />
        <Route path='/MensNewArrivalnineteen' component={MensNewArrivalnineteen} />
        <Route path='/MensNewArrivaltwenty' component={MensNewArrivaltwenty} />
        {/* End of Mens New Arrivals PP */}
        {/* Mens Graphic Tees PP */}
        <Route path='/MensGraphicTeesone' component={MensGraphicTeesone} />
        <Route path='/MensGraphicTeestwo' component={MensGraphicTeestwo} />
        <Route path='/MensGraphicTeesthree' component={MensGraphicTeesthree} />
        <Route path='/MensGraphicTeesfour' component={MensGraphicTeesfour} />
        <Route path='/MensGraphicTeesfive' component={MensGraphicTeesfive} />
        <Route path='/MensGraphicTeessix' component={MensGraphicTeessix} />
        <Route path='/MensGraphicTeesseven' component={MensGraphicTeesseven} />
        <Route path='/MensGraphicTeeseight' component={MensGraphicTeeseight} />
        <Route path='/MensGraphicTeesnine' component={MensGraphicTeesnine} />
        <Route path='/MensGraphicTeesten' component={MensGraphicTeesten} />
        <Route path='/MensGraphicTeeseleven' component={MensGraphicTeeseleven} />
        <Route path='/MensGraphicTeestwelve' component={MensGraphicTeestwelve} />
        <Route path='/MensGraphicTeesthirteen' component={MensGraphicTeesthirteen} />
        <Route path='/MensGraphicTeesfourteen' component={MensGraphicTeesfourteen} />
        <Route path='/MensGraphicTeesfifteen' component={MensGraphicTeesfifteen} />
        <Route path='/MensGraphicTeessixteen' component={MensGraphicTeessixteen} />
        <Route path='/MensGraphicTeesseventeen' component={MensGraphicTeesseventeen} />
        <Route path='/MensGraphicTeeseighteen' component={MensGraphicTeeseighteen} />
        <Route path='/MensGraphicTeesnineteen' component={MensGraphicTeesnineteen} />
        <Route path='/MensGraphicTeestwenty' component={MensGraphicTeestwenty} />
        {/* End of Mens Graphic Tees PP */}
        {/* Mens Tops PP */}
        <Route path='/MensTopsone' component={MensTopsone} />
        <Route path='/MensTopstwo' component={MensTopstwo} />
        <Route path='/MensTopsthree' component={MensTopsthree} />
        <Route path='/MensTopsfour' component={MensTopsfour} />
        <Route path='/MensTopsfive' component={MensTopsfive} />
        <Route path='/MensTopssix' component={MensTopssix} />
        <Route path='/MensTopsseven' component={MensTopsseven} />
        <Route path='/MensTopseight' component={MensTopseight} />
        <Route path='/MensTopsnine' component={MensTopsnine} />
        <Route path='/MensTopsten' component={MensTopsten} />
        <Route path='/MensTopseleven' component={MensTopseleven} />
        <Route path='/MensTopstwelve' component={MensTopstwelve} />
        <Route path='/MensTopsthirteen' component={MensTopsthirteen} />
        <Route path='/MensTopsfourteen' component={MensTopsfourteen} />
        <Route path='/MensTopsfifteen' component={MensTopsfifteen} />
        <Route path='/MensTopssixteen' component={MensTopssixteen} />
        <Route path='/MensTopsseventeen' component={MensTopsseventeen} />
        <Route path='/MensTopseighteen' component={MensTopseighteen} />
        <Route path='/MensTopsnineteen' component={MensTopsnineteen} />
        <Route path='/MensTopstwenty' component={MensTopstwenty} />
        {/* End of Mens Tops PP */}
        {/* <Route path='/exclusiveswimsuits' component={exclusiveswimsuits} />
        <Route path='/womensproductpage' component={womensproductpage} />
        <Route path='/womensbodysuits' component={womensbodysuits} />
        <Route path='/mensproductpage' component={mensproductpage} /> */}
        {/* <Route path='/locations' component={Locations} /> */}
        {/* <Route path='/locations/:slug' component={Location} /> */}
      </Route>
    </Router>
  }
}

export default App
