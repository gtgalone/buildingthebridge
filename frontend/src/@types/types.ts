export interface Parcel {}

export interface RootState {
  scrollY: number
  isShowVideoPlayer: boolean
  contentPosition: number[]
}

export interface GeometryState {
  type: string
  coordinates: any[]
}

export interface ParcelPolygonState {
  id: string
  address: string
  road_address: string
  geometry: GeometryState
}

export interface LinksState {
  sigungu: string[]
  luris: string[]
  sido: string[]
}

export interface PlanState {
  name: string
  links: LinksState
}

export interface ProfitScenarioState {
  totalCost: number,
  totalPrice: number,
  yearlyRentRatio: number,
  monthlyRent: number,
  totalConstCost: number,
  propertyCost: number,
  constCost: number,
  perAreaPrice: number,
  perAreaRent: number
}
