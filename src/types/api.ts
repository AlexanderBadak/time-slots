export type TCompanyResponse = {
    id: number
    name: string
    type: string
    time_slots: TTimeSlotResponse[]
}

export type TTimeSlotResponse = {
    start_time: string
    end_time: string
}