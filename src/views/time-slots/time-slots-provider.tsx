import { ETimeSlotActions } from 'enums/actions'
import React, { createContext, Dispatch, PropsWithChildren, useReducer } from 'react'
import { TSelectedTimeSlot } from 'types/logic'

interface ITimeSlotsContext {
    state: State
    dispatch: Dispatch<Action>
}

export const TimeSlotsContext = createContext<Partial<ITimeSlotsContext>>({})

type State = {
    selectedTimeSlots: TSelectedTimeSlot[]
}

type Action = { type: ETimeSlotActions.select, payload: {timeSlot: TSelectedTimeSlot} } | { type: ETimeSlotActions.deselect, payload: {companyId: number}}

const timeSlotReducer = (state: State, action: Action) : State => {
    switch (action.type) {
        case ETimeSlotActions.select:
            return selectTimeSlotAction(state, action.payload.timeSlot)
        case ETimeSlotActions.deselect:
            return deselectTimeSlotAction(state, action.payload.companyId)

        default:
            throw new Error('Invalid action')
    }
}
const selectTimeSlotAction = (state: State, timeSlot: TSelectedTimeSlot) : State => {
    const selectedTimeSlots = [...state.selectedTimeSlots]
    const prevTimeSlot = selectedTimeSlots.find(ts => ts.companyId === timeSlot.companyId)

    if (prevTimeSlot) {
        prevTimeSlot.timeSlot = timeSlot.timeSlot
        return {
            selectedTimeSlots
        }
    }

    selectedTimeSlots.push(timeSlot)

    return {
        selectedTimeSlots
    }
}

const deselectTimeSlotAction = (state: State, companyId: number) : State => {
    let selectedTimeSlots = [...state.selectedTimeSlots]
    selectedTimeSlots = selectedTimeSlots.filter(ts => ts.companyId !== companyId)

    return {
        selectedTimeSlots
    }
}

const TimeSlotsProvider = (props: PropsWithChildren<Record<never, never>>) => {
    const [state, dispatch] = useReducer(timeSlotReducer, {selectedTimeSlots: []})

    return (
        <TimeSlotsContext.Provider value={{state, dispatch}}>
            {props.children}
        </TimeSlotsContext.Provider>
    )
}

export default TimeSlotsProvider