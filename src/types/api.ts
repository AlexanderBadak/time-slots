export type TCompany = {
    id: number
    name: string
    type: string
    time_slots: TTimeSlot[]
}

export type TTimeSlot = {
    start_time: string
    end_time: string
}