import { Dayjs } from 'dayjs'

export type TCompany = {
    id: number
    name: string
    type: string
    timeSlotGroups: TTimeSlotGroup[]
}

export type TTimeSlotGroup = {
    name: string
    day: number
    timeSlots: TTimeSlot[]
}

export type TTimeSlot = {
    startDate: Dayjs
    endDate: Dayjs
    formattedStartDate: string
    formattedEndDate: string
}