import React, { createContext, PropsWithChildren, useState } from 'react'
import { TSelectedTimeSlot } from 'types/logic'

interface ITimeSlots {
    selectedTimeSlots: TSelectedTimeSlot[]
    setSelectedTimeSlot: (timeSlot: TSelectedTimeSlot) => void
}

export const TimeSlotsContext = createContext<Partial<ITimeSlots>>({})

const TimeSlotsProvider = (props: PropsWithChildren<Record<never, never>>) => {
    const [selectedTimeSlots, setSelectedTimeSlots] = useState<TSelectedTimeSlot[]>([])

    const setSelectedTimeSlot = (newTimeSlot: TSelectedTimeSlot) => {
        setSelectedTimeSlots(prev => {
            const prevTimeSlots = [...prev]
            const prevTimeSlot = prevTimeSlots.find(ts => ts.id === newTimeSlot.id)

            if (prevTimeSlot) {
                prevTimeSlot.timeSlot = newTimeSlot.timeSlot
                return prevTimeSlots
            }

            prevTimeSlots.push(newTimeSlot)
            return prevTimeSlots
        })
    }

    const providerBag: ITimeSlots = {
        selectedTimeSlots,
        setSelectedTimeSlot
    }

    return (
        <TimeSlotsContext.Provider value={providerBag}>
            {props.children}
        </TimeSlotsContext.Provider>
    )
}

export default TimeSlotsProvider