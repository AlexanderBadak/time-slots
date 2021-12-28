import React, { createContext, PropsWithChildren, useCallback, useState } from 'react'
import { TSelectedTimeSlot } from 'types/logic'

interface ITimeSlots {
    selectedTimeSlots: TSelectedTimeSlot[]
    setSelectedTimeSlot: (timeSlot: TSelectedTimeSlot) => void
    deselectTimeSlot: (companyId: number) => void
}

export const TimeSlotsContext = createContext<Partial<ITimeSlots>>({})

const TimeSlotsProvider = (props: PropsWithChildren<Record<never, never>>) => {
    const [selectedTimeSlots, setSelectedTimeSlots] = useState<TSelectedTimeSlot[]>([])

    const setSelectedTimeSlot = useCallback((newTimeSlot: TSelectedTimeSlot) => {
        setSelectedTimeSlots(prev => {
            const timeSlots = [...prev]
            const prevTimeSlot = timeSlots.find(ts => ts.companyId === newTimeSlot.companyId)

            if (prevTimeSlot) {
                prevTimeSlot.timeSlot = newTimeSlot.timeSlot
                return timeSlots
            }

            timeSlots.push(newTimeSlot)
            return timeSlots
        })
    }, [])

    const deselectTimeSlot = useCallback((companyId: number) => {
        setSelectedTimeSlots(prev => {
            let timeSlots = [...prev]
            timeSlots = timeSlots.filter(ts => ts.companyId !== companyId)

            return timeSlots
        })
    }, [])

    const providerBag: ITimeSlots = {
        selectedTimeSlots,
        setSelectedTimeSlot,
        deselectTimeSlot
    }

    return (
        <TimeSlotsContext.Provider value={providerBag}>
            {props.children}
        </TimeSlotsContext.Provider>
    )
}

export default TimeSlotsProvider